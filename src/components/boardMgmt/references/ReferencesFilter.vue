<template>
  <div class="content">
    <TheContentHeader></TheContentHeader>
    <ul class="inputList">
      <li>
        <div class="listBox">
          <p class="listName">등록일자</p>
          <input type="date" class="dateInput" v-model="filterData.등록일자F" />
          <span class="a2a4be">-</span>
          <input type="date" class="dateInput" v-model="filterData.등록일자F" />
        </div>
        <p class="listName left30">게시글 구분</p>
        <select class="select_01" v-model="filterData.게시글구분">
          <option value="전체">전체</option>
          <option value="다운로드">다운로드</option>
          <option value="사용자메뉴얼">사용자 메뉴얼</option>
        </select>
      </li>
      <li>
        <div class="listBox">
          <p class="listName">검색키워드</p>
          <select class="select_01" v-model="filterData.검색조건">
            <option value="전체">전체</option>
            <option value="작성자">작성자</option>
            <option value="제목">제목</option>
          </select>
          <input type="search" class="textInput wih500" v-model="filterData.검색어" />
        </div>
      </li>
    </ul>

    <div class="btnBox">
      <button type="" @click="getList" class="blueBtn">검색</button>
      <button type="" @click="filterReset" class="grayBtn">초기화</button>
    </div>
  </div>
</template>
<script>
import { computed, defineAsyncComponent, defineComponent, ref } from 'vue';
import { referencesStore } from '@/stores/boardMgmt/referencesStore.js';
import { useGrid } from '@/composables/grid';

import _ from 'lodash';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
  },
  setup() {
    const store = referencesStore();
    const { filterData, filterReset, getList } = useGrid(store);

    return {
      getList,
      filterReset,
      filterData,
    };
  },
});
</script>

<style scoped></style>
