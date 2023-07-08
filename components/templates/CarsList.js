import styles from "./CarsList.module.css"
import { useRouter } from "next/router";
import Back from "../icons/Back";
import Card from "../module/Card";

const CarsList = ({data}) => {
    const router = useRouter()
    const backHandler =()=>router.back();
    return (
        <div className={styles.container} >
            <div className={styles.back} onClick={backHandler}>
                <Back />
                <p>Back</p>

            </div>
            <div className={styles.cards}>
                {
                    data.map(items=><Card key={items.id} {...items} />)
                }
            </div>
        </div>
    );
};

export default CarsList;