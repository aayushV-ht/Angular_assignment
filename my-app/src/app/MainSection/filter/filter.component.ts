import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  selectedFilterOption: string = 'sad';

  @Output() filterChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    const storedFilterOption = localStorage.getItem('selectedFilterOption');
    if (storedFilterOption) {
      this.selectedFilterOption = storedFilterOption;
    }
  }

  onFilterChange(): void {
    this.filterChange.emit(this.selectedFilterOption);
    localStorage.setItem('selectedFilterOption', this.selectedFilterOption);
  }
}
