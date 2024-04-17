import { useLoaderData } from "react-router-dom";
import EstateSection from "./EstateSection";
//1
const EstateSectionPage = () => {

  const estates = useLoaderData();
  console.log(estates);
  return (
    <>
      <div className="grid p-5 md:grid-cols-3 container mx-auto my-8 gap-4">
        {estates.map((est) => (
          <EstateSection key={est.id} estates={est}></EstateSection>
        ))}
      </div>
    </>
  );
};

export default EstateSectionPage;
