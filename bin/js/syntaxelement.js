var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var SyntaxElement = (function (_super) {
        __extends(SyntaxElement, _super);
        function SyntaxElement() {
            return _super.call(this) || this;
        }
        /**
         * answer my all parts, which belongs to syntaxelement
         */
        SyntaxElement.prototype.inputs = function () {
            if (this.cachedInputs == null) {
                this.cachedInputs = this.parts().filter(function (part) {
                    return part instanceof SyntaxElement;
                });
            }
            return this.cachedInputs;
        };
        /**
         * answer my all parts, except my next block child
         */
        SyntaxElement.prototype.parts = function () {
            var block = null;
            var parts = [];
            if (this instanceof Marmot.Block) {
                block = this.getNextBlockChild();
            }
            this._childs.forEach(function (child) {
                if (child != block) {
                    parts.push(child);
                }
            });
            return parts;
        };
        return SyntaxElement;
    }(Laya.Sprite));
    Marmot.SyntaxElement = SyntaxElement;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=syntaxelement.js.map