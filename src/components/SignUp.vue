<script setup>
import {reactive} from 'vue';
import {required, helpers} from '@vuelidate/validators';
import useVuelidate from "@vuelidate/core";

const formData = reactive({
  username: '',
  password: '',
})

const mustBeCool = helpers.withMessage(
    'This field must contain cool.',
    (value) => value.includes('cool'),
)


const rules = {
  username: {
    mustBeCool,
  },
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
        <p class="invalid-feedback" v-for="error in v$.username.$errors" :key="error.$uid">
          {{ error.$message }}
        </p>
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
        <p class="invalid-feedback" v-for="error in v$.password.$errors" :key="error.$uid">
          {{ error.$message }}
        </p>
      </div>
      <button class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<style scoped>

</style>