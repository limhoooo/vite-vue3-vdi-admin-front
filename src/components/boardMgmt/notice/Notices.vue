<template>
  <div class="content">
    <NoticeFilter />
    <NoticeList />
  </div>
</template>
<script>
import { computed, defineAsyncComponent, defineComponent } from 'vue';
export default defineComponent({
  components: {
    NoticeFilter: defineAsyncComponent(() => import('./NoticesFilter.vue')),
    NoticeList: defineAsyncComponent(() => import('./NoticesList.vue')),
  },
  setup() {},
});
</script>
<style scoped></style>
