import { Component, OnInit } from '@angular/core';
import {map, take} from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit {
  comments: any;

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.afs.collection(`comments`, ref => {
      var query = ref.orderBy('date', 'desc')
      return query
    }).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => { 
          const data = a.payload.doc.data();
          const doc = a.payload.doc;
          return { doc, ...(data as Object) };
        }
      )})
    ).subscribe(c => {
      this.comments = c;
    })
  }

  delete(comment){
    if(confirm('ÊTES-VOUS SÛR DE VOULOIR SUPPRIMER CE COMMENTAIRE?'))
      comment.doc.ref.delete()
  }

}
