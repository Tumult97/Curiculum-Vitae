import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  universityUnits: object[] = [];
  majors: string[] = [];
  course: object = {
    courseTitle: 'Bachelor of Computer and Information Sciences',
    courseCode: 4307
  };

  constructor() { }

  ngOnInit() {
    this.populateUnits();
    this.populateMajors();
  }

  populateUnits() {
    this.universityUnits = [];
    this.universityUnits.push({ unitTitle: 'IT in Organizations', unitCode: 'FIT1003' });
    this.universityUnits.push({ unitTitle: 'Introduction to Computer Systems and Network Security', unitCode: 'FIT1047', unitDesc: '' });
    this.universityUnits.push({ unitTitle: 'Web Fundamentals', unitCode: 'FIT1050', unitDesc: '' });
    this.universityUnits.push({ unitTitle: 'Programming Foundations', unitCode: 'FIT1051', unitDesc: 'Java 1' });
    this.universityUnits.push({ unitTitle: 'Business Statistics', unitCode: 'ETS1102', unitDesc: '' });
    this.universityUnits.push({ unitTitle: 'Data Management', unitCode: 'FIT1004', unitDesc: 'Databases 1' });
    this.universityUnits.push({ unitTitle: 'Digital Media Authoring', unitCode: 'FIT1035', unitDesc: 'Flash' });
    this.universityUnits.push({ unitTitle: 'Computer Programming 2', unitCode: 'FIT 2034', unitDesc: 'Java 2' });
    this.universityUnits.push({ unitTitle: 'Systems Development', unitCode: 'FIT 2001', unitDesc: '' });
    this.universityUnits.push({ unitTitle: 'Network Architecture', unitCode: 'FIT 2020', unitDesc: '' });
    this.universityUnits.push({ unitTitle: 'Mobile Application Development', unitCode: 'FIT2081', unitDesc: 'Android Development' });
    this.universityUnits.push({ unitTitle: 'Information and Network Security', unitCode: 'FIT 3031', unitDesc: '' });
    this.universityUnits.push({ unitTitle: 'IT Professional Practice', unitCode: 'FIT1049', unitDesc: '' });
    this.universityUnits.push({ unitTitle: 'IT Project Management', unitCode: 'FIT2002', unitDesc: '' });
    this.universityUnits.push({ unitTitle: 'Software Analysis, Design and Architecture', unitCode: 'FIT2005', unitDesc: 'Databases 2' });
    this.universityUnits.push({ unitTitle: 'Computer Models for Business Decisions', unitCode: 'FIT2035', unitDesc: '' });
    this.universityUnits.push({ unitTitle: 'Operating Environments', unitCode: 'FIT3046', unitDesc: 'Operating Systems' });
    this.universityUnits.push({ unitTitle: 'Business Intelligence and Data Warehousing', unitCode: 'FIR3003', unitDesc: 'Databases 3' });
    this.universityUnits.push({ unitTitle: 'Industrial Experience 1', unitCode: 'FIT3047', unitDesc: 'Year long development in industry' });
    this.universityUnits.push({ unitTitle: 'Software Engineering: Architecture and Design', unitCode: 'FIT3077', unitDesc: 'Java Stack' });
    this.universityUnits.push({ unitTitle: 'Data Structures and Algorithms', unitCode: 'FIT2009', unitDesc: 'Java 3' });
    this.universityUnits.push({ unitTitle: 'Business Information Systems and Processes', unitCode: 'FIR2090', unitDesc: '' });
    this.universityUnits.push({ unitTitle: 'E-Business Software Technologies', unitCode: 'FIT2093', unitDesc: 'Mean Stack Development' });
    this.universityUnits.push({ unitTitle: 'Industrial Experience 2', unitCode: 'FIT3048', unitDesc: 'Year long development in industry' });
  }

  populateMajors() {
    this.majors = [];
    this.majors.push('Double Major');
    this.majors.push('Applications development and networks');
    this.majors.push('Business systems');
  }

}
