module Marmot {
    import Event = Laya.Event;

    export interface SpriteLibraryDialogSetting extends LibraryDialogSetting{

    }

    export class SpriteLibraryDialog extends LibraryDialog {
        constructor(spriteLibraryDialogSetting: SpriteLibraryDialogSetting, libraryDialogItemSetting:LibraryDialogItemSetting) {
            super(spriteLibraryDialogSetting, libraryDialogItemSetting);
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
            this.list.refresh();
        }
        protected onClose(e: Event): void {
            if (e.target.name == Dialog.OK) {
                let ide: IDE = IDE.getIDE();
                if (ide.spriteMaterialList.curClickedBtn == "addCostume") {
                    let item = this.list.selectedItem;
                    ide.currentSprite.addCostume(item);
                    ide.spriteMaterialList.costumeMaterialList.initializeMaterialItems();

                }
                else if (ide.spriteMaterialList.curClickedBtn == "addSprite") {
                    let newSprite = new Marmot.Sprite();
                    newSprite.addCostume(this.list.selectedItem);
                    ide.sprites.push(newSprite);
                    ide.stageArea.addChild(newSprite);
                    newSprite.pos(ide.stageArea.width / 2, ide.stageArea.height / 2);
                    ide.spriteMaterialList.initializeMaterialItems();
                }

            }
        }
    }
}