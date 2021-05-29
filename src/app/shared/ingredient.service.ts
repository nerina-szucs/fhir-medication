import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private firestore: AngularFirestore) { }

  getIngredients() { 
    return this.firestore.collection("ingredient").snapshotChanges();
  }

  updateIngredient(data: { payload: { doc: { id: string | undefined; }; }; }) {
    return this.firestore.collection("ingredient").doc(data.payload.doc.id).set({ completed: true }, { merge: true });
}

deleteIngredient(data: { payload: { doc: { id: string | undefined; }; }; }) {
  return this.firestore.collection("ingredient").doc(data.payload.doc.id).delete();
}
}
