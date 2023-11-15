import { Component } from '@angular/core';
import { SearchBarComponent } from 'src/app/core/components/search-bar/search-bar.component';
import { GenreSelectorComponent } from '../../components/genre-selector/genre-selector.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchBarComponent, GenreSelectorComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
