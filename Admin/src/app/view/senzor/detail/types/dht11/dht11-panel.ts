import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

//ngRx
import { ApplicationState } from 'app/state/state/application.state';
import { Store } from '@ngrx/store';

//websocket
import { Socket } from '../../../../../service/Socket';

//others
declare var jQuery: any;
import { chart } from 'highcharts';

//cellarstone
import { PublishToMqttModel } from 'app/models/publishToMqtt.model';
import { PublishToMqttAction } from 'app/state/actions/mqtt.actions';


@Component({
  selector: 'dht11-panel',
  templateUrl: './dht11-panel.html',
  styleUrls: ['./dht11-panel.scss']
})
export class Dht11Panel implements OnInit {

  @Input()
  private senzorName: string;

  //websockets
  public socket: Socket;
  public socket2: Socket;

  @ViewChild('chartTarget') chartTarget: ElementRef;
  chart: Highcharts.ChartObject;

  @ViewChild('chartTarget2') chartTarget2: ElementRef;
  chart2: Highcharts.ChartObject;


  public actualValue: number = 0;
  public actualValue2: number = 0;


  constructor(private store: Store<ApplicationState>) { }

  ngOnInit() {

    this.setCharts();

    //websockets
    this.socket = new Socket(this.senzorName + "temperature");
    this.socket.on('connect', this.onConnect.bind(this));
    this.socket.on('disconnect', this.onDisconnect.bind(this));
    this.socket.on('message', this.onMessage.bind(this));

    this.socket2 = new Socket(this.senzorName + "humidity");
    this.socket2.on('connect', this.onConnect2.bind(this));
    this.socket2.on('disconnect', this.onDisconnect2.bind(this));
    this.socket2.on('message', this.onMessage2.bind(this));


    // CHECK SENZOR
    this.checkSenzor();
  }
  ngOnDestroy() {
    console.log("destroy");

    this.chart = null;
    this.chart2 = null;

    this.socket.close();
    this.socket.ee.removeAllListeners();
    this.socket = null;
    this.socket2.close();
    this.socket2.ee.removeAllListeners();
    this.socket2 = null;
  }



  //*********************************/
  /* CHECK Senzor Actual State */
  //*********************************/

  checkSenzor() {

    // CHECK TEMPERATURE
    let vm = new PublishToMqttModel();
    vm.topic = this.senzorName + "/check_Temperature";
    vm.value = "";

    // CHECK HUMIDITY
    let vm2 = new PublishToMqttModel();
    vm2.topic = this.senzorName + "/check_Humidity";
    vm2.value = "";

    // ARRAY of actions
    let arrVM = Array<PublishToMqttModel>();
    arrVM.push(vm);
    arrVM.push(vm2);

    this.store.dispatch(new PublishToMqttAction(arrVM));
  }


  //*********************************/
  /* CHARTS */
  //*********************************/

  setCharts() {
    const options: Highcharts.Options = {
      chart: {
        type: 'line',
        // animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
          // load: function () {

          //     // set up the updating of the chart each second
          //     var series = this.series[0];
          //     setInterval(function () {
          //         var x = (new Date()).getTime(), // current time
          //             y = Math.random();
          //         series.addPoint([x, y], true, true);
          //     }, 1000);
          // }
        }
      },
      title: {
        text: 'Temperature °C'
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
      },
      yAxis: {
        title: {
          text: 'Value'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      // tooltip: {
      //     formatter: function () {
      //         return '<b>' + this.series.name + '</b><br/>' +
      //             this.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
      //             this.numberFormat(this.y, 2);
      //     }
      // },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      // series: [{
      //     name: 's3102',
      //     data: []
      // }]
      series: [{
        name: 'Random data',
        data: (function () {
          // generate an array of random data
          var data = [],
            time = (new Date()).getTime(),
            i;

          // data.push({
          //     x: time + i * 1000,
          //     y: 0
          // });

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 1000,
              y: 0
            });
          }
          return data;
        }())
      }]
    };

    this.chart = chart(this.chartTarget.nativeElement, options);


    const options2: Highcharts.Options = {
      chart: {
        type: 'line',
        // animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
          // load: function () {

          //     // set up the updating of the chart each second
          //     var series = this.series[0];
          //     setInterval(function () {
          //         var x = (new Date()).getTime(), // current time
          //             y = Math.random();
          //         series.addPoint([x, y], true, true);
          //     }, 1000);
          // }
        }
      },
      title: {
        text: 'Humidity %'
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
      },
      yAxis: {
        title: {
          text: 'Value'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      // tooltip: {
      //     formatter: function () {
      //         return '<b>' + this.series.name + '</b><br/>' +
      //             this.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
      //             this.numberFormat(this.y, 2);
      //     }
      // },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      // series: [{
      //     name: 's3102',
      //     data: []
      // }]
      series: [{
        name: 'Random data',
        data: (function () {
          // generate an array of random data
          var data = [],
            time = (new Date()).getTime(),
            i;

          // data.push({
          //     x: time + i * 1000,
          //     y: 0
          // });

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 1000,
              y: 0
            });
          }
          return data;
        }()),
        color: "#009688"
      }]
    };

    this.chart2 = chart(this.chartTarget2.nativeElement, options2);
  }

  //*********************************/
  /* WEBSOCKET METHODS */
  //*********************************/

  onConnect() {
    console.log("onConnect");
  }
  onDisconnect() {
    console.log("onDisconnect");
  }

  onMessage(message) {
    let number = parseFloat(message);
    this.actualValue = number;

    var x = (new Date()).getTime(), // current time
      y = Math.round(this.actualValue);
    this.chart.series[0].addPoint([x, y], true, true)
  }

  onConnect2() {
    console.log("onConnect2");
  }
  onDisconnect2() {
    console.log("onDisconnect2");
  }

  onMessage2(message) {
    let number = parseFloat(message);
    this.actualValue2 = number;

    var x = (new Date()).getTime(), // current time
      y = Math.round(this.actualValue2);
    this.chart2.series[0].addPoint([x, y], true, true)
  }





}
