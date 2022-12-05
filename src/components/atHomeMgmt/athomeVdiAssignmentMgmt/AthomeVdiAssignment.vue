<template>
  <div class="content mainTaps">
    <TheContentHeader />
    <ul class="tabs">
      <li class="tab-link" :class="{ current: active === 'group' }" @click="activeFnc('group')">
        그룹 할당
      </li>
      <li
        class="tab-link"
        :class="{ current: active === 'individual' }"
        @click="activeFnc('individual')"
      >
        개별 할당
      </li>
    </ul>
    <GroupAssignment v-if="active === 'group'" />
    <IndividualAssignment v-if="active === 'individual'" />
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
    IndividualAssignment: defineAsyncComponent(() =>
      import('./individualAssignment/IndividualAssignment.vue'),
    ),
    GroupAssignment: defineAsyncComponent(() => import('./groupAssignment/GroupAssignment.vue')),
  },
  setup() {
    const active = ref('group');
    const activeFnc = name => {
      active.value = name;
    };
    return {
      active,
      activeFnc,
    };
  },
});
</script>

<style scoped></style>
