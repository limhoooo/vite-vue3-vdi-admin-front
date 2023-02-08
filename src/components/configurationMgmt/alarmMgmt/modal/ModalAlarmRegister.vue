<template>
  <Modal :width="'750px'">
    <template #modal-body>
      <div class="UserModal">
        <p class="title">수신자 등록</p>
        <div class="contnet">
          <div class="UserSelectionDiv">
            <select class="select_03">
              <option>전체</option>
              <option>사업부</option>
            </select>
            <input type="text" class="textInput2" placeholder="이름 또는 전화번호 입력" />
            <button class="navyBtn">검색</button>
          </div>

          <div class="check_hade">
            <div class="checkBox v31ckDiv">
              <input type="checkbox" id="u010check_th9" class="checkAll" name="" />
              <label for="u010check_th9">
                <span></span>
              </label>
            </div>
            <p>전체선택</p>
          </div>

          <p class="noti redTxt">* 수신자를 선택하는 영역입니다.</p>

          <div class="receiver_check">
            <div class="checkgroup">
              <div class="checkBox v31ckDiv">
                <input type="checkbox" id="u010check111" name="" class="u010check_ex chkbox" />
                <label for="u010check111"> <span></span></label>
              </div>
              <ul class="receiver">
                <li>김필승 대리</li>
                <li>사업부</li>
                <li>
                  010-1234-5678<br />
                  user001@user.com
                </li>
              </ul>
            </div>
            <div class="checkgroup">
              <div class="checkBox v31ckDiv">
                <input type="checkbox" id="u010check222" name="" class="u010check_ex chkbox" />
                <label for="u010check222"> <span></span></label>
              </div>
              <ul class="receiver">
                <li>김필승 대리</li>
                <li>사업부</li>
                <li>
                  010-1234-5678<br />
                  user001@user.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #modal-footer>
      <div class="btnbox">
        <button type="" class="blueBtn">등록</button>
        <button type="" class="grayBtn" @click="$emit('close', 'isRegisterModal')">취소</button>
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
