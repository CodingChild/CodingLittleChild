module Marmot{
    import Event = Laya.Event;

    export class CommandSlot extends SyntaxElement{
        constructor(){
            super();
            this.myWidth = 0;
            this.myHeight = 0;
            this.width = 0;
            this.height = 0;
            this.on(Event.MOUSE_DOWN, this, this.onMouseDown);
        }

        private onMouseDown(e:Event){
            Laya.Log.print("CommandSlot");
        }

        public evaluate(){
            return this.getNextBlockChild();
        }
        public getNextBlockChild():Block{
            let children = this.parts();
            if(children.length == 0){
                return null;
            }
            else{
                let child1:Block;
                children.forEach((child)=>{
                    if(child instanceof Block){
                        child1 = child;
                    }
                });
                return child1;

            }
        }
    }
}