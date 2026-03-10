class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    preload() {
        // Add loading text to center of the screen
        let loadingText = this.add.text(centerX, centerY, 'Loading...', {fontFamily: 'Courier', fontSize: '28px', color: '#FFFFFF'}).setOrigin(0.5);
        this.load.path = './assets/';
        this.load.image('background', 'background.jpg');

    }
        
    create() {

        this.sound.stopAll();

        this.background = this.add.tileSprite(0, 0, 2160, 1620, 'background').setOrigin(0, 0).setScale(0.5);

    }


    update() {
        
    }

}