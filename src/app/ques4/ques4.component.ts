import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ques4',
  templateUrl: './ques4.component.html',
  styleUrls: ['./ques4.component.css']
})
export class Ques4Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  currentVal=""
  func(val : string){
    this.currentVal=val
    console.warn(val)
  }
  ques1(){
    this.router.navigateByUrl('/ques1');

  }
  ques2(){
    this.router.navigateByUrl('/ques2');

  }
  ques3(){
    this.router.navigateByUrl('/ques3');

  }
  ques4(){
    this.router.navigateByUrl('/ques4');

  }
}
