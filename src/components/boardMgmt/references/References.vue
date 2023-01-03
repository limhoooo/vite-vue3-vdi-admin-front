<template>
  <ReferencesFilter />
  <ReferencesList />
</template>
<script>
import { defineAsyncComponent, defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    ReferencesFilter: defineAsyncComponent(() => import('./ReferencesFilter.vue')),
    ReferencesList: defineAsyncComponent(() => import('./ReferencesList.vue')),
  },
  setup() {},
});
</script>

<style scoped></style>
