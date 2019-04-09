import { Component } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

interface Item {
  name: string;
  age: number;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  /** 取得したドキュメントを格納 */
  private itemDocument: AngularFirestoreDocument<Item>;
  /** 取得したコレクションを格納 */
  private itemsCollection: AngularFirestoreCollection<Item>;

  /** コレクションのストリームを格納 */
  items: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {
    /** itemsコレクションを取得してitemDocumentに代入 */
    this.itemsCollection = afs.collection<Item>("items");

    /** 取得したコレクションをストリームに変換 */
    this.items = this.itemsCollection.valueChanges();
  }
}
