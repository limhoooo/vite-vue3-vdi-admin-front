<template>
  <Modal :width="'1000px'">
    <template #modal-body>
      <p class="title">
        재택 VDI 추가
        <span class="subtitle">재택 VDI를 추가하는 영역입니다.</span>
      </p>
      <div class="contnet">
        <div class="mgb20px">
          <input type="text" class="textInput2" />
          <button class="navyBtn">검색</button>
        </div>

        <table class="table_04 _vertical">
          <colgroup>
            <col style="width: 20%" />
            <col style="width: 10%" />
            <col style="width: 30%" />
            <col style="width: " />
          </colgroup>
          <tbody>
            <tr>
              <th>VDI 그룹 명</th>
              <td class="_top black_txt">VDIGroup1</td>
            </tr>
            <tr>
              <th rowspan="2">VDI 선택</th>
              <td class="scroll_box nopd">
                <ul class="tit">
                  <li>선택</li>
                  <li>VDI 명</li>
                  <li>설명</li>
                </ul>
                <ul>
                  <li class="ov">
                    <ul>
                      <li>
                        <input id="radio-11" name="choice1" type="radio" class="ex_rd_form1" />
                        <label for="radio-11" class="radio-label"></label>
                      </li>
                      <li>VDI0000010101</li>
                      <li>설명이 보여지는 영역입니다.</li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <input id="radio-12" name="choice1" type="radio" class="ex_rd_form1" />
                        <label for="radio-12" class="radio-label"></label>
                      </li>
                      <li>VDI0000010101</li>
                      <li>설명이 보여지는 영역입니다.</li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <input id="radio-13" name="choice1" type="radio" class="ex_rd_form1" />
                        <label for="radio-13" class="radio-label"></label>
                      </li>
                      <li>VDI0000010101</li>
                      <li>설명이 보여지는 영역입니다.</li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <input id="radio-14" name="choice1" type="radio" class="ex_rd_form1" />
                        <label for="radio-14" class="radio-label"></label>
                      </li>
                      <li>VDI0000010101</li>
                      <li>설명이 보여지는 영역입니다.</li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <input id="radio-15" name="choice1" type="radio" class="ex_rd_form1" />
                        <label for="radio-15" class="radio-label"></label>
                      </li>
                      <li>VDI0000010101</li>
                      <li>설명이 보여지는 영역입니다.</li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <input id="radio-16" name="choice1" type="radio" class="ex_rd_form1" />
                        <label for="radio-16" class="radio-label"></label>
                      </li>
                      <li>VDI0000010101</li>
                      <li>설명이 보여지는 영역입니다.</li>
                    </ul>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
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
