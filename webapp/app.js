let app;

import {createBasicText} from './components/text.js'

// load the pixi.js app
window.onload = function() {
    app = new PIXI.Application(
        {
            width: 800, // possibly change this to height of the app
            height: 600,
            backgroundColor: 0xAAAAAA
        }
    )

    // append the canvas
    document.body.appendChild(app.view)

    // Add custom cursor styles
    app.renderer.events.cursorStyles.default = "crosshair";
    app.renderer.events.cursorStyles.hover = "grab";

    let basicText  = createBasicText("Basic test in pixi", {
        x: 80,
        y: 100
    })

    app.stage.addChild(basicText);
}