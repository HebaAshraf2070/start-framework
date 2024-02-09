import { Component } from '@angular/core';
import { Cards } from '../cards';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  //   carditem: Cards[] = [
  //     { imgurl: "./assets/pic/poert1.png", visiblelayer: false },
  //     { imgurl: "./assets/pic/port2.png", visiblelayer: false },
  //     { imgurl: "./assets/pic/port3.png", visiblelayer: false },
  //     { imgurl: "./assets/pic/poert1.png", visiblelayer: false },
  //     { imgurl: "./assets/pic/port2.png", visiblelayer: false },
  //     { imgurl: "./assets/pic/port3.png", visiblelayer: false }
  //   ]
  //   imgArr: string[] = [
  //     "assets/port1.png", "assets/port2.png", "assets/port3.png",
  //     "assets/port4.png", "assets/port5.png", "assets/port6.png"
  //   ];

  //   byhover(card: Cards): void {
  //     card.visiblelayer = true;
  //   }

  //   nothover(card: Cards): void {
  //     card.visiblelayer = false;
  //   }







  imgArr: string[] = [
    "./assets/pic/poert1.png", "./assets/pic/port2.png", "./assets/pic/port3.png",
    "./assets/pic/poert1.png", "./assets/pic/port2.png", "./assets/pic/port3.png"
  ];
  imgFlag: boolean = false;
  imgSrc: string = ''
  imgIndexAlt: string = ''

  showModal(src: string, index: number) {
    this.imgSrc = src
    this.imgIndexAlt = `portImgModal${++index}`
    console.log(this.imgSrc);
  }

  nextModal() {
    const currentIndex = this.imgArr.indexOf(this.imgSrc);
    const nextIndex = (currentIndex + 1) % this.imgArr.length;
    this.imgSrc = this.imgArr[nextIndex];
  }

  prevModal() {
    const currentIndex = this.imgArr.indexOf(this.imgSrc);
    const prevIndex = (currentIndex - 1 + this.imgArr.length) % this.imgArr.length;
    this.imgSrc = this.imgArr[prevIndex];
  }
}







