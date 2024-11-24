import { Component, Input, OnInit } from "@angular/core";
import { WishItem } from "../../shared/models/wish-item";

@Component({
  selector: "app-wish-list",
  standalone: true,
  imports: [],
  templateUrl: "./wish-list.component.html",
  styleUrl: "./wish-list.component.css",
})
export class WishListComponent {
  @Input() items: WishItem[] = [];

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }
}
