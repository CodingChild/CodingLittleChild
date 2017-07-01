module IDE {
    export class SpriteMaterialList extends GeneralList {

        constructor(generalListSetting: GeneralListSetting, generalListItemSetting: GeneralListItemSetting) {
            super(generalListSetting, generalListItemSetting);
            this.name = "spriteMaterialList";
            this.selectedIndex = 0;

        }

        protected onSelect(index: number): void {
            if (index >= 0 && index < this.length) {
                (this.selection as GeneralListItem).setBackground(true,
                    this.generalListItemSetting.backgroundHighlight,
                    this.generalListItemSetting.backgroundNormal);
            }

            if (this.curItem != null) {
                (this.curItem as GeneralListItem).setBackground(false,
                    this.generalListItemSetting.backgroundHighlight,
                    this.generalListItemSetting.backgroundNormal);
            }
            this.curItem = this.selection as GeneralListItem;
            /*
            let ide: GeneralIDE = GeneralIDE.getIDE();
            this.curChosenSprite = ide.sprites[index];

            this.costumeMaterialList.initializeMaterialItems();

            let scriptAreaIndex: number = ide.getChildIndex(ide.scriptArea);
            ide.removeChildAt(scriptAreaIndex);
            ide.addChildAt(ide.currentSprite.scriptArea, scriptAreaIndex);
            ide.scriptArea = ide.currentSprite.scriptArea;
            */
        }
        /**
         * update sprite list
         */
        public update() {
            this.array = [];
            let ide: GeneralIDE = GeneralIDE.getIDE();
            ide.sprites.forEach((sprite) => {
                this.addItem(sprite.costume.url);
            })
        }
    }
}