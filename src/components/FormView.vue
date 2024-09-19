<template>
  <div class="main" style="width: 616px">
    <ParentView />
    <ChildrenList @set-card="addToCard" @delete-card="deleteCard" :children="children"  :inputVisibility="inputVisibility" :countChildren="countChildren"/>
</div>

</template>


<script setup>
import ChildrenList from "../components/ChildrenList.vue";
import ParentView from "./ParentView.vue";
import { ref, computed, inject } from "vue";

const inputVisibility = ref(false);

const children = inject("children");

const addToCard = (child) => {
    if(child.name == "" || child.age == "") {
        alert("Имя и djphfcn не могут быть пустыми!");
        return;  // прекратить добавление детей, если имя или фамилия пустые
        inputVisibility.value = true;
    }
    
    children.value.push(child);
  };

  const deleteCard = (index) => {
    children.value.splice(index, 1);
  };

const countChildren = computed(() => {
    return children.value.length;
  });


</script>

<style scoped>
.main {
  width: 616px;
  margin: 0 auto;
}
</style>