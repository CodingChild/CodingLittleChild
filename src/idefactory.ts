module Marmot {
    import Log = Laya.Log;
    export class IDEFactory {

        // share attributes

        constructor() {

        }

        public getIDE(name:string): IDE {
            let clientWidth = Laya.Browser.clientWidth;
            let clientHeight = Laya.Browser.clientHeight;

            if(Laya.Browser.onMobile){          
                return new PhoneIDE(name, clientWidth, clientHeight);
            }
            else if(Laya.Browser.onSafari){

            }
            else if(Laya.Browser.onPC){
                return new TabletIDE(name, clientWidth, clientHeight);
            }

        }
    }
}
