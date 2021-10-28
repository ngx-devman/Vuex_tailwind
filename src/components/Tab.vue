<template>
  <div class="tab-item shadow-sm rounded-md border border-gray-200 mb-5 mx-4"
    v-for="(tabItem, idx) in tabsItems"
    :key="idx">
    <div v-if="tabItem.header" class="tab-item-header text-gray-500"> {{ tabItem.header }} </div>
    <div class="tab-item-body">
      <ul class="work-list" v-if="tabItem.workList">
        <li class="work-item" v-for="(item, i) in tabItem.workList"
            :key="i"
        >
          <div class="tab-item-inner">
            <img :class="item.logo === 'green' ? 'tab-item-inner-logo' : 'tab-item-inner-logo orange'" :src="require(`../assets/tab-logo-${item.logo}.svg`)" alt="tabItem-logo">
            <div class="tab-item-inner-body">
              <div class="tab-item-inner-title"><span>{{ item.smallTitle }}</span> &nbsp; {{ item.title }}</div>
              <div v-if="item.id" class="tab-item-inner-desc"> # {{item.id}} &nbsp; {{ item.label }} &nbsp; <span v-if="item.span"> {{ item.span }}</span></div>
            </div>
          </div>
        </li>
      </ul>
      <div class="tab-item-description" v-if="tabItem.desc">{{ tabItem.desc }}</div>
      <div v-if="tabItem.social" class="relative">
        <div class="tab-item-social flex justify-start items-center ml-5 absolute top-5" v-for="(item, idx) in tabItem.social" :key="idx">
          <div class="liked flex justify-center items-center mr-3"><img src="../assets/liked.svg" class="mr-3" alt="like">{{item.liked}}</div>
          <div class="watched flex justify-center items-center mr-3"><img src="../assets/watched.svg" class="mr-3" alt="watch">{{item.watched}}</div>
          <div class="subscribed flex justify-center items-center mr-3"><img src="../assets/subscribed.svg" class="mr-3" alt="subscribe">{{item.subscribed}}</div>
        </div>
      </div>
      <div class="tab-item-admin flex flex-col" v-if="tabItem.buttons">
        <button :class="idx === 0 ? 'btn primary' : 'btn secondary' " v-for="(button, idx) in tabItem.buttons" :key="idx"> {{ button.title }} </button>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TabItem',
  props: {
    tabsItems: {
    }
  }
})
</script>
<style lang="scss">
.work {
  &-item{
    &:nth-child(even){
      background-color: #F9FAFB;
    }
  }
}
.tab-item {
  $bgColor: #F9FAFB;
  width: 360px;
  min-height: 190px;

  &:first-child{
    margin-left: 0;
    @media (max-width: 1199px) {
      margin-left: 20px;
    }
  }

  &:nth-child(3n+3){
    margin-right: 0;
    @media (max-width: 1199px) {
      margin-right: 20px;
    }
  }

  &:nth-child(4n+4){
    margin-left: 0;
    @media (max-width: 1199px) {
      margin-left: 20px;
    }
  }
  &-admin{
    & .btn{
      font-size: 16px;
      border-radius: 6px;
      font-weight: 700;
      padding: 10px 0;
      margin: 0 20px;
      transition: 300ms ease-in-out;
      &.primary{
        margin-top: 36px;
        background-color: #24599C;
        color: #fff;
        margin-bottom: 16px;

        &:hover{
          color: #24599C;
          background-color: #E9EEF5;
        }
      }
      &.secondary{
        color: #24599C;
        background-color: #E9EEF5;
        margin-bottom: 20px;

        &:hover{
          background-color: #24599C;
          color: #fff;
        }
      }
    }
  }

  &-description{
    padding: 0 20px;
    color: #9FA6B1;
    font-size: 14px;
    font-weight: 400;
  }

  &-inner{
    display: flex;
    align-items: center;
    padding: 16px 20px;
    &-desc{
      color: #48525F;
      font-size: 14px;
      font-weight: 400;
      & span{
        font-size: 14px;
        font-weight: 400;
        color: #E19F27;
      }
    }
    &-title{
      margin-bottom: 4px;
      font-size: 14px;
      font-weight: 700;
      color: #48525F;

      & span{
        color: #9FA6B1;
        font-weight: 400;
      }
    }

    &-logo{
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #3BC38E;
      border-radius: 6px;
      padding: 7px;
      margin-right: 12px;

      &.orange{
        background-color: #E19F27;
      }
    }
  }

  &-header{
    padding: 12px 19px;
    background-color: $bgColor;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }

  &-body{
    font-size: 14px;
    font-weight: 400;
    color: #9FA6B1;
  }
}
</style>
