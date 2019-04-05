import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-employment-history',
    templateUrl: './employment-history.component.html',
    styleUrls: ['./employment-history.component.scss']
})
export class EmploymentHistoryComponent implements OnInit {
    history: Array<object>;

    constructor() {
    }

    ngOnInit() {
        this.history.push({
            company: 'Blue Ocean pty ltd',
            address: 'Shop F2 \n' +
                'Bedford Square \n' +
                'Bedfordview \n' +
                'Germiston',
            referee: {
                fname: 'Eric',
                lname: 'Huang',
                contact: '0112345678'
            },
            title: 'Floor assistant',
            responsibilities: [
                'Assist customers',
                'Setup for events',
                'Advertise',
                'Clean',
                'Help with customers and young children',
                'Maintain and troubleshoot Computers and Gear'
            ]
        });

        this.history.push({
            company: 'Netgen software solutions',
            address: 'Office 1 \n' +
                '280 Kent Avenue \n' +
                'Ferndale \n' +
                'Randburg',
            referee: {
                fname: 'Andrew',
                lname: 'McGregor',
                contact: '0112345678'
            },
            title: 'Software Developer',
            responsibilities: [
                'Maintain legacy systems',
                'Add and change new and existing features in systems',
                'Provide new solutions to client requests',
                'Represent company in all dealings with clients',
                'Interact with clients',
                'Assist in deploying software solutions and updates',
                'Research new technology and new methods of accomplishing tasks'
            ]
        });
    }

}
