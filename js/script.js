

window.addEventListener("load", () => {
  document.querySelector(".js-preloader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".js-preloader").style.display = "none";
  }, 600)
})
/*----------Nav-------------*/
const navToggler = document.querySelector(".js-nav-toggler");
const nav = document.querySelector(".js-nav");

function navToggle(){
  nav.classList.toggle("active");
  navToggler.classList.toggle("active");
}

navToggler.addEventListener("click", navToggle);

//hide the Nav by clicking outside of it 
document.addEventListener("click", (event) => {
  const isClickInsideNav = nav.contains(event.target);
  const isClickInsideNavToggler = navToggler.contains(event.target);
  if (!(isClickInsideNav || isClickInsideNavToggler) && nav.classList.contains("active")) {
    navToggle();
  }
});

/*--theme light dark */
function themeLightDark() {
  const switcherBtn = document.querySelector(".js-swicher-btn");
  const icon = switcherBtn.querySelector("i");

  function changeIcon(){
    if (document.body.classList.contains("dark")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun")
    }
    else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa")
    }
  }

  changeIcon();
}
themeLightDark();