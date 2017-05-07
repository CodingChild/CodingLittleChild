module Marmot {
    import Event = Laya.Event;
    import Button = Laya.Button;

    export class SpriteMaterialListItem extends MaterialListItem {

        private btn: Button;
        constructor() {
            super();

            this.btn = new Button();

            this.btn.clickHandler = Handler.create(this, this.editCostume, [this.btn], false);

            this.addChild(this.btn);
        }
        public setBtn(skin: string, stateNum: number, width: number, height: number, x: number, y: number) {
            this.btn.skin = skin;
            this.btn.stateNum = stateNum;
            this.btn.size(width, height);
            this.btn.x = x;
            this.btn.y = y;
        }

        private editCostume(btn: Button): void {
            let spList: SpriteMaterialList = (this.parent.parent as SpriteMaterialList);
            let ide: IDE = IDE.getIDE();
            spList.costumeMaterialList.visible = true;
            ide.currentSprite = ide.sprites[spList.selectedIndex];
        }


    }

    interface SpriteMaterialListSetting extends MaterialListSetting {

    }

    interface SpriteMaterialListItemSetting extends MaterialListItemSetting {
        costumebuttonWidth: number;
        costumebuttonHeight: number;
        costumebuttonSkin: string;
        costumebuttonStateNum: number;
        costumebuttonX: number;
        costumebuttonY: number;
    }

    export class SpriteMaterialList extends MaterialList {

        public costumeMaterialList: CostumeMaterialList;

        public spriteLibraryDialog: SpriteLibraryDialog;

        public curClickedBtn: string;


        constructor(spriteMaterialListSetting: SpriteMaterialListSetting, spriteMaterialListItemSetting: SpriteMaterialListItemSetting) {
            super(spriteMaterialListSetting, spriteMaterialListItemSetting);

            this.curClickedBtn = "";
            this.itemRender = SpriteMaterialListItem;
            /*
            this.costumeMaterialList = new CostumeMaterialList();
            this.costumeMaterialList.visible = false;
            this.addChild(this.costumeMaterialList);
            this.spriteDialog = new SpriteDialog(ide);
            this.addChild(this.spriteDialog);
            this.spriteDialog.close(Dialog.CANCEL);
            */
        }

        protected updateItem(cell: SpriteMaterialListItem, index: number): void {
            let spriteMaterialListItemSetting: SpriteMaterialListItemSetting = this.materialListItemSetting as SpriteMaterialListItemSetting;
            cell.setImg(cell.dataSource,
                spriteMaterialListItemSetting.imageX,
                spriteMaterialListItemSetting.imageY,
                spriteMaterialListItemSetting.imageWidth,
                spriteMaterialListItemSetting.imageHeight
            );
            cell.setBackground(false,
                spriteMaterialListItemSetting.backgroundHighlight,
                spriteMaterialListItemSetting.backgroundNormal);
            cell.setBtn(spriteMaterialListItemSetting.costumebuttonSkin,
                spriteMaterialListItemSetting.costumebuttonStateNum,
                spriteMaterialListItemSetting.costumebuttonWidth,
                spriteMaterialListItemSetting.costumebuttonHeight,
                spriteMaterialListItemSetting.costumebuttonX,
                spriteMaterialListItemSetting.costumebuttonY);
        }

        protected initializeMaterialItems(): void {
            this.array = [];
            let ide: IDE = IDE.getIDE();
            ide.sprites.forEach((sprite) => {
                this.array.push(sprite);
            })

        }

        protected onMouse(e: Event, index: number): void {
            if (e.type == Event.CLICK) {
                let spriteMaterialListItemSetting: SpriteMaterialListItemSetting = this.materialListItemSetting as SpriteMaterialListItemSetting;
                let ide: IDE = IDE.getIDE();

                (this.selection as SpriteMaterialListItem).setBackground(true,
                    spriteMaterialListItemSetting.backgroundHighlight,
                    spriteMaterialListItemSetting.backgroundNormal);
                if (this.curItem != null) {
                    (this.selection as SpriteMaterialListItem).setBackground(false,
                        spriteMaterialListItemSetting.backgroundHighlight,
                        spriteMaterialListItemSetting.backgroundNormal);
                }
                this.curItem = this.selection as SpriteMaterialListItem;
                ide.currentSprite = ide.sprites[index];
                this.costumeMaterialList.array = [];
                ide.currentSprite.costumes.forEach((costume) => {
                    this.costumeMaterialList.array.push(costume);
                })
                ide.spriteMaterialList.costumeMaterialList.refresh();
                let scriptAreaIndex: number = ide.getChildIndex(ide.scriptArea);
                ide.removeChildAt(scriptAreaIndex);
                ide.addChildAt(ide.currentSprite.scriptArea, scriptAreaIndex);
                ide.scriptArea = ide.currentSprite.scriptArea;
            }
        }
        protected onPlusBtnClicked(): void {
            this.curClickedBtn = "addSprite";
            this.spriteLibraryDialog.show();
        }
    }
}