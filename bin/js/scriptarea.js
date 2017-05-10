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
        function ScriptArea(sprite) {
            var _this = _super.call(this) || this;
            _this.blockFactory = new Marmot.BlockFactory();
            _this.owner = sprite;
            _this.name = "scriptArea";
            _this.hScrollBarSkin = "";
            _this.vScrollBarSkin = "";
            _this.size(Marmot.IDE.WIDTH - 150, Marmot.IDE.HEIGHT - 220);
            _this.pos(100, 120);
            _this.on(Event.MOUSE_DOWN, _this, _this.onMouseDown);
            return _this;
        }
        ScriptArea.prototype.onMouseDown = function (e) {
            var ide = Marmot.IDE.getIDE();
            ide.blocksArea.visible = false;
            ide.blocksCategory.selectedIndex = 9;
            ide.spriteMaterialList.visible = false;
            ide.materialCategory.selectedIndex = -1;
            ide.spriteMaterialList.costumeMaterialList.visible = false;
            ide.spriteMaterialList.spriteLibraryDialog.close();
            ide.backgroundMaterialList.visible = false;
            ide.backgroundMaterialList.backgroundLibraryDialog.close();
            var highlightBlocks = [];
            ide.scriptArea.content._childs.forEach(function (child) {
                if (child.isHighlight == true) {
                    highlightBlocks.push(child);
                }
                child.getAllBlockChildren().forEach(function (blockChild) {
                    if (blockChild.isHighlight == true) {
                        highlightBlocks.push(blockChild);
                    }
                });
            });
            highlightBlocks.forEach(function (block) {
                block.removeHighlight(block);
            });
        };
        return ScriptArea;
    }(Panel));
    Marmot.ScriptArea = ScriptArea;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=scriptarea.js.map