let globalGameLoop = {
    
    /**
     * 
     * @param {Sprite} logo 
     */
    init(logo, callback) {
        this.logo = logo;
        this.callback = callback;
        setTimeout(callback, 5000)
    },

    // main run function for the global game loop
    run() {

        let randoKill = this.getRandomInt(10);

        let deltaX = this.getRandomInt(3);
        let deltaY = this.getRandomInt(3);

        let plusX = this.getRandomInt(2) == 1 ? -1 : 1;
        let plusY = this.getRandomInt(2) == 1 ? -1 : 1;

        this.logo.x += plusX * deltaX;
        this.logo.y += plusY * deltaY;

        
        
    },

    // get random int between 0 and max
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}

export default globalGameLoop;