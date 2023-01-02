<template>
  <div class="content">
    <TheContentHeader />
    <table class="table_02 boardTable">
      <tr>
        <th>
          <p>
            {{ detail.제목 }}
          </p>
          <span class="info" style="padding-left: 0">
            {{ detail.작성자 }}
          </span>
          <span class="info">
            {{ detail.날짜 }}
          </span>
        </th>
      </tr>
    </table>
    <div class="download">
      <a href="" download class="a2a4be">첨부파일.png</a>
      <a href="" download class="a2a4be">첨부파일.png</a>
    </div>
    <div class="noticeBoard">
      {{ detail.내용 }}
    </div>

    <div class="qnaTextarea">
      <div>
        <span class="a2a4be">최고수 관리자</span>
        <div class="float_Right">
          <button class="fffBtn fffBtn_sm" @click="commentFnc(detail.id)">등록</button>
          <button class="fffBtn fffBtn_sm">수정</button>
          <button class="navyBtn_sm qnaRemove" @click="isModalFnc">삭제</button>
        </div>
      </div>
      <textarea
        placeholder="1:1문의 게시판(Q&A 답변 내용 영역입니다.)"
        v-model="commentText"
      ></textarea>
    </div>

    <div class="btnBox btnBox2">
      <button type="" class="grayBtn" @click="moveList">목록</button>
    </div>
  </div>
  <ModalQnaDelete :id="detail.id" v-if="isModal" @close="isModalFnc" />
</template>
<script>
import { computed, defineAsyncComponent, defineComponent, ref } from 'vue';
import { qnaStore } from '@/stores/boardMgmt/qnaStore.js';
import { useRoute, useRouter } from 'vue-router';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
    ModalQnaDelete: defineAsyncComponent(() => import('./modal/ModalQnaDelete.vue')),
  },
  setup() {
    const store = qnaStore();
    const router = useRouter();
    const route = useRoute();
    const { getDetail, detail } = useGrid(store);

    const isModal = ref(false);
    const commentText = ref('');
    const moveList = () => router.push({ name: 'Qna' });
    const commentFnc = id => {
      store.POST_QNA_COMMENT(id, commentText.value);
    };
    const isModalFnc = () => {
      isModal.value = !isModal.value;
    };
    const onCreated = async () => {
      await getDetail(route.params.id);
    };
    onCreated();
    return {
      moveList,
      isModalFnc,
      commentFnc,
      detail,
      isModal,
      commentText,
    };
  },
});
</script>
<style scoped></style>
