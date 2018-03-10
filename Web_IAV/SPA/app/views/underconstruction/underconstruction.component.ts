import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../auth/auth.service';


import "gsap";
// declare var $: any
declare var TimelineMax: any;
declare var TweenMax: any;
declare var MorphSVGPlugin: any;
declare var Cubic: any;
declare var Power0: any;
declare var Power1: any;
declare var Power2: any;
declare var Power3: any;
declare var Power4: any;
declare var morphSVG: any;


@Component({
  selector: 'app-underconstruction',
  templateUrl: './underconstruction.component.html',
  styleUrls: ['./underconstruction.component.scss']
})
export class UnderconstructionComponent implements OnInit {

  mainTl = new TimelineMax();

  // constructor(public auth: AuthService) { }

  ngOnInit() {
    this.mainTl.add(this.randomFactors())
    .add(this.randomFactors2())
    .add(this.icons())
    .seek("start+=5.5");
  }

  logoclick(){
    // this.auth.login()
  }

  icons() {
    var icons = new TimelineMax();
      icons
      .add('start')
      .to('#cloud-1', 120, {rotation: -360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1}, 'start')
      .to('#cloud-2', 120, {rotation: -360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1}, 'start')
      .to('#cloud-3', 120, {rotation: -360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1}, 'start')
      .to('#wifi-1', 120, {rotation: -360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1}, 'start')
      .to('#wifi-2', 120, {rotation: -360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1}, 'start')
      .to('#wifi-3', 120, {rotation: -360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1}, 'start')
      .to('#globe-1', 120, {rotation: -360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1}, 'start')
      .to('#globe-2', 120, {rotation: -360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1}, 'start')
      .to('#globe-3', 120, {rotation: -360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1}, 'start')
      .to('#globe-4', 120, {rotation: -360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1}, 'start')
      .to('#icons', 120, {rotation: 360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1}, 'start')
      .to('#objects-front', 240, {rotation: 360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1}, 'start')
      .to('#objects-behind', 540, {rotation: 360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1}, 'start');
    
    icons.timeScale(1.5);
    return icons; 
  }
  randomFactors() {
    var random = new TimelineMax({repeat: -1, yoyo: true});
    random
  
      .fromTo('#blink-1', Math.random()*1, {autoAlpha: 0, scale: 0, transformOrigin: 'center'}, {autoAlpha: 1, scale: 1, transformOrigin: 'center'})
      .fromTo('#blink-2', Math.random()*0.5, {autoAlpha: 0, scale: 0, transformOrigin: 'center'}, {autoAlpha: 1, scale: 1, transformOrigin: 'center'})
      .fromTo('#blink-3', Math.random()*0.75, {autoAlpha: 0, scale: 0, transformOrigin: 'center'}, {autoAlpha: 1, scale: 1, transformOrigin: 'center'})
      .fromTo('#blink-4', Math.random()*0.15, {autoAlpha: 0, scale: 0, transformOrigin: 'center'}, {autoAlpha: 1, scale: 1, transformOrigin: 'center'})
      .fromTo('#blink-5', Math.random()*0.25, {autoAlpha: 0, scale: 0, transformOrigin: 'center'}, {autoAlpha: 1, scale: 1, transformOrigin: 'center'})
      .fromTo('#blink-6', Math.random()*0.25, {autoAlpha: 0, scale: 0, transformOrigin: 'center'}, {autoAlpha: 1, scale: 1, transformOrigin: 'center'})
      .fromTo('#blink-7', Math.random()*0.15, {autoAlpha: 0, scale: 0, transformOrigin: 'center'}, {autoAlpha: 1, scale: 1, transformOrigin: 'center'})
      .fromTo('#blink-8', Math.random()*0.25, {autoAlpha: 0, scale: 0, transformOrigin: 'center'}, {autoAlpha: 1, scale: 1, transformOrigin: 'center'})
      .fromTo('#blink-9', Math.random()*0.25, {autoAlpha: 0, scale: 0, transformOrigin: 'center'}, {autoAlpha: 1, scale: 1, transformOrigin: 'center'},)
      .fromTo('#blink-10', Math.random()*0.25, {autoAlpha: 0, scale: 0, transformOrigin: 'center'}, {autoAlpha: 1, scale: 1, transformOrigin: 'center'})
      .fromTo('#blink-11', Math.random()*0.25, {autoAlpha: 0, scale: 0, transformOrigin: 'center'}, {autoAlpha: 1, scale: 1, transformOrigin: 'center'})
      .fromTo('#blink-12', Math.random()*0.25, {autoAlpha: 0, scale: 0, transformOrigin: 'center'}, {autoAlpha: 1, scale: 1, transformOrigin: 'center'})
      .fromTo('#blink-13', Math.random()*0.25, {autoAlpha: 0, scale: 0, transformOrigin: 'center'}, {autoAlpha: 1, scale: 1, transformOrigin: 'center'})
      .fromTo('#blink-14', Math.random()*0.25, {autoAlpha: 0, scale: 0, transformOrigin: 'center'}, {autoAlpha: 1, scale: 1, transformOrigin: 'center'})
      .fromTo('#blink-15', Math.random()*0.25, {autoAlpha: 0, scale: 0, transformOrigin: 'center'}, {autoAlpha: 1, scale: 1, transformOrigin: 'center'})
      .fromTo('#blink-16', Math.random()*0.25, {autoAlpha: 0, scale: 0, transformOrigin: 'center'}, {autoAlpha: 1, scale: 1, transformOrigin: 'center'})
      .fromTo('#blink-17', Math.random()*0.25, {autoAlpha: 0, scale: 0, transformOrigin: 'center'}, {autoAlpha: 1, scale: 1, transformOrigin: 'center'})
      .fromTo('#blink-18', Math.random()*0.25, {autoAlpha: 0, scale: 0, transformOrigin: 'center'}, {autoAlpha: 1, scale: 1, transformOrigin: 'center'})
      .fromTo('#blink-19', Math.random()*0.25, {autoAlpha: 0, scale: 0, transformOrigin: 'center'}, {autoAlpha: 1, scale: 1, transformOrigin: 'center'})
    return random;
  }
  randomFactors2() {
    var random2 = new TimelineMax({repeat: -1, yoyo: true});
  
    random2
    .fromTo('#shine-1', Math.random()*1, {scale: 0, autoAlpha: 0}, {scale: 1, autoAlpha: 1, rotation: 360, transformOrigin: 'center', ease:Power2.easeInOut})
    .fromTo('#shine-2', Math.random()*1, {scale: 0, autoAlpha: 0}, {scale: 1, autoAlpha: 1, rotation: 360, transformOrigin: 'center', ease:Power3.easeInOut})
    .fromTo('#shine-3', Math.random()*1, {scale: 0, autoAlpha: 0}, {scale: 1, autoAlpha: 1, rotation: 360, transformOrigin: 'center', ease:Power4.easeInOut})
    .fromTo('#shine-4', Math.random()*1, {scale: 0, autoAlpha: 0}, {scale: 1, autoAlpha: 1, rotation: 360, transformOrigin: 'center', ease:Power0.easeNone})
      
    return random2;
  }

