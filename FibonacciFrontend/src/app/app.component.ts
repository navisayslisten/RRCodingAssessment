import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FibonacciService} from "./fibonacci/fibonacci.service"
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterOutlet} from "@angular/router";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {CdkTableModule} from "@angular/cdk/table";
import {CdkFixedSizeVirtualScroll, CdkVirtualScrollViewport} from "@angular/cdk/scrolling";

@Component({
  imports: [
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    NgIf,
    ReactiveFormsModule,
    RouterOutlet,
    CdkTableModule,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
  ],
  providers: [FibonacciService, HttpClient],
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'FibonacciFrontend';
  displayedColumns: string[] = ['index', 'value'];
  fibonacciArray = [];
  fibonacciForm = new FormGroup({
    nth: new FormControl(1, [
      Validators.required,
      Validators.min(1)
    ])
  })

  constructor(private fibonacciService: FibonacciService) {
  }

  onSubmit(): void {
    if (this.fibonacciForm.valid
      && typeof this.fibonacciForm.value.nth === "number"
      && !isNaN(this.fibonacciForm.value.nth
      )) {
      this.fetchFibonacci(this.fibonacciForm.value.nth)
    }
  }

  fetchFibonacci(n: Number): void {
    this.fibonacciService.getFibonacciOf(n).subscribe((data: any) => {
      this.fibonacciArray = data.sequence;
    })
  }
}
