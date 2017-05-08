module Marmot {
    import Event = Laya.Event;
    import Button = Laya.Button;

    export class SpriteMaterialListItem extends MaterialListItem {
        public static WIDTH: number;
        public static HEIGHT: number;

        private btn: Button;
        constructor() {
            super();
            if (SpriteMaterialListItem.WIDTH != undefined && SpriteMaterialListItem.HEIGHT != undefined) {
                this.size(SpriteMaterialListItem.WIDTH, SpriteMaterialListItem.HEIGHT);
            }

            this.btn = new Button();

            this.btn.clickHandler = new Handler(this, this.editCostume, [this.btn], false);

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
            spList.costumeMaterialList.visible = true;
        }


    }

    export interface SpriteMaterialListSetting extends MaterialListSetting {

    }

    export interface SpriteMaterialListItemSetting extends MaterialListItemSetting {
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

            SpriteMaterialListItem.WIDTH = spriteMaterialListItemSetting.width;
            SpriteMaterialListItem.HEIGHT = spriteMaterialListItemSetting.height;
            this.array = [];
            this.vScrollBarSkin = "";
            this.curClickedBtn = "";
            this.itemRender = SpriteMaterialListItem;
            Laya.Log.print(this.vScrollBarSkin);
            //this.itemRender = MaterialListItem;
            this.selectEnable = true;
            this.selectHandler = new Handler(this, this.onSelect);
            this.renderHandler = new Handler(this, this.updateItem);
            this.spaceY = 40;
            this.repeatX = 1;
            this.repeatY = 3;
            this.startIndex = 0;
            this.startIndex = 0;
            this.curItem = null;

            /*
            this.array = [];
            this.ide.sprites.forEach((sprite) => {
                this.array.push(sprite.costume);
            })
            this.vScrollBarSkin = "";
            Laya.Log.print(this.vScrollBarSkin);
            this.itemRender = Item;
            this.selectEnable = true;
            this.selectHandler = new Handler(this, this.onSelect);
            this.renderHandler = new Handler(this, this.updateItem);
            this.spaceY = 40;
            this.repeatX = 1;
            this.repeatY = 3;
            this.startIndex = 0;

            this.curItem = null;
            this.curClickedBtn = "";
            */

        }

        protected updateItem(cell: SpriteMaterialListItem, index: number): void {
            let spriteMaterialListItemSetting: SpriteMaterialListItemSetting = this.materialListItemSetting as SpriteMaterialListItemSetting;
            this.scrollBar
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

        public initializeMaterialItems(): void {
            this.array = [];
            let ide: IDE = IDE.getIDE();
            ide.sprites.forEach((sprite) => {
                this.array.push(sprite.costume);
            })

        }

        protected onSelect(index: number): void {
            let spriteMaterialListItemSetting: SpriteMaterialListItemSetting = this.materialListItemSetting as SpriteMaterialListItemSetting;
            let ide: IDE = IDE.getIDE();
            Laya.Log.print(this.selectedIndex.toString());

            if (this.curItem != null) {
                (this.curItem as SpriteMaterialListItem).setBackground(false,
                    spriteMaterialListItemSetting.backgroundHighlight,
                    spriteMaterialListItemSetting.backgroundNormal);
            }
            (this.selection as SpriteMaterialListItem).setBackground(true,
                spriteMaterialListItemSetting.backgroundHighlight,
                spriteMaterialListItemSetting.backgroundNormal);
            this.curItem = this.selection as SpriteMaterialListItem;
            ide.currentSprite = ide.sprites[index];

            this.costumeMaterialList.initializeMaterialItems();

            let scriptAreaIndex: number = ide.getChildIndex(ide.scriptArea);
            ide.removeChildAt(scriptAreaIndex);
            ide.addChildAt(ide.currentSprite.scriptArea, scriptAreaIndex);
            ide.scriptArea = ide.currentSprite.scriptArea;
        }
        protected onPlusBtnClicked(): void {
            this.curClickedBtn = "addSprite";
            this.spriteLibraryDialog.show();
        }
    }
}