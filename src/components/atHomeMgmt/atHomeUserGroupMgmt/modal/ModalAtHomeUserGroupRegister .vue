<template>
  <Modal :width="'600px'">
    <template #modal-body>
      <p class="title">
        재택 사용자 그룹 추가
        <span class="subtitle">재택 사용자 그룹을 추가하는 영역입니다.</span>
      </p>
      <div class="contnet">
        <table class="table_04 _vertical">
          <colgroup>
            <col style="width: 30%" />
            <col style="width: " />
          </colgroup>
          <tbody>
            <tr>
              <th>사용자 그룹 명</th>
              <td class="_top">
                <input type="text" class="textInput4" placeholder="" />
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
