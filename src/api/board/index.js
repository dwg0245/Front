import api from '@/plugins/axiosinterceptor'

const boardFun = async (data) => {
  const result = await api.post('/board/save', data)
  return result
}

export default boardFun
