<template>
  <Modal :width="'750px'">
    <template #modal-body>
      <p class="title">
        공용(재택)VDI할당<span class="subtitle">공용(재택)VDI할당하는영역입니다.</span>
      </p>
      <div class="contnet">
        <div class="allotment_div">
          <p class="modalCon_p list">사용기간 선택</p>
          <input type="date" class="dateInput txt000" v-model="assignData.사용기간F" />
          <input type="date" class="dateInput txt000" v-model="assignData.사용기간B" />
        </div>
        <div class="allotment_div allotment_Box">
          <p class="modalCon_p list">사용자명</p>
          <p class="nameText" v-if="assignData.사용자명">{{ assignData.사용자명 }}</p>
          <button class="UserSelection blackBtn" @click="isModalFnc">사용자 선택</button>
          <p class="modalCon_p none">
            김필승 대리 사업부&lt;2009001005&lt;<button class="removeIconBtn">
              <img src="@img/remove.png" />
            </button>
          </p>
        </div>
      </div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="blueBtn" @click="appSubmit">확인</button>
        <button type="" class="grayBtn" @click="$emit('close', 'isAssignmentModal')">취소</button>
      </div>
    </template>
  </Modal>
  <ModalUserSelect v-if="idUserSelect" @close="isModalFnc" @changeUser="changeUser" />
</template>

<script>
import { computed, defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { homeMgmtStore } from '@/stores/vdisMgmt/homeStore.js';

export default defineComponent({
  components: {
    Modal: defineAsyncComponent(() => import('@/components/common/Modal.vue')),
    ModalUserSelect: defineAsyncComponent(() => import('./ModalUserSelect.vue')),
  },
  props: {
    homeListId: Number,
  },
  setup(props, { emit }) {
    const store = homeMgmtStore();
    const idUserSelect = ref(false);
    const assignData = ref({
      id: props.homeListId,
      사용기간F: '',
      사용기간B: '',
      사용자명: '',
    });
    const appSubmit = () => {
      store.POST_ASSIGNMENT(assignData.value);
      emit('close', 'isAssignmentModal');
    };
    const isModalFnc = () => {
      idUserSelect.value = !idUserSelect.value;
    };
    const changeUser = user => {
      assignData.value.사용자명 = user.이름;
      isModalFnc();
    };
    return { appSubmit, isModalFnc, changeUser, idUserSelect, assignData };
  },
});
</script>

<style scope>
.nameText {
  color: #333;
  width: 100px;
  font-size: 20px;
}
.allotment_Box {
  display: flex;
  align-items: center;
}
</style>
