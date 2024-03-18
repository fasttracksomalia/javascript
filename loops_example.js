document.addEventListener('DOMContentLoaded', function () {
    var students = ["Alice", "Bob", "Charlie", "Diana", "Edward"];
    var studentList = document.getElementById("studentList");

    for (var i = 0; i < students.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(students[i]));
        studentList.appendChild(li);
    }
});
