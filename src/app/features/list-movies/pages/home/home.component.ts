import { Component } from '@angular/core';
import { SearchBarComponent } from 'src/app/core/components/search-bar/search-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
