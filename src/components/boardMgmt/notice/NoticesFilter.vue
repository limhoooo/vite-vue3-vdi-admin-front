<template>
  <TheContentHeader></TheContentHeader>
  <ul class="inputList">
    <li>
      <div class="listBox">
        <input type="date" class="dateInput width200" v-model="filterData.시작일자" />
        <span class="a2a4be">-</span>
        <input type="date" class="dateInput width200" v-model="filterData.종료일자" />
      </div>
      <div class="listBox left30">
        <select class="select_01 select_04" v-model="filterData.검색조건">
          <option value="">전체</option>
          <option value="제목">제목</option>
          <option value="작성자">작성자</option>
        </select>
        <input type="secrch" class="textInput300" v-model="filterData.검색어" />
        <button class="grayBtn graySearch" @click="getList">검색</button>
      </div>
    </li>
  </ul>
</template>
<script>
import { computed, defineAsyncComponent, defineComponent } from 'vue';
import { noticeStore } from '@/stores/boardMgmt/noticeStore.js';
import { useRouter } from 'vue-router';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
  },
  setup() {
    const store = noticeStore();
    const router = useRouter();
    const { filterData, getList } = useGrid(store);

    const moveWrite = () => {
      router.push({ name: 'NoticeWrite' });
    };
    return {
      filterData,
      getList,
      moveWrite,
    };
  },
});
</script>
<style scoped></style>
