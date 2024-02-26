import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

const connect = () => console.log("connecting");
const disconnect = () => console.log("disconnecting");


function App() {
	useEffect(()=>{
		connect();
		
		return ()=> disconnect();
	});

	return (
		<div>
			
		</div>
	)
}

export default App;
