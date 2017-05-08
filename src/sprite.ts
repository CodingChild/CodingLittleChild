
module Marmot{
    import Handler = Laya.Handler;
    import Texture = Laya.Texture;
    import Event = Laya.Event;

    export class Sprite extends Laya.Sprite{
        private static stepSize: number = 15;
        private static staticWidth: number = 32;
        private static staticHeight: number = 32;
        public name: string;
        public scriptArea: ScriptArea;
        public costumes;
        public costume;
        public sounds: Array<any>;
        public curScale;
        public version;
        public isClone: boolean;
        public isCorpse: boolean;
        public cloneOriginName;
        public idx;//第几个造型
        public graphicsValues;
        public isDown: boolean;

        constructor(){
            super();
            this.name = 'Sprite';
            //this.scripts = new ScriptArea(this);
            this.costumes= [];
            this.costume = null;
            this.sounds = [];
            this.curScale = 1 / 3;//图片原始尺寸是100
            this.version = Date.now();
            this.isClone = false;
            this.isCorpse = false;
            this.cloneOriginName = '';
            this.idx = 0;
            this.graphicsValues = {};
            this.isDown = false;
            this.on(Event.MOUSE_DOWN, this, this.onStartDrag);
            this.on(Event.CLICK, this, this.showCode);
            this.pivot(this.width / 2, this.height / 2);
        }

        public fullCopy(){
            let newSprite = new Sprite();
            //newSprite.scripts = this.scripts.fullCopy();
            //newSprite.scripts.owner = newSprite;

        }

        public drawNew(){

        }

        public addCostume(costume){
            this.costumes.push(costume);
            if(this.costumes.length == 1){
                this.wearCostume(0);     
                }   
        }

        public wearCostume(index: number){
            this.costume = this.costumes[index];
            this.loadImage(this.costume, 0, 0, Sprite.staticWidth, Sprite.staticHeight);
        }

        public hide(){
            this.visible = false;
        }

        public show(){
            this.visible = true;
        }

        public setScale(percentage: number){
            let t: Texture = this.costume;
            this.curScale = percentage;
            this.graphics.scale(t.sourceWidth * this.curScale, t.sourceHeight * this.curScale);
        }

        public prepareToBeGrabbed(){

        }

        public goForward(stepNum: number){
            let distance: number = stepNum * Sprite.stepSize;
            let x: number = distance * Math.cos(this.rotation);
            let y: number = distance * Math.sin(this.rotation);
            this.x = x;
            this.y = y;
        }

        public setHeading(degree: number){//rotation = 90 - degree
            this.rotation = 90 - degree;
        }

        public getAllMessageNames(){

        }

        public getAllHeadBlocksFor(filter){
            if(typeof filter == 'number')
                filter.toString();
            return this.scriptArea.content._childs.filter(function(script){
                if(script.action == filter){
                    return true;
                }
                return false;
            })
        }

        public getAllHeadBlocksForInteraction(){

        }

        public mouseDownLeft(){
        
        }

        public mouseUpLeft(){

        }

        public receiveUserInteraction(){
            
        }

        public onStartDrag(e: Event): void{
            this.startDrag();
        }

        public showCode(e: Event): void{

        }

    }

}