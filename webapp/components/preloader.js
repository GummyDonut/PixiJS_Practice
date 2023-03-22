
import manifestContent from '../config/assetManifest.js'
/**
 * This class is dedicated to preloading 
 * all our assets into the application for reference.
 * In the future it may be useful to load on a per container basis
 */
let loader = {
    /**
     * The app and load into the application
     * @param {Pixi.Application} app 
     */
    async load() {
        
        // this can be moved to a local json file
        await PIXI.Assets.init({ manifest: manifestContent });
        
        const assets = await PIXI.Assets.loadBundle('load-screen', this.onprogress);
        
        return assets;
    },

    /**
     * The 
     * @param {Number} progress number 
     */
    onprogress(progress) {
        console.log('This is the progress of loading:' + progress)
    }
}

export default loader