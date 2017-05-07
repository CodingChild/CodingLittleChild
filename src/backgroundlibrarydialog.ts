module Marmot {
    import Event = Laya.Event;

    export class BackgroundLibraryDialog extends LibraryDialog {
        constructor(libraryDialogSetting: LibraryDialogSetting) {
            super(libraryDialogSetting);
        }

        protected initializeLibrayItems(): void {
            this.list.array = [
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg",
                "materials/bg_2.jpg"
            ];
        }
        protected onClose(e: Event): void {
            if (e.target.name == Dialog.OK) {
                let ide: IDE = IDE.getIDE();
                let item = this.list.selectedItem;
                ide.stageArea.addCostume(item);
                ide.stageArea.costumes.push(item);
                //ide.stageList.array.push(item);
                //ide.stageList.refresh();
            }
        }
    }
}