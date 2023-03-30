let app;

import {CustomText} from './components/text.js'
import preloader from './components/preloader.js'
import globalGameLoop from './components/globalGameLoop.js';


// load the pixi.js app
window.onload = async function() {
    app = new PIXI.Application(
        {
            // resizeTo: window, // https://coderevue.net/posts/scale-to-fit-screen-pixijs/
            // autoDensity: true, // Handles high DPI screens
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: 0xAAAAAA
        }
    )

    // append the canvas
    let gameDiv = document.querySelector("#gameDiv");

    gameDiv.appendChild(app.view)

    // Add custom cursor styles
    app.renderer.events.cursorStyles.default = "crosshair";
    app.renderer.events.cursorStyles.hover = "grab";

    let customTextInstance  = new CustomText("Basic test in pixi", {
        x: 200,
        y: 100
    })

    app.stage.addChild(customTextInstance.basicText);

    let assets = await preloader.load();
    console.log(assets.logo)
    const logo = new PIXI.Sprite(assets.logo);;

    logo.anchor.set(0.5);
    // move the sprite to the center of the screen
    logo.x = app.screen.width / 2;
    logo.y = app.screen.height / 2;

    app.stage.addChild(logo)

    // Only one instance, treat it as a singleton.
    globalGameLoop.init(logo, () => {
        customTextInstance.changeText("The logo disappeared")
        app.stage.removeChild(logo)
    })

    // global game loop that updates at 60fps
    // the run's reference to this changes so we have to unbind
    app.ticker.add(globalGameLoop.run.bind(globalGameLoop))

}