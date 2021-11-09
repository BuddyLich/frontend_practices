let lists = [
    {
        "header": "General",
        "listItems": [
            "Sign Up",
            "Help Center",
            "About",
            "Press",
            "Blog",
            "Careers",
            "Developers"
        ]
    },
    {
        "header": "Browse LinkedIn",
        "listItems": [
            "Learning",
            "Jobs",
            "Salary",
            "Mobile",
            "Services",
            "Products"
        ]
    },
    {
        "header": "Business Solutions",
        "listItems": [
            "Talent",
            "Marketing",
            "Sales",
            "Learning"
        ]
    },
    {
        "header": "Directories",
        "listItems": [
            "Members",
            "Jobs",
            "Companies",
            "Salaries",
            "Featured",
            "Learning",
            "Posts",
            "Articles",
            "Schools",
            "News",
            "News Letters",
            "Services",
            "Interview Prep",
            "Products"
        ]
    }
]


const bottomNavDivSection = document.querySelector(".bottom-nav")

function generateLi(listItem) {
    let li = document.createElement("li")
    let a = document.createElement("a")
    a.setAttribute("href", "#")
    a.innerHTML = listItem
    li.appendChild(a)

    return li
}

lists.forEach(e => {
    let individualBottomNav = document.createElement('div')
    individualBottomNav.classList.add("bottom-nav-list")

    let header = document.createElement("h3")
    header.innerHTML = e["header"]
    individualBottomNav.appendChild(header)

    let ul = document.createElement("ul")

    for (i=0; i<e["listItems"].length; i++) {
        let li = generateLi(e["listItems"][i])
        ul.appendChild(li)
    }

    individualBottomNav.appendChild(ul)
    bottomNavDivSection.appendChild(individualBottomNav)
})
