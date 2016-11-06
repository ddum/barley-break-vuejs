<template>
  <div id="app" class="bb demo-card-square mdl-card mdl-shadow--2dp" v-on:keyup.up="handleUp">
    <div class="mdl-card__title mdl-color--indigo">
      <h1 class="mdl-card__title-text mdl-color-text--white">{{ title }}</h1>
    </div>
    <div class="mdl-card__supporting-text">
      <template v-for="cell_row in game.map">
        <cell v-for="cell in cell_row" :number="cell"></cell>
      </template>
      <status v-show="checkEndGame()"></status>
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <restart-button v-on:restart="restartGame"></restart-button>
      <steps :step="step"></steps>
    </div>
    <div class="mdl-card__menu">
      <github-button></github-button>
    </div>
  </div>
</template>

<script>
import GitHubButton  from './components/GitHubButton'
import RestartButton from './components/RestartButton'
import BbSteps       from './components/BbSteps'
import BbCell        from './components/BbCell'
import BbStatus      from './components/BbStatus'

export default {
  name: 'app',
  components: {
    'github-button' : GitHubButton,
    'restart-button': RestartButton,
    'steps'         : BbSteps,
    'cell'          : BbCell,
    'status'        : BbStatus
  },
  data () {
    return {
      title: 'Barley-Break',
      arr_key: {
        37: 'KEY_LEFT',
        38: 'KEY_UP',
        39: 'KEY_RIGHT',
        40: 'KEY_DOWN'
      },
      step : 10,
      game : {
        map  : [],
        xNull: 3,
        yNull: 3
      }
    }
  },
  beforeMount: function () {
    document.addEventListener("keyup", this.handleKeyUp);
    this.restartGame();
  },
  beforeDestroy: function () {
    document.removeEventListener("keyup", this.handleKeyUp);
  },
  methods: {
    restartGame: function () {
      this.step = 0;

      let bufArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
      bufArr = _.shuffle(bufArr);
      bufArr.push(0);
      this.game = {
        map  : _.chunk(bufArr, 4),
        xNull: 3,
        yNull: 3
      }
    },
    checkEndGame: function () {
      let bufArr = this.game.map[0].concat(this.game.map[1], this.game.map[2], this.game.map[3]);
      bufArr.splice(15, 1);
      return bufArr.every((element, index) => element == ++index);
    },
    handleKeyUp: function (e) {
      e.preventDefault();
      let idKey = e.which;
      if(typeof this.arr_key[idKey] != 'undefined'){
        this.step += 1;
        let key = this.arr_key[idKey];

        if(key == 'KEY_UP' && this.game.yNull != 3) { // стрелка вверх
          this.game.map[this.game.yNull][this.game.xNull] = this.game.map[++this.game.yNull][this.game.xNull];
        }else if(key == 'KEY_DOWN' && this.game.yNull !== 0){ // стрелка вниз
          this.game.map[this.game.yNull][this.game.xNull] = this.game.map[--this.game.yNull][this.game.xNull];
        }else if(key == 'KEY_LEFT' && this.game.xNull != 3){ // стрелка <-
          this.game.map[this.game.yNull][this.game.xNull] = this.game.map[this.game.yNull][++this.game.xNull];
        }else if(key == 'KEY_RIGHT' && this.game.xNull !== 0){ // стрелка ->
          this.game.map[this.game.yNull][this.game.xNull] = this.game.map[this.game.yNull][--this.game.xNull];
        }
        this.game.map[this.game.yNull][this.game.xNull] = 0;
      }
    }
  }
}
</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .bb{
    width: 384px;
    height: 500px;
    margin: 100px auto;
  }
  .mdl-card__actions{
    height: 64px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 8px 23px;
  }
  .mdl-card__supporting-text{
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    min-height: 375px;
    display: flex;
    flex-flow: row wrap;
  	position: relative;
  }
</style>
