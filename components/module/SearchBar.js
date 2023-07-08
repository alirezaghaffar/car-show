import { useState } from "react";
import styles from "./SearchBar.module.css";
import { router } from "next/router";

const SearchBar = () => {
    const [min ,setMin] = useState("")
    const [max ,setMax] = useState("")

    const searchkHandler = () =>{
        if(min && max){
            router.push(`/filter/${min}/${max}`)
        }else{alert(`لطفا هر دو فیلد min وmax را وارد کنید`)}
    }


    return (
        <div className={styles.container}>
<div>
<input type="number" placeholder="Enter Min-price" value={min} onChange={(e)=>setMin(e.target.value)} />
<input type="number" placeholder="Enter Max-price" value={max} onChange={(e)=>setMax(e.target.value)} />
</div>
<button onClick={searchkHandler}>Search</button>
        </div>
    );
};

export default SearchBar;