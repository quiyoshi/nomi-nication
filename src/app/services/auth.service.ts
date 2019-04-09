import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

// 以下追加したもの
import { AngularFireAuth } from "angularfire2/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import * as firebase from "firebase/app";
import { Observable } from "rxjs/Observable";
import { switchMap } from "rxjs/operators";
import { User } from "./../models/user";
