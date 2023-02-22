<template>
  <div class="content">
    <MasterImageFilter />
    <MasterImageList />
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    MasterImageFilter: defineAsyncComponent(() => import('./MasterImageFilter.vue')),
    MasterImageList: defineAsyncComponent(() => import('./MasterImageList.vue')),
  },
  setup() {},
});
</script>
<style scoped></style>
