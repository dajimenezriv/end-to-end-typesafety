import { TestBed } from "@angular/core/testing";
import { beforeEach, describe, it } from "vitest";
import { AppComponent } from "./app.component";

describe("app.component", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it("Using TestBed", async () => {
    const fixture = TestBed.createComponent(AppComponent);
    console.log(fixture);
  });
});
