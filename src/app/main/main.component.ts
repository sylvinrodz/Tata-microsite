import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, ViewChild, Inject } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  @ViewChild('videoPlayer1') videoplayer1: ElementRef;
  @ViewChild('btn') btn: ElementRef;
  constructor(@Inject(DOCUMENT) document) { 
   console.log( document.getElementById('video'))
  }
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
}
vidEnded(){
  this.btn.nativeElement.style.display = "block";
}
PlayVideo(){
  this.btn.nativeElement.style.display = "none";
  this.videoplayer.nativeElement.style.display = "none";
  this.videoplayer1.nativeElement.style.display = "block";
  this.videoplayer1.nativeElement.play();
}


}
