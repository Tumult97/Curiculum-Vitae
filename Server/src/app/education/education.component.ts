import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MdbTablePaginationComponent, MdbTableService} from 'angular-bootstrap-md';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;
  previous: any = [];
  universityUnits: object[] = [];
  majors: string[] = [];
  educationDetails: object[] = [];
  course: object = {
    courseTitle: 'Bachelor of Computer and Information Sciences',
    courseCode: 4307
  };
  firstItemIndex;
  lastItemIndex;

  constructor(private tableService: MdbTableService,private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.populateUnits();
    this.populateMajors();
    this.tableService.setDataSource(this.universityUnits);
    this.universityUnits = this.tableService.getDataSource();
    this.previous = this.tableService.getDataSource();
  }

  populateUnits() {
    this.universityUnits = [];
    this.universityUnits.push({
      unitTitle: 'IT in Organizations',
      unitCode: 'FIT1003',
      unitDesc: '',
      finalScore: 51
    });
    this.universityUnits.push({
      unitTitle: 'Introduction to Computer Systems and Network Security',
      unitCode: 'FIT1047',
      unitDesc: '',
      finalScore: 76
    });
    this.universityUnits.push({
      unitTitle: 'Web Fundamentals',
      unitCode: 'FIT1050',
      unitDesc: '',
      finalScore: 66
    });
    this.universityUnits.push({
      unitTitle: 'Programming Foundations',
      unitCode: 'FIT1051',
      unitDesc: 'Java 1',
      finalScore: 59
    });
    this.universityUnits.push({
      unitTitle: 'Business Statistics',
      unitCode: 'ETS1102',
      unitDesc: '',
      finalScore: 54
    });
    this.universityUnits.push({
      unitTitle: 'Data Management',
      unitCode: 'FIT1004',
      unitDesc: 'Databases 1',
      finalScore: 66
    });
    this.universityUnits.push({
      unitTitle: 'Digital Media Authoring',
      unitCode: 'FIT1035',
      unitDesc: 'Flash',
      finalScore: 82
    });
    this.universityUnits.push({
      unitTitle: 'Computer Programming 2',
      unitCode: 'FIT 2034',
      unitDesc: 'Java 2',
      finalScore: 70
    });
    this.universityUnits.push({
      unitTitle: 'Systems Development',
      unitCode: 'FIT 2001',
      unitDesc: '',
      finalScore: 73
    });
    this.universityUnits.push({
      unitTitle: 'Network Architecture',
      unitCode: 'FIT 2020',
      unitDesc: '',
      finalScore: 73
    });
    this.universityUnits.push({
      unitTitle: 'Mobile Application Development',
      unitCode: 'FIT2081',
      unitDesc: 'Android Development',
      finalScore: 71
    });
    this.universityUnits.push({
      unitTitle: 'Information and Network Security',
      unitCode: 'FIT 3031',
      unitDesc: '',
      finalScore: 77
    });
    this.universityUnits.push({
      unitTitle: 'IT Professional Practice',
      unitCode: 'FIT1049',
      unitDesc: '',
      finalScore: 84
    });
    this.universityUnits.push({
      unitTitle: 'IT Project Management',
      unitCode: 'FIT2002',
      unitDesc: '',
      finalScore: 70
    });
    this.universityUnits.push({
      unitTitle: 'Software Analysis, Design and Architecture',
      unitCode: 'FIT2005',
      unitDesc: 'Databases 2',
      finalScore: 63
    });
    this.universityUnits.push({
      unitTitle: 'Computer Models for Business Decisions',
      unitCode: 'FIT2035',
      unitDesc: '',
      finalScore: 68
    });
    this.universityUnits.push({
      unitTitle: 'Operating Environments',
      unitCode: 'FIT3046',
      unitDesc: 'Operating Systems',
      finalScore: 69
    });
    this.universityUnits.push({
      unitTitle: 'Business Intelligence and Data Warehousing',
      unitCode: 'FIR3003',
      unitDesc: 'Databases 3',
      finalScore: 58
    });
    this.universityUnits.push({
      unitTitle: 'Industrial Experience 1',
      unitCode: 'FIT3047',
      unitDesc: 'Year long development in industry',
      finalScore: 67
    });
    this.universityUnits.push({
      unitTitle: 'Software Engineering: Architecture and Design',
      unitCode: 'FIT3077',
      unitDesc: 'Java Stack',
      finalScore: 69
    });
    this.universityUnits.push({
      unitTitle: 'Data Structures and Algorithms',
      unitCode: 'FIT2009',
      unitDesc: 'Java 3',
      finalScore: 71
    });
    this.universityUnits.push({
      unitTitle: 'Business Information Systems and Processes',
      unitCode: 'FIR2090',
      unitDesc: '',
      finalScore: 58
    });
    this.universityUnits.push({
      unitTitle: 'E-Business Software Technologies',
      unitCode: 'FIT2093',
      unitDesc: 'Mean Stack Development',
      finalScore: 93
    });
    this.universityUnits.push({
      unitTitle: 'Industrial Experience 2',
      unitCode: 'FIT3048',
      unitDesc: 'Year long development in industry',
      finalScore: 71
    });
  }

  populateMajors() {
    this.majors = [];
    this.majors.push('Double Major');
    this.majors.push('Applications development and networks');
    this.majors.push('Business systems');
  }

  populateDetails() {
    this.educationDetails = [];
    this.educationDetails.push({institutionName: '', dateFrom: new Date(), dateTo: new Date(), achieved: ''});
  }

  ngAfterViewInit(): void {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(8);
    this.firstItemIndex = this.mdbTablePagination.firstItemIndex;
    this.lastItemIndex = this.mdbTablePagination.lastItemIndex;
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
  }

  onNextPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }

  onPreviousPageClick(data: any) {
    this.firstItemIndex = data.first;
    this.lastItemIndex = data.last;
  }

}
