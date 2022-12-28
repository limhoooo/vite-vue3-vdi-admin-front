<template>
  <div class="content">
    <TheContentHeader />
    <table class="table_02">
      <tr>
        <th>NAME</th>
        <td><span>최고수</span> 관리자</td>
      </tr>
      <tr>
        <th>TITLE</th>
        <td><input type="text" class="textInput textInput3" v-model="writeData.title" /></td>
      </tr>
      <tr>
        <th colspan="2"><p class="context">CONTEXT</p></th>
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
import { noticeStore } from '@/stores/boardMgmt/noticeStore.js';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
  },
  setup() {
    const store = noticeStore();
    const router = useRouter();

    const writeData = ref({
      title: '',
      context: '',
      file: [],
    });
    const fileName = ref('');
    const handleFileChange = e => {
      writeData.value.file = e.target.files[0];
      fileName.value = e.target.files[0].name;
    };
    const moveList = () => router.push({ name: 'Notices' });

    const writeSubmit = () => {
      store.POST_NOTICE(writeData.value);
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
