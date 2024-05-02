import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="my-16">
            <div className="text-center">
                <h3 className="text-xl text-[#FF3811] font-bold">Service</h3>
                <h3 className="text-4xl font-bold">Our Service Area</h3>
                <p className="text-lg text-gray-500">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <h1 className="text-4xl font-bold">Services{services.length}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    services.map((service, idx) => <ServicesCard key={idx} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;