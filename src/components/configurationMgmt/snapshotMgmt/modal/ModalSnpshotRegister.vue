<template>
  <Modal :width="'700px'">
    <template #modal-body>
      <div style="text-align: left">
        <p class="title">스냅샷 생성</p>
        <span class="subtitle">스냅샷을 추가하는 영역입니다.</span>
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
              <th>스냅샷 명</th>
              <td>
                <input type="text" class="textInput2 textInput2-2" placeholder="" />
              </td>
            </tr>
            <tr>
              <th>설명</th>
              <td>
                <textarea class="pop" placeholder=""></textarea>
              </td>
            </tr>
          </table>
        </div>
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
