import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-baht-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './baht-component.component.html',
  styleUrl: './baht-component.component.css'
})
export class BahtComponentComponent {
  @Input() baht: number = 0;
  @Output() bahtChange = new EventEmitter<number>();

  onBahtChange(value: number) {
    console.log('====================================');
    console.log(value);
    console.log('====================================');
    this.bahtChange.emit(value);
  }

}
