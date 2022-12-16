<template>
  <p class="font20 inline">4. 윈도우 계정 정책 설정</p>
  <div class="checkBox inline v31ckDiv">
    <input type="checkbox" id="ex_rd4" name="" v-model="isCheck" />
    <label for="ex_rd4"> <span></span></label>
  </div>
  <table class="table_02 table_th320">
    <tr>
      <th>Administrator계정사용금지</th>
      <td>
        <div class="radio2">
          <input
            id="radio-15"
            name="choice8_1"
            type="radio"
            class="ex_rd_form4"
            value="계정삭제"
            :disabled="!isCheck"
            v-model="windowAccountData.Administrator계정사용금지"
          />
          <label for="radio-15" class="radio-label">계정삭제</label>
          <input
            id="radio-16"
            name="choice8_1"
            type="radio"
            class="ex_rd_form4"
            value="계정활성화"
            :disabled="!isCheck"
            v-model="windowAccountData.Administrator계정사용금지"
          />
          <label for="radio-16" class="radio-label">계정활성화</label>
          <input
            id="radio-167"
            name="choice8_1"
            type="radio"
            class="ex_rd_form4"
            value="사용안함"
            :disabled="!isCheck"
            v-model="windowAccountData.Administrator계정사용금지"
          />
          <label for="radio-167" class="radio-label">사용안함</label>
        </div>
      </td>
    </tr>
    <tr>
      <th>계정 사용 금지</th>
      <td>
        <div class="radio2">
          <input
            id="radio-17"
            name="choice8"
            type="radio"
            class="ex_rd_form4"
            value="계정삭제"
            :disabled="!isCheck"
            v-model="windowAccountData.계정사용금지"
          />
          <label for="radio-17" class="radio-label">계정삭제</label>
          <input
            id="radio-18"
            name="choice8"
            type="radio"
            class="ex_rd_form4"
            value="계정활성화"
            :disabled="!isCheck"
            v-model="windowAccountData.계정사용금지"
          />
          <label for="radio-18" class="radio-label">계정활성화</label>
          <input
            id="radio-19"
            name="choice8"
            type="radio"
            class="ex_rd_form4"
            value="사용안함"
            :disabled="!isCheck"
            v-model="windowAccountData.계정사용금지"
          />
          <label for="radio-19" class="radio-label">사용안함</label>
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
    const windowAccountData = computed(() => store.WINDOW_ACCOUNT_DATA);
    const isCheck = ref(true);
    return { windowAccountData, isCheck };
  },
});
</script>

<style scoped></style>
