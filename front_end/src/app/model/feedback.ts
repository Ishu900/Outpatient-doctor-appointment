import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class Feedback {
  feedbackId: number;
  rating: number;
  patient: Patient = new Patient();
  doctor: Doctor = new Doctor();
  feedbackComment: String;
}
