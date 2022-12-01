<template>
  <!--  <div v-if="isLoading" class="loading">Loading</div>-->
  <div v-if="isLoading" class="modalWrap">
    <svg class="spinner" viewBox="0 0 50 50">
      <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
    </svg>
  </div>
</template>
<script setup>
import { useLoadingStore } from '@/stores/loading';
import { storeToRefs } from 'pinia';
const loadingStore = useLoadingStore();
const { isLoading } = storeToRefs(loadingStore);
</script>
<script>
export default {};
</script>

<style>
.spinnerWrap {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.spinner {
  -webkit-animation: rotate 2s linear infinite;
  animation: rotate 2s linear infinite;
  z-index: 99999;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;
}

.spinner .path {
  stroke: #93bfec;
  stroke-linecap: round;
  -webkit-animation: dash 1.5s ease-in-out infinite;
  animation: dash 1.5s ease-in-out infinite;
}

@-webkit-keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>
