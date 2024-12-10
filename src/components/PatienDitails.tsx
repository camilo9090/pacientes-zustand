
import { Patients } from '../types'
import PatientDitailsItem from './PatientDitailsItem'

type PatienDitailsProps = {
  patient: Patients

}

export default function PatienDitails({ patient }: PatienDitailsProps) {
  return (
    <div className='mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl'>


      <p className='font-bold mb-3 text-gray-700 uppercase '>
        <PatientDitailsItem label='ID' data={patient.id} />
        <PatientDitailsItem label='Nombre' data={patient.name} />
        <PatientDitailsItem label='Propietario' data={patient.caretaker} />
        <PatientDitailsItem label='Email' data={patient.email} />
        <PatientDitailsItem label='Fecha Salida' data={patient.date.toString()} />
        <PatientDitailsItem label='Sintomas' data={patient.symptoms} />

      </p>

      <div className='flex justify-between  mt-10'>

        <button type='button'
          className=' bg-indigo-600  px-10 py-2 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'>

          Editar
        </button>

        <button type='button'
          className=' bg-red-600 px-10 py-2 hover:bg-red-700 text-white font-bold uppercase rounded-lg'>

          Eliminar
        </button>
      </div>
    </div>
  )
}
