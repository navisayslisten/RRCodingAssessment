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

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HttpClientModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatTableModule, MatIconModule, MatInputModule, MatButtonModule, NgIf, MatToolbarModule, MatSidenavModule, RouterOutlet, MatDialogModule],
  providers: [FibonacciService, HttpClient]
})
export class AppComponent {
  title = 'FibonacciFrontend';
  displayedColumns: string[] = ['index', 'value'];
  fibonacciArray = [];

  constructor(private fibonacciService: FibonacciService) {
  }

  fibonacciForm = new FormGroup({
    nth: new FormControl(1, [
      Validators.required,
      Validators.min(1)
    ])
  })

  onSubmit(): void {
    if (this.fibonacciForm.valid && typeof this.fibonacciForm.value.nth === "number" && !isNaN(this.fibonacciForm.value.nth)) {
      this.fetchFibonacci(this.fibonacciForm.value.nth)
    }
  }

  fetchFibonacci(n: Number): void {
    this.fibonacciService.getFibonacciOf(n).subscribe((data: any) => {
      this.fibonacciArray = data.sequence;
    })
  }
}
