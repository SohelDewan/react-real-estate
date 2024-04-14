// import Navbar from "./Navbar";
import { useLoaderData } from "react-router-dom";
import Slider from "../Slider";
import EstateSection from "./EstateSection";

const Home = () => {

    const estates = useLoaderData();
    console.log(estates)

    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Slider></Slider>
            {/* <EstateSection></EstateSection> */}
            <div className="grid p-5 md:grid-cols-3 container mx-auto my-8 gap-4">

            {
                estates.map(est => <EstateSection
                            key={est.id}
                            estates={est}
                        ></EstateSection>)
                    }
            </div>
        </div>
    );
};

export default Home;