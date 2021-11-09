let languages = [
    "العربية (Arabic)",
    "Čeština (Czech)",
    "Dansk (Danish)",
    "Deutsch (German)",
    "<strong>English (English)</strong>",
    "Español (Spanish)",
    "Français (French)",
    "Bahasa Indonesia (Bahasa Indonesia)",
    "Italiano (Italian)",
    "日本語 (Japanese)",
    "한국어 (Korean)",
    "Bahasa Malaysia (Malay)",
    "Nederlands (Dutch)",
    "Norsk (Norwegian)",
    "Polski (Polish)",
    "Português (Portuguese)",
    "Română (Romanian)",
    "Русский (Russian)",
    "Svenska (Swedish)",
    "ภาษาไทย (Thai)",
    "Tagalog (Tagalog)",
    "Türkçe (Turkish)",
    "简体中文 (Chinese (Simplified))",
    "正體中文 (Chinese (Traditional))"
]

let footerDropdownUl = document.querySelector(".footer-dropdown ul")

languages.forEach(lang => {
    let li = document.createElement("li")
    let btn = document.createElement("button")
    btn.classList.add("lang-btn")

    btn.innerHTML = lang
    li.appendChild(btn)
    footerDropdownUl.appendChild(li)
})
