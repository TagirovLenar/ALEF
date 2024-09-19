<template>
    <div>
        <div>
            <h1 class="pre-title">Персональные данные</h1>

            <div v-if="parent.name"  class="pre-child">{{ parent.name }}, {{ parent.age }} лет </div>

        </div>
        <div>
            <h3 class="pre-title">Дети</h3>

            <div class="pre-children" v-for="child in children" :key="child.id">
                <div class="pre-child">{{ child.name }}, {{ child.age }} лет</div>
            </div>
        </div>
    </div>
</template>


<script setup>

import { inject } from 'vue'

const children = inject("children")
const parent = inject("parent")
</script>

<style>
.pre-parent {
    margin-bottom: 60px;
}

.pre-title {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 20px;
}

.pre-child {
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    padding: 10px 20px;
    margin-bottom: 20px;
    background: #F1F1F1;
}
</style>
