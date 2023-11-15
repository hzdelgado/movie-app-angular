import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  searchTerm = "";
  @Output() searchEntered = new EventEmitter<string>();


  onSearchPressed() {
    this.searchEntered.emit(this.searchTerm);
  }

  onInputChange(e: any) {
    this.searchTerm = e.target.value;
    this.searchEntered.emit(this.searchTerm);
  }

}
