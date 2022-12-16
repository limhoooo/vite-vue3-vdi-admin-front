<template>
  <p class="font20 inline">1. 윈도우보안설정변경</p>
  <div class="checkBox inline v31ckDiv">
    <input type="checkbox" id="ex_rd" name="" :checked="isCheck" v-model="isCheck" />
    <label for="ex_rd"> <span></span></label>
  </div>
  <table class="table_02 table_th320">
    <tr>
      <th>윈도우 방화벽 설정</th>
      <td>
        <div class="radio2">
          <input
            id="radio-1"
            name="choice1"
            type="radio"
            class="ex_rd_form1"
            value="설정"
            :disabled="!isCheck"
            v-model="windowSecurityData.윈도우방화벽설정"
          />
          <label for="radio-1" class="radio-label">설정</label>
          <input
            id="radio-2"
            name="choice1"
            type="radio"
            class="ex_rd_form1"
            value="미설정"
            :disabled="!isCheck"
            v-model="windowSecurityData.윈도우방화벽설정"
          />
          <label for="radio-2" class="radio-label">미설정</label>
        </div>
      </td>
    </tr>
    <tr>
      <th>무선네트워크(WI-FI)설정</th>
      <td>
        <div class="radio2">
          <input
            id="radio-3"
            name="choice2"
            type="radio"
            class="ex_rd_form1"
            value="설정"
            :disabled="!isCheck"
            v-model="windowSecurityData.무선네트워크설정"
          />
          <label for="radio-3" class="radio-label">설정</label>
          <input
            id="radio-4"
            name="choice2"
            type="radio"
            class="ex_rd_form1"
            value="미설정"
            :disabled="!isCheck"
            v-model="windowSecurityData.무선네트워크설정"
          />
          <label for="radio-4" class="radio-label">미설정</label>
        </div>
      </td>
    </tr>
    <tr>
      <th>윈도우 자동 업데이트 설정</th>
      <td>
        <div class="radio2">
          <input
            id="radio-5"
            name="choice3"
            type="radio"
            class="ex_rd_form1"
            value="실행"
            :disabled="!isCheck"
            v-model="windowSecurityData.윈도우자동업데이트설정"
          />
          <label for="radio-5" class="radio-label">실행</label>
          <input
            id="radio-6"
            name="choice3"
            type="radio"
            class="ex_rd_form1"
            value="종료"
            :disabled="!isCheck"
            v-model="windowSecurityData.윈도우자동업데이트설정"
          />
          <label for="radio-6" class="radio-label">종료</label>
        </div>
        <select
          class="select_02 select_04 ex_rd_form1"
          :disabled="!isCheck"
          v-model="windowSecurityData.윈도우자동업데이트설정수동"
        >
          <option value="수동">수동</option>
        </select>
      </td>
    </tr>
    <tr>
      <th>공유폴더 사용 및 금지 설정</th>
      <td>
        <div class="radio2">
          <input
            id="radio-7"
            name="choice4"
            type="radio"
            class="ex_rd_form1"
            value="검사결과해당공유폴더삭제"
            :disabled="!isCheck"
            v-model="windowSecurityData.공유폴더사용및금지설정"
          />
          <label for="radio-7" class="radio-label">검사 결과 해당 공유폴더 삭제</label>
          <input
            id="radio-8"
            name="choice4"
            type="radio"
            class="ex_rd_form1"
            value="검사만수행"
            :disabled="!isCheck"
            v-model="windowSecurityData.공유폴더사용및금지설정"
          />
          <label for="radio-8" class="radio-label">검사만 수행</label>
        </div>
      </td>
    </tr>
  </table>
</template>
<script>
import { computed, defineComponent, ref } from 'vue';
import { homeSecurityStore } from '@/stores/atHomeMgmt/homeSecurityStore';
export default defineComponent({
  setup() {
    const store = homeSecurityStore();
    const windowSecurityData = computed(() => store.WINDOW_SECURITY_DATA);
    const isCheck = ref(true);
    return { windowSecurityData, isCheck };
  },
});
</script>

<style scoped></style>
