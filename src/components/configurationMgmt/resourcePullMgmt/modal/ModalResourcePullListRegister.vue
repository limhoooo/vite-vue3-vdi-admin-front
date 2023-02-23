<template>
  <Modal :width="'700px'">
    <template #modal-body>
      <p class="title">
        리소스 풀 등록
        <span class="subtitle">리소스 풀을 등록하는 영역입니다.</span>
      </p>
      <div class="contnet">
        <table class="table_04 _vertical">
          <colgroup>
            <col style="width: 34%" />
            <col style="width: " />
          </colgroup>
          <tbody>
            <tr>
              <th>클라우드 플랫폼 선택</th>
              <td class="_top">
                <select class="select_02 select_04">
                  <option value="">전체</option>
                  <option value="">1</option>
                  <option value="">2</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>리소스 풀 명</th>
              <td>
                <input type="secrch" class="textInput2" />
              </td>
            </tr>
            <tr>
              <th>설명</th>
              <td>
                <textarea class="pop"></textarea>
              </td>
            </tr>
          </tbody>
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
