<template>
  <Modal :width="'700px'">
    <template #modal-body>
      <p class="title">IP 수정</p>
      <span class="subtitle">IP를 수정하는 영역입니다.</span>
      <div class="contnet">
        <table class="table_04">
          <colgroup>
            <col style="width: 30%" />
            <col style="width: " />
          </colgroup>
          <tr>
            <th>IP 주소</th>
            <td>
              <input type="text" class="textInput5 textInput2-2" placeholder="192" />.
              <input type="text" class="textInput5 textInput2-2" placeholder="068" />.
              <input type="text" class="textInput5 textInput2-2" placeholder="0" />.
              <input type="text" class="textInput5 textInput2-2" placeholder="100" />
            </td>
          </tr>
          <tr>
            <th>게이트웨이 주소</th>
            <td>
              <input type="text" class="textInput5 textInput2-2" placeholder="192" />.
              <input type="text" class="textInput5 textInput2-2" placeholder="068" />.
              <input type="text" class="textInput5 textInput2-2" placeholder="0" />.
              <input type="text" class="textInput5 textInput2-2" placeholder="100" />
            </td>
          </tr>
          <tr>
            <th>서브넷 주소</th>
            <td>
              <input type="text" class="textInput5 textInput2-2" placeholder="192" />.
              <input type="text" class="textInput5 textInput2-2" placeholder="068" />.
              <input type="text" class="textInput5 textInput2-2" placeholder="0" />.
              <input type="text" class="textInput5 textInput2-2" placeholder="100" />
            </td>
          </tr>
          <tr>
            <th>DNS 주소</th>
            <td>
              <input type="text" class="textInput5 textInput2-2" placeholder="192" />.
              <input type="text" class="textInput5 textInput2-2" placeholder="068" />.
              <input type="text" class="textInput5 textInput2-2" placeholder="0" />.
              <input type="text" class="textInput5 textInput2-2" placeholder="100" />
            </td>
          </tr>
        </table>
      </div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="blueBtn">등록</button>
        <button type="" class="grayBtn" @click="$emit('close', 'isModifyModal')">취소</button>
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
