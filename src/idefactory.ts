module Marmot {
    import Log = Laya.Log;
    export class IDEFactory {

        // share attributes

        constructor() {

        }

        public getIDE(name:string): IDE {
            let clientWidth = Laya.Browser.clientWidth;
            let clientHeight = Laya.Browser.clientHeight;

            if(Laya.Browser.clientWidth < 2000){          
                return new PhoneIDE(name, clientWidth, clientHeight);
            }

        }
    }
}
