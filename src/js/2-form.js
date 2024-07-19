let formData = {
    email: "",
    message: "",
}
const nameLs = "feedback-form-state"
const lsValue = localStorage.getItem(nameLs)

if (lsValue) {
    formData = JSON.parse(lsValue)
    document.querySelector(".feedback-form input[type='email']").value = formData.email
    document.querySelector(".feedback-form textarea").value = formData.message
}

const inputForm = document.querySelector(".feedback-form")

inputForm.addEventListener("input", handlerInput)
function handlerInput(evt) {
    if (evt.target.tagName === "INPUT") {
        formData.email = evt.target.value.trim()
    }
    else if (evt.target.tagName === "TEXTAREA") {
        formData.message = evt.target.value.trim()
    }
    localStorage.setItem(nameLs, JSON.stringify(formData))
}

inputForm.addEventListener("submit", handlerSubmit)
function handlerSubmit(evt) {
    evt.preventDefault()
    if (!formData.email.trim() || !formData.message.trim()) {
        alert("Fill please all fields")
    }
    else {
        console.log(formData)
        localStorage.removeItem(nameLs)
        formData = { email: "", message: "" }
        inputForm.reset()
    }
}
//------------------------------------------