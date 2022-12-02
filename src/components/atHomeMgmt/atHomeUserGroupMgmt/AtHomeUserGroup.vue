<template>
  <div class="content">
    <TheContentHeader />
    <div class="group_top ta_r mgt30px">
      <a href="#" class="re">새로고침</a>
    </div>
    <div class="mgb40px"></div>
    <AtHomeUserGroupBox />
    <AtHomeUserGroupList />
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
    AtHomeUserGroupBox: defineAsyncComponent(() => import('./AtHomeUserGroupBox.vue')),
    AtHomeUserGroupList: defineAsyncComponent(() => import('./AtHomeUserGroupList.vue')),
  },
  setup() {},
});
</script>
<style scoped></style>
