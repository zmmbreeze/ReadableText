var ReadableText = (function() {
    /**
     *
     * @constructor
     * @param {string} id dom id.
     * @param {object=} option .
     */
    function Klass(id, option) {
        this._dom = document.getElementById(id);
        option = option || {};
        this._width = option.width || 600;
        this._height = option.height || 400;
        this._autoHeight = option.autoHeight || true;
        this._maxHeight = option.maxHeight || null;
        this._init();
    }

    Klass.prototype._init = function() {
        var dom = this._dom;
        dom.style.width = this._width + 'px';
        if (this._autoHeight) {
            dom.style.minHeight = this._height + 'px';
        } else {
            dom.style.height = this._height + 'px';
        }
        var frame = this._frame = document.createElement('iframe');
        // dom.contentEditable = true;
        var value = '<br/>';
        if (dom.nodeName.toLowerCase() === 'textarea') {
            value = dom.innerHTML;
        } else {
            value = dom.value;
        }
        console.log(value);
        console.log(this._frame.contentWindow);
    };

    return Klass;
})();
