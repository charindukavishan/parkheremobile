import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegserviceProvider } from '../../providers/regservice/regservice';
import { NgForm } from "@angular/forms";
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  model ={
    email :'',
    password:''
  };
  constructor(public navCtrl: NavController,public service:RegserviceProvider,private toastCtrl: ToastController) {

  }
  message='';
  signin(){
    //this.service.login(this.model);
    //console.log(this.model);
    this.service.login(this.model).subscribe(
      res => {console.log(res['token']);
       this.service.setToken(res['token']);
        //this.router.navigateByUrl('/userprofile');
       // this.state.state=true;
       this.message=res['message'];
       let toast = this.toastCtrl.create({
        message:'login successfull',
        duration: 3000,
        position: 'top'
      });
      toast.present();
      },
      err => {console.log(err)
        this.message=err.error['message'];
        let toast = this.toastCtrl.create({
          message:this.message,
          duration: 3000,
          position: 'top'
        });
        toast.present();
        //this.serverErrorMessages = err.error.message;
      }
    );
    
  
  }
}
