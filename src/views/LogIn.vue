<template>
<div class="container flex justify-center items-center h-screen m-auto">
  <div class="w-full max-w-sm px-5 md:px-0 -mt-10">
    <img src="../assets/logo.png" class="m-auto" alt="logo">
    <h1 class="text-3xl font-semibold mb-5 mx-auto text-center">Sign in to Task Manager</h1>
    <form class="bg-white shadow rounded px-8 pt-6 pb-8">
      <div class="email-input mb-1">
        <label class="block text-gray-600 text-md font-bold mb-2" for="email">Email</label>
        <input id="email"
          class="shadow-sm appearance-none border rounded w-full py-2 px-3 text mb-3 leading-tight focus:outline-none focus:shadow-outline"
          v-model="currentEmail"
          type="email"
          placeholder="you@example.com"
          required
        />
          <span class="text-sm text-red-600">{{ emailError }}</span>
      </div>

      <div class="password-input mb-1">
        <label for="password" class="block text-gray-600 text-md font-bold mb-2">Password</label>
        <input
          class="shadow-sm appearance-none border rounded w-full py-2 px-3 text  mb-3 leading-tight focus:outline-none focus:shadow-outline"
          v-model="currentPassword"
          type="password"
          id="password"
          placeholder="Password"
          required
          >
          <span class="text-sm text-red-600">{{ passwordError }}</span>
      </div>
      <div class="flex items-center justify-between">
        <label class="inline-flex items-center">
          <input type="checkbox" class="form-checkbox w-4 h-4" v-model="keepLogin" required>
          <span class="ml-2 text-sm">Keep me logged in</span>
        </label>
        <a href="#" class="inline-block align-baseline font-bold text-sm forgot-password">Forgot password?</a>
      </div>
      <span class="text-sm text-red-600">{{ confirmError }}</span>
      <router-link to="/home"
        class="btn w-full text-white font-bold text-center py-3 px-4 rounded mt-9" type="submit" @click="submitForm"
      >Sign In</router-link>
    </form>
  </div>
</div>
  <div class="lang">
    <button class="lang-switcher">
      <select class="lang-list">
        <option class="lang-item" v-for="(lang, i) in langList" :key="i" :value=i>
          {{ lang }}
        </option>
      </select>
    </button>
    <img src="../assets/globe.svg" alt="globe">
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentEmail: null,
      currentPassword: null,
      emailError: null,
      passwordError: null,
      confirmError: null,
      keepLogin: false,
      isAuth: false,
      submitted: Boolean,
      langList: ['عربي', 'english', 'poland', 'germany', 'ukraine']
    }
  },
  methods: {
    submitForm () {
      if (!this.currentEmail) {
        this.emailError = 'Email required'
        return
      } else if (!this.validEmail(this.currentEmail)) {
        this.emailError = 'Valid Email required'
        return
      } else {
        this.emailError = null
      }

      if (!this.currentPassword) {
        this.passwordError = 'Password Required'
        return
      } else if (this.currentPassword.length < 6) {
        this.passwordError = 'Password should be at least 6'
        return
      } else {
        this.passwordError = null
      }
      if (!this.keepLogin) {
        this.confirmError = 'Confirm required'
        return
      } else {
        this.confirmError = null
      }
      this.$store.dispatch('login', {
        email: this.currentEmail,
        password: this.currentPassword
      }).then((res) => {
        if (res) {
          this.$toast.open({
            message: 'Login Succeed!',
            type: 'success',
            duration: 5000,
            position: 'top-right'
          })
        } else {
          this.$toast.open({
            message: 'Login Failed, Try again!',
            type: 'error',
            duration: 5000,
            position: 'top-right'
          })
          this.currentEmail = null
          this.currentPassword = null
          this.keepLogin = false
        }
      })
    },
    validEmail (currentEmail) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(currentEmail)
    }
  }
}
</script>

<style scoped lang="scss">
.lang {
  position: absolute;
  display: flex;
  align-items: center;
  top: 30px;
  right: 30px;
  padding-left: 20px;

  &-item, &-list {
    margin-right: 10px;
    color: #24599C;
    font-size: 14px;
    font-weight: 700;
    appearance: none;
    &:focus{
      outline: none;
    }
  }
  &-item{
    padding: 5px 10px;
  }
  &-list{
    background-image: url('../assets/chevron-down.svg');
    background-position: left;
    padding-left: 20px;
    background-repeat: no-repeat;
  }

  &-switcher {
    border: none;
    background: none;
    margin-right: 5px;
  }
}

.forgot-password {
  color: #24599C;
}

input[type='checkbox'] {
  border: 1px solid #24599C;
}
.btn[type = 'submit'] {
  background-color: #24599C;
}
</style>
