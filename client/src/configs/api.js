import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || 'http://localhost:3000'
})

api.interceptors.request.use((config) => {
    const headers = config.headers || {}
    const authHeader = headers.Authorization || headers.authorization

    if (authHeader && typeof authHeader === 'string') {
        const normalizedHeader = authHeader.startsWith('Bearer ') ? authHeader : `Bearer ${authHeader}`
        config.headers = {
            ...headers,
            Authorization: normalizedHeader
        }
    }

    return config
})

export default api