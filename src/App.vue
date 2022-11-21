<template>
  <!-- 로그인페이지 -->
  <Login v-if="$route.name === 'Login'" />
  <template v-else>
    <TheHeader />
    <div class="container">
      <div class="wrapper">
        <!-- Main 페이지 -->
        <MainPage v-if="$route.name === 'Main'" />
        <!-- Admin 페이지 -->
        <Admin v-else />
      </div>
    </div>
    <TheFooter />
    <AppLoading></AppLoading>
  </template>
</template>
<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  components: {
    TheHeader: defineAsyncComponent(() => import('@/layout/TheHeader.vue')),
    TheFooter: defineAsyncComponent(() => import('@/layout/TheFooter.vue')),
    Login: defineAsyncComponent(() => import('@/views/Login.vue')),
    Admin: defineAsyncComponent(() => import('@/views/Admin.vue')),
    MainPage: defineAsyncComponent(() => import('@/components/main/Main.vue')),
    AppLoading: defineAsyncComponent(() => import('@/components/app/AppLoading.vue')),
  },
});
</script>
<style>
@import './assets/css/style.css';
@import 'ag-grid-enterprise/styles/ag-grid.css';
@import 'ag-grid-enterprise/styles/ag-theme-alpine.css';
@import '@hennge/vue3-pagination/dist/vue3-pagination.css';
.Pagination {
  justify-content: center;
}
</style>
