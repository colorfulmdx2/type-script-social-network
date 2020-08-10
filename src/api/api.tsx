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
    },
    getProfile(userId:any) {
       return  profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId:any) {
        return  instance.get(`profile/` + userId)
    },
    getStatus(userId:any) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status:any) {
        return instance.put(`profile/status/`, {status: status})
    }
}

export const authAPI = {
    me() {
       return instance.get(`auth/me`,
            {withCredentials: true})
    },
    login(email: string, password:string, rememberMe: boolean) {
        return instance.post(`auth/login`,
            {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`, )
    }

}


