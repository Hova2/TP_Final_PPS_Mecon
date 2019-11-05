import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() titulo: string;
  @Input() habilitarSalir: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  salir() {
    this.authService.salir();
  }
}
