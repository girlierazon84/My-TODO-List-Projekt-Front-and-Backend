import Axios from 'axios'

const hostUrl = 'http://localhost'
const port = 3003

const url = hostUrl + ':' + port

const UsersApi = Axios.create({
    baseURL: url
})

export default UsersApi