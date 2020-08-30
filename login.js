var page = require("webpage").create();
page.viewportSize = {width: 1280, height: 1024};
phantom.cookiesEnabled = true;

page.open("https://ecampus.psgtech.ac.in/studzone2/", function (status) {
    if (status !== 'success') {
        console.log('fail!');
        phantom.exit(1);
    } else {
        page.evaluate(function(){
            $("input[name=txtusercheck]").val("<Your_roll>") ;
            $("input[name=txtpwdcheck]").val("<Your Password>") ;
            $("input[type=submit]").click() ;
        });
        window.setTimeout(function(){
                page.open("https://ecampus.psgtech.ac.in/studzone2/FrmEpsStudResult.aspx", function(status){
                
                    page.evaluate(function(){
                            var s = document.createElement('style');
                            s.setAttribute("type", "text/css");
                            s.innerText = "body { background-color: white; }";
                        
                            document.head.insertBefore(s, document.head.firstChild);
                    });
                
                    window.setTimeout(function() {
                            page.render("res.png");
                            phantom.exit();
                    }, 5000);
                });

                page.open("https://ecampus.psgtech.ac.in/studzone2/AttWfPercView.aspx", function(status){

                    page.evaluate(function(){
                        var s = document.createElement('style');
                        s.setAttribute("type", "text/css");
                        s.innerText = "body { background-color: white; }";
                    
                        document.head.insertBefore(s, document.head.firstChild);
                    });
                
                    window.setTimeout(function() {
                            page.render("attendance.png");
                            phantom.exit();
                    }, 3000);
                })

            },8000);
    }
});