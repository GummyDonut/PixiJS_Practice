// create some basic text
function createBasicText(text, option) {
    let basicText = new PIXI.Text(text)

    basicText.x = option.x; // place it at a specific location
    basicText.y = option.y;

    basicText.cursor = "hover"
    basicText.interactive = true;
    basicText.on('pointerover', onButtonOver)
    basicText.on('pointerout', onButtonOut)

    return basicText
}

function onButtonOver() {
    console.log("in")
    const textStyle = new PIXI.TextStyle({
        fill: "#9b2222"
    });

    this.style = textStyle
}

function onButtonOut() {
    console.log("out")
    const textStyle = new PIXI.TextStyle({
        fill: "#000000"
    });

    this.style = textStyle
}

export {createBasicText}