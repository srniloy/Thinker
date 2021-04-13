const body = document.querySelector('body');
const nav = document.querySelector('.top-nav');
const topOfNav = nav.offsetTop;
const abc = document.querySelector('.clickForUp');
const loader = document.querySelector('#preloader');


//==========Skills animation============
const skillStarts = document.querySelector('#about');
const aboutTopLength = skillStarts.offsetTop;
const percentMainDiv = document.querySelector('.skill .per');
const percentDiv = document.querySelectorAll('.skill .per div');
const percentP = document.querySelectorAll('.smd .per p');
//==========Skills animation============


window.addEventListener('scroll', changes);


function changes() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('scroll');
    } else {
        document.body.classList.remove('scroll');
        document.body.style.paddingTop = 0 + 'px';
    }




    if (window.scrollY >= 1000) {
        document.body.classList.add('up');
    } else {
        document.body.classList.remove('up');
    }




    if (window.scrollY >= aboutTopLength) {
        skillStarts.classList.add('animateSkills');
        console.log(percentMainDiv.offsetWidth);
        skillpercentChange();
    } else {
        skillStarts.classList.remove('animateSkills');
    }

}


abc.addEventListener('click', function() {
    window.scrollTo(0, 0);
});
// ===============preloader==============
function stopLoading() {
    loader.style.display = 'none';
}

function skillpercentChange() {
    for (var i = 0; i < percentDiv.length; i++) {
        percentP[i].innerHTML = parseInt((100 * percentDiv[i].offsetWidth) / percentMainDiv.offsetWidth) + "%";
    }
}