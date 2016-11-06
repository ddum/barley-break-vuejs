<template>
  <span class="bb__steps">{{step}}</span>
</template>

<script>
export default {
  props: ['step'],
  name: 'steps'
}
</script>

<style>
.bb__steps{
  text-align: right;
  font-size: 30px;
  color: #2A2F3A;
  width: 100%;
}
</style>
