(function () {

    var data = app.services("storeService").get("confirm");
    data.val = true ;

    Vue.component('confirmCmpnnt', {
        data: function () {
            return {
                visible: data.val,
                d: data
            }
        },
        computed: {
            dd: {
                get: function () {
                    return data.val;
                },
                set: function (newVal) {
                    data.val = newVal;
                }
            }
        },
        template: app.services("TemplateService").Get("components/UI/confirm/confirmCmpnnt.html")
    });
})();