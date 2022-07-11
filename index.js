import ProjectList from "./src/components/ProjectList.js";

class App {
    static init() {
        const activeProjectList = new ProjectList("active");
        const finishedProjectList = new ProjectList("finished");
    }
}

// start app
App.init();
