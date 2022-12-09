<template>
  <p class="font20 inline">3. 비밀번호 정책 설정</p>
  <div class="checkBox inline v31ckDiv">
    <input type="checkbox" id="ex_rd3" name="" v-model="isCheck" />
    <label for="ex_rd3"> <span></span></label>
  </div>
  <table class="table_02 table_th320">
    <tr>
      <th>비밀번호 최소 길이</th>
      <td>
        <div class="numberDiv margin0">
          <input
            type="number"
            min="0"
            max="100"
            step="1"
            data-inc="1"
            class="ex_rd_form3"
            :disabled="!isCheck"
            v-model="passwrdPolicyData.비밀번호최소길이"
          />
          <div class="numberInner ex_rd_form3_numBtn" v-if="isCheck">
            <div class="numBtn numUp" @click="numberChangeFnc('up', '비밀번호최소길이')">
              <img src="@img/numberUp.png" />
            </div>
            <div class="numBtn numDown" @click="numberChangeFnc('down', '비밀번호최소길이')">
              <img src="@img/numberDown.png" />
            </div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th>비밀번호 복잡도</th>
      <td>
        <div class="checkBox inline">
          <input
            type="checkbox"
            id="ex_rd3_box1"
            name=""
            class="ex_rd_form3"
            :disabled="!isCheck"
            v-model="passwrdPolicyData.비밀번호복잡도"
          />
          <label for="ex_rd3_box1"> <span></span></label>
        </div>
      </td>
    </tr>
    <tr>
      <th>비밀번호 최대 사용 기간</th>
      <td>
        <div class="numberDiv margin0">
          <input
            type="number"
            min="0"
            max="100"
            step="1"
            data-inc="1"
            class="ex_rd_form3"
            :disabled="!isCheck"
            v-model="passwrdPolicyData.비밀번호최대사용기간"
          />
          <div class="numberInner ex_rd_form3_numBtn" v-if="isCheck">
            <div class="numBtn numUp" @click="numberChangeFnc('up', '비밀번호최대사용기간')">
              <img src="@img/numberUp.png" />
            </div>
            <div class="numBtn numDown" @click="numberChangeFnc('down', '비밀번호최대사용기간')">
              <img src="@img/numberDown.png" />
            </div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th>비밀번호 변경</th>
      <td>
        <div class="numberDiv margin0">
          <input
            type="number"
            min="0"
            max="100"
            step="1"
            data-inc="1"
            class="ex_rd_form3"
            :disabled="!isCheck"
            v-model="passwrdPolicyData.비밀번호변경"
          />
          <div class="numberInner ex_rd_form3_numBtn" v-if="isCheck">
            <div class="numBtn numUp" @click="numberChangeFnc('up', '비밀번호변경')">
              <img src="@img/numberUp.png" />
            </div>
            <div class="numBtn numDown" @click="numberChangeFnc('down', '비밀번호변경')">
              <img src="@img/numberDown.png" />
            </div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th>수행방식</th>
      <td>
        <div class="radio2">
          <input
            id="radio-13"
            name="choice7"
            type="radio"
            class="ex_rd_form3"
            value="강제업데이트"
            :disabled="!isCheck"
            v-model="passwrdPolicyData.수행박식"
          />
          <label for="radio-13" class="radio-label">강제 업데이트</label>
          <input
            id="radio-14"
            name="choice7"
            type="radio"
            class="ex_rd_form3"
            value="검사만수행"
            :disabled="!isCheck"
            v-model="passwrdPolicyData.수행박식"
          />
          <label for="radio-14" class="radio-label">검사만 수행</label>
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
    const passwrdPolicyData = computed(() => store.PASSWORD_POLICY_DATA);
    const isCheck = ref(true);
    const numberChangeFnc = (division, name) => {
      if (division === 'down' && passwrdPolicyData.value[name] === 0) return;
      passwrdPolicyData.value[name] =
        division === 'up'
          ? (passwrdPolicyData.value[name] += 1)
          : (passwrdPolicyData.value[name] -= 1);
    };
    return { passwrdPolicyData, isCheck, numberChangeFnc };
  },
});
</script>

<style scoped></style>
