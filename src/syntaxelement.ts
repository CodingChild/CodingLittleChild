module Marmot{

    export abstract class SyntaxElement extends Laya.Sprite{
        protected myWidth:number;
        protected myHeight:number;
        private cachedInputs:Array<SyntaxElement>;
        constructor(){
            super();
        }

        /**
         * answer my all parts, which is syntaxelement
         */
        public inputs() {
            if(this.cachedInputs == null){
                this.cachedInputs = this.parts().filter((part)=>{
                    return part instanceof SyntaxElement;
                });
            }
            return this.cachedInputs;
        }

        public abstract evaluate();

        /**
         * answer my all parts, except my next block child
         */

        private parts():Array<SyntaxElement>{
            let block:Block = null;
            let parts:Array<SyntaxElement> = [];
            if(this instanceof Block){
                block = this.getNextBlockChild();
            }
            this._childs.forEach((child)=>{
                if(child != block){
                    parts.push(child);
                }
            })
            return parts;
        }
    }
}