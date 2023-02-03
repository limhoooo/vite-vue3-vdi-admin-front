<template>
  <div class="content">
    <AdminMenuFilter />
    <AdminMenuList />
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    AdminMenuFilter: defineAsyncComponent(() => import('./AdminMenuFilter.vue')),
    AdminMenuList: defineAsyncComponent(() => import('./AdminMenuList.vue')),
  },
  setup() {},
});
</script>

<style scoped></style>
