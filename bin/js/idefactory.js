var Marmot;
(function (Marmot) {
    var IDEFactory = (function () {
        // share attributes
        function IDEFactory() {
        }
        IDEFactory.prototype.getIDE = function (name) {
            var clientWidth = Laya.Browser.clientWidth;
            var clientHeight = Laya.Browser.clientHeight;
            if (Laya.Browser.clientWidth < 2000) {
                return new Marmot.PhoneIDE(name, clientWidth, clientHeight);
            }
        };
        return IDEFactory;
    }());
    Marmot.IDEFactory = IDEFactory;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=idefactory.js.map