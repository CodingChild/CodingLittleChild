module Marmot {
    import List = Laya.List;
    import Box = Laya.Box;
    import Image = Laya.Image;
    import Event = Laya.Event;
    import Button = Laya.Button;
    import Handler = Laya.Handler;


    class Item extends Box {

        private img: Image;

        constructor() {
            super();
            this.img = new Image();

            this.addChild(this.img);
        }

        public setBackground(isHighlight: boolean) {
            this.graphics.clear();
            if (isHighlight == true) {
                this.graphics.drawRect(0, 0, this.width, this.height, "#a8b4f1");
            }
        }


        public setImg(src: string): void {
            this.img.skin = src;
            this.img.pos(0, 0);
            this.img.size(100, 100);
        }

    }

    export class MaterialCategory extends List {
        private ide: IDE;
        private curIndex: number;

        constructor(ide: IDE) {
            super();
            this.width = 100;
            this.height = 400;
            this.ide = ide;
            this.pos(0, 200);
            this.array = [
                "materials/btn_sprite.png",
                "materials/btn_stage.png",
                "materials/btn_music_1.png"
            ];
            this.itemRender = Item;
            this.selectEnable = true;
            this.spaceY = 50;
            this.repeatX = 1;
            this.repeatY = 3;
            this.startIndex = 0;
            this.curIndex = -1;
            this.selectHandler = new Handler(this, this.onSelect);
            this.renderHandler = new Handler(this, this.updateItem);
        }

        private updateItem(cell: Item, index: number): void {
            let yindex = index % this.repeatY;
            cell.pos(0, (yindex * 100 + yindex * 50));
            cell.setImg(cell.dataSource);
            cell.size(100, 100);
            cell.setBackground(false);
        }

        private onSelect(index: number): void {
            if (index != -1) {
                let newCell: Item = this.cells[index];
                if (this.curIndex > -1) {
                    let oldCell: Item = this.cells[this.curIndex];
                    oldCell.setBackground(false);
                }
                newCell.setBackground(true);
                this.curIndex = index;
                (this.ide as IDE).chooseMaterialArea(index);
            }
            else{
                if (this.curIndex > -1) {
                    let oldCell: Item = this.cells[this.curIndex];
                    oldCell.setBackground(false);
                }
                this.curIndex = index;
            }
        }
    }


}