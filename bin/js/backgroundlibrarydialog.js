var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var BackgroundLibraryDialog = (function (_super) {
        __extends(BackgroundLibraryDialog, _super);
        function BackgroundLibraryDialog(libraryDialogSetting) {
            return _super.call(this, libraryDialogSetting) || this;
        }
        BackgroundLibraryDialog.prototype.initializeLibrayItems = function () {
            this.list.array = [
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg"
            ];
        };
        BackgroundLibraryDialog.prototype.onClose = function (e) {
            if (e.target.name == Dialog.OK) {
                var ide = Marmot.IDE.getIDE();
                var item = this.list.selectedItem;
                ide.stageArea.addCostume(item);
                ide.stageArea.costumes.push(item);
            }
        };
        return BackgroundLibraryDialog;
    }(Marmot.LibraryDialog));
    Marmot.BackgroundLibraryDialog = BackgroundLibraryDialog;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=backgroundlibrarydialog.js.map