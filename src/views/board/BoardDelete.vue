<script setup>
import { ref } from 'vue';
import api from '@/api/board/index.js';


const list = ref([])
const desc = ref({})

const boardlist = async () => {
    const boardlist = await api.boardListFun()
    console.log(boardlist.data)
    list.value = boardlist.data
}
boardlist()

const boardDesc = async (idx) => {
    const result = await api.boardDescFun(idx)
    console.log(result.data)
    desc.value = result.data
}
const boardDelete = (idx) => {
    api.boardDelete(idx)
}

</script>

<template>
    <div v-for="value in list">
        <button @click="boardDesc(value.idx)">상세 목록 조회 {{ value.idx }}</button>


    </div>
    <div>
        <p>{{ desc.idx }}</p>
        <p>{{ desc.title }}</p>
        <p>{{ desc.contents }}</p>
        <br>
        <button @click="boardDelete(desc.idx)">삭제</button>
    </div>

</template>

<style scoped></style>