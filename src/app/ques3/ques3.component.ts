import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ques3',
  templateUrl: './ques3.component.html',
  styleUrls: ['./ques3.component.css']
})
export class Ques3Component implements OnInit {

  public numbers: any[] = [{
    id: 1,
    
  }];

  constructor(private router:Router) { }

  ngOnInit(): void {
   
  
  }
  addNumber() {
    this.numbers.push({
      id: this.numbers.length + 1,
    });
  }

  removeNumber(i: number) {
    this.numbers.splice(i, 1);
  }

  logValue() {
    console.log(this.numbers);
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
