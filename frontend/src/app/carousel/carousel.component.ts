import { Component } from '@angular/core';
import Glide from '@glidejs/glide';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images: string[] = ['carousel0.jpg', 'carousel1.jpg', 'carousel2.jpg'];

  ngAfterViewInit(): void {
    const glide = new Glide('.glide'); // Replace '.glide' with your slider class or ID
    glide.mount();
  }

  getImagePath(image: string): string {
    return `assets/${image}`;
  }
}
