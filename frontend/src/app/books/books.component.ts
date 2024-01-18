import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {
    JanuaryBooks: any[] = [
    {
      id: '1',
      name: "Eleanor Oliphant is completely fine",
      author: "Gail Honeyman",
      rating: "",
      imageUrl: "assets/EleanorOliphant.png"
    },
    {
      id: "2",
      name: "Sister of my Heart",
      author: "Chitra Banerjee Divakaruni",
      rating: "",
      imageUrl: "assets/SisterOfMyHeart.png"
    }
  ]
}
