<template>
  <Modal>
    <template #modal-header>
      <p class="title">
        소분류 코드 등록
        <span class="subtitle">대분류 코드를 등록하는 영역입니다.</span>
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
            <th>소분류 코드</th>
            <td>
              <input type="text" class="textInput2 textInput2-2" v-model="codeData.대분류코드" />
              <br />
              <span class="redTxt">코드를 입력해주세요.</span>
            </td>
          </tr>
          <tr>
            <th>코드명 <span class="redTxt"> *</span></th>
            <td>
              <input type="text" class="textInput2 textInput2-2" v-model="codeData.코드명" /><br />
              <span class="redTxt">코드명을 입력해주세요.</span>
            </td>
          </tr>
        </table>
      </div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="blueBtn" @click="appSubmit">등록</button>
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
  setup(props, { emit }) {
    const store = systemCodeStore();
    const codeData = ref({
      대분류코드: '',
      코드명: '',
    });
    const appSubmit = () => {
      store.POST_SYSTEMCODE(codeData.value);
      emit('close');
    };
    return { appSubmit, codeData };
  },
});
</script>

<style></style>
