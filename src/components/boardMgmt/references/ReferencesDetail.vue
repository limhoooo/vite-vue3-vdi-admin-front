<template>
  <div class="content">
    <TheContentHeader />
    <table class="table_02 boardTable">
      <tr>
        <th>
          <p>{{ detail.제목 }}</p>
          <span class="info" style="padding-left: 0">{{ detail.작성자 }}</span>
          <span class="info">{{ detail.날짜 }}</span>
        </th>
      </tr>
    </table>
    <div class="download">
      <a href="" download class="a2a4be">첨부파일.png</a>
      <a href="" download class="a2a4be">첨부파일.png</a>
    </div>
    <div class="noticeBoard">{{ detail.내용 }}</div>

    <div class="btnBox btnBox2">
      <button type="" class="grayBtn" @click="moveList">목록</button>
      <button type="" class="blueBtn" @click="moveEdit(detail.id)">수정</button>
      <button type="" class="grayBtn noticeRemove" @click="isModalFnc">삭제</button>
    </div>
  </div>
  <ModalReferencesDelete :id="detail.id" v-if="isModal" @close="isModalFnc" />
</template>
<script>
import { computed, defineAsyncComponent, defineComponent, ref } from 'vue';
import { referencesStore } from '@/stores/boardMgmt/referencesStore.js';
import { useRoute, useRouter } from 'vue-router';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
    ModalReferencesDelete: defineAsyncComponent(() => import('./modal/ModalReferencesDelete.vue')),
  },
  setup() {
    const store = referencesStore();
    const router = useRouter();
    const route = useRoute();
    const { getDetail, detail } = useGrid(store);

    const isModal = ref(false);
    const moveList = () => router.push({ name: 'References' });
    const moveEdit = id => {
      router.push({ name: 'ReferencesEdit', params: { id } });
    };
    const isModalFnc = () => {
      isModal.value = !isModal.value;
    };
    const onCreated = () => {
      getDetail(route.params.id);
    };
    onCreated();
    return {
      moveList,
      isModalFnc,
      moveEdit,
      detail,
      isModal,
    };
  },
});
</script>
<style scoped></style>
