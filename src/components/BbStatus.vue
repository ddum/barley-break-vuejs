<template>
  <div class="mdl-dialog__overlay">
    <dialog class="mdl-dialog bb__status">
      <span>GAME OVER</span>
    </dialog>
  </div>
</template>

<script>
export default {
  name: 'status'
}
</script>

<style>
.bb__status{
	font-size: 30px;
	text-align: center;
}
.mdl-dialog__overlay{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, .2);
}
.mdl-dialog.bb__status{
	display: block;
	top: 150px;
	width: 200px;
}
</style>
