<template>
  <Modal>
    <template #modal-header>
      <p class="title">관리자 메뉴 메뉴등록</p>
      <span class="subtitle">관리자 메뉴를 등록하는 영역입니다.</span>
    </template>
    <template #modal-body>
      <div class="contnet">
        <table class="table_04">
          <tr>
            <th>구분</th>
            <td>
              <select class="select_02 select_04 select300 corSelect" v-model="registerData.구분">
                <option value="Depth1">Depth 1</option>
                <option value="Depth2">Depth 2</option>
              </select>
            </td>
          </tr>
          <tr class="corTr none">
            <th>상위메뉴</th>
            <td>
              <select class="select_02 select_04 select300">
                <option>내 VDI관리</option>
                <option>게시판</option>
                <option>신청하기</option>
                <option>장애신고</option>
                <option>자료실</option>
                <option>설정</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>메뉴 명 <span class="redTxt"> *</span></th>
            <td>
              <input
                type="text"
                class="textInput2 textInput2-2"
                placeholder="메뉴명을 입력해주세요."
                v-model="registerData.메뉴명"
              />
            </td>
          </tr>
          <tr>
            <th>메뉴 URL <span class="redTxt"> *</span></th>
            <td>
              <input
                type="text"
                class="textInput2 textInput2-2"
                placeholder="메뉴URL을 입력해주세요."
                v-model="registerData.메뉴URL"
              />
            </td>
          </tr>
          <tr>
            <th>사용여부</th>
            <td>
              <div class="radio3">
                <input
                  id="radio-3"
                  name="choice2"
                  type="radio"
                  :value="true"
                  v-model="registerData.사용여부"
                />
                <label for="radio-3" class="radio-label">사용</label>
                <input
                  id="radio-4"
                  name="choice2"
                  type="radio"
                  :value="false"
                  v-model="registerData.사용여부"
                />
                <label for="radio-4" class="radio-label">미사용</label>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="blueBtn" @click="appMenu">등록</button>
        <button type="" class="grayBtn" @click="$emit('close')">취소</button>
      </div>
    </template>
  </Modal>
</template>

<script>
import { computed, defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { adminMenuStore } from '@/stores/configurationMgmt/adminMenuStore.js';

export default defineComponent({
  components: {
    Modal: defineAsyncComponent(() => import('@/components/common/Modal.vue')),
  },
  props: {
    codeData: Object,
  },
  setup(props, { emit }) {
    const store = adminMenuStore();
    const registerData = ref({
      구분: 'Depth1',
      메뉴명: '',
      메뉴URL: '',
      사용여부: true,
    });
    const appMenu = () => {
      store.ADD_ADMIN_MENU(registerData.value);
      // emit('close');
    };
    return { appMenu, registerData };
  },
});
</script>

<style></style>
