var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var SpriteLibraryDialog = (function (_super) {
        __extends(SpriteLibraryDialog, _super);
        function SpriteLibraryDialog(spriteLibraryDialogSetting, libraryDialogItemSetting) {
            return _super.call(this, spriteLibraryDialogSetting, libraryDialogItemSetting) || this;
        }
        SpriteLibraryDialog.prototype.initializeLibrayItems = function () {
            this.list.array = [
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png"
            ];
            this.list.refresh();
        };
        SpriteLibraryDialog.prototype.onClose = function (e) {
            if (e.target.name == Dialog.OK) {
                var ide = Marmot.IDE.getIDE();
                if (ide.spriteMaterialList.curClickedBtn == "addCostume") {
                    var item = this.list.selectedItem;
                    ide.currentSprite.addCostume(item);
                    ide.spriteMaterialList.costumeMaterialList.initializeMaterialItems();
                }
                else if (ide.spriteMaterialList.curClickedBtn == "addSprite") {
                    var newSprite = new Marmot.Sprite();
                    newSprite.addCostume(this.list.selectedItem);
                    ide.sprites.push(newSprite);
                    ide.stageArea.addChild(newSprite);
                    newSprite.pos(ide.stageArea.width / 2, ide.stageArea.height / 2);
                    ide.spriteMaterialList.initializeMaterialItems();
                }
            }
        };
        return SpriteLibraryDialog;
    }(Marmot.LibraryDialog));
    Marmot.SpriteLibraryDialog = SpriteLibraryDialog;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=spritelibrarydialog.js.map