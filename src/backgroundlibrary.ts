module IDE {
    import Event = Laya.Event;

    export class BackgroundLibrary extends GeneralLibrary {
        constructor(generalLibrarySetting: GeneralLibrarySetting) {
            super(generalLibrarySetting);
            this.name = "backgroundLibrary";
            this.initializeLibrayItems();
        }

        protected initializeLibrayItems(): void {
            this.generalLibraryList.array = [
                "res/pics/bg_dadishu.jpg"
            ];
            this.generalLibraryList.refresh();
        }
        protected onClose(e: Event): void {
            if (e.target.name == Dialog.OK && this.generalLibraryList.selectedIndex != -1) {
                let ide: GeneralIDE = GeneralIDE.getIDE();
                let item = this.generalLibraryList.selectedItem;
                ide.stageArea.addCostume(item);
                (ide.backgroundMaterialArea.getChildAt(0) as BackgroundMaterialList).update();
            }
        }
    }
}