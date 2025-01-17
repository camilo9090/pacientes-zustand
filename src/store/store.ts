
import { create } from 'zustand'
import { DraftPatients, Patients } from '../types'
import { v4 as uuidv4 } from 'uuid'
import { devtools,persist } from 'zustand/middleware'

type PatientState = {

    patients: Patients[]
    activeId: Patients['id']
    addPatient: (data: DraftPatients) => void
    delePatients: (id: Patients['id']) => void
    getPatientsByid: (id: Patients['id']) => void
    updatePatient: (data: DraftPatients) => void

}

const createPatients = (patient: DraftPatients): Patients => {

    return {
        ...patient, id: uuidv4()
    }
}
export const usePatientStore = create<PatientState>()(
    devtools(
        
        persist((set) => ({


        patients: [],
        activeId: '',
        addPatient: (data) => {
            set((state) => ({
                patients: [...state.patients, createPatients(data)]

            }))

        },
        delePatients: (id) => {
            set((state) => ({
                patients: state.patients.filter(patients => patients.id !== id)
            }))
        },

        getPatientsByid: (id) => {
            set(() => ({
                activeId: id
            }))
        },
        updatePatient: (data) => {
            set((state)=>({

                patients:state.patients.map(patient=>patient.id===state.activeId?{id:patient.id,
                    ...data
                }:patient)
            })
        )}
    }),{

        name:'patient-storage'
    })
))