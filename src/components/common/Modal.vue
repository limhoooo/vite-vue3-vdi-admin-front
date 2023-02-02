<template>
  <div class="modalWrap">
    <div class="modalIner" :style="{ width: width, 'max-width': maxWidth }">
      <div class="modal-content">
        <slot name="modal-header"></slot>
        <slot name="modal-body"></slot>
        <slot name="modal-footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    width: {
      type: String,
      defalut: 'auto',
    },
    maxWidth: {
      type: String,
      defalut: 'none',
    },
  },
});
</script>

<style>
.modalWrap {
  display: block;
}
</style>
