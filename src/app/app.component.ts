import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KENDO_DATEINPUTS } from "@progress/kendo-angular-dateinputs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [KENDO_DATEINPUTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
