import { Component, EventEmitter, Output } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {


  @Output() searchButtonClicked = new EventEmitter();
  searchClick() {
    this.searchButtonClicked.emit();
  }
}