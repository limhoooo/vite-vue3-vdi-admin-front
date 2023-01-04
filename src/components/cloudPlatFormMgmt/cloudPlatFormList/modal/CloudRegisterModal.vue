<template>
  <Modal>
    <template #modal-body>
      <p class="title">
        Cloud 플랫폼 등록
        <span class="subtitle">신규 Cloud 플랫폼을 등록하는 영역입니다.</span>
      </p>
      <div class="contnet">
        <table class="table_04 _vertical">
          <colgroup>
            <col style="width: 36%" />
            <col style="width: " />
          </colgroup>
          <tbody>
            <tr>
              <th>Cloud 플랫폼 명</th>
              <td class="_top">
                <input type="text" class="textInput4" placeholder="" />
              </td>
            </tr>
            <tr>
              <th>Cloud 플랫폼 버전</th>
              <td>
                <input type="text" class="textInput4" placeholder="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="blueBtn">등록</button>
        <button type="" class="grayBtn" @click="$emit('close', 'isRegister')">취소</button>
      </div>
    </template>
  </Modal>
</template>

<script>
import { computed, defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { homeMgmtStore } from '@/stores/vdisMgmt/homeStore.js';

export default defineComponent({
  components: {
    Modal: defineAsyncComponent(() => import('@/components/common/Modal.vue')),
  },
  props: {},
  setup(props, { emit }) {},
});
</script>

<style scope></style>
