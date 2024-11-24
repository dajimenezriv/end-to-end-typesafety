import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { WishItem } from "../shared/models/wish-item";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  items: Array<WishItem> = [
    new WishItem("To Learn Angular"),
    new WishItem("Get Coffee", true),
    new WishItem("Find grass that cuts itself"),
  ];

  newWishText = "";

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = "";
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }
}
