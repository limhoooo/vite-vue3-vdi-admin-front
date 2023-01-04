<template>
  <Modal>
    <template #modal-body>
      <p class="title">
        Cloud 플랫폼 수정
        <span class="subtitle">Cloud 플랫폼을 수정하는 영역입니다.</span>
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
              <td class="_top">Proxmox</td>
            </tr>
            <tr>
              <th>클러스터 명</th>
              <td>
                <input type="text" class="textInput4" value="Proxmox Cluster" placeholder="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="blueBtn">등록</button>
        <button type="" class="grayBtn" @click="$emit('close', 'isModify')">취소</button>
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
