import {Component, OnInit} from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.scss'],
})
export class HardSkillsComponent implements OnInit {
  /*#region Code Samples*/
  nodeCode = 'const express = require("express");\n' +
    'const mongodb = require("mongodb");\n' +
    'const mongoose = require("mongoose");\n' +
    'const url = "mongodb://localhost:27017/EpicTimeUserAccounts";\n' +
    'const app = express();\n' +
    'mongoose.connect(url, {useNewUrlParser: true}, err => {\n' +
    '    if (err) return console.log("MongoDB connection error: " + err);\n' +
    '});';

  nodeBackEnd = 'app.get(\'/dashboard/:username\', (req, res) => {\n' +
    '    Task.find({user: req.params.username}, (err, data) => {\n' +
    '        if(err)\n' +
    '            return res.json(\'Cannot retrieve from database\')\n' +
    '        if(!data) \n' +
    '            return res.status(404).json();\n' +
    '        \n' +
    '        res.json(data);\n' +
    '    });\n' +
    '});';

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
    '    <h5 class="label-1">Total Time Entries: <label id="totalEntries"></label></h5>\n' +
    '</div>\n' +
    '<div class="col-sm">\n' +
    '    <h5 class="label-1 label-detail-1">\n' +
    '        Total Hours Spent: <label id="totalHours"></label>\n' +
    '    </h5>\n' +
    '</div>';

  css = '.monokai {\n' +
    '  background-color: #212121;\n' +
    '  color: #FFFFFF;\n' +
    '  margin-right: 1em;\n' +
    '  height: 100%;\n' +
    '  border-radius: 10px;\n' +
    '  padding-right: 0;\n' +
    '  font-size: smaller;\n' +
    '}';

  angularcode = 'onHighlight(e) {\n' +
    '    this.response = {\n' +
    '      language: e.language,\n' +
    '      r: e.r,\n' +
    '      second_best: \'{...}\',\n' +
    '      top: \'{...}\',\n' +
    '      value: \'{...}\'\n' +
    '    };\n' +
    '  }';

  angularfront = '<div class="container-fluid" [ngClass]="modal" >\n' +
    '  <div class="row">\n' +
    '    <app-hard-skills></app-hard-skills>\n' +
    '    <br />\n' +
    '    <div class="col-sm-6">\n' +
    '      <app-soft-skills></app-soft-skills>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>';

  aspfront = '<asp:GridView ID="GridView1" runat="server" OnDataBound = "OnDataBound">\n' +
    '    <Columns>\n' +
    '        <asp:BoundField DataField="CustomerName" HeaderText="Name"/>\n' +
    '        <asp:BoundField DataField="EmployeeName" HeaderText="Name"/>\n' +
    '        <asp:BoundField DataField="EmployeeCountry" HeaderText="Country"/>\n' +
    '    </Columns>\n' +
    '</asp:GridView>';

  vbcode = 'Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load\n' +
    '    If Not Me.IsPostBack Then\n' +
    '        Dim dt As DataTable = dl.GetCustomers()\n' +
    '        GridView1.DataSource = dt\n' +
    '        GridView1.DataBind()\n' +
    '    End If\n' +
    'End Sub';

  aspback = 'protected void Page_Load(object sender, EventArgs e)\n' +
    '{\n' +
    '    if (!this.IsPostBack) {\n' +
    '        DataTable dt = dl.GetCustomers();\n' +
    '        GridView1.DataSource = dt;\n' +
    '        GridView1.DataBind();\n' +
    '    }\n' +
    '}';

  androidback = '@Override\n' +
    '    public void onCreate(Bundle savedInstanceState) {\n' +
    '        super.onCreate(savedInstanceState);\n' +
    '        setContentView(R.layout.sample_main);\n' +
    '        mRequiresIdleCheckbox = findViewById(R.id.checkbox_idle);\n' +
    '        mServiceComponent = new ComponentName(this, MyJobService.class);\n' +
    '        mHandler = new IncomingMessageHandler(this);\n' +
    '    }';

  androidfront = '<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"\n' +
    '              android:orientation="vertical" >\n' +
    '    <TextView android:id="@+id/text"\n' +
    '              android:text="Hello, I am a TextView" />\n' +
    '    <Button android:id="@+id/button"\n' +
    '            android:text="Hello, I am a Button" />\n' +
    '</LinearLayout>';
  /*#endregion*/
  response: HighlightResult;
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
