import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsdComponentComponent } from './usd-component/usd-component.component';
import { BahtComponentComponent } from './baht-component/baht-component.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, UsdComponentComponent, BahtComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  usd: number = 0; // เงินเริ่มต้นใน USD
  baht: number = 0; // เงินเริ่มต้นใน BAHT


  // ฟังก์ชันในการคำนวณอัตราแลกเปลี่ยน (สำหรับตัวอย่างนี้)
  calculateExchangeUSD(value: number) {
    const usdRate = 34;
    if (value !== null) {
      return (this.baht = value * usdRate); // สมมุติว่าอัตราแลกเปลี่ยน 1 USD = 0.030 BAHT
    } else {
      return (this.baht = 0);
    }
  }

  calculateExchangeBAHT(value: number) {
    const bahtRate = 0.030;
    if (value !== null) {
      return (this.usd = value * bahtRate); // สมมุติว่าอัตราแลกเปลี่ยน 1 BAHT = 34 USD
    } else {
      return (this.usd = 0);
    }
  }

}
