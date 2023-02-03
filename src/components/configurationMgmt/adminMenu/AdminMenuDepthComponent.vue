<template>
  <div class="depth">
    <p class="depth_title">{{ name }}</p>
    <ul class="tabs">
      <li v-for="(item, index) in list" :key="item" @click="getTwoDepth(item)">
        <p class="blueTxt"><span class="blueSpan"></span>노출</p>
        <p class="name">{{ item.메뉴명 }}</p>
        <div class="btnDiv">
          <button
            onclick="event.cancelBubble=true"
            @click="menuIndexFnc('up', item, index)"
            class="up"
          ></button>
          <button
            onclick="event.cancelBubble=true"
            @click="menuIndexFnc('down', item, index)"
            class="down"
          ></button>
          <button onclick="event.cancelBubble=true" @click="isModalFnc(item)" class="corbtn">
            수정
          </button>
        </div>
      </li>
    </ul>
  </div>
  <ModalMenuModify :detailData="detailData" v-if="isModal" @close="isModalFnc" />
</template>
<script>
import { computed, defineAsyncComponent, defineComponent, ref } from 'vue';
import { adminMenuStore } from '@/stores/configurationMgmt/adminMenuStore.js';

export default defineComponent({
  components: {
    ModalMenuModify: defineAsyncComponent(() => import('./modal/ModalMenuModify.vue')),
  },
  props: {
    list: Array,
    name: String,
    parentDept: Object,
  },
  setup(props, { emit }) {
    const store = adminMenuStore();
    const detailData = ref();
    const getTwoDepth = item => {
      emit('getTwoDepth', item);
    };
    const isModal = ref(false);
    const isModalFnc = item => {
      detailData.value = item;
      isModal.value = !isModal.value;
    };
    const menuIndexFnc = (division, data, index) => {
      if (division === 'up') {
        const orderList = changeArrayOrder(props.list, index, -1);
        if (props.name === 'Depth1') {
          store.ADMIN_MENU_LIST = orderList ? orderList : store.ADMIN_MENU_LIST;
        } else if (props.name === 'Depth2') {
          store.ADMIN_DETAIL_MENU_LIST = orderList ? orderList : store.ADMIN_DETAIL_MENU_LIST;
        }
      } else {
        const orderList = changeArrayOrder(props.list, index, 1);
        if (props.name === 'Depth1') {
          store.ADMIN_MENU_LIST = orderList ? orderList : store.ADMIN_MENU_LIST;
        } else if (props.name === 'Depth2') {
          store.ADMIN_DETAIL_MENU_LIST = orderList ? orderList : store.ADMIN_DETAIL_MENU_LIST;
        }
      }
    };
    const changeArrayOrder = function (list, targetIdx, moveValue) {
      // 배열값이 없는 경우 나가기
      if (list.length < 0) return;
      // 이동할 index 값을 변수에 선언
      const newPosition = targetIdx + moveValue;
      // 이동할 값이 0보다 작거나 최대값을 벗어나는 경우 종료
      if (newPosition < 0 || newPosition >= list.length) return;
      // 임의의 변수를 하나 만들고 배열 값 저장
      const tempList = JSON.parse(JSON.stringify(list));
      // 옮길 대상을 target 변수에 저장하기
      const target = tempList.splice(targetIdx, 1)[0];
      // 새로운 위치에 옮길 대상을 추가하기
      tempList.splice(newPosition, 0, target);
      return tempList;
    };
    return {
      getTwoDepth,
      menuIndexFnc,
      isModal,
      isModalFnc,
      detailData,
    };
  },
});
</script>
<style scoped>
.faqActive {
  display: block;
}
.tableGraph th {
  text-align: center;
}
.tableGraph td {
  text-align: center;
}
</style>
