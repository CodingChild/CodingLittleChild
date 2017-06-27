module Marmot{
    export class Context{

        public receiver: Marmot.Sprite | StagePanel;
        public expression: Array<Block> | string;
        public pc: number;
        public inputs: Array<any>;
        public outerContext: Context;
        public parentContext: Context;
        public startTime: number;

        constructor(parentContext: Context = null, expression: Array<Block> | string = null, outerContext: Context = null, receiver: Marmot.Sprite | StagePanel = null){
            this.parentContext = parentContext;
            this.expression = expression;
            this.outerContext = outerContext;
            this.receiver = receiver;
            if(outerContext){
                this.receiver = outerContext.receiver;
            }
            this.pc = 0;
            this.inputs = [];
        }

        addInput(input){
            this.inputs.push(input);
        }
    }
}