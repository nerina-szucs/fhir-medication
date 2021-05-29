import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor(private firestore: AngularFirestore) { }

  getBatches() { 
    return this.firestore.collection("batch").snapshotChanges();
  }

  updateBatch(data: { payload: { doc: { id: string | undefined; }; }; }) {
    return this.firestore.collection("batch").doc(data.payload.doc.id).set({ completed: true }, { merge: true });
}

deleteBatch(data: { payload: { doc: { id: string | undefined; }; }; }) {
  return this.firestore.collection("batch").doc(data.payload.doc.id).delete();
}
}
