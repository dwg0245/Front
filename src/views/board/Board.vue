<script setup>
import { reactive } from 'vue'
import boardFun from '@/api/board/index.js';


const boardPost = reactive({
    title: "",
    contents: ""
})

const boardsave = async () => {
    const result = await boardFun(boardPost)
    console.log(result)
}
</script>

<template>
    <p>제목</p>
    <input type="text" id="tilte" v-model="boardPost.title">
    <p>내용</p>
    <input type="text" id="contents" v-model="boardPost.contents">
    <br><br>
    <button @click="boardsave()">게시글 등록</button>
</template>

<style scoped></style>