import { useParams } from 'react-router-dom';

const Estate = () => {
    const { title } = useParams();
    return (
        <div className='container mx-auto'>
            
        <div className='grid grid-cols-4 gap-4'>
        <img className='rounded-3xl' src="https://i.ibb.co/1fncpj2/indor1.jpg" alt="indor1" border="0"></img>
        <img className='rounded-3xl' src="https://i.ibb.co/yqGxMgY/indor2.jpg" alt="indor2" border="0" />
        <img className='rounded-3xl' src="https://i.ibb.co/LhqvfX8/indor3.jpg" alt="indor3" border="0" />
        <img className='rounded-3xl' src="https://i.ibb.co/g7YfjQp/indor4.jpg" alt="indor4" border="0" />
        </div>
        <h2 className='text-5xl my-5'>{title}</h2>
        <div className='flex gap-4'>
        <img src="https://i.ibb.co/vL1RLQ4/icon1.png" alt="icon1" border="0" />
        <p>2000sqf</p>
        <img src="https://i.ibb.co/SN0xF3j/icon2.png" alt="icon2" border="0"></img>
        <p>4 Beds</p>
        <img src="https://i.ibb.co/syCFmwk/icon3.png" alt="icon3" border="0"></img>
        <p>3 Baths</p>
        </div>
        </div>
    );
};

export default Estate;