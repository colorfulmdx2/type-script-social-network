import axios from "axios";


const corseFree = 'https://cors-anywhere.herokuapp.com/'

const instanceNews = axios.create({
    baseURL: `${corseFree}https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=69c53b6ef0414fbb8941b1b333cea919`,
    headers: {
        'api-key': '69c53b6ef0414fbb8941b1b333cea919'
    }
});

export const newsAPI = {
    getnews() {
        return instanceNews.get('')
    }
}


const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'a6000f96-1c2a-4e1d-b415-976cdf49e77f'
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
    getFriends(pageSize = 6) {
        return instance.get(`users?count=${pageSize}`)
            .then(response => {
                return response.data.items
            })
    },
    getOnlineFriends(pageSize = 4) {
        return instance.get(`users?count=${pageSize}`)
            .then(response => {
                return response.data.items
            })
    },
    follow(id: any) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    unFollow(id: any) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId: any) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: any) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: any) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: any) {
        return instance.put(`profile/status/`, {status: status})
    },
    savePhoto(photoFile: any) {
        const formData = new FormData
        formData.append('image', photoFile)
        return instance.put(`profile/photo/`, formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
    },
    saveProfile(profile: any) {
        return instance.put(`profile/`, profile)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`,
            {withCredentials: true})
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string | null) {
        return instance.post(`auth/login`,
            {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`,)
    }

}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`/security/get-captcha-url`)
    }
}


