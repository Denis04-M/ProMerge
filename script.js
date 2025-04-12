document.addEventListener("DOMContentLoaded", function () {
    showTab("templates"); 

    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", filterSearch);
    }

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("view-btn")) {
            window.location.href = "documents-page.html"; //
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    showTab("templates"); 

    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", filterSearch);
    }

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("view-btn")) {
            window.location.href = "documents-page.html"; //
        }
    });
});

function showTab(tabName) {
    document.getElementById("templates").style.display = tabName === "templates" ? "block" : "none";
    document.getElementById("dataset").style.display = tabName === "dataset" ? "block" : "none";

    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`button[onclick="showTab('${tabName}')"]`).classList.add("active");

    if (tabName === "templates") {
        loadTemplates();
    } else if (tabName === "dataset") {
        loadDatasets();
    }
}

function filterSearch() {
    const searchText = document.getElementById("searchInput").value.toLowerCase();
    const activeTab = document.querySelector(".tab-btn.active").innerText.trim();

    if (activeTab === "My Templates") {
        filterItems("templateList", searchText);
    } else if (activeTab === "My Dataset") {
        filterItems("datasetList", searchText);
    }
}

function filterItems(listId, searchText) {
    const list = document.getElementById(listId);
    if (!list) return;

    const items = list.querySelectorAll(".template-item, .dataset-item");
    items.forEach(item => {
        const itemName = item.querySelector("input").value.toLowerCase();
        item.style.display = itemName.includes(searchText) ? "flex" : "none";
    });
}

function loadTemplates() {
    const templateList = document.getElementById("templateList");
    if (!templateList) return;

    templateList.innerHTML = "";
    const templates = ["Template 1", "Template 2", "Template 3"];
    
    templates.forEach(template => {
        const templateItem = document.createElement("div");
        templateItem.classList.add("template-item");

        templateItem.innerHTML = `
            <input type="text" value="${template}" readonly>
            <button class="view-btn">View</button>
        `;

        templateList.appendChild(templateItem);
    });
}

function loadDatasets() {
    const datasetList = document.getElementById("datasetList");
    if (!datasetList) return;

    datasetList.innerHTML = "";
    const datasets = ["Dataset 1", "Dataset 2", "Dataset 3"];
    
    datasets.forEach(dataset => {
        const datasetItem = document.createElement("div");
        datasetItem.classList.add("dataset-item");

        datasetItem.innerHTML = `
            <input type="text" value="${dataset}" readonly>
            <button class="view-btn">View</button>
        `;

        datasetList.appendChild(datasetItem);
    });
}

function deleteItem(button) {
    button.parentElement.remove();
}

function editItem(button) {
    const inputField = button.parentElement.querySelector("input");
    inputField.removeAttribute("readonly");
    inputField.focus();

    inputField.addEventListener("blur", function () {
        inputField.setAttribute("readonly", true);
    });
}

function goToSettings() {
    window.location.href = "settings.html";
}

function logout() {
    localStorage.removeItem("userSession"); 
    sessionStorage.removeItem("userSession");
    window.location.href = "login.html";
}

function goBack() {
    window.location.href = "dashboard.html";
}

