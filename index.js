import ProjectList from "./src/components/ProjectList.js";

class App {
    static init() {
        new ProjectList("active");
        new ProjectList("finished");

        const clickme = document.querySelector("#clickme");
    }
}

// start app
App.init();
