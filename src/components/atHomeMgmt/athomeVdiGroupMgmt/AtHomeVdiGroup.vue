<template>
  <div class="content">
    <TheContentHeader />
    <div class="group_top ta_r mgt30px">
      <a href="#" class="re">새로고침</a>
    </div>
    <div class="mgb40px"></div>
    <AtHomeVdiGroupBox />
    <AtHomeVdiGroupList />
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
    AtHomeVdiGroupBox: defineAsyncComponent(() => import('./AtHomeVdiGroupBox.vue')),
    AtHomeVdiGroupList: defineAsyncComponent(() => import('./AtHomeVdiGroupList.vue')),
  },
  setup() {},
});
</script>
<style scoped></style>
