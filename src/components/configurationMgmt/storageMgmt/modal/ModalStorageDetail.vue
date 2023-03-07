<template>
  <Modal :width="'800px'">
    <template #modal-body>
      <p class="title">스토리지 조회 및 수정</p>
      <span class="subtitle">스토리지를 조회 및 수정하는 영역입니다.</span>
      <div class="contnet">
        <table class="table_04">
          <tr>
            <th>Cloud 플랫폼 구분</th>
            <td>Proxmox</td>
          </tr>
          <tr>
            <th>스토리지 명</th>
            <td>
              <input type="text" class="textInput2 textInput2-2" value="STORAGE1" />
            </td>
          </tr>
          <tr>
            <th>사이즈 선택</th>
            <td><input type="text" class="textInput2 textInput2-2" value="30" /> TB</td>
          </tr>
          <tr>
            <th>설명</th>
            <td>
              <textarea class="pop" placeholder="연구직이 사용하는 스토리지 입니다"></textarea>
            </td>
          </tr>
        </table>
      </div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="blueBtn">등록</button>
        <button type="" class="grayBtn" @click="$emit('close', 'isDetailModal')">취소</button>
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
