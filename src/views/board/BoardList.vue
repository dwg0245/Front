<script setup>
import { ref } from 'vue'
import api from '@/api/board/index.js'

const list = ref([])

const boardlist = async () => {
    const boardlist = await api.boardListFun()
    console.log(boardlist.data)
    list.value = boardlist.data
}

</script>

<template>
    <button @click="boardlist">게시글 조회</button>
    <div v-for="value in list">
        <p>{{ value.idx }}</p>
        <p>{{ value.title }}</p>
        <p>{{ value.contents }}</p>
        <hr>

    </div>
</template>

<style scoped></style>