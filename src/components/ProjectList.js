import ProjectItem from "./ProjectItem.js";

class ProjectList {
    projects = [];

    constructor(type) {
        const projectItems = document.querySelectorAll(`#${type}-projects li`);
        for (const pi of projectItems) {
            this.projects.push(new ProjectItem(pi.id, type));
        }
    }
}

export default ProjectList;
