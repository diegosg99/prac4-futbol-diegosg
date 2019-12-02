class footballController {
  constructor(_view, _footballService, _httpService, _regExpServie) {
    this.view = _view;
    this.footballService = _footballService;
    this.httpService = _httpService;
    this.regExpService = _regExpServie;
  }
  show() {
    console.log(this);
  }
}
