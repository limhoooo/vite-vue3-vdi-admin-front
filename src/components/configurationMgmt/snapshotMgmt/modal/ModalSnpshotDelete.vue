<template>
  <Modal :width="'600px'">
    <template #modal-body>
      <div style="text-align: left">
        <p class="title">스냅샷 삭제</p>
        <span class="subtitle">스냅샷을 삭제하는 영역입니다.</span>
        <div class="contnet">
          <table class="table_04">
            <tr>
              <th>Cloud 플랫폼 구분</th>
              <td>Proxmox</td>
            </tr>
            <tr>
              <th>Host 명</th>
              <td>Host1</td>
            </tr>
            <tr>
              <th>VDI 명</th>
              <td>VDI001</td>
            </tr>
            <tr>
              <th>스냅샷 선택</th>
              <td>
                <select class="select_02 select_04 select300">
                  <option>선택</option>
                  <option>선택</option>
                </select>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="blueBtn">확인</button>
        <button type="" class="grayBtn" @click="$emit('close', 'isDeleteModal')">취소</button>
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
  props: {},
  setup(props, { emit }) {
    const store = systemCodeStore();
  },
});
</script>

<style></style>
