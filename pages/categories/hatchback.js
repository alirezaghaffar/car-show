import CarsList from "../../components/templates/CarsList";
import carsData from "../../data/carsdata";

const hatchback = () => {
    const HatchbackCars = carsData.filter((car)=>car.category==="hatchback")
    console.log(HatchbackCars);
    return (
    <CarsList data={HatchbackCars} />
    );
};

export default hatchback;