import { Component, OnInit } from '@angular/core';
import { CollegeDataService } from '../college-data.service';
import { College } from '../college';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {
  college: College = new College(); // Initialize with default values
  imageUrl = '/assets/Images/';

  constructor(private collegeDataService: CollegeDataService) {}

  ngOnInit(): void {
    this.collegeDataService.getCollegeData().subscribe(
      (data: College) => {
        this.college = data;
      },
      error => {
        console.error('Error fetching college data:', error);
      }
    );
  }
}
