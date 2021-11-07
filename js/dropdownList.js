const DROPDOWNLST = [
    {
        "header": "Training and Education",
        "subtext": "300+ courses"
    },
    {
        "header": "IT Help Desk",
        "subtext": "190+ courses"
    },
    {
        "header": "Business Analysis and Strategy",
        "subtext": "800+ courses"
    },
    {
        "header": "Finance and Accounting",
        "subtext": "250+ courses"
    },
    {
        "header": "Career Development",
        "subtext": "360+ courses"
    },
    {
        "header": "Leadership and Management",
        "subtext": "1,300+ course"
    },
    {
        "header": "Mobile Development",
        "subtext": "380+ courses"
    },
    {
        "header": "Marketing",
        "subtext": "730+ courses"
    },
    {
        "header": "Cloud Computing",
        "subtext": "610+ courses"
    },
    {
        "header": "Project Management",
        "subtext": "360+ courses"
    },
    {
        "header": "Visualization and Real-Time",
        "subtext": "820+ courses"
    },
    {
        "header": "Animation and Illustration",
        "subtext": "1,200+ course"
    },
    {
        "header": "Audio and Music",
        "subtext": "400+ courses"
    },
    {
        "header": "AEC",
        "subtext": "1,100+ course"
    },
    {
        "header": "Graphic Design",
        "subtext": "960+ courses"
    },
    {
        "header": "Motion Graphics and VFX",
        "subtext": "780+ courses"
    },
    {
        "header": "Photography",
        "subtext": "980+ courses"
    },
    {
        "header": "Video",
        "subtext": "750+ courses"
    },
    {
        "header": "Data Science",
        "subtext": "760+ courses"
    },
    {
        "header": "Network and System Administration",
        "subtext": "830+ courses"
    },
    {
        "header": "Software Development",
        "subtext": "1,200+ course"
    },
    {
        "header": "User Experience",
        "subtext": "420+ courses"
    },
    {
        "header": "Web Design",
        "subtext": "520+ courses"
    },
    {
        "header": "Database Management",
        "subtext": "250+ courses"
    },
    {
        "header": "Web Development",
        "subtext": "1,200+ course"
    },
    {
        "header": "Product and Manufacturing",
        "subtext": "880+ courses"
    },
    {
        "header": "Sales",
        "subtext": "250+ courses"
    },
    {
        "header": "Human Resources",
        "subtext": "340+ courses"
    },
    {
        "header": "DevOps",
        "subtext": "220+ courses"
    },
    {
        "header": "Small Business and Entrepreneurship",
        "subtext": "460+ courses"
    },
    {
        "header": "Customer Service",
        "subtext": "150+ courses"
    },
    {
        "header": "Professional Development",
        "subtext": "1,300+ course"
    },
    {
        "header": "Business Software and Tools",
        "subtext": "1,700+ course"
    },
    {
        "header": "Security",
        "subtext": "450+ courses"
    }
]

let dropdownUl = document.querySelector(".list-dropdown ul")

DROPDOWNLST.forEach(e => {
    let li = document.createElement("li")
    li.classList.add("py-dropdown-li")

    let a = document.createElement("a")
    a.setAttribute("href", "#")
    li.appendChild(a)

    let header = document.createElement("span")
    header.innerHTML = e["header"]

    let subtext = document.createElement("span")
    subtext.innerHTML = e["subtext"]

    a.appendChild(header)
    a.appendChild(subtext)

    dropdownUl.appendChild(li)
})
