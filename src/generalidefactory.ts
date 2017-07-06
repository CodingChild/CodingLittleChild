module IDE {
    import Log = Laya.Log;
    export class GeneralIDEFactory {

        // share attributes

        constructor() {

        }

        public getIDE(name: string): GeneralIDE {
            let clientWidth = Laya.Browser.clientWidth;
            let clientHeight = Laya.Browser.clientHeight;
            if (Laya.Browser.onIPad || Laya.Browser.onPC) {
                return new PadIDE(name, clientWidth, clientHeight);
            }

        }
    }
}
