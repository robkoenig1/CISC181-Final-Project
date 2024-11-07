import html from "./main.component.html";
import css from "./main.component.css";
import { WebzComponent } from "@boots-edu/webz";

/**
 * @description MainComponent is the main component of the app
 * @extends WebzComponent
 *
 */
export class MainComponent extends WebzComponent {
    private le: LoanEntryComponent = new LoanEntryComponent();

    constructor() {
        super(html, css);
    }
}
