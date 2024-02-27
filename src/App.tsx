import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios, { AxiosError, CanceledError } from "axios";

interface User{
	id:number,
	name: string
}

function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);
	
	useEffect(()=> {
		/* Get -> promise -> res / err */
		const controller = new AbortController();


		setLoading(true);

		axios.get<User[]>("https://jsonplaceholder.typicode.com/users", {signal: controller.signal})
		 	.then(res=>{
				setUsers(res.data)
				setLoading(false);
			})
			.catch(err =>{setError(err.message)
				if(err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			})

			return () => controller.abort;
	},[]);

	const deleteUser = (user: User) =>{
		const originalUsers = [...users];

		setUsers(users.filter(user_object=> user_object.id !== user.id));

		axios.delete("https://jsonplaceholder.typicode.com/users/" + user.id)
			.catch(err => {
				setError(err.message);
				setUsers(originalUsers);
			})
	}

	return (
		<div className="m-5">
			{error && <p className="text-danger">{error}</p>}
			{isLoading && <div className="spinner-border"></div>}
			<ul className='list-group'>
				{users.map(user => (
					<li key={user.id} className='list-group-item d-flex justify-content-between'>
						{user.name}
						<button className="btn btn-outline-danger" onClick={()=>deleteUser(user)}>
							Delete				
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default App;
