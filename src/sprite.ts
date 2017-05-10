
module Marmot {
    import Handler = Laya.Handler;
    import Texture = Laya.Texture;
    import Event = Laya.Event;
    import Rectangle = Laya.Rectangle;
    import Utils = Laya.Utils;

    export class Sprite extends Laya.Sprite {
        private static stepSize: number = 15;
        public static staticWidth: number = 100;
        public static staticHeight: number = 100;
        public name: string;
        public scriptArea: ScriptArea;
        public costumes: Array<Costume>;
        public costume: Costume;
        public sounds: Array<any>;
        public curScale;
        public version;
        public isClone: boolean;
        public isCorpse: boolean;
        public cloneOriginName;
        public idx;//第几个造型
        public graphicsValues;
        public isDown: boolean;

        constructor() {
            super();
            this.name = 'Sprite';
            this.scriptArea = new ScriptArea(this);
       
            this.costumes = [];
            this.costume = null;
            this.sounds = [];
            this.curScale = 1;
            this.version = Date.now();
            this.isClone = false;
            this.isCorpse = false;
            this.cloneOriginName = '';
            this.idx = 0;
            this.graphicsValues = {};
            this.isDown = false;
            this.width = Sprite.staticWidth;
            this.height = Sprite.staticHeight;
            this.rotation = 90;
            this.on(Event.MOUSE_DOWN, this, this.onStartDrag);
            this.on(Event.CLICK, this, this.showCode);
            this.pivot(Sprite.staticWidth / 2, Sprite.staticHeight / 2);
        }

        public fullCopy() {
            let newSprite = new Sprite();
            //newSprite.scripts = this.scripts.fullCopy();
            //newSprite.scripts.owner = newSprite;

        }

        public drawNew() {

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
            this.graphics.drawTexture(this.costume.texture, 0, 0, Sprite.staticWidth, Sprite.staticHeight);
        }

        public hide() {
            this.visible = false;
        }

        public show() {
            this.visible = true;
        }

        public setSize(percentage: number) {
            let t: Texture = this.costume.texture;
            this.curScale = percentage;
            this.scale(this.curScale, this.curScale);
        }

        public prepareToBeGrabbed() {

        }

        public move(stepNum: number) {
            let distance: number = stepNum * Sprite.stepSize;
            let radian = Utils.toRadian(this.rotation);
            let x: number = distance * Math.sin(radian);
            let y: number = - distance * Math.cos(radian);
            this.x = this.x + x;
            this.y = this.y + y;
        }

        public setHeading(degree: number) {//rotation = 90 - degree
            this.rotation = 90 - degree;
        }

        public getAllMessageNames() {

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

        public getAllHeadBlocksForInteraction() {

        }

        public mouseDownLeft() {

        }

        public mouseUpLeft() {

        }

        public receiveUserInteraction() {

        }

        public onStartDrag(e: Event): void {
            let stageHeight = (this.parent.parent as StagePanel).stagePanelSetting.normalHeight;
            let stageWidth = (this.parent.parent as StagePanel).stagePanelSetting.normalWidth;
            Rectangle.TEMP.setTo(Sprite.staticWidth / 4, Sprite.staticHeight / 4, stageWidth - Sprite.staticWidth / 2, stageHeight - Sprite.staticHeight / 2);
            this.startDrag(Rectangle.TEMP, true, 100);
        }

        public showCode(e: Event): void {

        }

    }

}