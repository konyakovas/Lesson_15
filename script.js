class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;

    } 
    addDiv() {
        let div = document.createElement('div');
        document.body.appendChild(div);
        let param = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; 
        font-size: ${this.fontSize}; font-size: ${this.fontSize} `;
        div.style.cssText = param;
    }
 
}

const newDiv = new Options(200, 200, 'green', 10, 'left');
const newSqure = new Options(400, 100, 'red', 50, 'center')
;
newDiv.addDiv();
newSqure.addDiv();