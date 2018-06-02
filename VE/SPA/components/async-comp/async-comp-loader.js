Vue.component('async-comp', function (resolve, reject) {
    var re = resolve;
    $.ajax({
        url: "components/async-comp/async-comp.js",
        async: false,
        dataType: "script"
    })
        .done(function (data) {
            var _re = this.re;
            eval(data);
        });
})