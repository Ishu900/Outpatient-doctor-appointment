import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class Appointment {
  appointmentId: number;
  patient: Patient = new Patient();
  doctor: Doctor = new Doctor();
  appointmentDate: Date;
  appointmentStatus: String;
  remark: String;

}
