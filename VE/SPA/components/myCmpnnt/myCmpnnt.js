Vue.component('myCmpnnt', {
    data: function () {
        return {
            count: 0
        }
    },
    template: app.services("TemplateService").Get("components/myCmpnnt/myCmpnnt.html")


})