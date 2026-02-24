<script setup>
import { reactive, ref } from 'vue';
import api from '@/api/board/index.js';


const list = ref([])
const desc = ref({})
const boardUpdateList = reactive({
    title: "",
    contents: ""
})

// 리스트 받아오기 
const boardlist = async () => {
    const boardlist = await api.boardListFun()
    console.log(boardlist.data)
    list.value = boardlist.data
}
boardlist()

// 해당 목록 불러오기 
const boardDesc = async (idx) => {
    const result = await api.boardDescFun(idx)
    console.log(result.data)
    desc.value = result.data

    boardUpdateList.title = result.data.title;
    boardUpdateList.contents = result.data.contents;
}

// 수정해서 데이터 보내기 
const boardUpdate = async (idx, boardUpdateList) => {

    const result = await api.boardUpdate(idx, boardUpdateList)
    console.log(result)
}

</script>

<template>
    <div v-for="value in list">
        <button @click="boardDesc(value.idx)">상세 목록 조회 {{ value.idx }}</button>
    </div>
    <div>
        <p>{{ desc.idx }}</p>
        <input type="text" :placeholder="desc.title" v-model="boardUpdateList.title" id="title">
        <input type="text" :placeholder="desc.contents" v-model="boardUpdateList.contents" id="contents">
        <br>
        <button @click="boardUpdate(desc.idx, boardUpdateList)">게시글 수정</button>
    </div>

</template>

<style scoped></style>