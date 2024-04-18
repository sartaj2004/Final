import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentDate: Date = new Date();  // Holds the current date object
  authorName: string = 'Sartaj Singh';  // Replace 'Your Name' with your actual name
}
