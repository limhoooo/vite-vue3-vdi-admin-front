<template>
  <div class="marginTop20">
    <p class="font20 inline">6. 파일 존재 여부 검사 및 설정</p>
    <div class="checkBox inline v31ckDiv">
      <input type="checkbox" id="ex_rd6" name="" v-model="isCheck" @click="isCheckFnc" />
      <label for="ex_rd6"> <span></span></label>
    </div>
  </div>
  <div v-if="isCheck">
    <button type="" class="tdAddBtn" name="tdAddBtn_6" @click="addList">추가</button>
    <table class="table_02 table_03 v31Tbale">
      <tr>
        <th>파일명</th>
        <th>경로</th>
        <th>점검실패시안내문구</th>
        <th>설정</th>
        <th>삭제</th>
      </tr>
      <tbody>
        <tr name="trStaff_6" v-for="(item, index) in fileExistenceData" :key="item">
          <td><input type="text" class="textInput wid240" v-model="item.파일명" /></td>
          <td><input type="text" class="textInput wid390" v-model="item.경로" /></td>
          <td>
            <input type="text" class="textInput wid480 hei75" v-model="item.점검실패시안내문구" />
          </td>
          <td>
            <select class="select_02 select_04 select_240" v-model="item.설정">
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
    const fileExistenceData = computed({
      get: () => store.FILE_EXISTENCE_DATA,
      set: value => (store.FILE_EXISTENCE_DATA = value),
    });
    const isCheck = ref(true);
    const addList = () => {
      const listData = _.cloneDeep(store.FILE_EXISTENCE_DATA_ORIGIN);
      listData[0].삭제 = true;
      fileExistenceData.value.push(listData[0]);
    };
    const removeList = index => {
      fileExistenceData.value.splice(index, 1);
    };
    const isCheckFnc = () => {
      fileExistenceData.value = _.cloneDeep(store.FILE_EXISTENCE_DATA_ORIGIN);
    };
    return { fileExistenceData, isCheck, addList, removeList, isCheckFnc };
  },
});
</script>

<style scoped></style>
