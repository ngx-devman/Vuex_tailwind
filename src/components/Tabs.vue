<template>
  <div class="border-b border-gray-300">
    <div v-if="searchPlaceholder" class="flex justify-center mb-5 md:mb-0 md:justify-end">
      <input type="text"
        class="cusor-text border border-r-0 rounded-l-md w-70 py-2 px-3 focus:outline-none focus:shadow-outline"
        :placeholder="searchPlaceholder"
        v-model="searchQuery"
      >
        <button class="flex items-center justify-center px-4 py-2 border border-l-0 rounded-r-md">
          <img src="../assets/search.svg" class="" alt="search">
        </button>
    </div>
    <div class="flex justify-center md:justify-start">
      <div
        class="tab flex items-center justify-center cursor-pointer
        mb-0 py-3 text-md mr-8 text-gray-600 ease-in-out duration-300"
        :class="active === tab ? 'active' : ''"
        v-for="(tab, index) in tabsNames"
        :key="index"
        @click="changeTab(tab)"
      >
        {{ tab }}
      </div>
    </div>
  </div>

  <div v-if="active === 'Employees'" class="tab-list" v-bind:class="{'flex': active === 'Employees'}">
    <TabItem :tabsItems="emItems" />
  </div>

  <div v-else class="tab-list" v-bind:class="{'flex': active === 'Departments'}">
    <TabItem :tabsItems="deItems" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import TabItem from '@/components/Tab.vue'
import store from '../store'

export default defineComponent({
  name: 'Tabs',
  components: { TabItem },
  props: {
    tabsNames: {
      type: Array as PropType<Array<string>>,
      required: true
    },
    searchPlaceholder: String
  },
  data: function () {
    return {
      active: this.tabsNames && this.tabsNames.length > 0 ? this.tabsNames[0] as string : '',
      searchQuery: '',
      resultQuery: '',
      emItems: store.getters.emTabItems,
      deItems: store.getters.deTabItems
    }
  },
  watch: {
    searchQuery () {
      if (this.active === 'Employees') {
        this.emItems = this.filterData(store.getters.emTabItems)
      } else {
        this.deItems = this.filterData(store.getters.deTabItems)
      }
    }
  },
  emits: ['changed'],
  methods: {
    changeTab: function (tab: string) {
      this.$emit('changed', tab)
      this.active = tab
    },
    filterData (data: any) {
      const activeData = JSON.parse(JSON.stringify(data))
      return activeData.filter((data: any) => {
        return data.header.toLowerCase().includes(this.searchQuery.toLowerCase())
      })
    }
  }

})
</script>
<style lang="scss">
.tab {
  &-list{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    @media (max-width: 1199px) {
      justify-content: center;
    }
  }

  &:last-child {
    margin-right: 0;
  }

  &.active {
    border-bottom: 2px solid #24599C;
    color: #24599C;
    text-shadow: 0 0 .65px #333, 0 0 .65px #24599C;
  }
}
</style>
