
import {create} from 'zustand'
import { DraftPatients, Patients } from '../types'
import {v4 as uuidv4} from 'uuid'

type PatientState ={

    patients:Patients[]
    addPatient:(data:DraftPatients)=>void
}

const createPatients=(patient:DraftPatients):Patients=>{
    
    return{
        ...patient,id:uuidv4()
    }
}
export const usePAtientStore=create<PatientState>((set)=>({

    
    patients:[],
    addPatient:(data)=>{
       set((state)=>({
        patients: [...state.patients,createPatients(data)]

       }))
        
    }
}))