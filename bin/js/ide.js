var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var View = Laya.View;
    var IDE = (function (_super) {
        __extends(IDE, _super);
        function IDE(name, width, height) {
            var _this = _super.call(this) || this;
            _this.top = 0;
            _this.left = 0;
            _this.right = 0;
            _this.bottom = 0;
            _this.name = name;
            _this.width = width;
            _this.height = height;
            _this.buildIDE();
            return _this;
        }
        IDE.prototype.chooseMaterialArea = function () {
        };
        IDE.prototype.chooseBlock = function (index) {
            var blocksCategory = "";
            if (index == 0) {
                blocksCategory = "control";
            }
            else if (index == 1) {
                blocksCategory = "event";
            }
            else if (index == 2) {
                blocksCategory = "pen";
            }
            else if (index == 3) {
                blocksCategory = "math";
            }
            else if (index == 4) {
                blocksCategory = "music";
            }
            else if (index == 5) {
                blocksCategory = "motion";
            }
            else if (index == 6) {
                blocksCategory = "look";
            }
            else if (index == 7) {
                blocksCategory = "variable";
            }
            else if (index == 8) {
                blocksCategory = "sense";
            }
            else {
                return;
            }
            this.blocksArea.updateContent(blocksCategory);
        };
        IDE.prototype.pressStart = function () {
        };
        IDE.prototype.pressStop = function () {
        };
        IDE.prototype.toggleFullScreen = function () {
        };
        IDE.prototype.toggleCoordinateSystem = function () {
        };
        IDE.prototype.toggleStage = function () {
        };
        IDE.prototype.fixBlocksCategoryLayout = function () {
        };
        IDE.prototype.fixBlocksAreaLayout = function () {
        };
        IDE.prototype.fixMaterialCategoryLayout = function () {
        };
        IDE.prototype.fixMaterialAreaLayout = function () {
        };
        IDE.prototype.fixControlBarLayout = function () {
        };
        IDE.prototype.fixStageAreaLayout = function () {
        };
        IDE.prototype.switchBlocksAreaVisibility = function () {
        };
        return IDE;
    }(View));
    Marmot.IDE = IDE;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=ide.js.map