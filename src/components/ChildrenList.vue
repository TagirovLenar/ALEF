<template>
  <div class="child">
    <h2 >Дети (макс 5)</h2>
    <button @click="addInput" class="child-create" v-if="countChildren !== 5"> + Добавить ребенка</button>
  </div>
  <form action="" v-if="inputVisibility">
    <input type="text" class="child-input child-name input" v-model="newChild.name" placeholder="Имя"/>
    <input type="number" class="child-input child-name input" v-model="newChild.age" placeholder="Возраст"/>
  </form>
  <div class="child-form" action="" v-for="(child, index) in children" :key="child.id">
    <div class="child-input input" type="text" >
      {{ child.name }}
  </div>
    <div class="child-input input" type="text" >
      {{ child.age }}
    </div>
    <button @click="removeChild(index)" class="child-delete">Удалить</button>
  </div>
<button class="child-add" @click="addChild" >Cохранить</button> 

</template>

<script setup>
const inputVisibility = ref(false);
import { ref } from "vue";

const props=defineProps({
    children: {
        type: Array
    },
    countChildren: {
        type: Number
    }
})

const emit = defineEmits('set-card, delete-card')

const addInput = () => {
  inputVisibility.value = !inputVisibility.value;
};

const newChild = ref({
    name: '',
    age: ''
})


const addChild = ()=> {
    emit('set-card', newChild.value);
    inputVisibility.value = false;
    console.log(inputVisibility.value);
    newChild.value = {
        name: '',
        age: ''
    }
}

const removeChild = (index) => {
  emit('delete-card', index);
}
</script>

<style scoped>
 
.child {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  
}

.child-form {
  display: flex;
  justify-content: space-between;
}
.child-input {
  width: 260px;
  padding: 26px 16px 10px;
  margin-bottom: 10px;
}

.child-delete {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #01a7fd;
}

.child-create {
  width: 204px;
  height: Hug (44px) px;
  top: 305px;
  left: 787px;
  padding: 10px 20px;
  border-radius: 100px;
  border: 2px solid #01a7fd;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
}

.input {
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
}

.child-name {
  margin-right: 22px;
}

.child-add {
    width:118px;
height: 44px;
top: 512px;
left: 375px;
padding: 10px 20px;
border-radius: 100px;
background: #01A7FD;
color: #ffff;
margin-top: 30px;


}
</style>