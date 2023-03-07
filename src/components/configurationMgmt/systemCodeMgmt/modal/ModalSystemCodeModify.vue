<template>
  <Modal :width="'600px'">
    <template #modal-body>
      <p class="title">
        대분류 코드 수정
        <span class="subtitle">대분류 코드를 수정하는 영역입니다.</span>
      </p>
      <div class="contnet">
        <table class="table_04">
          <tr>
            <th>대분류 코드</th>
            <td>AG</td>
          </tr>
          <tr>
            <th>코드명 <span class="redTxt"> *</span></th>
            <td>
              <input type="text" class="textInput2 textInput2-2" /><br />
              <span class="redTxt">코드명을 입력해주세요.</span>
            </td>
          </tr>
        </table>
      </div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="blueBtn">수정</button>
        <button type="" class="grayBtn" @click="$emit('close', 'isModifyModal')">취소</button>
      </div>
    </template>
  </Modal>
</template>

<script>
import { computed, defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { systemCodeStore } from '@/stores/configurationMgmt/systemCodeStore';

export default defineComponent({
  components: {
    Modal: defineAsyncComponent(() => import('@/components/common/Modal.vue')),
  },
  props: {
    insertData: Object,
  },
  setup(props, { emit }) {
    const store = systemCodeStore();
  },
});
</script>

<style></style>
