<script setup>
import {reactive, ref} from 'vue';
import {required, maxLength, minLength, sameAs, helpers} from '@vuelidate/validators';
import useVuelidate from "@vuelidate/core";

let isRegistered = ref(false);

const countries = [
  {
    'label': 'Australia',
    'value': 'au',
  },
  {
    'label': 'United Kingdom',
    'value': 'uk',
  },
  {
    'label': 'United States of America',
    'value': 'usa',
  },
  {
    'label': 'Netherlands',
    'value': 'ne',
  },
  {
    'label': 'Cuba',
    'value': 'cu'
  },
]

const mustBeCool = helpers.withMessage(
    'This field must contain cool.',
    (value) => value.includes('cool'),
)

const formData = reactive({
  username: '',
  password: '',
  selectedCountries: ['au'],
  agreeWithRules: false,
})


const rules = {
  username: {
    mustBeCool,
    minLength: minLength(4),
  },
  password: {
    required,
    minLength: minLength(6),
  },
  selectedCountries: {maxLength: maxLength(3)},
  agreeWithRules: {sameAs: helpers.withMessage('You must agree with rules.', sameAs(true))},
};

const v$ = useVuelidate(rules, formData)

const submitForm = async () => {
  if (await v$.value.$validate()) {
    isRegistered.value = true;
  }
}
</script>

<template>
  <div class="container py-3">
    <h2>Log In</h2>
    <form v-if="!isRegistered" @submit.prevent.stop="submitForm">
      <div class="mb-3">
        <label class="form-label" for="username">Username</label>
        <input
            v-model="v$.username.$model"
            id="username"
            type="text"
            class="form-control"
            :class="v$.username.$error ? 'is-invalid' : ''"
        >
        <p class="invalid-feedback my-1" v-for="error in v$.username.$errors" :key="error.$uid">
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
        <p class="invalid-feedback my-1" v-for="error in v$.password.$errors" :key="error.$uid">
          {{ error.$message }}
        </p>
      </div>
      <div class="mb-3">
        <label class="form-label" for="countries">Countries</label>
        <select
            id="countries"
            multiple
            v-model="v$.selectedCountries.$model"
            class="form-control"
            :class="v$.selectedCountries.$error ? 'is-invalid' : ''"
        >
          <option
              v-for="(country, index) in countries"
              :key="index"
              :value="country.value"
          >
            {{ country.label }}
          </option>
        </select>
        <p class="invalid-feedback my-1" v-for="error in v$.selectedCountries.$errors" :key="error.$uid">
          {{ error.$message }}
        </p>
      </div>


      <div class="form-check mb-3">
        <input
            id="flexCheckDefault"
            v-model="v$.agreeWithRules.$model"
            type="checkbox"
            class="form-check-input"
            :class="v$.agreeWithRules.$error ? 'is-invalid' : ''"
        >
        <label class="form-check-label" for="flexCheckDefault">
          I agree with rules
        </label>
        <p class="invalid-feedback my-1" v-for="error in v$.agreeWithRules.$errors" :key="error.$uid">
          {{ error.$message }}
        </p>
      </div>


      <button class="btn btn-primary">Submit</button>
    </form>
    <h2 v-else>You're successfully registered!</h2>
  </div>
</template>

<style scoped>

</style>