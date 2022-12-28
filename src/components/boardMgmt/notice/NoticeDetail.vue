<template>
  <div class="content">
    <TheContentHeader />
    <table class="table_02 boardTable">
      <tr>
        <th>
          <p>
            {{ detail.제목 }}
          </p>
          <span class="info" style="padding-left: 0">{{ detail.날짜 }}</span>
        </th>
      </tr>
    </table>
    <div class="noticeBoard">{{ detail.내용 }}</div>
    <table class="table_02">
      <tr>
        <th>이전글</th>
        <td>
          <a
            href="javascript:void(0)"
            class="adb2cfxt"
            @click="moveNotice(detail.이전공지사항id)"
            >{{ detail.이전제목 }}</a
          >
        </td>
      </tr>
      <tr>
        <th>다음글</th>
        <td>
          <a
            href="javascript:void(0)"
            @click="moveNotice(detail.다음공지사항id)"
            class="adb2cfxt"
            >{{ detail.다음제목 }}</a
          >
        </td>
      </tr>
    </table>

    <div class="btnBox btnBox2">
      <button type="" class="grayBtn" @click="moveList">목록</button>
      <button type="" class="blueBtn" @click="moveEdit(detail.id)">수정</button>
      <button type="" class="grayBtn noticeRemove" @click="isModalFnc">삭제</button>
    </div>
  </div>
  <ModalNoticeDelete :id="detail.id" v-if="isModal" @close="isModalFnc" />
</template>
<script>
import { computed, defineAsyncComponent, defineComponent, ref } from 'vue';
import { noticeStore } from '@/stores/boardMgmt/noticeStore.js';
import { useRoute, useRouter } from 'vue-router';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
    ModalNoticeDelete: defineAsyncComponent(() => import('./modal/ModalNoticeDelete.vue')),
  },

  setup() {
    const store = noticeStore();
    const router = useRouter();
    const route = useRoute();
    const { getDetail, detail } = useGrid(store);

    const isModal = ref(false);
    const moveList = () => router.push({ name: 'Notices' });
    const moveNotice = id => {
      router.push({ name: 'NoticeDetail', params: { id } });
    };
    const moveEdit = id => {
      router.push({ name: 'NoticeEdit', params: { id } });
    };
    const isModalFnc = () => {
      isModal.value = !isModal.value;
    };
    const onCreated = () => {
      store.$reset();
      getDetail(route.params.id);
    };
    onCreated();
    return {
      moveList,
      moveNotice,
      isModalFnc,
      moveEdit,
      detail,
      isModal,
    };
  },
});
</script>
<style scoped></style>
