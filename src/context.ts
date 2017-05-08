module Marmot{
    export class Context{

        public receiver: Marmot.Sprite;
        public expression: Array<Block> | string;
        public pc: number;
        public inputs: Array<any>;
        public outerContext: Context;
        public parentContext: Context;
        public startTime: number;

        constructor(parentContext: Context = null, expression: Array<Block> | string = null, outerContext: Context = null, receiver: Marmot.Sprite = null){
            this.parentContext = parentContext;
            this.expression = expression;
            this.outerContext = outerContext;
            this.receiver = receiver;
        }

        addInput(input){
            this.inputs.push(input);
        }
    }
}