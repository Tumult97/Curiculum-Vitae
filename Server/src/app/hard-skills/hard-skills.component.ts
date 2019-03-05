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
    '    int num = 100, sum = 0;\n' +
    '    for(int i = 1; i <= num; ++i)\n' +
    '    {\n' +
    '        sum += i;\n' +
    '    }\n' +
    '    System.out.println("Sum = " + sum);\n' +
    '}';

  javascriptcode = 'var close = document.getElementsByClassName("closebtn");\n' +
    'for (var i = 0; i < close.length; i++) {\n' +
    '    close[i].onclick = function(){\n' +
    '        var customAlert = this.parentElement;\n' +
    '        customAlert.style.opacity = "0";\n' +
    '        setTimeout(function(){ customAlert.style.display = "none"; }, 600);\n' +
    '    }\n' +
    '}';

  webcode = '<div class="col-sm">\n' +
    '    <h5 class="label-1 label-detail-1">Total Time Entries: <label id="totalEntries"></label></h5>\n' +
    '</div>\n' +
    '<div class="col-sm">\n' +
    '    <h5 class="label-1 label-detail-1">\n' +
    '        Total Hours Spent: <label id="totalHours"></label>\n' +
    '    </h5>\n' +
    '</div>';

  angularcode = '@Component({\n' +
    '  selector: \'app-hard-skills\',\n' +
    '  templateUrl: \'./hard-skills.component.html\',\n' +
    '  styleUrls: [\'./hard-skills.component.scss\'],\n' +
    '})\n' +
    'export class HardSkillsComponent implements OnInit {\n' +
    '  response: HighlightResult;';

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
