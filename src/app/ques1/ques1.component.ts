import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-ques1',
  templateUrl: './ques1.component.html',
  styleUrls: ['./ques1.component.css']
})
export class Ques1Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
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
  get(i : number) {
    if (i % 2 == 1){
      i = (i * i) + 1
      // console.log(i);

    }else {
      i = (i*i) - 1
      // console.log(i);

    }
   return i;
  }
  

}
