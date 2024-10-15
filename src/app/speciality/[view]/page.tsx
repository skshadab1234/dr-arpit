import Speciality from '@/components/Speciality/Speciality'
import React from 'react'
import abouts from '@/assets/images/breadcrump/2.jpg'
import BreadCrumb from '@/components/Layout/BreadCrump/BreadCrump'
import RequestAppointment from '@/components/Contact/RequestAppointment'

const speciality = ({params}:any) => {
    const title = params.view.replace('-', ' ');
  return (
    <>
     <BreadCrumb
        title={title}
        page={title}
        img={abouts.src}
        version={false}
      />
     <Speciality title={params.view}/>
     <RequestAppointment/>
    </>
  )
}

export default speciality
