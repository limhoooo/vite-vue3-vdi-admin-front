<template>
  <Modal :width="'1000px'">
    <template #modal-body>
      <p class="title">
        재택 사용자 추가
        <span class="subtitle">재택 사용자를 추가하는 영역입니다.</span>
      </p>
      <div class="contnet">
        <div class="mgb20px">
          <input type="text" class="textInput2" />
          <button class="navyBtn">검색</button>
        </div>

        <table class="table_04 _vertical">
          <colgroup>
            <col style="width: 20%" />
            <col style="width: " />
          </colgroup>
          <tbody>
            <tr>
              <th>사용자 그룹명</th>
              <td class="_top black_txt">VDIUser001</td>
            </tr>
            <tr>
              <th rowspan="2">사용자 선택</th>
              <td class="scroll_box nopd">
                <ul class="tit">
                  <li>선택</li>
                  <li>사용자 아이디</li>
                  <li>사용자 명</li>
                </ul>
                <ul>
                  <li class="ov">
                    <ul>
                      <li>
                        <div class="checkBox inline v31ckDiv">
                          <input type="checkbox" id="chd11" name="" />
                          <label for="chd11"> <span></span></label>
                        </div>
                      </li>
                      <li>User001</li>
                      <li>최고수</li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <div class="checkBox inline v31ckDiv">
                          <input type="checkbox" id="chd12" name="" />
                          <label for="chd12"> <span></span></label>
                        </div>
                      </li>
                      <li>User001</li>
                      <li>최고수</li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <div class="checkBox inline v31ckDiv">
                          <input type="checkbox" id="chd13" name="" />
                          <label for="chd13"> <span></span></label>
                        </div>
                      </li>
                      <li>User001</li>
                      <li>최고수</li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <div class="checkBox inline v31ckDiv">
                          <input type="checkbox" id="chd14" name="" />
                          <label for="chd14"> <span></span></label>
                        </div>
                      </li>
                      <li>User001</li>
                      <li>최고수</li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <div class="checkBox inline v31ckDiv">
                          <input type="checkbox" id="chd15" name="" />
                          <label for="chd15"> <span></span></label>
                        </div>
                      </li>
                      <li>User001</li>
                      <li>최고수</li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <div class="checkBox inline v31ckDiv">
                          <input type="checkbox" id="chd16" name="" />
                          <label for="chd16"> <span></span></label>
                        </div>
                      </li>
                      <li>User001</li>
                      <li>최고수</li>
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
