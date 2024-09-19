<template>
  <div class="peronal">
    <h2 class="personal-title">Персональные данные</h2>
    <div class="container">
      <form @submit.prevent="addChild" class="personal-form" action="">
        <div class="input-box">
          <input class="input-box__input" type="text" v-model="parent.name" />
          <span class="input-box__span">Имя</span>
        </div>

        <div class="input-box">
          <input class="input-box__input" type="text" v-model="parent.age" />
          <span class="input-box__span">Возраст</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
const parent = inject("parent");
</script>


<style scoped>
.container {
  position: relative;
}

.input-box {
  position: relative;
  width: 616px;
  height: 56px;
  margin-bottom: 10px;
}

.input-box__input {
  position: relative;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  width: 616px;
  height: 56px;
}

.input-box__span {
  position: absolute;
  left: 20px;
  top: 20px;
  display: inline-block;
  transition: .5s;
}

.input-box__input:focus ~ span,
.input-box__input:valid ~ span {
    transform: translateX(-10px) translateY(-15px);
    font-size: 12px;
}

</style>
