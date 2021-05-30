import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Medication } from './models/medication.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  constructor(private firestore: AngularFirestore) { }

//  createMedication(medication: Medication){
//    return this.firestore.collection("medication").add(medication);
//}

  getMedications() { 
    return this.firestore.collection("medication").snapshotChanges();
  }

deleteMedication(data: { payload: { doc: { id: string | undefined; }; }; }) {
  return this.firestore.collection("medication").doc(data.payload.doc.id).delete();
}
}
