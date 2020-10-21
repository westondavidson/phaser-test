<template>
<!-- what's happening here:

  -->
<div class='hello'>
  <ion-phaser v-bind:game.prop='game' v-bind:initialize.prop='initialize' />
</div>
</template>


<script>
import Phaser from "phaser";
import gamejs from '@/game.js';
gamejs;
</script>
