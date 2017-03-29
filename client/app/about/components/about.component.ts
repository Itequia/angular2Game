import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service'
import { About } from '../models/about.model'
import { ReverseCustomPipe } from '../../customPipe/reverseCustomPipe.component'

@Component({
    selector: 'about-page',
    template: `
<div class="container" >
    <form class="well form-horizontal contact-form" >
            <fieldset>
                    <legend>{{message}}  {{reversedMessage | reverseOrderText}}</legend>

                    <!-- Text input-->
                    <div class="form-group">
                    <label class="col-md-4 control-label">First Name</label>  
                    <div class="col-md-4 inputGroupContainer">
                    <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                    <input  name="first_name" placeholder="First Name" class="form-control"  type="text">
                        </div>
                    </div>
                    </div>

                    <!-- Text input-->

                    <div class="form-group">
                    <label class="col-md-4 control-label" >Last Name</label> 
                        <div class="col-md-4 inputGroupContainer">
                        <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                    <input name="last_name" placeholder="Last Name" class="form-control"  type="text">
                        </div>
                    </div>
                    </div>

                    <!-- Text input-->
                        <div class="form-group">
                    <label class="col-md-4 control-label">E-Mail</label>  
                        <div class="col-md-4 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                    <input name="email" placeholder="E-Mail Address" class="form-control"  type="text">
                        </div>
                    </div>
                    </div>

                    <!-- Button -->
                    <div class="form-group">
                    <label class="col-md-4 control-label"></label>
                    <div class="col-md-4">
                        <button (click)="sendEmail()" type="submit" class="btn btn-warning" >Send <span class="glyphicon glyphicon-send"></span></button>
                    </div>
                    </div>

            </fieldset>
    </form>
</div>
    `
})
export class AboutComponent implements OnInit {

    aboutModel:About;
    message:string;
    reversedMessage:string;
    errorMessage:string;

    constructor(private _aboutService:AboutService) { 
    }

    ngOnInit() {
        this._aboutService.getAboutInfo()
                .subscribe(
                    result => this.aboutModel = result,
                    error => console.log(error),
                    () => (this.message = this.aboutModel.message, this.reversedMessage = this.aboutModel.reversedMessage),
                );
    }
    sendEmail() {
        console.log("Email send");
    }
    
}