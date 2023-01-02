<template>
  <Modal :width="'900px'">
    <template #modal-body>
      <p class="title">
        1:1문의 글 조회
        <span class="subtitle">1:1문의 글의 상세내용을 조회하는 영역 입니다.</span>
      </p>
      <div class="contnet">
        <table class="table_04">
          <tr>
            <th class="txtleft">
              <p>문의 드립니다.</p>
              <span class="info" style="padding-left: 0">홍길동</span>
              <span class="info">2022.05.05</span>
            </th>
          </tr>
        </table>
        <div class="download">
          <a href="" download>첨부파일.png</a>
          <a href="" download>첨부파일.png</a>
        </div>
        <div class="noticeBoard">문의사함내용 표기 영역으로 사용됩니다.</div>

        <div class="qnaTextarea">
          <div>
            <span>답변자 : 최고수 관리자</span>
            <div class="float_Right">
              <button class="fffBtn navyBtn_sm">등록</button>
              <button class="fffBtn navyBtn_sm">수정</button>
              <button class="fffBtn fffBtn_sm qnaRemove">삭제</button>
            </div>
          </div>
          <textarea placeholder="1:1문의 게시판(Q&A 답변 내용 영역입니다.)"></textarea>
        </div>
      </div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="grayBtn" @click="$emit('close', 'isDetailModal')">목록</button>
        <button type="" class="blueBtn">등록</button>
      </div>
    </template>
  </Modal>
</template>

<script>
import { computed, defineAsyncComponent, defineComponent, reactive, ref } from 'vue';
import { noticeStore } from '@/stores/boardMgmt/noticeStore.js';

export default defineComponent({
  components: {
    Modal: defineAsyncComponent(() => import('@/components/common/Modal.vue')),
  },
  props: {
    clickCellData: Object,
  },
  setup(props, { emit }) {
    const store = noticeStore();
    const deleteFnc = () => {
      store.DELETE_NOTICE(props.id);
      emit('close');
    };
    return {
      deleteFnc,
    };
  },
});
</script>

<style></style>
