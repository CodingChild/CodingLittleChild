module Block {
    import Button = Laya.Button;
    import Event = Laya.Event;

    export class TargetList extends IDE.GeneralList {

        private ok_Button: Button;

        constructor(generalListSetting: IDE.GeneralListSetting, generalListItemSetting: IDE.GeneralListItemSetting) {
            super(generalListSetting, generalListItemSetting);
            this.name = "targetList";
            this.buildOkBtn();
            this.initializeItems();
        }
        protected drawBackground(): void {
            let newCorner = Math.round(BasicBlock.blockSetting.roundCorner * BasicBlock.blockSetting.blockScale);
            this.graphics.drawPath(0, 0, [
                ["moveTo", newCorner, 0],
                ["arcTo", this.width, 0, this.width, newCorner, newCorner],
                ["arcTo", this.width, this.height, this.width - newCorner, this.height, newCorner],
                ["arcTo", 0, this.height, 0, this.height - newCorner, newCorner],
                ["arcTo", 0, 0, newCorner, 0, newCorner],
                ["closePath"]
            ], {
                    fillStyle: this.generalListSetting.bgColor
                },
                {
                    "strokeStyle": "#000000",
                    "lineWidth": BasicBlock.blockSetting.blockLineWidthHighlight
                }
            )
        }

        private buildOkBtn(): void {
            this.ok_Button = new Button();
            this.addChild(this.ok_Button);
            this.ok_Button.stateNum = 1;
            this.ok_Button.skin = "materials/btn_yes_1.png";
            this.ok_Button.size(IDE.GeneralIDE.ICONSIZE, IDE.GeneralIDE.ICONSIZE);
            this.ok_Button.pos(this.width - IDE.GeneralIDE.ICONSIZE, 0);
            this.ok_Button.on(Event.CLICK, this, this.onBtnClicked);
        }
        protected initializeItems(): void {
            this.array = [];
            let ide: IDE.GeneralIDE = IDE.GeneralIDE.getIDE();
            ide.sprites.forEach((sprite) => {
                this.addItem(sprite.costume.url);
            })
        }
        private onBtnClicked() {
            if (this.selectedIndex > -1) {
                let parentBlock: BasicBlock = this.parent as BasicBlock;
                let ide: IDE.GeneralIDE = IDE.GeneralIDE.getIDE();
                parentBlock.target.skin = ide.sprites[this.selectedIndex].costume.url;
                this.visible = false;
            }
        }
    }
}