import { Component, OnInit } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  lastname = new FormControl('', [Validators.required]);
  firstname = new FormControl('');
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required]);
  comment = new FormControl('', [Validators.required]);
  sent = false;

  constructor(
    private afs: AngularFirestore
  ){}

  ngOnInit() {
  }

  sendComment(){
    this.afs.collection(`comments`).add({
      lastname: this.lastname.value,
      firstname: this.firstname.value,
      email: this.email.value,
      phone: this.phone.value,
      comment: this.comment.value,
      date: new Date()
    })
    this.lastname.reset()
    this.firstname.reset()
    this.email.reset()
    this.phone.reset()
    this.comment.reset()
    this.sent = true
  }
}
