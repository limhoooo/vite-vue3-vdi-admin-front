<template>
  <Modal :width="'600px'">
    <template #modal-body>
      <p class="title">
        VDI 그룹 수정
        <span class="subtitle">VDI 그룹을 수정하는 영역입니다.</span>
      </p>
      <div class="contnet">
        <table class="table_04 _vertical">
          <colgroup>
            <col style="width: 30%" />
            <col style="width: " />
          </colgroup>
          <tbody>
            <tr>
              <th>VDI 그룹 명</th>
              <td class="_top">
                <input type="text" class="textInput4" placeholder="VDIGroup1" />
              </td>
            </tr>
            <tr>
              <th>VDI 설명</th>
              <td>
                <textarea class="pop" placeholder="개발용"></textarea>
              </td>
            </tr>
            <tr>
              <th>사용여부</th>
              <td>
                <input
                  id="radio-3"
                  name="choice2"
                  type="radio"
                  checked="checked"
                  class="ex_rd_form2"
                />
                <label for="radio-3" class="radio-label mgr30px">사용</label>
                <input id="radio-4" name="choice2" type="radio" class="ex_rd_form2" />
                <label for="radio-4" class="radio-label">미사용</label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="blueBtn">등록</button>
        <button type="" class="grayBtn" @click="$emit('close', 'isModifyModal')">취소</button>
      </div>
    </template>
  </Modal>
</template>

<script>
import { computed, defineAsyncComponent, defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  components: {
    Modal: defineAsyncComponent(() => import('@/components/common/Modal.vue')),
  },
  props: {
    insertData: Object,
  },
  setup(props, { emit }) {},
});
</script>

<style></style>
