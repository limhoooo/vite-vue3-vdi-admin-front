<template>
  <Modal :width="'900px'">
    <template #modal-body>
      <p class="title">
        공지사항 조회
        <span class="subtitle">공지사항의 상세내용을 조회 할 수 있는 영역입니다.</span>
      </p>
      <div class="contnet">
        <table class="table_04 boardTable">
          <tr>
            <th class="txtleft">
              <p>공지사항 제목 표기 부분입니다.</p>
              <span class="info" style="padding-left: 0">2022.06.07</span>
            </th>
          </tr>
        </table>
        <div class="noticeBoard">공지사항 내용 표기 영역입니다.</div>
        <table class="table_04">
          <tr>
            <th>이전글</th>
            <td><a href="" class="adb2cfxt">이전글 공지사항 제목 표기 영역입니다.</a></td>
          </tr>
          <tr>
            <th>다음글</th>
            <td><a href="" class="adb2cfxt">다음글 공지사항 제목 표기 영역입니다.</a></td>
          </tr>
        </table>
      </div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="grayBtn" @click="$emit('close', 'isDetailModal')">취소</button>
        <button type="" class="blueBtn notice_edit">수정</button>
        <button type="" class="grayBtn noticeRemove">삭제</button>
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
    id: Number,
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
