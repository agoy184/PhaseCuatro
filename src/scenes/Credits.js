class Credits extends Phaser.Scene {
    constructor() {
        super('creditScene');
    }

    create() {
        let menuConfig = {
            fontFamily: 'Verdana',
            fontSize: '28px',
            backgroundColor: '#303030',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
 
        let smallConfig = {
            fontFamily: 'Verdana',
            fontSize: '27px',
            backgroundColor: '#303030',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // menu text
        this.add.text(game.config.width/2, game.config.height/29, 'Credits', menuConfig).setOrigin(0.5).setFontFamily('Belanosima').setFontSize(39);
        this.add.text(game.config.width/2, 2*game.config.height/19, 'Game Engine: Phaser 4.0.0', smallConfig).setOrigin(0.5).setColor('#F1EA2B');

        this.add.text(game.config.width/3.5, 3.25*game.config.height/9, 'Abel Goy: Design/Programming/Production', smallConfig).setWordWrapWidth(game.config.width / 1.5).setColor('#EA2B2B').setAlign('center').setOrigin(0.5);

        // Escape button

        let escapeButton = new Button(game.config.width/2, 8.7*game.config.height/9, 'RETURN TO MENU', this, () => {
            this.scene.start('titleScene');
        });
        escapeButton.whiteButton();
        escapeButton.button.setFontSize(30);

        this.sound.stopAll();


    }

}