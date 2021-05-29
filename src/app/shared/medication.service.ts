import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Medication } from './models/medication.model';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  constructor(private firestore: AngularFirestore) { }

  async add(medication: string, data: Medication, id?: string): Promise<string> {
    const uid = id ? id : this.firestore.createId();
    data.id = uid;
    await this.firestore.collection("medication").doc(uid).set(data);
    return uid;
  }

  getMedications() { 
    return this.firestore.collection("medication").snapshotChanges();
  }

  updateMedication(data: { payload: { doc: { id: string | undefined; }; }; }) {
    return this.firestore.collection("medication").doc(data.payload.doc.id).set({ completed: true }, { merge: true });
}

deleteMedication(data: { payload: { doc: { id: string | undefined; }; }; }) {
  return this.firestore.collection("medication").doc(data.payload.doc.id).delete();
}
}
