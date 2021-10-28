<template>
  <div class="w-full">
    <NavBar />
    <div class="w-full max-w-6xl m-auto my-10">
      <h1 class="text-2xl text-center md:text-3xl mb-5 md:mb-0 md:text-left md:items-start text-gray-700">Project Dashboard</h1>
      <Tabs
        :tabsNames="tabsNames"
        :searchPlaceholder="searchPlaceholder"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tabs from '@/components/Tabs.vue'
import NavBar from '@/components/NavBar.vue'

export default defineComponent({
  data () {
    return {
      tabsNames: [
        'Employees', 'Departments'
      ],
      searchPlaceholder: 'subject or reference'
    }
  },
  name: 'Home',
  components: {
    Tabs,
    NavBar
  },
  props: {
    isAuth: Boolean
  }
})
</script>

<style lang="scss">
</style>
