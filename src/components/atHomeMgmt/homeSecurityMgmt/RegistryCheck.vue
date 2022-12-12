<template>
  <div class="marginTop20">
    <p class="font20 inline">7. 레지스트리 환경 검사 및 설정</p>
    <div class="checkBox inline v31ckDiv">
      <input type="checkbox" id="ex_rd7" name="" v-model="isCheck" @click="isCheckFnc" />
      <label for="ex_rd7"> <span></span></label>
    </div>
  </div>
  <div v-if="isCheck">
    <button type="" class="tdAddBtn ex_rd_btn7" name="tdAddBtn_7" @click="addList">추가</button>
    <table class="table_02 table_03 v31Tbale">
      <tr>
        <th>레지스트리명</th>
        <th>경로</th>
        <th>키</th>
        <th>값</th>
        <th>점검실패시 안내문구</th>
        <th>점실행여부</th>
        <th>삭제</th>
      </tr>
      <tbody>
        <tr name="trStaff_7" v-for="(item, index) in registerCheckData" :key="item">
          <td>
            <select class="select_02 select_04 select200 ex_rd_form7" v-model="item.레지스트리명">
              <option value="HKEY_CURRE">HKEY_CURRE</option>
              <option value="HKEY_CURRE2">HKEY_CURRE2</option>
            </select>
          </td>
          <td>
            <input type="text" class="textInput wid320 ex_rd_form7" v-model="item.경로" />
          </td>
          <td>
            <input type="text" class="textInput wid180 ex_rd_form7" v-model="item.키" />
          </td>
          <td>
            <input type="text" class="textInput wid100 ex_rd_form7" v-model="item.값" />
          </td>
          <td>
            <input
              type="text"
              class="textInput wid360 hei75 ex_rd_form7"
              v-model="item.점검실패시안내문구"
            />
          </td>
          <td>
            <select class="select_02 select_04 select150 ex_rd_form7" v-model="item.점실행여부">
              <option value="검사만수">검사만 수</option>
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
    const registerCheckData = computed({
      get: () => store.REGISTRY_CHECK_DATA,
      set: value => (store.REGISTRY_CHECK_DATA = value),
    });
    const isCheck = ref(true);
    const addList = () => {
      const listData = _.cloneDeep(store.REGISTRY_CHECK_DATA_ORIGIN);
      listData[0].삭제 = true;
      registerCheckData.value.push(listData[0]);
    };
    const removeList = index => {
      registerCheckData.value.splice(index, 1);
    };
    const isCheckFnc = () => {
      registerCheckData.value = _.cloneDeep(store.REGISTRY_CHECK_DATA_ORIGIN);
    };
    return { registerCheckData, isCheck, addList, removeList, isCheckFnc };
  },
});
</script>

<style scoped></style>
