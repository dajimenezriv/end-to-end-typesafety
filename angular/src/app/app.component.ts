import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HlmIconComponent } from "../core/componentes/spartan/hlm-icon";
import {
  HlmAlertDescriptionDirective,
  HlmAlertDirective,
  HlmAlertIconDirective,
  HlmAlertTitleDirective,
} from "../core/componentes/spartan/hlm-alert";
import { provideIcons } from "@ng-icons/core";
import { lucideBox } from "@ng-icons/lucide";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HlmAlertDirective,
    HlmAlertDescriptionDirective,
    HlmAlertIconDirective,
    HlmAlertTitleDirective,
    HlmIconComponent,
  ],
  providers: [provideIcons({ lucideBox })],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "Title";
}
