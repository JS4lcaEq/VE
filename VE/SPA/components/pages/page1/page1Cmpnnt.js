(function () {
    var _s = app.services("storeService").get("confirm");
    Vue.component('page1Cmpnnt', {
        data: function () {
            return {
                count: 0
            }
        },

        methods: {
            show: function () {
               _s.val = true;
            }
        },

        template: app.services("TemplateService").Get("components/pages/page1/page1Cmpnnt.html")


    });
})();