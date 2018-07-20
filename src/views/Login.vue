<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-text-field
              prepend-icon="person"
              name="nip"
              label="NIP"
              type="text"
              v-model="nip"
              :rules="nipRules"
            />
            <v-text-field
              prepend-icon="lock"
              name="password"
              label="Sandi"
              type="password"
              v-model="password"
              :rules="passwordRules"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            color="primary"
            :disabled="!valid"
            @click="submit"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      nip: null,
      nipRules: [
        v => !!v || 'NIP wajib diisi.',
        v => ( v && (v.length === 9 || v.length === 18)) || 'NIP harus 9 atau 18 digit.',
        v => /\d+/.test(v) || 'NIP hanya berisi angka.'
      ],
      password: null,
      passwordRules: [
        v => !!v || 'Sandi harus diisi.'
      ]
    }),
    methods: {
      submit() {
        if(this.$refs.form.validate()) {
          fetch('/api/auth-kemenkeu', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({nip: this.nip, password: this.password })
          })
            .then(res => res.json())
            .then(console.log)
        }
      }
    }
  }
</script>
