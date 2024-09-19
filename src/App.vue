<script setup>
import { provide, ref } from 'vue';
import FooterView from './components/FooterView.vue'
const children = ref([
]);

const parent = ref([])

provide('children', children)
provide('parent', parent)
</script>

<template>
  <div class="header">
    <img src="/Logo_imi_horizontal.png" alt="">
    <div class="header-nav">
      <router-link to="/">Форма</router-link>
      <router-link to="/pre">Превью</router-link>
    </div>

  </div>


  <router-view />

  <FooterView />
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding-bottom: 22px;
  border-bottom: 1px solid #F1F1F1;
  margin-bottom: 30px;
}

.header-nav {
  margin-left: 432px;
}

.header-nav {
  width: 134px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
