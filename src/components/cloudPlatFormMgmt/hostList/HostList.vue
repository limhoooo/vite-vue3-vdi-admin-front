<template>
  <div class="list_group _3">
    <div>
      <p>Host 목록</p>
      <div class="table_top">
        <input type="secrch" class="textInput300" />
        <button class="grayBtn graySearch">검색</button>
        <div class="set_btn">
          <button type="" class="grayBtn server_add" @click="modalFnc('isRegister')">등록</button>
          <button type="" class="grayBtn server_edit" @click="modalFnc('isModify')">수정</button>
          <button type="" class="grayBtn server_del" @click="modalFnc('isDelete')">삭제</button>
        </div>
      </div>
      <table class="table_01">
        <colgroup>
          <col style="width: 30%" />
          <col style="width: " />
          <col style="width: 30%" />
        </colgroup>
        <thead>
          <tr>
            <th>Host 유형</th>
            <th>Host 명</th>
            <th>IP</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in page.hostList" :key="item">
            <td>{{ item.host유형 }}</td>
            <td>{{ item.host명 }}</td>
            <td>{{ item.IP }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="list_group_in">
      <p>Data Store 목록</p>
      <table class="table_01">
        <colgroup>
          <col style="width: 25%" />
          <col style="width: " />
          <col style="width: 25%" />
          <col style="width: 25%" />
        </colgroup>
        <thead>
          <tr>
            <th>Data Store 명</th>
            <th>전체 용량</th>
            <th>사용 용량</th>
            <th>남은 용량</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in page.dataStore" :key="item">
            <td>{{ item.dataStore }}</td>
            <td>{{ item.전체용량 }}</td>
            <td>{{ item.사용용량 }}</td>
            <td>{{ item.남은용량 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <HostListRegisterModal v-if="isModal.isRegister" @close="modalFnc" />
  <HostListModifyModal v-if="isModal.isModify" @close="modalFnc" />
  <HostListDeleteModal v-if="isModal.isDelete" @close="modalFnc" class="cloud_delModal" />
</template>
<script>
import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { CloudPlatFormStore } from '@/stores/cloudPlatForm/CloudPlatFormStore.js';
import { useGrid } from '@/composables/grid';
export default defineComponent({
  components: {
    HostListRegisterModal: defineAsyncComponent(() => import('./modal/HostListRegisterModal.vue')),
    HostListModifyModal: defineAsyncComponent(() => import('./modal/HostListModifyModal.vue')),
    HostListDeleteModal: defineAsyncComponent(() => import('./modal/HostListDeleteModal.vue')),
  },
  setup() {
    const store = CloudPlatFormStore();
    const { page } = useGrid(store);
    const isModal = ref({
      isRegister: false,
      isModify: false,
      isDelete: false,
    });
    const modalFnc = name => {
      isModal.value[name] = !isModal.value[name];
    };
    return { page, isModal, modalFnc };
  },
});
</script>
<style scoped></style>
