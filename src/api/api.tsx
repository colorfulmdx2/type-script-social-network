import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY' : 'a6000f96-1c2a-4e1d-b415-976cdf49e77f'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(id:any)  {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    unFollow(id:any)  {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}


export const follow = (currentPage = 1, pageSize = 10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}