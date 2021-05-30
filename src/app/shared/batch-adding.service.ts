import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BatchAddingService<T extends { btid?: string }> {

  constructor(private afs: AngularFirestore) { }

  async add(collectionName: string, data: T, btid?: string): Promise<string> {
    const uid = btid ? btid : this.afs.createId();
    data.btid = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }
}
