import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  ngOnInit(): void { }
  selectedFilterOption: string = 'User';

  @Output() filterChange = new EventEmitter<string>();
  constructor() { }

  onFilterChange(): void {

    this.filterChange.emit(this.selectedFilterOption);
  }

}
