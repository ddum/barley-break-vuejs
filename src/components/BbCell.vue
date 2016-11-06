<template>
  <div v-bind:class="{ 'bb__cell': true, 'bb__cell_empty': !+number}">{{ number }}</div>
</template>

<script>
export default {
  name: 'cell',
  props: ['number']
}
</script>

<style>
.bb__cell{
  width: 80px;
  height: 80px;
  margin: 3px;
  background: #2A2F3A;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 50px;
  border-radius: 4px;
}

.bb__cell_empty{
  background: none;
}
</style>
