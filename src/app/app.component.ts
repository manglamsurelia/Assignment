import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'question1';
  numb:any;
  res:any;

  ngOnInit() {
    this.submit();
  }

  submit(){
    if((this.numb+1) % 2 == 0){
this.res = (this.numb + 1) * (this.numb + 1)- 1
    }
    else{
      this.res = (this.numb + 1) * (this.numb + 1) + 1
    }
  }

}
