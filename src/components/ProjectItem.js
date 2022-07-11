class ProjectItem {
    constructor(id, type) {
        this.id = id;
        this.type = type;
        this.action = type === "active" ? "Finish" : "Activate";
        this.node = document.getElementById(this.id);
        this.connectAction();
        this.connectMoreInfo();
    }

    connectAction() {
        const button = this.node.lastElementChild;
        button.addEventListener("click", () => {
            this.switchAction();
            button.textContent = this.action;
            document
                .querySelector(`#${this.type}-projects ul`)
                .appendChild(this.node);
        });
    }

    switchAction() {
        this.type = this.type === "active" ? "finished" : "active";
        this.action = this.action === "Activate" ? "Finish" : "Activate";
    }

    connectMoreInfo() {}
}

export default ProjectItem;
