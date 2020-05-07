import { Component, OnInit } from '@angular/core';
import * as Datamap from 'node_modules/datamaps/dist/datamaps.world.min.js';

declare var Datamap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'datamapsusa';

  ngOnInit(){
    this.usaMap();
  }

  usaMap() {
    const election = new Datamap({
      scope: 'usa',
      element: document.getElementById('container'),
      geographyConfig: {
        highlightBorderColor: '#bada55',
       popupTemplate: function(geography, data) {
          return '<div class="hoverinfo">' + geography.properties.name + 
          ' Loss Ratio:' +  data.lossRatio + ' Claims: ' + data.claims + ' Premiums: ' + data.premiums + '</div>'
        },
        highlightBorderWidth: 3
      },

      fills: {
      'Republican': '#5fb2ce',
      'Democrat': '#86c5da',
      'Heavy Democrat': '#99cfe0',
      'Light Democrat': '#add8e6',
      'Heavy Republican': '#c1e1ec',
      'Light Republican': '#d4ebf2',
      defaultFill: '#d7fffe'
    },
    data:{
      "AZ": {
          "fillKey": "Republican",
          "lossRatio": 5,
          "claims": 100,
          "premiums": 150
      },
      "CO": {
          "fillKey": "Light Democrat",
          "lossRatio": 5
      },
      "DE": {
          "fillKey": "Democrat",
          "lossRatio": 32
      },
      "FL": {
          "fillKey": "UNDECIDED",
          "lossRatio": 29
      },
      "GA": {
          "fillKey": "Republican",
          "lossRatio": 32
      },
      "HI": {
          "fillKey": "Democrat",
          "lossRatio": 32
      },
      "ID": {
          "fillKey": "Republican",
          "lossRatio": 32
      },
      "IL": {
          "fillKey": "Democrat",
          "lossRatio": 32
      },
      "IN": {
          "fillKey": "Republican",
          "lossRatio": 11
      },
      "IA": {
          "fillKey": "Light Democrat",
          "lossRatio": 11
      },
      "KS": {
          "fillKey": "Republican",
          "lossRatio": 32
      },
      "KY": {
          "fillKey": "Republican",
          "lossRatio": 32
      },
      "LA": {
          "fillKey": "Republican",
          "lossRatio": 32
      },
      "MD": {
          "fillKey": "Democrat",
          "lossRatio": 32
      },
      "ME": {
          "fillKey": "Democrat",
          "lossRatio": 32
      },
      "MA": {
          "fillKey": "Democrat",
          "lossRatio": 32
      },
      "MN": {
          "fillKey": "Democrat",
          "lossRatio": 32
      },
      "MI": {
          "fillKey": "Democrat",
          "lossRatio": 32
      },
      "MS": {
          "fillKey": "Republican",
          "lossRatio": 32
      },
      "MO": {
          "fillKey": "Republican",
          "lossRatio": 13
      },
      "MT": {
          "fillKey": "Republican",
          "lossRatio": 32
      },
      "NC": {
          "fillKey": "Light Republican",
          "lossRatio": 32
      },
      "NE": {
          "fillKey": "Republican",
          "lossRatio": 32
      },
      "NV": {
          "fillKey": "Heavy Democrat",
          "lossRatio": 32
      },
      "NH": {
          "fillKey": "Light Democrat",
          "lossRatio": 32
      },
      "NJ": {
          "fillKey": "Democrat",
          "lossRatio": 32
      },
      "NY": {
          "fillKey": "Democrat",
          "lossRatio": 32
      },
      "ND": {
          "fillKey": "Republican",
          "lossRatio": 32
      },
      "NM": {
          "fillKey": "Democrat",
          "lossRatio": 32
      },
      "OH": {
          "fillKey": "UNDECIDED",
          "lossRatio": 32
      },
      "OK": {
          "fillKey": "Republican",
          "lossRatio": 32
      },
      "OR": {
          "fillKey": "Democrat",
          "lossRatio": 32
      },
      "PA": {
          "fillKey": "Democrat",
          "lossRatio": 32
      },
      "RI": {
          "fillKey": "Democrat",
          "lossRatio": 32
      },
      "SC": {
          "fillKey": "Republican",
          "lossRatio": 32
      },
      "SD": {
          "fillKey": "Republican",
          "lossRatio": 32
      },
      "TN": {
          "fillKey": "Republican",
          "lossRatio": 32
      },
      "TX": {
          "fillKey": "Republican",
          "lossRatio": 32
      },
      "UT": {
          "fillKey": "Republican",
          "lossRatio": 32
      },
      "WI": {
          "fillKey": "Democrat",
          "lossRatio": 32
      },
      "VA": {
          "fillKey": "Light Democrat",
          "lossRatio": 32
      },
      "VT": {
          "fillKey": "Democrat",
          "lossRatio": 32
      },
      "WA": {
          "fillKey": "Democrat",
          "lossRatio": 32
      },
      "WV": {
          "fillKey": "Republican",
          "lossRatio": 32
      },
      "WY": {
          "fillKey": "Republican",
          "lossRatio": 32
      },
      "CA": {
          "fillKey": "Democrat",
          "lossRatio": 32
      },
      "CT": {
          "fillKey": "Democrat",
          "lossRatio": 32
      },
      "AK": {
          "fillKey": "Republican",
          "lossRatio": 32
      },
      "AR": {
          "fillKey": "Republican",
          "lossRatio": 32
      },
      "AL": {
          "fillKey": "Republican",
          "lossRatio": 32
      }
    }
    });
    election.labels();
  }
}
