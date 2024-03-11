import { useEffect, useState } from "react"

const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnecting");

export default function ProductList({category}: {category: string}) {
    const [products, setProducts] = useState<string[]>([]);

    useEffect(()=>{
        console.log("fetching products in", category);
        setProducts(["clothing", "household"]);  
    }, [category]);

    return (
        <div>ProductList {products}</div>
    )
}
