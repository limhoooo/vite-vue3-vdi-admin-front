<template>
  <div class="content v31 mainTaps">
    <TheContentHeader />
    <ul class="tabs">
      <li class="tab-link current" data-tab="tab-1">WEB</li>
      <!-- <li class="tab-link" data-tab="tab-2">MOBILE</li> -->
    </ul>

    <div id="tab-1" class="tab-content current">
      <p class="font24">재택근무용 PC 보안 정책 설정</p>

      <!-- 1. 윈도우보안설정변경 -->
      <WindowSecurity />

      <!-- 2. 화면보호기 설정 검사 및 변경 -->
      <ScreenSaver />

      <!-- 3. 비밀번호 정책 설정 -->
      <PassWordPolicy />

      <!-- 4. 윈도우 계정 정책 설정 -->
      <WindowAccount />

      <!--5. 백신 프로그램 설정 -->
      <VaccineProgram />

      <!--6. 파일 존재 여부 검사 및 설정 -->
      <FileExistence />

      <!--7. 레지스트리 환경 검사 및 설정 -->
      <RegistryCheck />

      <!--8. 프로세스 실행환경 검사 및 설정 -->
      <ProcessCheck />

      <!--9. 재택 VDI 제한시간 설정 -->
      <HomeVdiTimeSetting />
    </div>

    <div class="btnBox btnBox2">
      <button type="" class="blueBtn" @click="submitFnc">저장</button>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent } from 'vue';
import { homeSecurityStore } from '@/stores/atHomeMgmt/homeSecurityStore';

export default defineComponent({
  components: {
    TheContentHeader: defineAsyncComponent(() => import('@/layout/TheContentHeader.vue')),
    WindowSecurity: defineAsyncComponent(() => import('./WindowSecurity.vue')),
    ScreenSaver: defineAsyncComponent(() => import('./ScreenSaver.vue')),
    PassWordPolicy: defineAsyncComponent(() => import('./PassWordPolicy.vue')),
    WindowAccount: defineAsyncComponent(() => import('./WindowAccount.vue')),
    VaccineProgram: defineAsyncComponent(() => import('./VaccineProgram.vue')),
    FileExistence: defineAsyncComponent(() => import('./FileExistence.vue')),
    RegistryCheck: defineAsyncComponent(() => import('./RegistryCheck.vue')),
    ProcessCheck: defineAsyncComponent(() => import('./ProcessCheck.vue')),
    HomeVdiTimeSetting: defineAsyncComponent(() => import('./HomeVdiTimeSetting.vue')),
  },
  setup() {
    const store = homeSecurityStore();
    const onCreated = async () => {
      store.$reset();
      await store.GET_HOME_SECURITY();
    };
    const submitFnc = async () => {
      await store.POST_HOME_SECURITY();
    };
    onCreated();
    return { submitFnc };
  },
});
</script>

<style scoped></style>
