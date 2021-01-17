import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["output"];

  connect() {
    this.outputTarget.innerHTML += "<p>Hello, Stimulus!</p>";
  }

  disconnect() {
    this.outputTarget.innerHTML = "";
  }
}
