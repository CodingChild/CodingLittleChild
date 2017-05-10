module Marmot{

    export abstract class SyntaxElement extends Laya.Sprite{
        /**
         * myWidth is only one block's width
         */
        public myWidth:number;

        /**
         * myHeight is only one block's height
         */
        public myHeight:number;

        /**
         * cachedInputs store all inputs syntaxelement
         */
        private cachedInputs:Array<SyntaxElement>;

        constructor(){
            super();
        }

        /**
         * answer my all parts, which belongs to syntaxelement
         */
        public inputs() {
            if(this.cachedInputs == null){
                this.cachedInputs = this.parts().filter((part)=>{
                    return part instanceof SyntaxElement;
                });
            }
            return this.cachedInputs;
        }

        /**
         * compute my value
         */

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