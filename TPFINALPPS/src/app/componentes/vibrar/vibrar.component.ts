import { Component, OnInit } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-vibrar',
  templateUrl: './vibrar.component.html',
  styleUrls: ['./vibrar.component.scss'],
})
export class VibrarComponent implements OnInit {

  constructor(private vibracion: Vibration) { }

  ngOnInit() { }

  vibrar() {
    //this.vibration.vibrate(1000);
    this.vibracion.vibrate([2000,1000,2000]);
  }
}
