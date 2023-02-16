import {ProfileService} from './../../services/profile.service';
import {Component} from '@angular/core';
import {startWith} from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  name$ = this.profileService.name$.pipe(startWith(''));

  constructor(private profileService: ProfileService) {
  }

  save(name: string) {
    this.profileService.saveName(name);
  }
}
