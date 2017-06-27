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
        function ScriptArea() {
            var _this = _super.call(this) || this;
            _this.blockFactory = new Marmot.BlockFactory();
            _this.name = "scriptArea";
            _this.hScrollBarSkin = "comp/hscroll.png";
            _this.vScrollBarSkin = "comp/vscroll.png";
            _this.on(Event.MOUSE_DOWN, _this, _this.onMouseDown);
            return _this;
        }
        ScriptArea.prototype.drawBackground = function () {
            this.graphics.drawRect(0, 0, this.width, this.height, "#FFCC33");
        };
        ScriptArea.prototype.onMouseDown = function (e) {
            var ide = Marmot.IDE.getIDE();
            /*
            let highlightBlocks:Block[] = [];
            (ide.scriptArea.content._childs as Block[]).forEach((child) => {
                if (child.isHighlight == true) {
                    highlightBlocks.push(child);
                }
                child.getAllNestedBlockChildren().forEach((blockChild) => {
                    if (blockChild.isHighlight == true) {
                        highlightBlocks.push(blockChild);
                    }
                })
            });

            highlightBlocks.forEach((block)=>{
                block.removeHighlight(block);
            })
            */
        };
        return ScriptArea;
    }(Panel));
    Marmot.ScriptArea = ScriptArea;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=scriptarea.js.map