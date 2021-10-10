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

// Adding these searches item into the div "show-more-less"
let suggestSearches = [
    "Engineering", "Business Development", "Finance", "Administrative Assistant", "Retail Associate", 
    "Customer Service", "Operations", "Information Technology", "Marketing", "Human Resources", 
    "Healthcare Service", "Sales", "Program and Project Management", "Accounting", "Arts and Design", 
    "Community and Social Services", "Consulting", "Education", "Entrepreneurship", "Legal", 
    "Media and Communications", "Military and Protective Services", "Product Management", "Purchasing", 
    "Quality Assurance", "Real Estate", "Research", "Support", "Administrative"
]

let showMoreLess = document.querySelector(".show-more-less")

for (i=0; i<suggestSearches.length; i++) {
    let search = document.createElement('div')
    search.className = "job-suggestions-items"
    search.innerText = suggestSearches[i]
    search.setAttribute("href", "#")

    showMoreLess.appendChild(search)
}

// Button that toggle the section "show-more-less"
let showMoreLessBtn = document.querySelector("button.show-more-less-btn")
let jobSuggestions = document.querySelector(".job-suggestions")

showMoreLessBtn.addEventListener("click", () => {
    if (!showMoreLessBtn.classList.contains("show")) {
        showMoreLessBtn.classList.add("show")
        showMoreLess.classList.add("expand")

        let showMoreLessBtnSpan = showMoreLessBtn.querySelector("span")
        let showMoreLessBtnIcon = showMoreLessBtn.querySelector("i")
        
        showMoreLessBtnSpan.innerText = "Show less"
        showMoreLessBtnIcon.classList.remove("fa-chevron-down")
        showMoreLessBtnIcon.classList.add("fa-chevron-up")

        document.querySelector('.job-suggestions').classList.add("expand")
        
    } else {
        showMoreLessBtn.classList.remove("show")
        showMoreLess.classList.remove("expand")

        let showMoreLessBtnSpan = showMoreLessBtn.querySelector("span")
        let showMoreLessBtnIcon = showMoreLessBtn.querySelector("i")
        
        showMoreLessBtnSpan.innerText = "Show less"
        showMoreLessBtnIcon.classList.add("fa-chevron-down")
        showMoreLessBtnIcon.classList.remove("fa-chevron-up")

        document.querySelector('.job-suggestions').classList.remove("expand")
    }
})

// Section for slider-list

let sliderIdx = 0
let sliderListEl = document.querySelector(".slider-list")

let preSlider = document.getElementById("slider-left")
let nextSlider = document.getElementById("slider-right")

preSlider.addEventListener('click', sliderListPrev)
nextSlider.addEventListener('click', sliderListNext)

function sliderListNext() {
    if (sliderIdx >= 2) {
        return
    } else {
        sliderIdx += 1
        sliderListEl.style.transform = `translateX(${sliderIdx*(-1147)}px)`
    }
}

function sliderListPrev() {
    if (sliderIdx <= 0) {
        return
    } else {
        sliderIdx -= 1
        sliderListEl.style.transform = `translateX(${sliderIdx*(-1147)}px)`
    }
}
