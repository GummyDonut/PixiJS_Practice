export class CustomText {
    constructor(text, options) {
        let basicText = new PIXI.Text(text)

        basicText.x = options.x; // place it at a specific location
        basicText.y = options.y;

        basicText.cursor = "hover"
        basicText.interactive = true;
        basicText.on('pointerover', this.onButtonOver)
        basicText.on('pointerout', this.onButtonOut)

        this.basicText = basicText;
    }

    changeText(newText) {
        this.basicText.text = newText;
    }

    onButtonOver() {
        console.log("in")
        const textStyle = new PIXI.TextStyle({
            fill: "#9b2222"
        });
    
        this.style = textStyle
    }

    onButtonOut() {
        console.log("out")
        const textStyle = new PIXI.TextStyle({
            fill: "#000000"
        });
    
        this.style = textStyle
    }
}
