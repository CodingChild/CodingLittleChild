module Marmot {
    import Event = Laya.Event;

    export class SpriteLibraryDialog extends LibraryDialog {
        constructor(libraryDialogSetting: LibraryDialogSetting) {
            super(libraryDialogSetting);
        }

        protected initializeLibrayItems(): void {
            this.list.array = [
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png"
            ];
        }
        protected onClose(e: Event): void {
            if (e.target.name == Dialog.OK) {
                let ide: IDE = IDE.getIDE();
                if (ide.spriteList.curClickedBtn == "addCostume") {
                    let item = this.list.selectedItem;
                    ide.currentSprite.addCostume(item);
                    ide.currentSprite.costumes.push(item);
                    ide.spriteList.costumesList.array.push(item);
                    ide.spriteList.costumesList.refresh();

                }
                else if (ide.spriteList.curClickedBtn == "addSprite") {
                    let newSprite = new Marmot.Sprite();
                    newSprite.addCostume(this.list.selectedItem);
                    newSprite.costume = this.list.selectedItem;
                    newSprite.costumes = [newSprite.costume];
                    ide.sprites.push(newSprite);
                    ide.spriteList.array.push(newSprite.costume);
                    ide.spriteList.refresh();
                }

            }
        }
    }
}