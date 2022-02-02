class Section {
  constructor({ pageOutput }, containerSelector) {
    this._pageOutput = pageOutput;
    this._container = document.querySelector(`.${containerSelector}`);
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


//Этот блок должен стоять в файле index.js в самом начале

// const cardList = new Section({
//     pageOutput: (data) => {
//       cardList.addItem(createCard(data));
//     }
//   }, cardsConfig.placesWrap //это селектор для блока карточек берём из константс.жс
// );


//А этот блок в конце файла index.js - ввод карточек на страницу целым блоком в then от Promise.all

// cardList.renderElements(cards.reverse());
