<template>
  <Modal :width="'800px'">
    <template #modal-body>
      <p class="title">
        리소스 풀 상세등록
        <span class="subtitle">리소스 풀을 상세 등록하는 영역입니다.</span>
      </p>
      <div class="contnet">
        <div class="mgb20px">
          <input type="text" class="textInput2" />
          <button class="navyBtn">검색</button>
        </div>

        <table class="table_04 _vertical">
          <colgroup>
            <col style="width: 22%" />
            <col style="width: 10%" />
            <col style="width: 30%" />
            <col style="width: " />
          </colgroup>
          <tbody>
            <tr>
              <th>리소스 풀 명</th>
              <td class="_top black_txt">guestVM_pool</td>
            </tr>
            <tr>
              <th>구분</th>
              <td class="_top black_txt">
                <select class="select_03 _250 _h40">
                  <option>Virtual Machine</option>
                  <option>Storage</option>
                </select>
              </td>
            </tr>
            <tr>
              <th rowspan="2">Virtual Machine 선택</th>
              <td class="scroll_box nopd">
                <!-- Virtual Machine -->
                <div class="view-1">
                  <!-- //view-2 hide 상태-->
                  <ul class="tit">
                    <li>
                      <div class="checkBox inline">
                        <input type="checkbox" id="allCheckbox" name="" class="ex_rd_form3" />
                        <label for="allCheckbox">
                          <span></span>
                        </label>
                      </div>
                    </li>
                    <li>클러스터 명</li>
                    <li>VDI 명</li>
                  </ul>
                  <ul>
                    <li class="ov">
                      <ul>
                        <li>
                          <div class="checkBox inline">
                            <input
                              type="checkbox"
                              id="list_ck1"
                              name=""
                              class="ex_rd_form3 singleCheckbox"
                            />
                            <label for="list_ck1">
                              <span></span>
                            </label>
                          </div>
                        </li>
                        <li>host001</li>
                        <li>VDI001</li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li>
                          <div class="checkBox inline">
                            <input
                              type="checkbox"
                              id="list_ck2"
                              name=""
                              class="ex_rd_form3 singleCheckbox"
                            />
                            <label for="list_ck2">
                              <span></span>
                            </label>
                          </div>
                        </li>
                        <li>host001</li>
                        <li>VDI001</li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li>
                          <div class="checkBox inline">
                            <input
                              type="checkbox"
                              id="list_ck3"
                              name=""
                              class="ex_rd_form3 singleCheckbox"
                            />
                            <label for="list_ck3">
                              <span></span>
                            </label>
                          </div>
                        </li>
                        <li>host001</li>
                        <li>VDI001</li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li>
                          <div class="checkBox inline">
                            <input
                              type="checkbox"
                              id="list_ck4"
                              name=""
                              class="ex_rd_form3 singleCheckbox"
                            />
                            <label for="list_ck4">
                              <span></span>
                            </label>
                          </div>
                        </li>
                        <li>host001</li>
                        <li>VDI001</li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li>
                          <div class="checkBox inline">
                            <input
                              type="checkbox"
                              id="list_ck5"
                              name=""
                              class="ex_rd_form3 singleCheckbox"
                            />
                            <label for="list_ck5">
                              <span></span>
                            </label>
                          </div>
                        </li>
                        <li>host001</li>
                        <li>VDI001</li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li>
                          <div class="checkBox inline">
                            <input
                              type="checkbox"
                              id="list_ck6"
                              name=""
                              class="ex_rd_form3 singleCheckbox"
                            />
                            <label for="list_ck6">
                              <span></span>
                            </label>
                          </div>
                        </li>
                        <li>host001</li>
                        <li>VDI001</li>
                      </ul>
                    </li>
                  </ul>
                </div>
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
