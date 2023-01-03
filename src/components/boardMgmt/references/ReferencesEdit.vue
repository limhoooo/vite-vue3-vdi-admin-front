<template>
  <div class="content">
    <TheContentHeader />
    <table class="table_02">
      <tr>
        <th>NAME</th>
        <td><span>최고수</span> 관리자</td>
      </tr>
      <tr>
        <th>CATEGORY</th>
        <td>
          <select class="select_02 select_04" v-model="detail.카테고리">
            <option value="선택">선택</option>
            <option value="다운로드">다운로드</option>
            <option value="사용자메뉴얼">사용자메뉴얼</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>TITLE</th>
        <td><input type="text" class="textInput textInput3" v-model="detail.제목" /></td>
      </tr>
      <tr>
        <th colspan="2">
          <p class="context">CONTEXT</p>
        </th>
      </tr>
    </table>
    <textarea class="noticeBoard" v-model="detail.내용"></textarea>
    <table class="table_02">
      <tr>
        <th>FILE</th>
        <td>
          <div class="filebox">
            {{ fileName }}
            <label for="ex_filename">파일찾기</label>
            <input type="file" id="ex_filename" class="upload-hidden" @change="handleFileChange" />
          </div>
        </td>
      </tr>
    </table>

    <div class="btnBox btnBox2">
      <button type="" class="grayBtn" @click="moveList">목록</button>
      <button type="" class="blueBtn noticeBtn" @click="writeModify">등록</button>
    </div>
  </div>
</template>
<script>
import { computed, defineAsyncComponent, defineComponent, ref } from 'vue';
import { referencesStore } from '@/stores/boardMgmt/referencesStore.js';
import { useRoute, useRouter } from 'vue-router';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
  },
  setup() {
    const store = referencesStore();
    const router = useRouter();
    const route = useRoute();
    const { getDetail, detail } = useGrid(store);

    const fileName = ref('');
    const handleFileChange = e => {
      detail.value.파일 = e.target.files[0];
      fileName.value = e.target.files[0].name;
    };
    const moveList = () => router.push({ name: 'References' });

    const writeModify = () => {
      store.MODIFY_REFERENCE(route.params.id);
    };
    const onCreated = async () => {
      await getDetail(route.params.id);
      fileName.value = detail.value.파일;
    };
    onCreated();
    return {
      fileName,
      detail,
      handleFileChange,
      moveList,
      writeModify,
    };
  },
});
</script>
<style scoped></style>
