<template>
  <Modal :width="'800px'">
    <template #modal-body>
      <p class="title">스토리지 등록</p>
      <span class="subtitle">스토리지를 등록하는 영역입니다.</span>
      <div class="contnet">
        <table class="table_04">
          <tr>
            <th>Cloud 플랫폼 구분</th>
            <td>
              <select class="select_02 select_04 select300">
                <option>선택</option>
                <option>Proxmox</option>
                <option>Openstack</option>
                <option>Vmware</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>스토리지 명</th>
            <td>
              <input type="text" class="textInput2 textInput2-2" placeholder="" />
            </td>
          </tr>
          <tr>
            <th>사이즈 선택</th>
            <td><input type="text" class="textInput2 textInput2-2" placeholder="" /> TB</td>
          </tr>
          <tr>
            <th>설명</th>
            <td>
              <textarea class="pop" placeholder=""></textarea>
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
