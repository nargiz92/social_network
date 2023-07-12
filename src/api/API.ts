import axios from "axios";


const instanse = axios.create({
    headers: {"API-KEY": "674e706f-06dc-4659-b9c1-246b9286a578"},
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`
        )
            .then(res => {
                return res.data
            })
    },
    unfollowUsers(userId: number) {
        return instanse.delete(`follow/${userId}`)
            .then(res => {
                return res.data
            })
    },
    followUsers(userId: number) {
        return instanse.post(`follow/${userId}`)
            .then(res => {
                return res.data
            })
    },
    getProfile(userId: number) {
        console.warn('Obsolete method.Please profileApi object')
        return profileApi.getProfile(userId)

    }

}

export const profileApi = {

    getProfile(userId: number) {
        return instanse.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instanse.get(`profile/status/` + userId)
    },
    updatedStatus(status: string) {
        return instanse.put(`profile/status`,{status} )
    }
}

type LoginResponseType ={
    resultCode: number
    messages: string[],
    data: {
        userId: number
    }
}

type ResponseAuthApiType<D={}>={
    resultCode: number;
    messages: Array<string>;
    data: D;
}

export const authAPI = {
    me() {
        return instanse.get<ResponseAuthApiType<{id:number, email:string,login:string}>>(`auth/me`)
    },
    login(email:string,password:string,rememberMe:boolean){
        return instanse.post<ResponseAuthApiType<{  userId: number }>>(`auth/login`,{email, password,rememberMe})
    },
    logout(){
        return instanse.delete<ResponseAuthApiType<{}>>(`auth/login`)
    }
}