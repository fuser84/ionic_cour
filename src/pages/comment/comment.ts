import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Dish } from '../../shared/dish';

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  comments: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              private formBuilder: FormBuilder) {
    this.comments = this.formBuilder.group({
      author: ['', Validators.required],
      rating: 5,
      comment: ['', Validators.required],
      // dateTime: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  onSubmit(){

    console.log(this.comments.value);
    this.viewCtrl.dismiss();
  }

}
