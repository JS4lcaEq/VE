(function () {

    var _c = {};

    function fn() {

        return {
            get: function (name) {
                if (!_c[name]) {
                    _c[name] = {};
                }
                return _c[name];
            }
        };

    }

    app.services("storeService", fn);

})();