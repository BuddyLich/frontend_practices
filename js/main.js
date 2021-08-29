let signInInput = document.getElementById('username-input')
let signInLabel = document.getElementById('username-label')
let pswdInput = document.getElementById('paswd-input')
let pswdLabel = document.getElementById('paswd-label')

function labelTransition(inputEl, labelEl) {
    inputEl.addEventListener('focus', () => {
        labelEl.style.paddingTop = "6px"
    })
    
    inputEl.addEventListener('focusout', () => {
        if (inputEl.value.length === 0) {
            labelEl.style.paddingTop = "12px"
        }
        console.log(signInInput.value)
    })
    
    inputEl.addEventListener('input', () => {
        if (inputEl.value.length === 0) {
            labelEl.style.fontSize = "1.6rem"
        } else {
            labelEl.style.fontSize = "1.2rem"
        }
    })
}

labelTransition(signInInput, signInLabel)
labelTransition(pswdInput, pswdLabel)

let pswdVisBtn = document.querySelector('.pswd-visibility-toggle')

pswdVisBtn.addEventListener('click', () => {
    if (pswdVisBtn.innerText === "Show") {
        pswdVisBtn.innerText = "Hide"
        pswdInput.type = "text"
    } else {
        pswdVisBtn.innerText = "Show"
        pswdInput.type = "password"
    }
})
