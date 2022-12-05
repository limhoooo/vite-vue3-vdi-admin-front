<template>
  <IndividualAssignmentFilter />
  <IndividualAssignmentList />
</template>
<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    IndividualAssignmentFilter: defineAsyncComponent(() =>
      import('./IndividualAssignmentFilter.vue'),
    ),
    IndividualAssignmentList: defineAsyncComponent(() => import('./IndividualAssignmentList.vue')),
  },
  setup() {},
});
</script>

<style scoped></style>
