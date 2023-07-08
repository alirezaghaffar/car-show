import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarDetails from "../../components/templates/CarsDetails"

const CarDetail = () => {
    const router = useRouter();
    const { carid } = router.query;
    const carDetails = carsData[carid - 1]
    return (
        <>
            
            <CarDetails {...carDetails} />
        </>
    );
};

export default CarDetail;