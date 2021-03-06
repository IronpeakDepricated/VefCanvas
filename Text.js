var Text = Shape.extend({

    constructor: function(ID) {
        this.base(ID, "Text");
    },

    reconstruct: function(obj) {
        this.base(obj);
        this.text = obj.text;
        this.font = obj.font;
        this.fontSize = obj.fontSize;
    },

    draw: function(canvas) {
        this.prepareDraw(canvas);
        canvas.fillText(this.text, this.pos.x, this.pos.y);
		if(this.selected) {
			var magicNumber = 0.75;
			var minX = this.pos.x;
			var maxX = this.text.length * parseInt(this.fontSize) * magicNumber;
			var minY = this.pos.y - parseInt(this.fontSize);
			var maxY = parseInt(this.fontSize);
			canvas.strokeRect(minX, minY, maxX, maxY);
		}
        this.base(canvas);
    },

    prepareDraw: function(canvas) {
		this.base(canvas);
        canvas.font = this.fontSize + "pt " + this.font;
        canvas.fillStyle = this.brushColor;
    },

    contains: function(point) {
        var magicNumber = 0.75;
		var minX = this.pos.x;
		var maxX = this.pos.x + this.text.length * parseInt(this.fontSize) * magicNumber;
		var minY = this.pos.y - parseInt(this.fontSize);
		var maxY = this.pos.y;
        return minX < point.x && point.x < maxX && minY < point.y && point.y < maxY;
    },
});