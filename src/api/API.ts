import axios from "axios";


const instanse=axios.create({
    headers: {"API-KEY": "674e706f-06dc-4659-b9c1-246b9286a578"},
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/'
})
export const usersApi= {
    getUsers(currentPage: number, pageSize: number) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`
        )
            .then(res => {
                return res.data
            })
    },
    unfollowUsers(userId:number){
        return instanse.delete(`follow/${userId}`)
            .then(res=>{
                return res.data
            })
    },
    followUsers(userId:number){
        return instanse.post(`follow/${userId}`)
            .then(res=>{
                return res.data
            })
    }
}