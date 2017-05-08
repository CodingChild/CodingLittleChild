import Thread = Marmot.Thread;
//import HeadBlock = Marmot.HeadBlock;
module Marmot{
    export class ThreadManager{
        
        private threads: Array<Thread>;

        constructor(){
            this.threads = [];
        }

        public startProcess(headBlock: HeadBlock){
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