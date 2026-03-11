class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    preload() {
        // Add loading text to center of the screen
        let loadingText = this.add.text(centerX, centerY, 'Loading...', {fontFamily: 'Courier', fontSize: '28px', color: '#FFFFFF'}).setOrigin(0.5);
        this.load.path = './assets/';
        this.load.image('background', 'background.jpg');
        this.load.image('player', 'charBall1.png');
    }
        
    create() {

        this.sound.stopAll();

        this.background = this.add.tileSprite(0, 0, 2160, 1620, 'background').setOrigin(0, 0).setScale(0.5);
        this.image = new Player(this, centerX, centerY, 'player', 0);

        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    }


    update() {
        this.image.update();
    }

}