import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  showMessage: boolean = false;

  // editorStyle = {
  //   height: '260px'
  // };

  // config = {
  //   toolbar: [
  //     ['bold', 'italic', 'underline'],        
  //     [{ 'header': 1 }, { 'header': 2 }],     
  //     [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  //     [{ 'script': 'sub'}, { 'script': 'super' }],      
  //     [{ 'indent': '-1'}, { 'indent': '+1' }],          
  //     [{ 'direction': 'rtl' }],                         
  //     [{ 'size': ['small', false, 'large', 'huge'] }],  
  //     [{ 'color': [] }, { 'background': [] }],          
  //     [{ 'font': [] }],
  //     [{ 'align': [] }],
  //     ['clean'],                                         
  //     ['link', 'image', 'video']                         
  //   ]
  // };

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createContactForm();
    this.onFormChanges();

  }

  onFormChanges(): void {
    // this.logValidationErrors(this.contactForm);
    this.contactForm.valueChanges.subscribe(() => {
      this.logValidationErrors(); // Revalidate the entire form
    });
  }

  createContactForm(){
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  validationMessages = {
    name: {
      required: 'Please enter your name',
    },
    email: {
      required: 'Please enter your email',
      email: 'Please enter correct email',
    },
    subject: {
      required: 'Please enter subject',
    },
    message: {
      required: 'Please enter message',
    }
  };

  formError = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit(){
    if (this.contactForm.invalid) {
      this.markAllAsTouched(this.contactForm);
      this.logValidationErrors(); // Show all errors
      return;
    }
    this.sendEmail()
    
  }

  sendEmail() {

    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 5000);

    // emailjs.send('service_8p8v4cg', 'template_gaqxp74', {
    //   from_name: this.contactForm.value.email,
    //   to_name: 'Shahariar',
    //   message: this.contactForm.value.message,
    //   subject: this.contactForm.value.subject,
    // }, 'ELWsWYpn9mQsC6tsN')
    // .then((response) => {
    //   console.log('Email sent successfully:', response);
    // })
    // .catch((error) => {
    //   console.error('Error sending email:', error);
    // });
  }

  markAllAsTouched(group: FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.get(key);
  
      if (control instanceof FormGroup) {
        this.markAllAsTouched(control); // Recursive call for nested form groups
      } else {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }

  logValidationErrors(group: FormGroup = this.contactForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
  
      console.log(`Checking control: ${key}`, abstractControl.errors);
  
      this.formError[key] = ''; // Clear any previous error
  
      if (abstractControl && abstractControl.invalid && (abstractControl.touched || abstractControl.dirty)) {
        const messages = this.validationMessages[key];
        if (messages) {
          for (const errorKey in abstractControl.errors) {
            console.log(`ErrorKey: ${errorKey}, Message: ${messages[errorKey]}`);
            if (errorKey && messages[errorKey]) {
              this.formError[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
  
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }
    });
  }
  
  
  



}
