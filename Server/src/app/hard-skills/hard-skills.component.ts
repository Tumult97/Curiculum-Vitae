import {Component, OnInit} from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.scss'],
})
export class HardSkillsComponent implements OnInit {
  response: HighlightResult;

  javacode = 'public static void main(String[] args) {\n' +
    '\n' +
    '        int num = 100, sum = 0;\n' +
    '\n' +
    '        for(int i = 1; i <= num; ++i)\n' +
    '        {\n' +
    '            sum += i;\n' +
    '        }\n' +
    '\n' +
    '        System.out.println("Sum = " + sum);\n' +
    '    }';

  code = `function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello there!";
  document.getElementById("demo2").innerHTML = "How are you?";
}`;

  constructor() { }

  ngOnInit() {
  }

  onHighlight(e) {
    this.response = {
      language: e.language,
      r: e.r,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    };
  }
}
