import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';
const Services = () => {

    const serviceData = 
    [
        {
        id: 1,
        name: 'Fluoride Treatment',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, rerum.',
        img: fluoride,
    },
        {
        id: 2,
        name: 'Cavity Filling',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, rerum.',
        img: cavity,
    },
        {
        id: 3,
        name: 'Teeth Whitening',
        description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, rerum.',
        img: whitening,
    },
]

    return (
        <div className='mt-16'>
           <div className='text-center'>
            <h3 className="font-bold text-xl text-primary uppercase"> Our Services</h3>
            <h1 className='text-3xl'>Services We Provide</h1>
            </div> 
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
{
    serviceData.map(service => <Service
    key={service.id}
    service= {service}
    ></Service>)
}
            </div> 
        </div>
    );
};

export default Services;