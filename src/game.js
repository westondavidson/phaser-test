

var gamejs = {

game: {

        type: Phaser.AUTO,
        physics: {
          default: 'arcade',
          arcade: {
            gravity: {
              y: 300
            },
            debug: false
          }
        },
        scale: {
          parent: 'app',
          mode: Phaser.Scale.FIT,
          width: 800,
          height: 600
        },
        scene: {
          init() {


          },
          preload() {
            //loading assets
            this.load.image('sky', require('../assets/sky.png'));
            this.load.image('ground', require('../assets/platform.png'));
            this.load.image('star', require('../assets/star.png'));
            this.load.image('bomb', require('../assets/bomb.png'));
            this.load.spritesheet('dude',
              require('../assets/dude.png'), {
                frameWidth: 32,
                frameHeight: 48
              }
            );

          },
          create() {


            //Game platforms
            this.add.image(400, 300, 'sky');

            var platforms = this.physics.add.staticGroup();
            platforms.create(400, 568, 'ground').setScale(2).refreshBody();

            platforms.create(600, 400, 'ground');
            platforms.create(50, 250, 'ground');
            platforms.create(750, 220, 'ground');

            //player character
            var player = this.physics.add.sprite(100, 450, 'dude');

                  //player character properties
            player.setBounce(0.2);
            player.setCollideWorldBounds(true);
            player.body.setGravityY(300);

                  //player character animations
            this.anims.create({
              key: 'left',
              frames: this.anims.generateFrameNumbers('dude', {
                start: 0,
                end: 3
              }),
              frameRate: 10,
              repeat: -1
            });

            this.anims.create({
              key: 'turn',
              frames: [{
                key: 'dude',
                frame: 4
              }],
              frameRate: 20
            });

            this.anims.create({
              key: 'right',
              frames: this.anims.generateFrameNumbers('dude', {
                start: 5,
                end: 8
              }),
              frameRate: 10,
              repeat: -1
            });

                //player character collisions
            this.physics.add.collider(player, platforms);





          },
          update() {


          }
        }
      }
    };
  },
  methods: {
    initializeGame() {
      this.initialize = true;
    }
  },
  mounted: function() {
    this.initializeGame()
  }
};
}
