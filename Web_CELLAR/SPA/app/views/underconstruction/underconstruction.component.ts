import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';


import "gsap";
// declare var $: any
declare var TimelineMax: any;
declare var TweenMax: any;
declare var MorphSVGPlugin: any;
declare var Cubic: any;
declare var Power0: any;
declare var Power1: any;
declare var morphSVG: any;


@Component({
  selector: 'app-underconstruction',
  templateUrl: './underconstruction.component.html',
  styleUrls: ['./underconstruction.component.scss']
})
export class UnderconstructionComponent implements OnInit {

  mainTl = new TimelineMax();

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.mainTl.add(this.setUp());
    this.mainTl.add(this.forkliftAnimation());
  }

  logoclick(){
    this.auth.login()
  }

  setUp() {
    let set = new TimelineMax();
  
    set
      .set('#cloud-1', {x: '-100%'})
      .set('#crane', {x: '100%'})
      .set('#forklift', {x: '-200px', y: '-25px'})
      .set('#logo', {x: '80px', y:'3px'})
      .set('#logo-hook', {scale: 1.01, transformOrigin: 'center', x: '434.75px', y:'-385px'})
      .set('#text', {text: 'haha'})
      .set('#worker-2', {scale: .9, transformOrigin: 'bottom center'})
      .set('#worker-1', {autoAlpha: 0});
    return set;
  }

  
forkliftAnimation() {
  let forklift = new TimelineMax();

  forklift
    .add('forklift')

    .to('#refresh', 1.25, {rotation: 360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1}, 'forklift')
    .to('#driller', .1, {y: '30%', ease:Power0.easeNone, repeat: -1}, 'forklift')
    .to('#worker-2', .1, {y: '2%', ease:Power0.easeNone, repeat: -1}, 'forklift')
    .to('#head', .2, {y: '3%', ease:Power0.easeNone, repeat: -1}, 'forklift')
  .to('#refresh', 1.25, {rotation: 360, transformOrigin: 'center', ease:Power0.easeNone, repeat: -1}, 'forklift')
  .to('#cloud-1', 100, {x: '1000%', ease:Power0.easeNone}, 'forklift')
  .to('#cloud-2', 50, {x: '500%', ease:Power0.easeNone, yoyo: true}, 'forklift')
  .to('#cloud-3', 100, {x: '-1000%', ease:Power0.easeNone}, 'forklift')

    .set('#text', {text:"plz"}, 'forklift+=1')

    .to('#forklift', 3, {x: '0', ease:Power1.easeOut}, 'forklift')
    .to('#wheel-front', 3, {rotation: 540, transformOrigin: 'center', ease:Power1.easeOut}, 'forklift')
    .to('#wheel-back', 3, {rotation: 540, transformOrigin: 'center', ease:Power1.easeOut}, 'forklift')

    .add('getting-icon')
    .to('#lifter', 1, {rotation: 5, transformOrigin: '10px 110px', ease:Power0.easeNone}, 'getting-icon')
    .to('#lifter-front', 1, {y: '20px', ease:Power0.easeNone})

    // moc ppomaly, zrychlit
    .add('lifting-icon')
    .to('#forklift', 3, {x: '80', ease:Power1.easeOut}, 'lifting-icon')
    .to('#wheel-front', 3, {rotation: 900, transformOrigin: 'center', ease:Power1.easeOut}, 'lifting-icon')
    .to('#wheel-back', 3, {rotation: 900, transformOrigin: 'center', ease:Power1.easeOut}, 'lifting-icon')
    .to('#logo', 2, {rotation: 4, transformOrigin: 'bottom right', delay: .5, ease:Power1.easeOut}, 'lifting-icon')

    .add('icon-up')
    .to('#lifter', 1, {rotation: -5, transformOrigin: '10px 110px', ease:Power0.easeNone}, 'icon-up')
    .to('#logo', 1, {x: 85, y: -2, rotation: -6, transformOrigin: 'bottom left', ease:Power0.easeNone}, 'icon-up')

    .add('lift-up')
    .to('#lifter-front', 1, {y: '-=35', ease:Power0.easeNone}, 'lift-up')
    .to('#logo', 1, {x: '-=3', y: '-=35', ease:Power0.easeNone}, 'lift-up')
    
    
    .add('go')
    .to('#forklift', 5, {x: '+=1500px', ease:Power1.easeIn}, 'go')
    .to('#wheel-front', 5, {rotation: '+=3600', transformOrigin: 'center', ease:Power1.easeIn}, 'go')
    .to('#wheel-back', 5, {rotation: '+=3600', transformOrigin: 'center', ease:Power1.easeIn}, 'go')
    .to('#logo', 5, {x: '+=1500px', ease:Power1.easeIn}, 'go')

    .add('crane')
    .set('#logo', {y: '-=200'})
    .to('#crane', 15, {x: '-18%', ease:Power1.easeOut}, 'crane')
    .to('#hook', 7, {rotation: -15, transformOrigin: 'upper center', ease:Power1.easeInOut}, 'crane')
    .to('#hook', 5, {rotation: 10, transformOrigin: 'upper center', ease:Power1.easeInOut}, 'crane+=8')
    .to('#hook', 3, {rotation: -5, transformOrigin: 'upper center', ease:Power1.easeInOut}, 'crane+=13')
    .add('balance-hook')
    .to('#hook', 2, {rotation: 2, transformOrigin: 'upper center', ease:Power1.easeInOut}, 'balance-hook')
    .to('#hook', 1, {rotation: 0, transformOrigin: 'upper center', ease:Power1.easeInOut}, 'balance-hook+=2')

    .add('arm')
    .to('#hook', 5, {x: -79, y: 50 , ease:Power1.easeOut}, 'arm')
    
    .to('#arm', 5, {rotation: -9, transformOrigin: 'bottom right', ease:Power1.easeOut}, 'arm')
    .to('#hydraulic', 5, {rotation: -8, transformOrigin: 'bottom right', ease:Power1.easeOut}, 'arm')
    .add('logo-down')
    .to('#hook', 2, {y: '+=51.5', ease:Power1.easeInOut}, 'logo-down');
  return forklift;
}

}
