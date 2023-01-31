<template>
  <div class="content mainTaps">
    <SystemCodeSmallFilter />
    <SystemCodeSmallList />
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent } from 'vue';
import { systemCodeStore } from '@/stores/codeMgmt/systemCodeStore.js';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: {
    SystemCodeSmallFilter: defineAsyncComponent(() => import('./SystemCodeSmallFilter.vue')),
    SystemCodeSmallList: defineAsyncComponent(() => import('./SystemCodeSmallList.vue')),
  },
  setup() {},
});
</script>

<style scoped></style>
