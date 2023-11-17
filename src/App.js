import MenuController from "./controller/MenuController.js";

class App {
  async play() {
	  await new MenuController().menuProcess();
  }
}

export default App;
