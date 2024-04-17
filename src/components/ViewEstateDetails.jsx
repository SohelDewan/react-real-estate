import { useLoaderData } from "react-router-dom";
import Estate from "./Estate";


const ViewEstateDetails = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div className="container mx-auto">
            {
                data.map(est => <Estate key={est.id} data={est}></Estate>)
            }
        </div>
    );
};

export default ViewEstateDetails;