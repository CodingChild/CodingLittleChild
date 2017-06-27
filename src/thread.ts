module Marmot{
    import Button = Laya.Button;
    export class Thread{

        public timeout: number;
        private headBlock: HeadCommandBlock;
        private readyToYield: boolean;//boolean indicating whether to yield control to another process
        private readyToTerminate: boolean;//boolean indicating whether the stop method has been called
        private isDead: boolean;//????????
        private context: Context;
        private homeContext: Context;
        private lastYield: number;//?????????
        private frameCount: number;

        constructor(headBlock: HeadCommandBlock = null){
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
            this.lastYield = Date.now();
            while(!this.readyToYield && this.context && (Date.now() - this.lastYield < this.timeout)){
                this.evaluateContext();
            }
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
            let rcvr:Sprite | StagePanel | Thread = this.context.receiver || this.headBlock.receiver();
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

        public wait(secs: number){
            if(!this.context.startTime){
                this.context.startTime = Date.now();
            }
            if((Date.now() - this.context.startTime) >= (secs * 1000)){
                return null;
            }
            this.pushContext('doYield');
            this.pushContext();
        }

        public foreverLoop(body){// loop forever
            this.context.inputs = [];//that's the reason why it can loop forever
            if(body){
                this.pushContext(body.blockSequence());
            }
            this.pushContext('doYield');
            this.pushContext();
        }

        public doStop(choice){
            switch(choice){
                case 'all':
                    this.doStopAll();
                    break;
                case 'this sprite':
                    this.doStopSprite();
                    break;
                case 'this thread':
                    this.doStopThread();
                    break;
            }
        }

        public doStopAll(){
            let ide:IDE = IDE.getIDE();
            let threadManager:ThreadManager = ide.stageArea.threadManager;
            if(threadManager){
                threadManager.stopAll();
            }
            let btn_play = ide.controlBar.getChildByName("btn_play") as Button;
            ide.pressStart(btn_play);
            threadManager.isRunning = false;
        }

        public doStopThread(){
            this.stop();
        }

        public doStopSprite(){
            let sprite = this.homeContext.receiver;
            let threadManager:ThreadManager = IDE.getIDE().stageArea.threadManager;
            threadManager.threads.forEach(function(thread){
                if(thread.homeContext.receiver == sprite)
                    thread.stop();
            })
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
                var target = this.context ? 
                this.context.parentContext || this.homeContext  : this.homeContext;
                target.addInput(value);
            }
        }

    }
}