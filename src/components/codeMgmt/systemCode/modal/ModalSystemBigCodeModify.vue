<template>
  <Modal>
    <template #modal-header>
      <p class="title">
        대분류 코드 수정
        <span class="subtitle">대분류 코드를 수정하는 영역입니다.</span>
      </p>
    </template>
    <template #modal-body>
      <div class="contnet">
        <table class="table_04">
          <tr>
            <th>코드항목</th>
            <td>상태코드</td>
          </tr>
          <tr>
            <th>대분류 코드</th>
            <td>{{ codeData.업무코드 }}</td>
          </tr>
          <tr>
            <th>코드명 <span class="redTxt"> *</span></th>
            <td>
              <input type="text" class="textInput2 textInput2-2" v-model="codeName" /><br />
              <span class="redTxt">코드명을 입력해주세요.</span>
            </td>
          </tr>
        </table>
      </div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="blueBtn" @click="appModify">등록</button>
        <button type="" class="grayBtn" @click="$emit('close')">취소</button>
      </div>
    </template>
  </Modal>
</template>

<script>
import { computed, defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { systemCodeStore } from '@/stores/codeMgmt/systemCodeStore.js';

export default defineComponent({
  components: {
    Modal: defineAsyncComponent(() => import('@/components/common/Modal.vue')),
  },
  props: {
    codeData: Object,
  },
  setup(props, { emit }) {
    const store = systemCodeStore();
    const codeName = ref();
    const appModify = () => {
      const data = {
        ...props.codeData,
        codeName: codeName.value,
      };
      store.MODIFY_SYSTEMCODE(data);
      emit('close');
    };
    return { appModify, codeName };
  },
});
</script>

<style></style>
