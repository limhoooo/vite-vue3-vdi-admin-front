<template>
  <Modal>
    <template #modal-body>
      <p class="title">
        Cloud 서버 등록
        <span class="subtitle">Cloud 서버를 등록하는 영역입니다.</span>
      </p>
      <div class="contnet">
        <table class="table_04 _vertical">
          <colgroup>
            <col style="width: 38%" />
            <col style="width: " />
          </colgroup>
          <tbody>
            <tr>
              <th>Cloud 플랫폼 명</th>
              <td class="_top">Proxmox</td>
            </tr>
            <tr>
              <th>클러스터 명</th>
              <td>Proxmox Cluster</td>
            </tr>
            <tr>
              <th>IP(Master Server)</th>
              <td>211.151.30.71</td>
            </tr>
            <tr>
              <th>Host 유형</th>
              <td>
                <select class="select_03">
                  <option>선택</option>
                  <option>관리서버</option>
                  <option>운영서버</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>Host 명</th>
              <td>
                <input type="text" class="textInput4" placeholder="" />
              </td>
            </tr>
            <tr>
              <th>CPU</th>
              <td><input type="text" class="textInput4-2" placeholder="" /> vCore</td>
            </tr>
            <tr>
              <th>RAM</th>
              <td><input type="text" class="textInput4-2" placeholder="" /> GB</td>
            </tr>
            <tr>
              <th>DISK</th>
              <td><input type="text" class="textInput4-2" placeholder="" /> TB</td>
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
