import api from '@/plugins/axiosinterceptor'

// 게시글 작성
const boardFun = async (data) => {
  const result = await api.post('/board/save', data)
  return result
}

// 게시글 목록 조회
const boardListFun = async () => {
  const result = await api.post('/board/list')
  return result
}

// 게시글 목록 조회
const boardDescFun = async (idx) => {
  console.log(idx)
  const result = await api.get(`/board/desc/${idx}`)
  return result
}

// 게시글 업데이트
const boardUpdate = async (idx, data) => {
  const result = await api.put(`/board/update/${idx}`, data)

  return result
}

// 게시글 삭제
const boardDelete = async (idx) => {
  const result = await api.delete(`board/delete/${idx}`)
  return result
}

export default { boardFun, boardListFun, boardDescFun, boardUpdate, boardDelete }
