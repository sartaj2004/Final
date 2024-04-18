export class College {
  constructor(
    public name: string = '',
    public type: string = '',
    public established: number = 0,
    public students: { fullTime: number; partTime: number; } = { fullTime: 0, partTime: 0 },
    public image: string = '',
    public location: string = ''
  ) {}
}
