import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,  ActionSheetController} from 'ionic-angular';
import { Dish} from '../../shared/dish';
import { Comment} from '../../shared/comment';
import { FavoriteProvider } from '../../providers/favorite/favorite';
import {ModalController} from 'ionic-angular';
import { CommentPage } from '../comment/comment';

/**
 * Generated class for the DishdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dishdetail',
  templateUrl: 'dishdetail.html',
})
export class DishdetailPage {
  dish: Dish;
  errMess: string;
  avgstars: string;
  numcomments: number;

  favorite: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              @Inject('BaseURL') private BaseURL,
              private favoriteservice: FavoriteProvider,
              private toastCtrl: ToastController,
              private actionCtrl: ActionSheetController,
              public modalCtrl: ModalController) {
    // get info from the menu component
    this.dish = this.navParams.get('dish');

    //check of the favorites
    this.favorite = this.favoriteservice.isFavorite(this.dish.id);

    this.numcomments = this.dish.comments.length;
    let total = 0;
    this.dish.comments.forEach(comment => total+=comment.rating);
    this.avgstars = (total/this.numcomments).toFixed(2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishdetailPage');
  }

  addToFavorites(){
    console.log('Adding to Favorites', this.dish.id);
    this.favorite = this.favoriteservice.addFavorite(this.dish.id);
    this.toastCtrl.create({
      message: `Dish ${this.dish.id} added as a favorite successfully`,
      position: 'middle',
      duration: 3000
    }).present();
  }

  showAction(){
    let actionsheet = this.actionCtrl.create({
      title: 'Select Actions',
      buttons: [
        {
          text: 'Add to Favorites',
          handler: () => {
            console.log(this);//debug ==> DishDetailPage as an object
            this.addToFavorites();
            console.log('Added to the favorites');
          }
        },
        {
          text: 'Add Comment',
          handler: () => {
            this.openComment();
            console.log('Comment modal is opened');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    }).present();

  }

  openComment(){
    let modal = this.modalCtrl.create(CommentPage);
    modal.present();
  }

}
