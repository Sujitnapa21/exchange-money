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
  @Input() bahtInput: number = 0;
  @Output() bahtInputChange = new EventEmitter<number>();

  onBahtInputChange(value: number) {
    console.log('====================================');
    console.log(value);
    console.log('====================================');
    this.bahtInputChange.emit(value);
  }

}
