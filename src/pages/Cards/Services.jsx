import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';




const Services = () => {
    const [services, setServices] = useState([]);



    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
        <div className='container mx-auto mt-2 lg:mt-20'>
            <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#fc621c] text-center">Service Area</h2>
                <p className="text-lg lg:text-2xl font-medium w-11/12 lg:w-3/4 mx-auto text-center text-black my-4 lg:my-12">Career Nook is your premier destination for career success. We specialize in creating and managing top-notch career events, connecting talented individuals with leading employers. Join us in shaping brighter futures and forging meaningful connections in the world of work.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 lg:px-20'>
                {
                    services.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;