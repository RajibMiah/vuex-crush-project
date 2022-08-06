import axios from 'axios'

// console.log(import.meta.env)

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL
})

instance.interceptors.request.use(
    (config)=>{
        // TODO:: SET AUTHORIZATION TOKEN
        return config
    }
)


instance.interceptors.response.use(response=>{
    return response
},error =>{
    return Promise.reject(error)
})

export default instance