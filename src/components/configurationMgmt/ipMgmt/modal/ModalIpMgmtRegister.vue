<template>
  <Modal :width="'700px'">
    <template #modal-body>
      <p class="title">IP 등록</p>
      <span class="subtitle">IP를 등록하는 영역입니다.</span>
      <div class="contnet">
        <table class="table_04">
          <colgroup>
            <col style="width: 30%" />
            <col style="width: " />
          </colgroup>
          <tr>
            <th>IP 주소 범위</th>
            <td>
              <input type="text" class="textInput5 textInput2-2 mgb10px" />.
              <input type="text" class="textInput5 textInput2-2 mgb10px" />.
              <input type="text" class="textInput5 textInput2-2 mgb10px" />.
              <input type="text" class="textInput5 textInput2-2 mgb10px" /><br />
              ~ <input type="text" class="textInput5 textInput2-2" />.
              <input type="text" class="textInput5 textInput2-2" />.
              <input type="text" class="textInput5 textInput2-2" />.
              <input type="text" class="textInput5 textInput2-2" />
            </td>
          </tr>
          <tr>
            <th>게이트웨이 주소</th>
            <td>
              <input type="text" class="textInput5 textInput2-2" />.
              <input type="text" class="textInput5 textInput2-2" />.
              <input type="text" class="textInput5 textInput2-2" />.
              <input type="text" class="textInput5 textInput2-2" />
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
