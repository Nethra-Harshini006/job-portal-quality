const jobs = [];

function getInputValues() {
    const titleInput = document.getElementById("title");
    const companyInput = document.getElementById("company");

    return {
        title: titleInput.value.trim(),
        company: companyInput.value.trim()
    };
}

function clearInputs() {
    document.getElementById("title").value = "";
    document.getElementById("company").value = "";
}

function createJobItem(job) {
    const li = document.createElement("li");
    li.textContent = `${job.title} - ${job.company}`;
    return li;
}

function renderJobs() {
    const list = document.getElementById("jobList");
    list.innerHTML = "";

    jobs.forEach(job => {
        list.appendChild(createJobItem(job));
    });
}

function addJob() {
    const { title, company } = getInputValues();

    if (!title || !company) {
        alert("Please enter all fields");
        return;
    }

    const job = { title, company };
    jobs.push(job);

    renderJobs();
    clearInputs();
}