  clear() {
    var clear = new TimelineMax();
  
    clear
      .set('#blink-1', {autoAlpha: 0, scale: 0, transformOrigin: 'center'})
      .set('#blink-2', {autoAlpha: 0, scale: 0, transformOrigin: 'center'})
      .set('#blink-3', {autoAlpha: 0, scale: 0, transformOrigin: 'center'})
      .set('#blink-4', {autoAlpha: 0, scale: 0, transformOrigin: 'center'})
      .set('#blink-5', {autoAlpha: 0, scale: 0, transformOrigin: 'center'})
      .set('#blink-6', {autoAlpha: 0, scale: 0, transformOrigin: 'center'})
      .set('#blink-7', {autoAlpha: 0, scale: 0, transformOrigin: 'center'})
      .set('#blink-8', {autoAlpha: 0, scale: 0, transformOrigin: 'center'})
      .set('#blink-9', {autoAlpha: 0, scale: 0, transformOrigin: 'center'})
      .set('#blink-10', {autoAlpha: 0, scale: 0, transformOrigin: 'center'})
      .set('#blink-11', {autoAlpha: 0, scale: 0, transformOrigin: 'center'})
      .set('#blink-12', {autoAlpha: 0, scale: 0, transformOrigin: 'center'})
      .set('#blink-13', {autoAlpha: 0, scale: 0, transformOrigin: 'center'})
      .set('#blink-14', {autoAlpha: 0, scale: 0, transformOrigin: 'center'})
      .set('#blink-15', {autoAlpha: 0, scale: 0, transformOrigin: 'center'})
      .set('#blink-16', {autoAlpha: 0, scale: 0, transformOrigin: 'center'})
      .set('#blink-17', {autoAlpha: 0, scale: 0, transformOrigin: 'center'})
      .set('#blink-18', {autoAlpha: 0, scale: 0, transformOrigin: 'center'})
      .set('#blink-19', {autoAlpha: 0, scale: 0, transformOrigin: 'center'});
    return clear;
  }
}
