<template>
  <div v-if="params.order === 'asc'">
    {{ params.page.size * params.page.number + 1 + params.node.rowIndex }}
  </div>
  <div v-else>
    {{ params.page.totalElements - params.page.size * params.page.number - params.node.rowIndex }}
  </div>
  <!--  <div>{{ params }}</div>-->
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
</script>

<script>
export default {
  name: 'AppGridBtn',
};
</script>
