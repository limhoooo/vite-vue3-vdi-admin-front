<template>
  <Modal :width="'1000px'">
    <template #modal-body>
      <p class="title">
        재택 VDI 할당
        <span class="subtitle">재택 VDI를 할당하는 영역입니다.</span>
      </p>
      <div class="contnet">
        <div class="Under_line">
          <select class="select_03 _160">
            <option>전체</option>
          </select>
          <input type="text" class="textInput2" />
          <button class="navyBtn">검색</button>
        </div>

        <div class="ass_group scroll_box mg3pro">
          <p class="tit">#재택 VDI 그룹 선택</p>
          <ul class="tit">
            <li>선택</li>
            <li>그룹 명</li>
            <li>설명</li>
          </ul>
          <ul class="ass_inbox">
            <li class="ov">
              <ul>
                <li>
                  <input id="radio-11" name="choice1" type="radio" class="ex_rd_form1" />
                  <label for="radio-11" class="radio-label"></label>
                </li>
                <li>VDIGroup001 (5)</li>
                <li>개발용 그룹입니다.</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <input id="radio-12" name="choice1" type="radio" class="ex_rd_form1" />
                  <label for="radio-12" class="radio-label"></label>
                </li>
                <li>VDIGroup001 (5)</li>
                <li>개발용 그룹입니다.</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <input id="radio-13" name="choice1" type="radio" class="ex_rd_form1" />
                  <label for="radio-13" class="radio-label"></label>
                </li>
                <li>VDIGroup001 (5)</li>
                <li>개발용 그룹입니다.</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <input id="radio-14" name="choice1" type="radio" class="ex_rd_form1" />
                  <label for="radio-14" class="radio-label"></label>
                </li>
                <li>VDIGroup001 (5)</li>
                <li>개발용 그룹입니다.</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <input id="radio-15" name="choice1" type="radio" class="ex_rd_form1" />
                  <label for="radio-15" class="radio-label"></label>
                </li>
                <li>VDIGroup001 (5)</li>
                <li>개발용 그룹입니다.</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <input id="radio-16" name="choice1" type="radio" class="ex_rd_form1" />
                  <label for="radio-16" class="radio-label"></label>
                </li>
                <li>VDIGroup001 (5)</li>
                <li>개발용 그룹입니다.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="ass_group scroll_box">
          <p class="tit">#재택 사용자 그룹 선택</p>
          <ul class="tit">
            <li>선택</li>
            <li>그룹 명</li>
            <li>설명</li>
          </ul>
          <ul class="ass_inbox">
            <li class="ov">
              <ul>
                <li>
                  <input id="radio-17" name="choice1" type="radio" class="ex_rd_form1" />
                  <label for="radio-17" class="radio-label"></label>
                </li>
                <li>VDIUser001 (10)</li>
                <li>경영지원 그룹입니다.</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <input id="radio-18" name="choice1" type="radio" class="ex_rd_form1" />
                  <label for="radio-18" class="radio-label"></label>
                </li>
                <li>VDIUser001 (10)</li>
                <li>경영지원 그룹입니다.</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <input id="radio-19" name="choice1" type="radio" class="ex_rd_form1" />
                  <label for="radio-19" class="radio-label"></label>
                </li>
                <li>VDIUser001 (10)</li>
                <li>경영지원 그룹입니다.</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <input id="radio-20" name="choice1" type="radio" class="ex_rd_form1" />
                  <label for="radio-20" class="radio-label"></label>
                </li>
                <li>VDIUser001 (10)</li>
                <li>경영지원 그룹입니다.</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <input id="radio-21" name="choice1" type="radio" class="ex_rd_form1" />
                  <label for="radio-21" class="radio-label"></label>
                </li>
                <li>VDIUser001 (10)</li>
                <li>경영지원 그룹입니다.</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <input id="radio-22" name="choice1" type="radio" class="ex_rd_form1" />
                  <label for="radio-22" class="radio-label"></label>
                </li>
                <li>VDIUser001 (10)</li>
                <li>경영지원 그룹입니다.</li>
              </ul>
            </li>
          </ul>
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
