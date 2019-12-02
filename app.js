const controller = new footballController(
  new footballView(),
  new footballService(),
  new httpService(),
  new regExpService()
);
controller.show();
