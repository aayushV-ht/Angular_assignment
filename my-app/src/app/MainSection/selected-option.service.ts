import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectedOptionService {
  public selectedOption: string = 'all';

  constructor() {
    const savedOption = localStorage.getItem('selectedOption');
    if (savedOption) {
      this.selectedOption = savedOption;
    }
  }

  updateSelectedOption(option: string) {
    this.selectedOption = option;
    localStorage.setItem('selectedOption', option);
  }
}
