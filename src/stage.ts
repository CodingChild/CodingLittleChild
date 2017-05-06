module Marmot{
    export class Stage extends Laya.Panel{

        public costumes:Array<string>;
        public costume:string;
        constructor(width:number, height:number){
            super();
            this.width = width;
            this.height = height;
        }

        public fireGreenFlagEvent():void{

        }

        /**
         * fireStopAllEvent
         */
        public fireStopAllEvent() {
            
        }
    }
}