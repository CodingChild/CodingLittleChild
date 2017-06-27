var Marmot;
(function (Marmot) {
    var IDEFactory = (function () {
        // share attributes
        function IDEFactory() {
        }
        IDEFactory.prototype.getIDE = function (name) {
            var clientWidth = Laya.Browser.clientWidth;
            var clientHeight = Laya.Browser.clientHeight;
            if (Laya.Browser.onMobile) {
                return new Marmot.PhoneIDE(name, clientWidth, clientHeight);
            }
            else if (Laya.Browser.onSafari) {
            }
            else if (Laya.Browser.onPC) {
                return new Marmot.TabletIDE(name, clientWidth, clientHeight);
            }
        };
        return IDEFactory;
    }());
    Marmot.IDEFactory = IDEFactory;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=idefactory.js.map