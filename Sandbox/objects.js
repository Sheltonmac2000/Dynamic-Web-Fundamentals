const Course = {
    "course code": "CSE121b",
    name: "Javascript",
}; 

const aCourse= {
    "course code": "CSE121b",
    name: "Javascript",
    sections: [{sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T"}, 
        {sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: "Sis A"}
    ]

enrollStudent: function(){
        console.log("Enrolled!");
    }
};

// aCourse.sections.find(item=> item.roomNum === "STC 347")

// aCourse.sections.filter(function(item) {
//     return item.roomNum === "STC 347"
// })

function setCourseInfo(course){
    const coureNameEl = document.querySelector("#coursename"); 
    const courseCodeEl = document.querySelector("#coursecode");

    courseNameEl.innerHTML = course.name;
    courseCodeEl.innerText = course.code;
}

function sectionTemplate(section){
    return `<tr
                <td>${section.sectionNum}</td>
                <td>${section.roomNum}</td>
                <td>${section.enrolled}</td>
                <td>${section.days}</td>
                <td>${section.instructor}</td>
            </tr>`
}

const renderSections = (sections){
    const sectionListEl = document.querySelector("#sectionlist");
    const html = sections.map(sectionTemplate);
    sectionListEl.innerHTML = html.join("");

}

setCourseInfo(aCourse);
renderSections(aCourse.sections);