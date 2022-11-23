import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

const date = format(selectedDate, 'PP');

    //react query
const {data:appointmentOptions = [], refetch, isLoading} = useQuery({
  queryKey: ['appointmentOptions', date],
  queryFn: () => fetch(`https://brush-n-floss-server.vercel.app/v2/appointmentOptions?date=${date}`)
  .then (res => res.json())
});

if(isLoading){
  return <Loading></Loading>
}

// useEffect( () =>{
// fetch('https://brush-n-floss-server.vercel.app/appointmentOptions')
// .then (res => res.json())
// .then(data => setAppointmentOptions(data))
// }, [])

    return (
        <section className='my-16'>
           <p className='text-center text-secondary font-bold'>
           Available Appointments on {format(selectedDate, 'PP')}
            </p> 
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
              {
                appointmentOptions.map(option => <AppointmentOption
                key={option._id}
                appointmentOption={option}
                setTreatment={setTreatment}
                ></AppointmentOption>)
              }  
            </div>
            {
treatment &&
            <BookingModal
            treatment={treatment}
            setTreatment={setTreatment}
            selectedDate={selectedDate}
            refetch = {refetch}
            ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;