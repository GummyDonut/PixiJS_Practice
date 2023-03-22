let app;

import {createBasicText} from './components/text.js'
import preloader from './components/preloader.js'

// load the pixi.js app
window.onload = async function() {
    app = new PIXI.Application(
        {
            width: window.innerWidth, // possibly change this to height of the app
            height: window.innerHeight,
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

    let assets = await preloader.load();
    console.log(assets.logo)
    const logo = new PIXI.Sprite(assets.logo);;

    logo.anchor.set(0.5);
    // move the sprite to the center of the screen
    logo.x = app.screen.width / 2;
    logo.y = app.screen.height / 2;

    app.stage.addChild(logo)

}