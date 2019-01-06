import { Component, OnInit } from '@angular/core';
// import * as CanvasJS from https://canvasjs.com/assets/script/canvasjs.min.js;

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
// window.onload = function() {

    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        // text: "Desktop Search Engine Market Share - 2016"
      },
      data: [{
        type: "pie",
        startAngle: 240,
        yValueFormatString: "##0.00'%'",
        indexLabel: "{label} {y}",
        dataPoints: [
          {y: 79.45, label: "Education"},
          {y: 7.00, label: "Neccessaties"},
          {y: 7.00, label: "Play"},
          {y: 4.91, label: "Give"},
          {y: 1.00, label: "Long time saving"},
          {y: 0.63, label: "Freedom Financial"}
        ]
      }]
    });
    chart.render();
  }
}
