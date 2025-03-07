import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usd-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usd-component.component.html',
  styleUrl: './usd-component.component.css'
})
export class UsdComponentComponent {
  @Input() usd: number = 0;
  @Output() usdChange = new EventEmitter<number>();

  onUsdChange(value: number) {
    this.usdChange.emit(value);
  }

}
