<template>
  <ul class="qnaList">
    <li v-for="item in page" :key="item">
      <div class="que" @click="activeFaqFnc(item.id)">
        <span class="faq_QA">Q</span>
        <p class="inline">
          {{ item.질문 }}
        </p>
        <span class="btns">
          <button
            class="fffBtn fffBtn_sm"
            @click="modalOpen('isModifyModal', item.id)"
            onclick="event.cancelBubble=true"
          >
            수정
          </button>
          <button
            class="navyBtn_sm faqRmove"
            @click="modalOpen('isDeleteModal', item.id)"
            onclick="event.cancelBubble=true"
          >
            삭제
          </button>
        </span>
      </div>
      <div class="anw" :class="{ faqActive: activeFaq === item.id }">
        <span class="faq_QA">A</span>
        <p class="inline">{{ item.답변 }}</p>
      </div>
    </li>
  </ul>
  <p class="all">총 <span class="redTxt">200</span>개</p>
  <select class="select_02">
    <option value="5">5개 출력</option>
    <option value="10">10개 출력</option>
    <option value="20">20개 출력</option>
    <option value="50">50개 출력</option>
    <option value="100">100개 출력</option>
  </select>
  <ul class="paging">
    <!--'opacity' 다음 페이지가 없을 때 화살표 색깔 설정-->
    <li>
      <a href=""> <span class="prev opacity"></span></a>
    </li>
    <li>
      <a href="" class="active">1</a>
    </li>
    <li>
      <a href="">2</a>
    </li>
    <li>
      <a href="">3</a>
    </li>
    <li>
      <a href="">4</a>
    </li>
    <li>
      <a href=""> <span class="next"></span></a>
    </li>
  </ul>
  <ModalFaqDelete v-if="isModal.isDeleteModal" @close="modalFnc" :id="faqId" />
  <ModalFaqModify v-if="isModal.isModifyModal" @close="modalFnc" :id="faqId" />
</template>
<script>
import { computed, defineAsyncComponent, defineComponent, ref } from 'vue';
import { faqStore } from '@/stores/boardMgmt/faqStore.js';
import { useRouter } from 'vue-router';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    ModalFaqDelete: defineAsyncComponent(() => import('./modal/ModalFaqDelete.vue')),
    ModalFaqModify: defineAsyncComponent(() => import('./modal/ModalFaqModify.vue')),
  },
  setup() {
    const store = faqStore();
    const router = useRouter();
    const { page, onCreated } = useGrid(store);
    const faqId = ref();
    const activeFaq = ref(null);
    const isModal = ref({
      isModifyModal: false,
      isWriteModal: false,
    });

    const modalOpen = (name, id) => {
      faqId.value = id;
      modalFnc(name);
    };
    const modalFnc = name => {
      isModal.value[name] = !isModal.value[name];
    };
    const activeFaqFnc = id => {
      activeFaq.value = activeFaq.value === id ? null : id;
    };
    const deleteFnc = id => {
      faqId.value = id;
      modalFnc();
    };
    onCreated();
    return {
      page,
      activeFaq,
      modalOpen,
      activeFaqFnc,
      deleteFnc,
      isModal,
      modalFnc,
      faqId,
    };
  },
});
</script>
<style scoped>
.faqActive {
  display: block;
}
</style>
