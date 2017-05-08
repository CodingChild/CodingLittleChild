module Marmot{
    export class Stage extends Laya.Panel{

        public costumes:Array<string>;
        public costume:string;
        public scriptArea:ScriptArea;
        constructor(width:number, height:number){
            super();
            this.width = width;
            this.height = height;
            this.scriptArea = new ScriptArea(this);
        }

        public fireGreenFlagEvent():void{

        }

        /**
         * fireStopAllEvent
         */
        public fireStopAllEvent() {
            
        }

        public toggleFullScreen():void{

        }

        public toggleNormalScreen():void{

        }

        public toggleShowCoordinate(isVisible:boolean):void{

        }        

        public addCostume(url:string){

        }

    }

}