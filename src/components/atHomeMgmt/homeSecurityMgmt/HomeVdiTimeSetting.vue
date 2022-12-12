<template>
  <div class="marginTop20">
    <p class="font20 inline">9. 재택 VDI 제한시간 설정</p>
    <div class="checkBox inline v31ckDiv">
      <input type="checkbox" id="ex_rd9" name="" v-model="isCheck" @click="isCheckFnc" />
      <label for="ex_rd9"> <span></span></label>
    </div>
  </div>
  <div v-if="isCheck">
    <table class="table_02 table_th320">
      <tr>
        <th>제한시간 설정</th>
        <td>
          <div class="numberDiv margin0">
            <input
              type="number"
              min="0"
              max="100"
              step="1"
              data-inc="1"
              class="ex_rd_form9"
              v-model="homeVdiTimeData.제한시간"
            />
            <div class="numberInner ex_rd_form9_numBtn">
              <div class="numBtn numUp" @click="numberChangeFnc('up', '제한시간')">
                <img src="@img/numberUp.png" />
              </div>
              <div class="numBtn numDown" @click="numberChangeFnc('down', '제한시간')">
                <img src="@img/numberDown.png" />
              </div>
            </div>
          </div>
          <span>시간</span>
        </td>
      </tr>
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
    const homeVdiTimeData = computed({
      get: () => store.HOME_VDI_TIME_DATA,
      set: value => (store.HOME_VDI_TIME_DATA = value),
    });
    const isCheck = ref(true);
    const numberChangeFnc = (division, name) => {
      if (division === 'down' && homeVdiTimeData.value[name] === 0) return;
      homeVdiTimeData.value[name] =
        division === 'up' ? (homeVdiTimeData.value[name] += 1) : (homeVdiTimeData.value[name] -= 1);
    };
    const isCheckFnc = () => {
      homeVdiTimeData.value = _.cloneDeep(store.HOME_VDI_TIME_ORIGIN);
    };
    return { homeVdiTimeData, isCheck, numberChangeFnc, isCheckFnc };
  },
});
</script>

<style scoped></style>
