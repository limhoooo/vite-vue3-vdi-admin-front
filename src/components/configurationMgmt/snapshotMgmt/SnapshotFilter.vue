<template>
  <TheContentHeader></TheContentHeader>
  <ul class="inputList">
    <li>
      <div class="listBox">
        <p class="listName">Cloud 플랫폼 선택</p>
        <AppSelectField
          class="select_01"
          :select-items="code.cloudPlatformItems"
          v-model:selected-value="filterData.Cloud플랫폼선택"
        >
        </AppSelectField>
      </div>
    </li>
    <li>
      <div class="listBox">
        <div class="listBox">
          <input type="search" class="textInput wih300" v-model="filterData.검색어" />
          <button class="grayBtn graySearch" @click="getList">검색</button>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
import { defineAsyncComponent, defineComponent } from 'vue';
import { snapshotStore } from '@/stores/configurationMgmt/snapshotStore';
import { useCodeItemsStore } from '@/stores/codeStore';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
    AppSelectField: defineAsyncComponent(() => import('@/components/app/AppSelectField.vue')),
  },
  setup() {
    const store = snapshotStore();
    const { filterData, filterReset, getList } = useGrid(store);
    const { code, GET_CLOUD_PLATFORM_TYPES } = useCodeItemsStore();
    GET_CLOUD_PLATFORM_TYPES();
    return {
      getList,
      filterReset,
      filterData,
      code,
    };
  },
});
</script>

<style scoped></style>
