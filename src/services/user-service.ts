import apiClient from "./api-client";

export interface User{
	id:number,
	name: string
}

class UserService{
    getAllUsers(){
        const controller = new AbortController();
        const request =  apiClient.get<User[]>("/users", {signal: controller.signal});
        return { request, cancel: ()=> controller.abort()}
    }

    deleteUser(user: User){
        const controller = new AbortController();
        const request =  apiClient.delete("/users/" + user.id);
        return { request, cancel: ()=> controller.abort()}
    }
}

export default new UserService();