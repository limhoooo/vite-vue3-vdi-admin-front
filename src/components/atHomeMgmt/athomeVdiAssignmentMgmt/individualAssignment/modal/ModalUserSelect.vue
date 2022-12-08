<template>
  <Modal class="UserModal">
    <template #modal-header>
      <p class="title">사용자 선택</p>
    </template>
    <template #modal-body>
      <div class="contnet">
        <div class="UserSelectionDiv">
          <select class="select_03" v-model="filterData.조건">
            <option value="전체">전체</option>
            <option value="사업부">사업부</option>
          </select>
          <input
            type="text"
            class="textInput2"
            placeholder="이름 또는 사번 입력"
            v-model="filterData.검색어"
          />
          <button class="navyBtn" @click="filterSubmit">검색</button>
        </div>
        <p class="redTxt">※ 결재란에 설정하실 대상을 선택해주세요.</p>
        <div class="radioWrap">
          <div class="radio" v-for="(member, index) in memberList" :key="member">
            <input
              :id="`radio-${index}`"
              name="radio"
              type="radio"
              :value="member.id"
              v-model="userData"
            />
            <label :for="`radio-${index}`" class="radio-label">
              <span>{{ member.이름 }}</span>
              <span>{{ member.사업부 }}</span>
              <span>{{ member.사번 }}</span>
            </label>
          </div>
        </div>
      </div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="blueBtn" @click="changeUser">선택완료</button>
        <button type="" class="grayBtn" @click="$emit('close')">취소</button>
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
  props: {
    vdiDetail: Object,
  },
  setup(props, { emit }) {
    const store = homeMgmtStore();
    const memberList = computed(() => store.MEMBER_LIST);
    const userData = ref();
    const filterData = reactive({
      조건: '전체',
      검색어: '',
    });
    const filterSubmit = () => {
      getMemberList(filterData);
    };
    const getMemberList = fliterData => {
      store.GET_MEMBER_LIST(fliterData);
    };
    const changeUser = () => {
      const user = memberList.value.filter(item => item.id === userData.value);
      console.log(user);
      emit('changeUser', user[0]);
    };
    const onCreated = () => {
      getMemberList();
      //userData.value = props.vdiDetail.id;
    };
    onCreated();
    return { memberList, filterData, filterSubmit, userData, changeUser };
  },
});
</script>

<style></style>
