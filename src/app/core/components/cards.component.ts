import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Cards } from "../interfaces/cards.interface";
import { CardsService } from "../services/cards.service";


export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CardsComponent),
  multi: true
};

@Component({
  selector: 'cards',
  templateUrl: 'cards-component.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class CardsComponent implements ControlValueAccessor {
  private innerValue: any = '';
  cards: Cards[];
  @Input() title: string;
  @Input() okText: string;
  @Input() cancelText: string;

  constructor(
    private cardsService: CardsService) {
  }

  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any): void {

  }

  registerOnTouched(fn: any): void {

  }

  get value(): any {
    return this.innerValue;
  };

  set value(v: any) {
    if (v !== this.value) {
      this.innerValue = v;
    }
  }

  /**
   * This function populates de cards catalog
   */
  populateCards() {
    this.cardsService.getAll()
      .subscribe(
        success => {
          this.cards = success.response.type_cards;
        },
        () => {
          //on error
        }
      );
  }

  ngOnInit() {
    this.populateCards();
  }

}