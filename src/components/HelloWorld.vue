<template>
  <!-- what's happening here:

  -->
  <div class='hello'>
      <ion-phaser
        v-bind:game.prop='game'
        v-bind:initialize.prop='initialize'
        />
      </div>

</template>


<script>
import Phaser from "phaser";

export default {
  data() {
    return {
      initialize: false,
      game: {
        type: Phaser.AUTO,
        scale: {
          parent: 'app',
          mode: Phaser.Scale.FIT,
          width: 800,
          height: 600
        },
        scene: {
          init() {

          },
          preload(){
            this.load.image('sky', require('../assets/sky.png'));
              this.load.image('ground', require('../assets/platform.png'));
              this.load.image('star', require('../assets/star.png'));
              this.load.image('bomb', require('../assets/bomb.png'));
              this.load.spritesheet('dude',
              require('../assets/dude.png'),
              { frameWidth: 32, frameHeight: 48 }
              );

          },
          create() {
            this.add.image(400, 300, 'sky');
            this.add.image(400, 300, 'star');

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
  mounted: function(){
    this.initializeGame()
  }
};
</script>
