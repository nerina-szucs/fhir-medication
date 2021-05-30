import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class IngredientAddingService<T extends { ingId?: string }> {

  constructor(private afs: AngularFirestore) { }

  async add(collectionName: string, data: T, ingId?: string): Promise<string> {
    const uid = ingId ? ingId : this.afs.createId();
    data.ingId = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }
}
