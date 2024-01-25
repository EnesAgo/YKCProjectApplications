const myForm = document.getElementById("myForm")

const name = document.getElementById("nameInp")
const surename = document.getElementById("surnameInp")
const classInp = document.getElementById("classInp")
const mentor = document.getElementById("mentorInpt")
const competition = document.getElementById("competitionInp")
const projectname = document.getElementById("projectNameInp")
const textarea = document.getElementById("textArea")

myForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    try{
        db.collection("students").add({
            name: name.value,
            surname: surename.value,
            class: classInp.value,
            mentor: mentor.value,
            competition: competition.value,
            projectname: projectname.value,
            // textarea: textarea.value
        })
        alert("successfully sent")

        name.value = ''
        surename.value = ''
        classInp.value = ''
        mentor.value = ''
        competition.value = ''
        projectname.value = ''
        // textarea.value = ''
    }
    catch (e) {
        console.log(e)
        alert("error")
    }
})