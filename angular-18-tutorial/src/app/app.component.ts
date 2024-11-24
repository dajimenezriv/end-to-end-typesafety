import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { WishItem } from "../shared/models/wish-item";
import { FormsModule } from "@angular/forms";
import { WishListComponent } from "./wish-list/wish-list.component";
import { AddWishFormComponent } from "./add-wish-form/add-wish-form.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, FormsModule, WishListComponent, AddWishFormComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  items: Array<WishItem> = [
    new WishItem("To Learn Angular"),
    new WishItem("Get Coffee", true),
    new WishItem("Find grass that cuts itself"),
  ];
  listFilter: string = "0";

  get visibleItems(): Array<WishItem> {
    const value = this.listFilter;

    if (value === "1") {
      return this.items.filter((item) => !item.isComplete);
    } else if (value === "2") {
      return this.items.filter((item) => item.isComplete);
    } else {
      return this.items;
    }
  }
}
