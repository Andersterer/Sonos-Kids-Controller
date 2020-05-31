import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
// Shoudl be moved in a compoinent that is then displayed in a page like this
import { MediaService } from '../media.service';
import { Media } from '../media';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-medialist',
  templateUrl: './medialist.page.html',
  styleUrls: ['./medialist.page.scss'],
})
export class MedialistPage implements OnInit {
  @ViewChild('slider', { static: false }) slider: IonSlides;

  media: Media[] = [];

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false,
    loop: true
  };

  constructor(
    private mediaService: MediaService,
    private playerService: PlayerService,
  ) {}

  ngOnInit() {
    // Retrieve data from the API
    this.mediaService.getMedia().subscribe(media => {
      this.media = media;
      console.log(this.media[0]);



      // Test: Set volume of player after loading data
      // this.playerService.play();
    });
  }

  SlideDidChange() {
    console.log('SliderDidChange');
  }
}
