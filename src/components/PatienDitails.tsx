
import { Patients } from '../types'

type PatienDitailsProps={
    patient:Patients

}

export default function PatienDitails({patient}:PatienDitailsProps) {
  return (
    <div>{patient.name}</div>
  )
}
