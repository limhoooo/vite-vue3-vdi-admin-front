<template>
  <label class="onoff">
    <input type="checkbox" @change="changed($event.target)" :checked="params.value" />
    <span class="slider round"></span>
  </label>
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
  },
});
const changed = target => {
  if (!confirm('변경하시겠습니까?')) {
    target.checked = !target.checked;
    return false;
  }
  props.params.onChanged(props.params.data, target.checked);
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
