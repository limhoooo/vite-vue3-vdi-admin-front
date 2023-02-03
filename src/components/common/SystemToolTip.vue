<template>
  <div class="set_in">
    <ul class="txtR">
      <li @click="pauseFnc()">Pause</li>
      <li @click="shutdownFnc()">Shutdown</li>
      <li @click="stopFnc()">Stop</li>
      <li @click="rebootFnc()">Reboot</li>
    </ul>
    <ul class="txtR">
      <li @click="snapshotFnc()">스냅샷</li>
      <li @click="initFnc()">초기화</li>
      <li @click="backupFnc()">백업</li>
      <li @click="modifyFnc()">변경</li>
    </ul>
    <span class="exitBtn" @click="stopEditing()">x</span>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  // 공통 store 만들어야함
  setup(props) {
    const cellId = ref(props.params.data.id);
    const stopEditing = () => {
      props.params.stopEditing();
    };
    const pauseFnc = () => {
      console.log(cellId.value);
      props.params.stopEditing();
    };
    const shutdownFnc = () => {
      console.log(cellId.value);
      props.params.stopEditing();
    };
    const stopFnc = () => {
      console.log(cellId.value);
      props.params.stopEditing();
    };
    const rebootFnc = () => {
      console.log(cellId.value);
      props.params.stopEditing();
    };
    const snapshotFnc = () => {
      console.log(cellId.value);
      props.params.stopEditing();
    };
    const initFnc = () => {
      console.log(cellId.value);
      props.params.stopEditing();
    };
    const backupFnc = () => {
      console.log(cellId.value);
      props.params.stopEditing();
    };
    const modifyFnc = () => {
      console.log(cellId.value);
      props.params.stopEditing();
    };
    return {
      stopEditing,
      pauseFnc,
      shutdownFnc,
      stopFnc,
      rebootFnc,
      snapshotFnc,
      initFnc,
      backupFnc,
      modifyFnc,
    };
  },
});
</script>
<style scope>
.exitBtn {
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
}
</style>
