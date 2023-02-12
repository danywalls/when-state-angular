import { ProfileService } from './../../services/profile.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  name$ = this.profileService.name$;

  constructor(private profileService: ProfileService) {

  }

  save(name: string) {
    this.profileService.saveName(name);
  }

}
