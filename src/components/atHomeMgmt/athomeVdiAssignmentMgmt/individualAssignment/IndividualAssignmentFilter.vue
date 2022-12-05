<template>
  <ul class="inputList">
    <li>
      <div class="listBox">
        <p class="listName">일자선택</p>
        <AppSelectField
          class="select_01"
          :select-items="code.dateSelectItems"
          v-model:selected-value="filterData.일자선택"
          empty-title="전체"
        >
        </AppSelectField>

        <input type="date" class="dateInput left30" v-model="filterData.일자_F" />
        <span class="a2a4be">-</span>
        <input type="date" class="dateInput" v-model="filterData.일자_B" />
        <p class="listName left30">할당상태</p>
        <AppSelectField
          class="select_01"
          :select-items="code.assignmentStatuses"
          v-model:selected-value="filterData.할당상태"
          empty-title="전체"
        >
        </AppSelectField>
      </div>
    </li>
    <li>
      <div class="listBox">
        <p class="listName">검색키워드</p>
        <select class="select_01" v-model="filterData.검색키워드">
          <option value="">전체</option>
          <option value="재택용VDI명">재택용VDI명</option>
          <option value="사번">사번</option>
          <option value="이름">이름</option>
          <option value="소속">소속</option>
        </select>
        <input type="search" class="textInput wih500 left30" v-model="filterData.검색내용" />
      </div>
    </li>
  </ul>

  <div class="btnBox">
    <button type="" @click="getList" class="blueBtn">검색</button>
    <button type="" @click="filterReset" class="grayBtn">초기화</button>
  </div>
</template>
<script>
import { computed, defineAsyncComponent, defineComponent } from 'vue';
import { IndividualAssignmentStore } from '@/stores/atHomeMgmt/IndividualAssignmentStore.js';
import { useCodeItemsStore } from '@/stores/codeStore';
import { useGrid } from '@/composables/grid';
import _ from 'lodash';

export default defineComponent({
  components: {
    AppSelectField: defineAsyncComponent(() => import('@/components/app/AppSelectField.vue')),
  },
  setup() {
    const store = IndividualAssignmentStore();
    const { filterData, filterReset, getList } = useGrid(store);
    const { code, GET_DATE_SELECT, GET_ASSIGNMENT_STATUSES } = useCodeItemsStore();
    GET_DATE_SELECT();
    GET_ASSIGNMENT_STATUSES();
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
