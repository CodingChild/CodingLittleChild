module Marmot{
    import Button = Laya.Button;

    export class ThreadManager{
        
        public threads: Array<Thread>;
        public isRunning:boolean;

        constructor(){
            this.threads = [];
            this.isRunning = false;
        }

        public startProcess(headBlock: HeadCommandBlock){
            let newThread = new Thread(headBlock);
            this.threads.push(newThread);
        }

        public stopAll(){
            this.threads.forEach(function(thread){
                thread.stop();
                }
            )
        }

        public runThread(){
            if(this.threads.length == 0){
                Laya.timer.clear(this, this.runThread);
                let ide:IDE = IDE.getIDE();
                let btn_play = ide.controlBar.getChildByName("btn_play") as Button;
                ide.pressStart(btn_play);
                this.isRunning = false;
                return;
            }

            let numberOfThreads: number = this.threads.length;
            let eachTimeout: number = 16 / numberOfThreads;
            this.threads.forEach(function(thread){
                thread.timeout = eachTimeout;
                thread.run();
                }
            )
            this.removeTerminatedThreads();
        }

        private removeTerminatedThreads(){
            let remaining: Array<Thread> = [];
            this.threads.forEach(function(thread){
                if(!thread.isRunning()){
                    //remove highlight                   
                }
                else{
                    remaining.push(thread);
                }
            })
            this.threads = remaining;
        }
    }
}