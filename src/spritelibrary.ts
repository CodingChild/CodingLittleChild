module IDE {
    import Event = Laya.Event;

    export class SpriteLibrary extends GeneralLibrary {
        constructor(generalLibrarySetting: GeneralLibrarySetting) {
            super(generalLibrarySetting);
            this.name = "spriteLibrary";
            this.initializeLibrayItems();
        }

        protected initializeLibrayItems(): void {
            this.generalLibraryList.array = [
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
            this.generalLibraryList.refresh();
        }
        protected onClose(e: Event): void {
            if (e.target.name == Dialog.OK && this.generalLibraryList.selectedIndex != -1) {
                let ide: GeneralIDE = GeneralIDE.getIDE();
                let newSprite = new Sprite.Sprite();
                newSprite.addCostume(this.generalLibraryList.selectedItem);
                ide.sprites.push(newSprite);
                ide.stageArea.addChild(newSprite);
                newSprite.pos(ide.stageArea.width / 2, ide.stageArea.height / 2);
                (ide.spriteMaterialArea.getChildAt(0) as SpriteMaterialList).update();
            /*
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
                */
            }
        }
    }
}