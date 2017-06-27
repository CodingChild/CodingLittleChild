var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var StagePanel = (function (_super) {
        __extends(StagePanel, _super);
        function StagePanel(stagePanelSetting) {
            var _this = _super.call(this) || this;
            _this.width = stagePanelSetting.normalWidth;
            _this.height = stagePanelSetting.normalHeight;
            _this.stagePanelSetting = stagePanelSetting;
            _this.costumes = [];
            _this.costume = null;
            _this.sounds = [];
            _this.threadManager = new Marmot.ThreadManager();
            _this.graphics.drawRect(0, 0, _this.stagePanelSetting.normalWidth, _this.stagePanelSetting.normalHeight, "#aaaaaa");
            return _this;
        }
        StagePanel.prototype.toggleFullScreen = function () {
            this.setScale(this.stagePanelSetting.fullScreenScale);
            this.width = this.stagePanelSetting.normalWidth * this.stagePanelSetting.fullScreenScale;
            this.height = this.stagePanelSetting.normalHeight * this.stagePanelSetting.fullScreenScale;
        };
        StagePanel.prototype.toggleNormalScreen = function () {
            this.setScale(1);
            this.width = this.stagePanelSetting.normalWidth;
            this.height = this.stagePanelSetting.normalHeight;
        };
        StagePanel.prototype.setScale = function (percentage) {
            this.scale(percentage, percentage);
        };
        StagePanel.prototype.addCostume = function (url) {
            var costume = new Marmot.Costume(url);
            this.costumes.push(costume);
            if (this.costumes.length == 1) {
                this.wearCostume(0);
            }
        };
        StagePanel.prototype.wearCostume = function (index) {
            this.costume = this.costumes[index];
            this.graphics.drawTexture(this.costume.texture, 0, 0, this.width, this.height);
        };
        StagePanel.prototype.firePlayButton = function () {
            var ide = Marmot.IDE.getIDE();
            var threadManager = this.threadManager;
            var objects = ide.sprites;
            objects = objects.concat(this);
            objects.forEach(function (object) {
                var headBlocks = object.getAllHeadBlocksFor('play');
                headBlocks.forEach(function (script) {
                    threadManager.startProcess(script);
                });
            });
            if (this.threadManager.threads.length > 0 && this.threadManager.isRunning == false) {
                Laya.timer.frameLoop(1, this.threadManager, this.threadManager.runThread);
                this.threadManager.isRunning = true;
            }
        };
        StagePanel.prototype.getAllHeadBlocksFor = function (filter) {
            if (typeof filter == 'number')
                filter.toString();
            return this.scriptArea.content._childs.filter(function (headBlock) {
                if (headBlock.action == filter) {
                    return true;
                }
                return false;
            });
        };
        return StagePanel;
    }(Laya.Panel));
    Marmot.StagePanel = StagePanel;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=stage.js.map