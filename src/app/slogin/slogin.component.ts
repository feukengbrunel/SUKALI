import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slogin',
  templateUrl: './slogin.component.html',
  styleUrls: ['./slogin.component.css']
})
export class SloginComponent {
  @ViewChild('loginForm') set listbtn(elt:ElementRef){
    if(elt){
      // this.loginBtn = elt
      console.log('""""',elt.nativeElement);
      elt.nativeElement.style.marginLeft='50%'
      
    }
  }




constructor( ){
      }


      
ngOnInit(): void {
 
}

ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
//  


const signupButton:any = document.getElementById('signup-button')
  const loginButton:any = document.getElementById('login-button')
    const userForms:any = document.getElementById('user_options-forms')

/**
 * Add event listener to the "Sign Up" button
 */
signupButton.addEventListener('click', () => {
  userForms.classList.remove('bounceRight')
  userForms.classList.add('bounceLeft')
}, false)

/**
 * Add event listener to the "Login" button
 */
loginButton.addEventListener('click', () => {
  userForms.classList.remove('bounceLeft')
  userForms.classList.add('bounceRight')
}, false)
        
}
  
onLogin(){
  const login =document.querySelector('.login-page')  
  login!.innerHTML='<form class="register-form" *ngIf="createAccount"><input type="text" placeholder="name"/> <input type="password" placeholder="password"/><input type="text" placeholder="email address"/><button>create</button><p class="message">Already registered? <a href="#">Sign In</a></p></form>'

}



//firebase    firebase      firebase

//  async loginWithGoogles(){
//   this.logservice.signWithGoogle()

// }


//  async registerWithEmailPassword( email2:string,password2:string){
//   this.logservice.registerWithEmailAndPassword(email2,password2)
//  }

 
//  async loginWithEmailPassword( email:string,password:string){
  
//    this.logservice.signWithEmailAndPassword(email,password)
  
 
//  }
}
