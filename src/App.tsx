import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from 'react';
import ProductList from './components/ProductList';

function App() {
	const input_ref = useRef<HTMLInputElement>(null);
	const [category, setCategory] = useState("");

	useEffect(()=>{
		if(input_ref.current) input_ref.current.focus();
	},[])

	useEffect(()=>{
		document.title = "Ha";
	},[])
	

	return (
		<div>
			<select className='form-select' onChange={(event)=>setCategory(event.target.value)}>
				<option value=""></option>
				<option value="Clothing">Clothing</option>
				<option value="Household">Household</option>
			</select>
			<ProductList category={category}/>
		</div>
	)
}

export default App;
