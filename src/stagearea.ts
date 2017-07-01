
module IDE {
    import Browser = Laya.Browser;
    import Button = Laya.Button;
    import Event = Laya.Event;
    import WebGL = Laya.WebGL;
    import Handler = Laya.Handler;
    import Texture = Laya.Texture;

    export interface StageAreaSetting {
        normalWidth: number;
        normalHeight: number;//normalScale = 1
        fullScreenScale: number;//>1
    }

    export class StageArea extends Laya.Panel {
        public threadManager: Thread.ThreadManager;
        public costumes: Array<Sprite.Costume>;
        public costume: Sprite.Costume;
        public stageAreaSetting: StageAreaSetting;

        constructor(stageAreaSetting: StageAreaSetting) {
            super();
            this.width = stageAreaSetting.normalWidth;
            this.height = stageAreaSetting.normalHeight;
            this.stageAreaSetting = stageAreaSetting;
            this.costumes = [];
            this.costume = null;
            this.threadManager = new Thread.ThreadManager();
            this.graphics.drawRect(0, 0, this.stageAreaSetting.normalWidth, this.stageAreaSetting.normalHeight, "#ffffff");
        }

        public toggleFullScreen() {
            this.setScale(this.stageAreaSetting.fullScreenScale);
            this.width = this.stageAreaSetting.normalWidth * this.stageAreaSetting.fullScreenScale;
            this.height = this.stageAreaSetting.normalHeight * this.stageAreaSetting.fullScreenScale;
        }

        public toggleNormalScreen() {
            this.setScale(1);
            this.width = this.stageAreaSetting.normalWidth;
            this.height = this.stageAreaSetting.normalHeight;
        }

        public setScale(percentage: number) {
            this.scale(percentage, percentage);
        }

        public addCostume(url: string) {
            let costume = new Sprite.Costume(url);
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
            let ide = GeneralIDE.getIDE();
            let threadManager = this.threadManager;
            let objects: any[] = ide.sprites;
            /*
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
            */
        }

        public getAllHeadBlocksFor(filter) {
            /*
            if (typeof filter == 'number')
                filter.toString();
            return this.scriptArea.content._childs.filter(function (headBlock) {
                if (headBlock.action == filter) {
                    return true;
                }
                return false;
            })
            */
        }
    }
}





