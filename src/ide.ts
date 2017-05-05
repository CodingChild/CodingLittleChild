module Marmot {
    import Block = Marmot.Block;
    import ScriptArea = Marmot.ScriptArea;
    import View = Laya.View;
    import Button = Laya.Button;
    import Tab = Laya.Tab;
    import BlockArea = Marmot.BlockArea;
    import List = Laya.List;

    export abstract class IDE extends View {
        public globalVariables;
        public scriptArea: ScriptArea;
        public currentSprite;
        public sprites;
        public currentCategory;
        public blocksCategory: Tab;
        public materialCategory;
        public blocksArea: BlockArea;
        public stageArea;
        public controlBar;
        public isFullScreen;
        public isCoordinateSystemVisible;
        public isStageVisible;

        constructor(name: string, width: number, height: number) {
            super();

            this.top = 0;
            this.left = 0;
            this.right = 0;
            this.bottom = 0;
            this.name = name;
            this.width = width;
            this.height = height;
            this.buildIDE();
        }

        protected abstract buildIDE(): void;
        protected abstract createMaterialArea(): void;
        protected abstract createMaterialCategory(): void;
        protected abstract createBlocksArea(): void
        protected abstract createBlocksCategory(): void;
        protected abstract createStageArea(): void;
        protected abstract createControlBar(): void;
        protected abstract createScriptArea(): void;

        protected chooseMaterialArea(): void {

        }
        protected chooseBlock(index: number): void {
            
            let blocksCategory:string = "";
            if(index == 0){
                blocksCategory = "control";
            }
            else if(index == 1){
                blocksCategory = "event";
            }
            else if(index == 2){
                blocksCategory = "pen";
            }
            else if(index == 3){
                blocksCategory = "math";
            }
            else if(index == 4){
                blocksCategory = "music";
            }
            else if(index == 5){
                blocksCategory = "motion";
            }
            else if(index == 6){
                blocksCategory = "look";
            }
            else if(index == 7){
                blocksCategory = "variable";
            }
            else if(index == 8){
                blocksCategory = "sense";                
            }
            else{
                return;
            }
            this.blocksArea.updateContent(blocksCategory);

        }
        protected pressStart(): void {

        }
        protected pressStop(): void {

        }

        protected toggleFullScreen(): void {

        }
        protected toggleCoordinateSystem(): void {

        }
        protected toggleStage(): void {

        }
        protected abstract fixIDELayout(): void;
        protected fixBlocksCategoryLayout(): void {

        }


        protected fixBlocksAreaLayout(): void {

        }
        protected fixMaterialCategoryLayout(): void {

        }
        protected fixMaterialAreaLayout(): void {

        }
        protected fixControlBarLayout(): void {

        }

        protected fixStageAreaLayout(): void {

        }
        protected switchBlocksAreaVisibility(): void {

        }
    }
}