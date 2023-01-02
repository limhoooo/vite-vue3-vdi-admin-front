<template>
  <TheContentHeader></TheContentHeader>
  <ul class="inputList">
    <li>
      <div class="listBox">
        <input type="date" class="dateInput width200" v-model="filterData.등록일자F" />
        <span class="a2a4be">-</span>
        <input type="date" class="dateInput width200" v-model="filterData.등록일자B" />
      </div>
      <div class="listBox left30">
        <select class="select_01 select_04" v-model="filterData.검색조건">
          <option value="">전체</option>
          <option value="답변전">답변전</option>
          <option value="답변완료">답변완료</option>
        </select>
        <input type="secrch" class="textInput300" v-model="filterData.검색어" />
        <button class="grayBtn graySearch" @click="getList">검색</button>
      </div>
    </li>
  </ul>
</template>
<script>
import { computed, defineAsyncComponent, defineComponent } from 'vue';
import { qnaStore } from '@/stores/boardMgmt/qnaStore.js';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
  },
  setup() {
    const store = qnaStore();
    const { filterData, getList } = useGrid(store);

    return {
      filterData,
      getList,
    };
  },
});
</script>
<style scoped></style>
