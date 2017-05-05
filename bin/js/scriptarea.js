var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var Panel = Laya.Panel;
    var Event = Laya.Event;
    var ScriptArea = (function (_super) {
        __extends(ScriptArea, _super);
        function ScriptArea(blockFactory, ide) {
            var _this = _super.call(this) || this;
            _this.blockFactory = blockFactory;
            _this.ide = ide;
            _this.on(Event.MOUSE_DOWN, _this, _this.onMouseDown);
            return _this;
        }
        ScriptArea.prototype.onMouseDown = function (e) {
            this.ide.blocksArea.visible = false;
            this.ide.blocksCategory.selectedIndex = 9;
        };
        return ScriptArea;
    }(Panel));
    Marmot.ScriptArea = ScriptArea;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=scriptarea.js.map