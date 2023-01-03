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
          <select class="select_02 select_04" v-model="writeData.category">
            <option value="선택">선택</option>
            <option value="다운로드">다운로드</option>
            <option value="사용자메뉴얼">사용자메뉴얼</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>TITLE</th>
        <td><input type="text" class="textInput textInput3" v-model="writeData.title" /></td>
      </tr>
      <tr>
        <th colspan="2">
          <p class="context">CONTEXT</p>
        </th>
      </tr>
    </table>
    <textarea class="noticeBoard" v-model="writeData.context"></textarea>
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
      <button type="" class="blueBtn noticeBtn" @click="writeSubmit">등록</button>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { referencesStore } from '@/stores/boardMgmt/referencesStore.js';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
  },
  setup() {
    const store = referencesStore();
    const router = useRouter();
    const writeData = ref({
      category: '선택',
      title: '',
      context: '',
      file: [],
    });
    const fileName = ref('');
    const handleFileChange = e => {
      writeData.value.file = e.target.files[0];
      fileName.value = e.target.files[0].name;
    };
    const moveList = () => router.push({ name: 'References' });

    const writeSubmit = () => {
      store.POST_REFERENCE(writeData.value);
    };

    return {
      handleFileChange,
      writeSubmit,
      writeData,
      fileName,
      moveList,
    };
  },
});
</script>
<style scoped></style>
