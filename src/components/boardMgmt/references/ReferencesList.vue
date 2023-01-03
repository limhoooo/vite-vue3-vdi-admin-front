<template>
  <div class="content">
    <button class="blueBtn writBtn b016writBtn" @click="moveWrite">글쓰기</button>
    <table class="table_01 table_fixed">
      <thead>
        <tr>
          <th>NO.</th>
          <th>제목</th>
          <th>게시글 구분</th>
          <th>작성자</th>
          <th>다운로드</th>
          <th>등록일자</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in page" :key="item" @click="moveDetail(item.id)">
          <td>
            {{ item.NO }}
          </td>
          <td>
            {{ item.제목 }}
          </td>
          <td>{{ item.게시글구분 }}</td>
          <td>{{ item.작성자 }}</td>
          <td onclick="event.cancelBubble=true">
            <a href="" download="" class="downloadIcon"></a>
          </td>
          <td>{{ item.등록일자 }}</td>
        </tr>
      </tbody>
    </table>
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
  </div>
</template>
<script>
import { computed, defineAsyncComponent, defineComponent, ref } from 'vue';
import { referencesStore } from '@/stores/boardMgmt/referencesStore.js';
import { useRoute, useRouter } from 'vue-router';
import { useGrid } from '@/composables/grid';

export default defineComponent({
  components: {},
  setup() {
    const store = referencesStore();
    const router = useRouter();
    const { filterData, page, getList, onCreated, list } = useGrid(store);

    const moveDetail = id => {
      router.push({ name: 'ReferencesDetail', params: { id } });
    };
    const moveWrite = () => {
      router.push({ name: 'ReferencesWrite' });
    };
    onCreated();
    return {
      page,
      moveDetail,
      moveWrite,
    };
  },
});
</script>

<style scoped></style>
