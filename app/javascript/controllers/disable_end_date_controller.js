import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="disable-end-date"
export default class extends Controller {
  connect() {
    console.log("Disable End Date controller connected", this.element);
    this.disableEndDate();
  }

  initialize() {
    this.element.setAttribute(
      "data-action",
      "click->disable-end-date#disableEndDate"
    );
  }

  disableEndDate() {
    const endDateElement = document.getElementById("work_experience_end_date");
    if (this.element.checked) {
      endDateElement.value = null;
      endDateElement.setAttribute("disabled", true);
    } else {
      endDateElement.removeAttribute("disabled");
    }
  }
}
