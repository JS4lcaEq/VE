(function () {

    function fn() {

        var _c = { };

        return {
            ConvertArrayToTree: function (inpArray) {
                if (!$.isArray(inpArray)) {
                    var error = "dataService error: input data is not array!!!"
                    console.log(error);
                    throw new Error(error);
                    return null;
                }
                var branches = {};
                var index = {};
                for (var i = 0; i < inpArray.length; i++) {
                    var item = inpArray[i];
                    var idp = item.idp;
                    if (!idp) {
                        idp = "root";
                    }
                    var id = item.id;
                    index[id] = item;
                    if (!branches[idp]) {
                        branches[idp] = [];
                    }
                    branches[idp].push(item);
                }
                for (var key in branches) {
                    var branch = branches[key];
                    var item = index[key];
                    item.child = branch;
                }
                return branches[root];
            }
        };

    }

    app.services("TemplateService", fn);

})();