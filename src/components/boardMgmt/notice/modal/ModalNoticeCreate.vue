<template>
  <Modal :width="'900px'">
    <template #modal-body>
      <p class="title">
        공지사항 작성
        <span class="subtitle">공지사항을 작성할 수 있는 영역입니다.</span>
      </p>
      <div class="contnet">
        <table class="table_04">
          <tr>
            <th>NAME</th>
            <td><span>최고수</span> 관리자</td>
          </tr>
          <tr>
            <th>TITLE</th>
            <td><input type="text" class="textInput4 textInput3" /></td>
          </tr>
          <tr>
            <th colspan="2"><p class="context">CONTEXT</p></th>
          </tr>
          <tr>
            <td colspan="2">
              <textarea class="noticeBoard" placeholder="공지사항을 입력해주세요."></textarea>
            </td>
          </tr>
          <tr>
            <th>FILE</th>
            <td>
              <div class="file-upload">
                <div class="file-select">
                  <div class="file-select-button" id="fileName11">파일찾기</div>
                  <div class="file-select-name" id="noFile11"></div>
                  <input type="file" name="chooseFile" id="chooseFile11" multiple />
                </div>
              </div>
              <div class="file-upload">
                <div class="file-select">
                  <div class="file-select-button" id="fileName12">파일찾기</div>
                  <div class="file-select-name" id="noFile12"></div>
                  <input type="file" name="chooseFile" id="chooseFile12" multiple />
                </div>
              </div>
              <div class="file-upload">
                <div class="file-select">
                  <div class="file-select-button" id="fileName13">파일찾기</div>
                  <div class="file-select-name" id="noFile13"></div>
                  <input type="file" name="chooseFile" id="chooseFile13" multiple />
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="grayBtn" @click="$emit('close', 'isCreateModal')">목록</button>
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
