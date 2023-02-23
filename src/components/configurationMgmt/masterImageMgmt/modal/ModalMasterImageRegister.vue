<template>
  <Modal :width="'600px'">
    <template #modal-body>
      <p class="title">마스터 이미지 등록</p>
      <span class="subtitle">마스터 이미지를 등록하는 영역입니다.</span>
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
            <th>OS(운영체제) Type</th>
            <td>
              <select class="select_02 select_04 select300">
                <option>선택</option>
                <option>Windows</option>
                <option>Linux</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>OS(운영체제) 버전</th>
            <td>
              <select class="select_02 select_04 select300">
                <option>선택</option>
                <option>선택</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>마스터 이미지 구분</th>
            <td>
              <select class="select_02 select_04 select300">
                <option>일반 이미지</option>
                <option>공용(재택) 이미지</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>마스터 이미지 명</th>
            <td>
              <input type="text" class="textInput2 textInput2-2" placeholder="" />
            </td>
          </tr>
          <tr>
            <th>마스터 이미지 위치 선택</th>
            <td>
              <select class="select_02 select_04 select300">
                <option>선택</option>
                <option>선택</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>마스터 이미지 설명</th>
            <td>
              <textarea class="pop" placeholder="마스터 이미지 설명을 작성해주세요."></textarea>
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
