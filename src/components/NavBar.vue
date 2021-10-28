<template>
    <nav
        v-show="isNavBarVisible"
        class="top-0 left-0 right-0 flex bg-white h-20 border-b border-gray-200 z-30 w-full
        transition-position dark:bg-gray-900 dark:border-gray-900"
    >
        <div class="flex items-center justify-items-center">
            <img src="../assets/logo-home.svg" class="p-5 ml-2" alt="logo">
            <img src="../assets/folder.svg" class="pr-2" alt="folder">
            Projects
        </div>
        <div class="absolute right-5 flex items-center align-middle">
            <img src="../assets/bell.svg" class="py-8 px-5" alt="notifications">
            <button type="button"
                @click="dropDownToggle"
                class="inline-flex items-center border-l-2 border-gray-100 m-auto w-25 h-25 py-0 px-4 text-sm font-medium text-gray-700 focus:outline-none" id="menu-button" aria-expanded="true" aria-haspopup="true">
                <img src="../assets/customer.svg" class="bg-gray-100 w-8 h-8 p-1 rounded-md mr-2" alt="profile">
                <span><img src="../assets/chevron-down-home.svg" class="ml-2" alt="dropdown"></span>
            </button>

            <div v-show="isDropdownVisible" class="origin-top-right absolute top-20 right-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                    <a href="#" class="text-gray-700 block px-4 py-2 text-sm" id="menu-item-0">Account settings</a>
                    <a href="#" class="text-gray-700 block px-4 py-2 text-sm" id="menu-item-1">Support</a>
                    <button type="button" class="text-gray-700 block w-full text-left px-4 py-2 text-sm" id="menu-item-3" @click="signOut">
                      Sign out
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
  name: 'NavBar',
  components: { },
  data () {
    return {
      isDropdownVisible: false,
      isNavBarVisible: true
    }
  },
  methods: {
    dropDownToggle () {
      this.isDropdownVisible = !this.isDropdownVisible
    },
    signOut () {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>
