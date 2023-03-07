<template>
  <v-sheet width="300">
    <v-text-field
        label="Indirizzo Email"
        v-model="email"
        variant="outlined"
        clearable
    >
    </v-text-field>
    <v-text-field
        label="Password"
        v-model="psw"
        variant="outlined"
        :type="showPsw ? 'text' : 'password'"
        :append-inner-icon="showPsw ? mdi-eye : 'mdi-eye-off'"
    >
    </v-text-field>

    <v-btn
      class="btn-color-style w-100 btn-hover"
      variant="flat"
      size="large"

    >
      Connettiti
    </v-btn>
  </v-sheet>

</template>

<script>
export default {
  name: "LoginUser",
  data() {
    return {
      email: '',
      psw: '',
      showPsw: false,
      rulesPsw: {
        required: value => !!value || 'Required',
        min: value => value.length > 6 || 'La password deve contenere almeno 6 caratteri',
      }
    }
  }
}
</script>

<style scoped>
  .btn-hover {
    transition: .3s all;
  }

  .btn-hover:hover {
    transform: scale(1.025);
  }
</style>