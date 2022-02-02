class Section {
  constructor({ pageOutput }, containerSelector) {
    this._pageOutput = pageOutput;
    this._container = document.querySelector(containerSelector);
  }

  renderElements(items) {
    items.forEach(item => {
      this._pageOutput(item);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}

export default Section;
