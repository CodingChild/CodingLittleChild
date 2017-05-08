import HeadBlock = Marmot.HeadBlock;
import Context = Marmot.Context;
//import Block = Marmot.Block;
module Marmot{
    export class Thread{

        public timeout: number;
        private headBlock: HeadBlock;
        private readyToYield: boolean;//boolean indicating whether to yield control to another process
        private readyToTerminate: boolean;//boolean indicating whether the stop method has been called
        private isDead: boolean;//????????
        private context: Context;
        private homeContext: Context;
        private lastYield: number;//?????????
        private frameCount: number;

        constructor(headBlock: HeadBlock = null){
            this.headBlock = headBlock;
            this.readyToYield = false;
            this.readyToTerminate = false;
            this.isDead = false;
            this.context = null;
            this.homeContext = new Context();
            this.lastYield =  Date.now();
            this.frameCount = 0;

            if (headBlock) {
                this.homeContext.receiver = headBlock.receiver();
                this.context = new Context(null, headBlock.blockSequence(), this.homeContext);
            }
        }

        public isRunning(){
            return (this.context !== null) && (!this.readyToTerminate);
        }

        public run(){
            this.readyToYield = false;
            while(!this.readyToYield && this.context && (Date.now() - this.lastYield < this.timeout)){
                this.evaluateContext();
            }
            this.lastYield = Date.now();
            if(this.readyToTerminate){
                while(this.context){
                    this.popContext();
                }
            }
        }

        public stop(){
            this.readyToYield = true;
            this.readyToTerminate = true;
        }

        private evaluateContext(){
            let exp: any = this.context.expression;
            this.frameCount += 1;
            if(exp instanceof Array){
                return this.evaluateSequence(exp);
            }
            if(exp instanceof Block){
                return this.evaluateBlock(exp, exp.inputs().length);
            }
            if(exp instanceof Argument){
                return this.evaluateInput(exp);
            }
            if(isString(exp)){
                return this[exp]();
            }
            this.popContext();
        }

        private evaluateBlock(block: Block, argCount: number){
            let action = block.action;
            let rcvr = this.context.receiver || this.headBlock.receiver();
            let inputs = this.context.inputs;

            if(argCount > inputs.length){
                this.evaluateNextInput(block);//get inputslot
            }
            else{
                if(this[action]){
                    rcvr = this;
                }
                this.returnValueToParentContext(rcvr[action].apply(rcvr, inputs));
                this.popContext();
            }
        }

        private evaluateInput(input: Argument){//return slot content to block
            let ans;
            ans = input.evaluate();
            this.returnValueToParentContext(ans);
            this.popContext();
        }

        private evaluateSequence(array: Array<any>){//get each block of the array
            let pc = this.context.pc;
            let outer = this.context.outerContext;
            if(pc == (array.length - 1)){
                this.context = new Context(this.context.parentContext, array[pc], this.context.outerContext, this.context.receiver);     
            }
            else{
                    if(pc >= array.length){
                        this.popContext();
                    }
                    else{
                        this.context.pc += 1;
                        this.pushContext(array[pc],outer);
                    }
            }
        }

        private evaluateNextInput(block: Block){//get each inputslot of the block
            let nxt = this.context.inputs.length;
            let args = block.inputs();
            let exp = args[nxt];
            //let act = this.context.expression.action;
            let outer = this.context.outerContext;

            this.pushContext(exp,outer);
        }

        public doYield(){
            this.popContext();
        }

        public doIfElse(){

        }

        public doRepeat(){

        }

        public doWait(secs: number){
            if(!this.context.startTime){
                this.context.startTime = Date.now();
            }
            if((Date.now() - this.context.startTime) >= (secs * 1000)){
                return null;
            }
            this.pushContext('doYield');
            this.pushContext();
        }

        public getBlockReceiver(){
            return this.context ? this.context.receiver || this.homeContext.receiver : this.homeContext.receiver;
        }

        public doBroadcast(){

        }

        public getOtherObject(){
            // private, find the sprite indicated by the given name
            // either onstage or in the World's hand
            // experimental: deal with first-class sprites


        }

        // Process sensing primitives

        public reportTouchingObject(name){
            let thisObj = this.getBlockReceiver();

            if(thisObj){
                return this.objectTouchingObject(thisObj, name);
            }
            return false;
        }

        public objectTouchingObject(thisObj, name){
            let myself = this;
            let those;
            let stage;
            let box;
            let mouse;


        }

        public reportTouchingColor(){

        }

        public pushContext(expression = null, outerContext = null){
            this.context = new Context(
                this.context, 
                expression,
                outerContext || (this.context ? this.context.outerContext : null),
                // for tail call elimination
                this.context ? // check needed due to tail call elimination
                this.context.receiver : this.homeContext.receiver
             );
        }

        public popContext(){
            this.context = this.context ? this.context.parentContext : null;
        }

        public returnValueToParentContext(value){
            if (value !== undefined) {
                var target = this.context ? // in case of tail call elimination
                this.context.parentContext || this.homeContext  : this.homeContext;
                target.addInput(value);
            }
        }

    }
}