<template>
  <p class="font20 inline">2. 화면보호기 설정 검사 및 변경</p>
  <div class="checkBox inline v31ckDiv">
    <input type="checkbox" id="ex_rd2" name="" v-model="isCheck" />
    <label for="ex_rd2"> <span></span></label>
  </div>
  <table class="table_02 table_th320">
    <tr>
      <th>전원 및 절전 설정</th>
      <td>
        <div class="radio2">
          <input
            id="radio-9"
            name="choice5"
            type="radio"
            class="ex_rd_form2"
            value="적용"
            :disabled="!isCheck"
            v-model="screenSaverData.전원및절전설정"
          />
          <label for="radio-9" class="radio-label">적용</label>
          <input
            id="radio-10"
            name="choice5"
            type="radio"
            class="ex_rd_form2"
            value="검사만수행"
            :disabled="!isCheck"
            v-model="screenSaverData.전원및절전설정"
          />
          <label for="radio-10" class="radio-label">검사만 수행</label>
        </div>

        <div class="marginTop20">
          <span>디스플레이 끄기설정</span>
          <div class="numberDiv">
            <input
              type="number"
              min="0"
              max="100"
              step="1"
              data-inc="1"
              class="ex_rd_form2"
              :disabled="!isCheck"
              v-model="screenSaverData.디스플레이끄기설정1"
            />
            <div class="numberInner ex_rd_form2_numBtn" v-if="isCheck">
              <div class="numBtn numUp" @click="numberChangeFnc('up', '디스플레이끄기설정1')">
                <img src="@img/numberUp.png" />
              </div>
              <div class="numBtn numDown" @click="numberChangeFnc('down', '디스플레이끄기설정1')">
                <img src="@img/numberDown.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="marginTop20">
          <span>디스플레이 끄기설정</span>
          <div class="numberDiv">
            <input
              type="number"
              min="0"
              max="100"
              step="1"
              data-inc="1"
              class="ex_rd_form2"
              :disabled="!isCheck"
              v-model="screenSaverData.디스플레이끄기설정2"
            />
            <div class="numberInner ex_rd_form2_numBtn" v-if="isCheck">
              <div class="numBtn numUp" @click="numberChangeFnc('up', '디스플레이끄기설정2')">
                <img src="@img/numberUp.png" />
              </div>
              <div class="numBtn numDown" @click="numberChangeFnc('down', '디스플레이끄기설정2')">
                <img src="@img/numberDown.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="marginTop20">
          <span>디스플레이 끄기설정</span>
          <div class="checkBox inline v31ckDiv">
            <input
              type="checkbox"
              id="ex_rd2_box1"
              name=""
              class="ex_rd_form2"
              :disabled="!isCheck"
              v-model="screenSaverData.디스플레이끄기설정체크"
            />
            <label for="ex_rd2_box1"> <span></span></label>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th>잠금화면 설정</th>
      <td>
        <div class="radio2">
          <input
            id="radio-11"
            name="choice6"
            type="radio"
            class="ex_rd_form2"
            value="적용"
            :disabled="!isCheck"
            v-model="screenSaverData.잠금화면설정"
          />
          <label for="radio-11" class="radio-label">적용</label>
          <input
            id="radio-12"
            name="choice6"
            type="radio"
            class="ex_rd_form2"
            value="검사만수행"
            :disabled="!isCheck"
            v-model="screenSaverData.잠금화면설정"
          />
          <label for="radio-12" class="radio-label">검사만 수행</label>
        </div>
        <div class="marginTop20">
          <span>대기시간</span>
          <div class="numberDiv">
            <input
              type="number"
              min="0"
              max="100"
              step="1"
              data-inc="1"
              class="ex_rd_form2"
              :disabled="!isCheck"
              v-model="screenSaverData.대기시간"
            />
            <div class="numberInner ex_rd_form2_numBtn" v-if="isCheck">
              <div class="numBtn numUp" @click="numberChangeFnc('up', '대기시간')">
                <img src="@img/numberUp.png" />
              </div>
              <div class="numBtn numDown" @click="numberChangeFnc('down', '대기시간')">
                <img src="@img/numberDown.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="marginTop20">
          <span>다시 시작할 때 로그온 화면</span>
          <div class="checkBox inline v31ckDiv">
            <input
              type="checkbox"
              id="ex_rd2_box2"
              name=""
              class="ex_rd_form2"
              :disabled="!isCheck"
              v-model="screenSaverData.다시시작할때로그온화면"
            />
            <label for="ex_rd2_box2"> <span></span></label>
          </div>
        </div>
        <div class="marginTop20">
          <span>회면보호기 설정</span>
          <div class="checkBox inline v31ckDiv">
            <input
              type="checkbox"
              id="ex_rd2_box3"
              name=""
              class="ex_rd_form2"
              :disabled="!isCheck"
              v-model="screenSaverData.화면보호기설정"
            />
            <label for="ex_rd2_box3"> <span></span></label>
          </div>
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
    const screenSaverData = computed(() => store.SCREEN_SAVER_DATA);
    const isCheck = ref(true);
    const numberChangeFnc = (division, name) => {
      if (division === 'down' && screenSaverData.value[name] === 0) return;
      screenSaverData.value[name] =
        division === 'up' ? (screenSaverData.value[name] += 1) : (screenSaverData.value[name] -= 1);
    };
    return { screenSaverData, isCheck, numberChangeFnc };
  },
});
</script>

<style scoped></style>
