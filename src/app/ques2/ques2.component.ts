import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ques2',
  templateUrl: './ques2.component.html',
  styleUrls: ['./ques2.component.css']
})
export class Ques2Component implements OnInit {

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
}
