import { useLoaderData, useParams } from "react-router-dom";

const Estate = () => {
  const { id } = useParams();
  const estates = useLoaderData();
  const singleEstate = estates.find((e) => e.id === id);
  console.log(singleEstate);
  return (
    <div className="container mx-auto">
    <h2 className="text-5xl my-5">{singleEstate.estate_title}</h2>
      <div className="">
        <div className=" md:flex w-4/5">
          <img className="rounded-lg mb-5" src={singleEstate.image} />
          <div className="w-1/5 ">
            <div className="ml-5 p-5 rounded-xl space-y-8 ">
                <h4 className="text-xl uppercase "><span className="text-[#30B6EC] pr-2">price:</span>{singleEstate.price}</h4>
                <h4 className="text-xl uppercase"><span className="text-[#30B6EC] pr-2">status:</span>{singleEstate.status}</h4>
                <h4 className="text-xl uppercase"><span className="text-[#30B6EC] pr-2">segment_name:</span>{singleEstate.segment_name}</h4>
                <h4 className="text-xl uppercase"><span className="text-[#30B6EC] pr-2">location:</span>{singleEstate.location}</h4>
                <h4 className="text-xl uppercase"><span className="text-[#30B6EC] pr-2">facilities:</span>{singleEstate.facilities}</h4>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mb-8">
        <img src="https://i.ibb.co/vL1RLQ4/icon1.png" alt="icon1" border="0" />
        <p>{singleEstate.area}</p>
        <img
          src="https://i.ibb.co/SN0xF3j/icon2.png"
          alt="icon2"
          border="0"
        ></img>
        <p>4 Beds</p>
        <img
          src="https://i.ibb.co/syCFmwk/icon3.png"
          alt="icon3"
          border="0"
        ></img>
        <p>3 Baths</p>
      </div>
        <div className=" lg:grid gap-4 md:grid-cols-4 hidden md:block">
          <img
            className="rounded-3xl"
            src="https://i.ibb.co/1fncpj2/indor1.jpg"
            alt="indor1"
            border="0"
          ></img>
          <img
            className="rounded-3xl"
            src="https://i.ibb.co/yqGxMgY/indor2.jpg"
            alt="indor2"
            border="0"
          />
          <img
            className="rounded-3xl"
            src="https://i.ibb.co/LhqvfX8/indor3.jpg"
            alt="indor3"
            border="0"
          />
          <img
            className="rounded-3xl"
            src="https://i.ibb.co/g7YfjQp/indor4.jpg"
            alt="indor4"
            border="0"
          />
        </div>
      </div>
      
      <p className="mt-8">
        Welcome home to this adorable home located in the quiet Crestview
        Addition in Fort Worth. Conveniently located just off I-30, a short
        drive to the Gateway Park and walking distance to the Tandy Nature Area.
        Wood flooring throughout most of the home with tile in the kitchen and
        bathrooms. The unique floor plan allows for flexibility throughout the
        home. This 4 bedroom split floor plan with 2 full bathrooms has backyard
        access with oversized side driveway, rear detached garage for ample
        parking. Flex room in front of house can be used as additional dinning
        room or office. Large walk in utility room and breakfast area are both
        connected to kitchen. A short distance from Nolan high school and
        walking distance to Meadowbrook Schools. Great location! Interior photos
        coming soon.
      </p>
    </div>
  );
};

export default Estate;
