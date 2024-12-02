import { usePAtientStore } from "../store/store"
import PatienDitails from "./PatienDitails"

export default function PatientsList() {

  const patients = usePAtientStore(state => state.patients)
  console.log(patients)
  return (



    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-scroll">

      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">

            Administra tus{''}
            <span className="text-indigo-600 font-bold">
              Pacientes y Citas
            </span>
          </p>

          {patients.map(salida => (
            <PatienDitails
            key={salida.id}
            patient={salida}
            />

          ))}
        </>

      ) : (

        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienzo agregando pacientes {''}
            <span className="text-indigo-600 font-bold">
              Aparecen aqui
            </span>
          </p>
        </>

      )


      }
    </div>
  )
}