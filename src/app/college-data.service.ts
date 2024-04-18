import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { College } from './college'; // Updated import
import { COLLEGE_DATA } from './catalog-data'; // Assume this is the correct path to your college data file

@Injectable({
  providedIn: 'root'
})
export class CollegeDataService {
  private college!: College;
  private static readonly imageFolder ='/assets/Images/';
  constructor() {
    this.initializeCollege();
  }

  private initializeCollege(): void {
    // Here, COLLEGE_DATA is assumed to represent a single college
    this.college = CollegeDataService.jsonToCollege(COLLEGE_DATA);
  }

  private static jsonToCollege(collegeJson: any): College {
    // Transform the JSON object into a College instance
    return new College(
      collegeJson.name,
      collegeJson.type,
      collegeJson.established,
      {
        fullTime: collegeJson.students.fullTime,
        partTime: collegeJson.students.partTime
      },
      collegeJson.image,
      collegeJson.location
    );
  }

  public getCollegeData(): Observable<College> {
    // This method returns an observable of the current college data
    return of(this.college);
  }
}
