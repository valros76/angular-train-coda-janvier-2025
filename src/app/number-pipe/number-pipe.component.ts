import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-number-pipe',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './number-pipe.component.html',
  styleUrl: './number-pipe.component.css'
})
export class NumberPipeComponent {
  decimalNumber:number = 4268.95;
  decimalPrice:number = 29.997;
  promoPrice: number = 1.99;
  lambdaPercent:number = 0.428;
}
