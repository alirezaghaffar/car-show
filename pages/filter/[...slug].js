import { useRouter } from 'next/router';
import carsData from '../../data/carsData';
import CarsList from '../../components/templates/CarsList';

const FilteredCars = () => {
    const router = useRouter()
    const [min, max] = router.query.slug || [];
    const filterdData = carsData.filter(i => i.price >= min && i.price <= max)
    console.log(filterdData);
    if (!filterdData.length) { return (<h2>Not found</h2>) }
    return (
        <CarsList data={filterdData} />
    );
};

export default FilteredCars; 