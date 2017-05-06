var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var View = Laya.View;
    var Tween = Laya.Tween;
    var IDE = (function (_super) {
        __extends(IDE, _super);
        function IDE(name, width, height) {
            var _this = _super.call(this) || this;
            IDE.WIDTH = width;
            IDE.HEIGHT = height;
            _this.top = 0;
            _this.left = 0;
            _this.right = 0;
            _this.bottom = 0;
            _this.name = name;
            _this.width = width;
            _this.height = height;
            _this.isStageVisible = false;
            _this.isPlayed = false;
            _this.isFullScreen = false;
            _this.currentSprite = new Marmot.Sprite();
            _this.currentSprite.addCostume("materials/sp_marmot.png");
            _this.currentSprite.costume = "materials/sp_marmot.png";
            _this.currentSprite.costumes = [_this.currentSprite.costume];
            _this.sprites = [];
            _this.sprites.push(_this.currentSprite);
            _this.buildIDE();
            return _this;
        }
        IDE.prototype.chooseMaterialArea = function (index) {
            if (index == 0) {
                this.spriteList.y = 200;
                this.spriteList.visible = true;
            }
            else if (index == 1) {
            }
            else if (index == 2) {
            }
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
        IDE.prototype.pressStart = function (btn_play) {
            if (this.isPlayed == false) {
                this.stageArea.fireGreenFlagEvent();
                btn_play.skin = "materials/btn_stop.png";
                this.isPlayed = true;
            }
            else {
                this.stageArea.fireStopAllEvent();
                btn_play.skin = "materials/btn_play.png";
                this.isPlayed = false;
            }
        };
        IDE.prototype.toggleFullScreen = function (btn_fullscreen) {
            if (this.isFullScreen == false) {
                btn_fullscreen.skin = "materials/btn_normalscreen.png";
                this.isFullScreen = true;
            }
            else {
                btn_fullscreen.skin = "materials/btn_fullscreen.png";
                this.isFullScreen = false;
            }
        };
        IDE.prototype.toggleCoordinateSystem = function (btn_coordinate) {
            if (this.isCoordinateSystemVisible == false) {
                this.isCoordinateSystemVisible = true;
            }
            else {
                //btn_coordinate.skin = "materials/btn_normalscreen.png";
                this.isCoordinateSystemVisible = false;
            }
        };
        IDE.prototype.toggleStage = function () {
            if (this.isStageVisible == false) {
                Tween.to(this.stageArea, { x: this.width - 650 }, 100);
                this.isStageVisible = true;
                Laya.Log.print(this.stageArea.x + " " + this.stageArea.y);
                this.toggleShowStage.skin = "materials/btn_hidestage.png";
            }
            else {
                Tween.to(this.stageArea, { x: this.width }, 100);
                this.isStageVisible = false;
                Laya.Log.print(this.stageArea.x + " " + this.stageArea.y);
                this.toggleShowStage.skin = "materials/btn_showstage.png";
            }
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
        IDE.getIDE = function () {
            return Laya.stage.getChildByName("ide");
        };
        return IDE;
    }(View));
    Marmot.IDE = IDE;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=ide.js.map