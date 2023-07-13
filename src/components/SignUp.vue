<script setup>
import {reactive} from 'vue';
import {required} from '@vuelidate/validators';
import useVuelidate from "@vuelidate/core";

const formData = reactive({
  username: '',
  password: '',
})

const rules = {
  username: {required},
  password: {required},
};

const v$ = useVuelidate(rules, formData)

const submitForm = async () => {
  if (await v$.value.$validate()) {
    alert('Form successfully submitted!')
  } else {
    alert('Form is invalid.')
  }
}
</script>

<template>
  <div class="container py-3">
    <h2>Log In</h2>
    <form @submit.prevent.stop="submitForm">
      <div class="mb-3">
        <label class="form-label" for="username">Username</label>
        <input
            v-model="v$.username.$model"
            id="username"
            type="text"
            class="form-control"
            :class="v$.username.$error ? 'is-invalid' : ''"
        >
        <span class="invalid-feedback" v-for="error in v$.username.$errors" :key="error.$uid">
          {{ error.$message }}
        </span>
      </div>
      <div class="mb-3">
        <label class="form-label" for="password">Password</label>
        <input
            v-model="v$.password.$model"
            id="password"
            type="text"
            class="form-control"
            :class="v$.password.$error ? 'is-invalid' : ''"
        >
        <span class="invalid-feedback" v-for="error in v$.password.$errors" :key="error.$uid">
          {{ error.$message }}
        </span>
      </div>
      <button class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<style scoped>

</style>