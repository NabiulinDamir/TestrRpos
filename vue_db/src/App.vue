<template>
  <div class="container">
    <div class="sidebar-toggle" @click="toggleMenu">&#5125;</div>
    <LauoutHeader></LauoutHeader>
    <LauoutSidebar :openSidebar = isOpenMenu></LauoutSidebar>
    <div :class="['content', {content_full: !isOpenMenu}]">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import LauoutHeader from "./components/layout/Header.vue"
import LauoutSidebar from "./components/layout/Sidebar.vue"
import {ref} from 'vue'

const isOpenMenu = ref(true)
const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}
</script>

<style lang="scss">
@import './styles/global.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.content{
  max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: .2s;
  &_full{
    margin-left: 0;
  }
}

.sidebar-toggle{
  position: fixed;
  left: 0;
  width: 15px;
  background: var(--primary-color);
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
