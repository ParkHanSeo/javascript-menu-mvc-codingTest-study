import MenuController from "./controller/MenuContoller.js";

class App {
  async play() {
	  await new MenuController().menuProcess();
  }
}

export default App;
