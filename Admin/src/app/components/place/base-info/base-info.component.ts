import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CellarPlace } from 'app/entities/CellarPlace';
import { Message } from 'primeng/primeng';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute } from '@angular/router';


//others
declare var jQuery: any;

@Component({
  selector: 'app-place-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.scss']
})
export class PlaceBaseInfoComponent implements OnInit {

  @Input()
  item: CellarPlace;

  @Output() onSave = new EventEmitter<CellarPlace>();
  @Output() onCancel = new EventEmitter();
  @Output() onDelete = new EventEmitter<CellarPlace>();

  lat: number = 50.108445;
  lng: number = 14.452613;

  validations: Message[] = [];
  messagesToUser: Message[] = [];

  //validation properties
  isNameValid: boolean = true;
  isPathValid: boolean = true;
  isCountryValid: boolean = true;
  isCityValid: boolean = true;
  isStreetValid: boolean = true;
  isZipCodeValid: boolean = true;
  isLatitudeValid: boolean = true;
  isLongtitudeValid: boolean = true;
  isStateValid: boolean = true;
  isMainPictureValid: boolean = true;

  private allowEdit: boolean = false;
  private deleteModal: boolean = false;

  private urlCheck: any;
  colorMap: any;

  constructor(private route: ActivatedRoute) { 
    this.colorMap = { 1: 'newStatePanel', 2: 'approvedStatePanel', 3: 'forbiddenStatePanel' };
  }

  ngOnInit() {
    console.log(this.item);

    if (this.item != undefined) {


      this.lat = Number(this.item.latitude);
      this.lng = Number(this.item.longtitude);

    }

    this.urlCheck = {
      newPlace0: this.route.snapshot.params['id']
    }

    if(this.urlCheck.newPlace0 === '0') {
      return this.allowEdit = true;
    } else {
      return this.allowEdit = false;
    }

    
  }


  onNameInput(event: any) {

    var asdf = event.target.value.toString();

    var asdf2 = asdf.replace(/ /g, "-");

    var asdf3 = asdf2.toLowerCase();


    this.item.path = "/" + asdf3;
  }



  savePlace() {

    //validace
    if (this.item.state === "0") {
      this.validations.push({
        severity: 'warn',
        summary: 'State',
        detail: 'State is required'
      });
      this.isStateValid = false;
    }
    else {
      this.isStateValid = true;
    }
    if (!this.item.name) {
      this.validations.push({
        severity: 'warn',
        summary: 'Name',
        detail: 'Name is required'
      });
      this.isNameValid = false;
    }
    else {
      this.isNameValid = true;
    }
    // if (!this.item.path)
    // {
    //     this.validations.push({
    //         severity: 'warn',
    //         summary: 'Path',
    //         detail: 'Path is required'
    //     });
    //     this.isPathValid = false;
    // }
    // else
    // {
    //     this.isPathValid = true;
    // }


    if (this.validations.length == 0) {

      this.lat = Number(this.item.latitude);
      this.lng = Number(this.item.longtitude);


      this.onSave.emit(this.item);

    }
  }


  cancelPlace() {
    this.onCancel.emit();
  }

  deletePlace() {
    this.onDelete.emit(this.item);
  }



  //*********************************/
  //STATE
  //*********************************/

  selectState(e: any) {
    var aaa = e.srcElement.innerHTML.toLowerCase();

    if (aaa === "new") {
      this.item.state = "1";
    }
    else if (aaa === "approved") {
      this.item.state = "2";
    }
    else if (aaa === "forbidden") {
      this.item.state = "3";
    }


  }







}
