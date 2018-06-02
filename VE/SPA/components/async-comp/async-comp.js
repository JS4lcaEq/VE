
   
    re({
        data: function () {
            return {
                count: 0
            }
        },
        template: window.app.services("TemplateService").Get("components/async-comp/async-comp.html")        
    });
