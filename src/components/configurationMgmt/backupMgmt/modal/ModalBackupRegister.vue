<template>
  <Modal :width="'600px'">
    <template #modal-body>
      <p class="title">백업 등록</p>
      <span class="subtitle">백업 등록을 진행하는 영역입니다.</span>
      <div class="contnet">
        <table class="table_04">
          <tr>
            <th>백업 할 VDI <span class="redTxt"> *</span></th>
            <td>
              <select class="select_02 select_04 select300">
                <option>VDI2012923111</option>
                <option>VDI2012923112</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>백업 허용 기간 <span class="redTxt"> *</span></th>
            <td>
              <select class="select_02 select_04 select300">
                <option>선택</option>
                <option>7일</option>
                <option>30일</option>
                <option>3개월</option>
                <option>6개월</option>
                <option>12개월</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>백업 주기 <span class="redTxt"> *</span></th>
            <td>
              <select class="select_02 select_04 select300">
                <option>선택</option>
                <option>7일</option>
                <option>30일</option>
                <option>3개월</option>
                <option>6개월</option>
                <option>12개월</option>
                <option>매일</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>백업 저장 위치 <span class="redTxt"> *</span></th>
            <td>
              <select class="select_02 select_04 select300">
                <option>H:W드라이브</option>
                <option>H:W드라이브</option>
              </select>
            </td>
          </tr>
        </table>
      </div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="blueBtn">등록</button>
        <button type="" class="grayBtn" @click="$emit('close', 'isRegisterModal')">취소</button>
      </div>
    </template>
  </Modal>
</template>

<script>
import { computed, defineAsyncComponent, defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  components: {
    Modal: defineAsyncComponent(() => import('@/components/common/Modal.vue')),
  },
  props: {
    insertData: Object,
  },
  setup(props, { emit }) {},
});
</script>

<style></style>
