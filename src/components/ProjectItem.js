class ProjectItem {
    constructor(id, type) {
        this.id = id;
        this.type = type;
        this.action = type === "active" ? "Finish" : "Activate";
        this.node = document.getElementById(this.id);
        this.connectAction();
        this.connectMoreInfo();

        // add tooltip
        this.info = this.node.getAttribute("data-extra-info");
        const tooltip = document.createElement("div");
        tooltip.setAttribute("class", "tooltip");
        tooltip.innerText = this.info;
        this.node.append(tooltip);
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

    connectMoreInfo() {
        const button = this.node.querySelector(".alt");
        button.addEventListener("click", () => {
            const tooltip = this.node.querySelector(".tooltip");
            if (tooltip.style.opacity === "0" || !tooltip.style.opacity) {
                tooltip.style.opacity = "1";
                button.classList.add("button-clicked");

                document.addEventListener("click", (event) => {
                    if (!button.contains(event.target)) {
                        tooltip.style.opacity = "0";
                        button.classList.remove("button-clicked");
                    }
                });
            } else {
                tooltip.style.opacity = "0";
                button.classList.remove("button-clicked");
            }
        });
    }
}

export default ProjectItem;
