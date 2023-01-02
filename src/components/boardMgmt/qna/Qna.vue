<template>
  <div class="content">
    <QnaFilter />
    <QnaList />
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    QnaFilter: defineAsyncComponent(() => import('./QnaFilter.vue')),
    QnaList: defineAsyncComponent(() => import('./QnaList.vue')),
  },
  setup() {},
});
</script>

<style scoped></style>
