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
          mode: Phaser.Scale.FIT
        },
        scene: {
          init() {
            this.cameras.main.setBackgroundColor("#24252A");
          },
          create() {
            this.helloWorld = this.add.text(
              this.cameras.main.centerX,
              this.cameras.main.centerY,
              "Hello World",
              { font: "40px Arial",  fill: "#ffffff" }
            );
            this.helloWorld.setOrigin(0.5);

          },
          update() {
            this.helloWorld.angle += 1;
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
