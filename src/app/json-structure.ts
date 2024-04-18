export interface CollegeStudents {
  fullTime: number;
  partTime: number;
}

export interface CollegeData {
  name: string;
  type: string;
  established: number;
  students: CollegeStudents;
  image: string;
  location: string;
}
