var jobs = [];

function addJob() {
    var t = document.getElementById("title").value;
    var c = document.getElementById("company").value;

    if(t == "" || c == "") {
        alert("Enter all fields");
    } else {
        var job = {title: t, company: c};
        jobs.push(job);
        show();
    }
}

function show() {
    var list = document.getElementById("jobList");
    list.innerHTML = "";

    for(var i=0;i<jobs.length;i++) {
        list.innerHTML += "<li>" + jobs[i].title + " - " + jobs[i].company + "</li>";
    }
}