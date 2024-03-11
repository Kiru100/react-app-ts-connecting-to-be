import { useEffect, useState } from "react";
import userService, { User } from "../../services/user-service";
import { CanceledError } from "../../services/api-client";

const useUsers = () =>{
    const [users, setUsers] = useState<User []>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);
	
	useEffect(()=> {
		/* Get -> promise -> res / err */
		setLoading(true);
		const {request, cancel}  = userService.getAll<User>();

		request
			.then(res => {
				setUsers(res.data);
				setLoading(false);
			})
			.catch(err =>{
				setError(err.message);

				if(err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			})

		return () => cancel();
	},[]);

    return {users, error, isLoading, setUsers, setError};
}

export default useUsers;