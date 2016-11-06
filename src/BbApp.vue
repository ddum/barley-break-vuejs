<template>
  <div id="app" class="bb demo-card-square mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-color--indigo">
      <h1 class="mdl-card__title-text mdl-color-text--white">{{ title }}</h1>
    </div>
    <div class="mdl-card__supporting-text">
      <cell number="2"></cell>
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <restart-button></restart-button>
      <steps step="0"></steps>
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
import BbCell       from './components/BbCell'

export default {
  name: 'app',
  components: {
    'github-button': GitHubButton,
    'restart-button': RestartButton,
    'steps': BbSteps,
    'cell': BbCell,
  },
  data () {
    return {
      title: 'Barley-Break'
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
</style>
