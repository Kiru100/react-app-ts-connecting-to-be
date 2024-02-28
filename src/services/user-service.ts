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

    deleteUser(id: number){
        return apiClient.delete("/users/" + id);
    }

    addUser(new_user: object){
        return apiClient.post("/users/", new_user);
    }

    updateUser(updated_user: User){
        return apiClient.patch("/users/" + updated_user.id, updated_user)
    }
}

export default new UserService();