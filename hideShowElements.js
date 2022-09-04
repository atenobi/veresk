const socialMenu = document.getElementById("js-social-media-menu");
const headerLogo = document.getElementById("js-header-logo");

const hideShowSocialMenu = () => {
    if(socialMenu.classList.contains("hidden")) {
        socialMenu.classList.remove("hidden")
        socialMenu.classList.add("visible")
    } else if (socialMenu.classList.contains("visible")) {
        socialMenu.classList.remove("visible")
        socialMenu.classList.add("hidden")
    }
   
};

headerLogo.addEventListener("click", () => hideShowSocialMenu());
