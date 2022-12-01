<template>
  <div style="text-align: center">
    <button class="gridBtn" @click="clickBtn">{{ props.params.btnText }}</button>
  </div>
</template>

<script setup>
const props = defineProps({
  params: {
    type: Object,
    data: {
      type: Object,
    },
    value: {
      type: String,
    },
    btnText: {
      type: String,
    },
  },
});

const clickBtn = () => {
  props.params.onClick(props.params.data);
};
</script>

<script>
export default {
  name: 'AppGridBtn',
};
</script>
<style>
.gridBtn {
  background: #d6d6e6;
  color: #1e1e2e;
  font-size: 16px;
  font-family: 'GothicA1-Medium';
  border-radius: 5px;
  padding: 5px 10px;
}
</style>
