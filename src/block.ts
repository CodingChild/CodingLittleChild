import SyntaxElement = Marmot.SyntaxElement;
import Sprite = Marmot.Sprite;
module Marmot{
    export class Block extends SyntaxElement{
        public action;

        public addHighlightForAllBlockChildren(){}
        
        public removeHighlightForAllBlockChildren(){}

        public receiver(): Sprite{return;}
    }
}