<template>
  <div class="marginTop20">
    <p class="font20 inline">5. 백신 프로그램 설정</p>
    <div class="checkBox inline v31ckDiv">
      <input type="checkbox" id="ex_rd5" name="" v-model="isCheck" @click="isCheckFnc" />
      <label for="ex_rd5"> <span></span></label>
    </div>
  </div>
  <div v-if="isCheck">
    <button type="" class="tdAddBtn" name="tdAddBtn_5" @click="addList">추가</button>
    <table class="table_02 table_03 v31Tbale">
      <thead>
        <tr>
          <th>백신명</th>
          <th>실행파일경로</th>
          <th>실행파일명</th>
          <th>설치경로</th>
          <th>다운파일명</th>
          <th>다운URL</th>
          <th>실행여부</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        <tr name="trStaff_5" v-for="(item, index) in vaccineProgramData" :key="item">
          <td><input type="text" class="textInput wid120" v-model="item.백신명" /></td>
          <td><input type="text" class="textInput wid240" v-model="item.실행파일경로" /></td>
          <td><input type="text" class="textInput wid200" v-model="item.실행파일명" /></td>
          <td><input type="text" class="textInput wid240" v-model="item.설치경로" /></td>
          <td><input type="text" class="textInput wid120" v-model="item.다운파일명" /></td>
          <td><input type="text" class="textInput wid240" v-model="item.다운URL" /></td>
          <td>
            <select class="select_02 select_04" v-model="item.실행여부">
              <option value="실행및">실행 및</option>
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
    const vaccineProgramData = computed({
      get: () => store.VACCINE_PROGRAM_DATA,
      set: value => (store.VACCINE_PROGRAM_DATA = value),
    });
    const isCheck = ref(true);
    const addList = () => {
      const listData = _.cloneDeep(store.VACCINE_PROGRAM_DATA_ORIGIN);
      listData[0].삭제 = true;
      vaccineProgramData.value.push(listData[0]);
    };
    const removeList = index => {
      vaccineProgramData.value.splice(index, 1);
    };
    const isCheckFnc = () => {
      vaccineProgramData.value = _.cloneDeep(store.VACCINE_PROGRAM_DATA_ORIGIN);
    };
    return { vaccineProgramData, isCheck, addList, removeList, isCheckFnc };
  },
});
</script>

<style scoped></style>
