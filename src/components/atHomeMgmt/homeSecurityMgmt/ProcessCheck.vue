<template>
  <div class="marginTop20">
    <p class="font20 inline">8. 프로세스 실행환경 검사 및 설정</p>
    <div class="checkBox inline v31ckDiv">
      <input type="checkbox" id="ex_rd8" name="" v-model="isCheck" @click="isCheckFnc" />
      <label for="ex_rd8"> <span></span></label>
    </div>
  </div>
  <div v-if="isCheck">
    <button type="" class="tdAddBtn ex_rd_btn8" name="tdAddBtn_8" @click="addList">추가</button>
    <table class="table_02 table_03 v31Tbale">
      <tr>
        <th>파일명</th>
        <th>파일경로</th>
        <th>설치경로</th>
        <th>실행금지 프로세스 발견 시 안내문구</th>
        <th>설정</th>
        <th>삭제</th>
      </tr>
      <tbody>
        <tr name="trStaff_8" v-for="(item, index) in processCheckData" :key="item">
          <td><input type="text" class="textInput wid170 ex_rd_form8" v-model="item.파일명" /></td>
          <td>
            <input type="text" class="textInput wid320 ex_rd_form8" v-model="item.파일경로" />
          </td>
          <td>
            <input type="text" class="textInput wid320 ex_rd_form8" v-model="item.설치경로" />
          </td>
          <td>
            <input
              type="text"
              class="textInput wid360 hei75 ex_rd_form8"
              v-model="item.실행금지프로세스발견시안내문구"
            />
          </td>
          <td>
            <select class="select_02 select_04 select_240 ex_rd_form8" v-model="item.설정">
              <option value="해당파일삭제">해당파일삭제</option>
            </select>
          </td>
          <td>
            <button
              v-if="item.삭제"
              type=""
              @click="removeList(index)"
              class="tdRemoveBtn"
              name="delStaff"
            ></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { computed, defineComponent, ref } from 'vue';
import { homeSecurityStore } from '@/stores/atHomeMgmt/homeSecurityStore';
import _ from 'lodash';
export default defineComponent({
  setup() {
    const store = homeSecurityStore();
    const processCheckData = computed({
      get: () => store.PROCESS_CHECK_DATA,
      set: value => (store.PROCESS_CHECK_DATA = value),
    });
    const isCheck = ref(true);
    const addList = () => {
      const listData = _.cloneDeep(store.PROCESS_CHECK_DATA_ORIGIN);
      listData[0].삭제 = true;
      processCheckData.value.push(listData[0]);
    };
    const removeList = index => {
      processCheckData.value.splice(index, 1);
    };
    const isCheckFnc = () => {
      processCheckData.value = _.cloneDeep(store.PROCESS_CHECK_DATA_ORIGIN);
    };
    return { processCheckData, isCheck, addList, removeList, isCheckFnc };
  },
});
</script>

<style scoped></style>
