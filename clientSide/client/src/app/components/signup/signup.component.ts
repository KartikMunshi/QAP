import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private coreService : CoreService){}
  
  ngOnInit(): void {
   
  }

  addUser = new FormGroup (({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mobile :new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    // image: new FormControl(),
  }))


  submitUser(value : any){
    this.coreService.addUser(value).subscribe((result: any) => {
      console.log(result);
      this.addUser.reset();
    });
    console.log(value);
  }

}
