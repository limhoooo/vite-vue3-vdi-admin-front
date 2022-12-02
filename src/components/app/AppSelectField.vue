<template>
  <select v-model="selected" required>
    <option value="">{{ emptyTitle || '선택' }}</option>
    <option v-for="(item, index) in selectItems" :key="index" :value="item.key">
      {{ item.value }}
    </option>
  </select>
</template>
<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  selectItems: Array,
  selectedValue: String,
  emptyTitle: String,
});
const selected = computed({
  get: () => props.selectedValue,
  set: value => emits('update:selectedValue', value),
});
const emits = defineEmits(['update:selectedValue']);
// const select = () => {
//   emits('update:selectedValue', selected.value);
// };
</script>
<script>
export default {
  name: 'AppSelectField',
};
</script>
