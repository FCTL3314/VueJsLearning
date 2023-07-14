<script setup>
import {ref, defineProps} from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Modal window',
  }
})

let isRulesRead = ref(false)

const modalBody = ref(null)

function checkIfScrolledToBottom() {
  if (modalBody.value.clientHeight + modalBody.value.scrollTop >= modalBody.value.scrollHeight) {
    isRulesRead.value = true
  }
}
</script>

<template>
<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ title }}</h5>
        <button
            @click="$emit('close')"
            type="button"
            class="btn btn-close"
            data-dismiss="modal"
            aria-label="Close"
        ></button>
      </div>
      <div
          class="modal-body"
          ref="modalBody"
          @scroll="checkIfScrolledToBottom"
      >
        <slot></slot>
      </div>
      <div class="modal-footer">
        <button
            type="button"
            class="btn btn-primary"
            :disabled="!isRulesRead"
            @click="$emit('close')"
        >Save changes</button>
        <button
            @click="$emit('close')"
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
        >Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.modal {
  display: block;
  &-body {
    height: 200px;
    overflow-y: scroll;
	}
}
</style>