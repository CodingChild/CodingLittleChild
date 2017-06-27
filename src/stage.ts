
module Marmot {
    import Browser = Laya.Browser;
    import Button = Laya.Button;
    import Event = Laya.Event;
    import Stage = Laya.Stage;
    import WebGL = Laya.WebGL;
    import Handler = Laya.Handler;
    import Texture = Laya.Texture;

    export interface StagePanelSetting {
        normalWidth: number;
        normalHeight: number;//normalScale = 1
        fullScreenScale: number;//>1
    }

    export class StagePanel extends Laya.Panel {
        public threadManager: ThreadManager;
        public variables;
        public costumes: Array<Costume>;
        public costume: Costume;
        public sounds;
        public version;
        public stagePanelSetting: StagePanelSetting;


        constructor(stagePanelSetting: StagePanelSetting) {
            super();
            this.width = stagePanelSetting.normalWidth;
            this.height = stagePanelSetting.normalHeight;
            this.stagePanelSetting = stagePanelSetting;
            this.costumes = [];
            this.costume = null;
            this.sounds = [];
            this.threadManager = new ThreadManager();
            this.graphics.drawRect(0, 0, this.stagePanelSetting.normalWidth, this.stagePanelSetting.normalHeight, "#aaaaaa");
        }

        public toggleFullScreen() {
            this.setScale(this.stagePanelSetting.fullScreenScale);
            this.width = this.stagePanelSetting.normalWidth * this.stagePanelSetting.fullScreenScale;
            this.height = this.stagePanelSetting.normalHeight * this.stagePanelSetting.fullScreenScale;
        }

        public toggleNormalScreen() {
            this.setScale(1);
            this.width = this.stagePanelSetting.normalWidth;
            this.height = this.stagePanelSetting.normalHeight;
        }

        public setScale(percentage: number) {
            this.scale(percentage, percentage);
        }

        public addCostume(url: string) {
            let costume = new Costume(url);
            this.costumes.push(costume);
            if (this.costumes.length == 1) {
                this.wearCostume(0);
            }
        }

        public wearCostume(index: number) {
            this.costume = this.costumes[index];
            this.graphics.drawTexture(this.costume.texture, 0, 0, this.width, this.height);
        }

        public firePlayButton() {
            let ide = IDE.getIDE();
            let threadManager = this.threadManager;
            let objects: any[] = ide.sprites;
            objects = objects.concat(this);
            objects.forEach(function (object) {
                let headBlocks = object.getAllHeadBlocksFor('play');
                headBlocks.forEach(function (script) {
                    threadManager.startProcess(script);
                })
            })
            if (this.threadManager.threads.length > 0 && this.threadManager.isRunning == false) {
                Laya.timer.frameLoop(1, this.threadManager, this.threadManager.runThread);
                this.threadManager.isRunning = true;
            }
        }

        public getAllHeadBlocksFor(filter) {
            if (typeof filter == 'number')
                filter.toString();
            return this.scriptArea.content._childs.filter(function (headBlock) {
                if (headBlock.action == filter) {
                    return true;
                }
                return false;
            })
        }
    }
}





