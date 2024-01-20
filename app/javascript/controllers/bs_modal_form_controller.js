import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="bs-modal-form"
export default class extends Controller {
  connect() {
    console.log("BS Modal Form controller connected", this.element);
  }

  initialize() {
    this.element.setAttribute("data-action", "click->bs-modal-form#showModal");
  }

  showModal(event) {
    event.preventDefault();
    this.url = this.element.getAttribute("href");
    console.log(this.url);
    fetch(this.url, {
      headers: {
        Accept: "text/vnd.turbo-stream.html",
      },
    })
      .then((response) => response.text())
      .then((html) => Turbo.renderStreamMessage(html));
  }
}
