
module Marmot{
    import Browser = Laya.Browser;
    import Button = Laya.Button;
    import Event = Laya.Event;
    import Stage = Laya.Stage;
    import WebGL = Laya.WebGL;
    import Handler = Laya.Handler;
    import Texture = Laya.Texture;

    export interface StagePanelSetting{
        normalWidth: number;
        normalHeight: number;//normalScale = 1
        fullScreenScale: number;//>1
    }

    export class StagePanel extends Laya.Panel{
        public threadManager: ThreadManager;
        public variables;
        public scripts;
        public costumes: Array<Texture>;
        public costume: Texture;
        public sounds;
        public version;
        public stagePanelSetting: StagePanelSetting;
        

        constructor(stagePanelSetting: StagePanelSetting){
            super();
            this.stagePanelSetting = stagePanelSetting;
            //this.scripts = new ScriptArea(this);
            this.costumes= [];
            this.costume = null;
            this.sounds = [];
            this.graphics.drawRect(0, 0, this.stagePanelSetting.normalWidth, this.stagePanelSetting.normalHeight, "#ffffff");
        }

        public toggleFullScreen(){
            this.setScale(this.stagePanelSetting.fullScreenScale);
        }

        public toggleNormalScreen(){
            this.setScale(1);
        }
        
        public setScale(percentage: number){
            this.scale(percentage, percentage);
        }
        
        public addCostume(costume){
            let t: Texture = Laya.loader.getRes(costume);
            this.costumes.push(t);
            if(this.costumes.length == 1){
                this.wearCostume(0);
            }
        }

        public wearCostume(index: number){
            this.costume = this.costumes[index];
            this.graphics.drawTexture(this.costume, this.width, this.height);
        }

        public firePlayButton(){
            let ide = IDE.getIDE();
            let threadManager = this.threadManager;
            ide.sprites.concat(this).forEach(function(sprite){
                let headBlocks = sprite.getAllHeadBlocksFor('receiveGo');
                headBlocks.forEach(function(script){
                    threadManager.startProcess(script);
                })
            })
            while(this.threadManager.threads){
                Laya.timer.frameLoop(1, this, this.threadManager.runThread);
            }
        }
    }
}

/*Laya.init(1920, 1080, WebGL);
Laya.stage.alignV = Stage.ALIGN_MIDDLE;
Laya.stage.alignH = Stage.ALIGN_CENTER;
Laya.stage.scaleMode = "full";
Laya.stage.bgColor = "#000000";//"#232628"
let curStage = new Marmot.StagePanel(1920 / 3, 1080 / 3);
curStage.pos(1920 * 2 / 3, 10);
let spr = new Marmot.Sprite();
//console.log(spr instanceof Marmot.Sprite);
spr.addCostume("../laya/assets/comp/girl.png");
spr.pos(2, 20);
curStage.addChild(spr);
Laya.stage.addChild(curStage);*/
//curStage.scale(2,2);
//curStage.setScale(Browser.clientWidth / 2, Browser.clientHeight / 2);



