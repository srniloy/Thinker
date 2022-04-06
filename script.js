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

// =========Portfolio flex style===========

const allWebProject = document.querySelectorAll('.webprojectAll');
const projectBox = document.querySelectorAll('.webProjects div');

projectBox.forEach(webprojectAll => webprojectAll.addEventListener('click', function() {
    this.classList.toggle('open');
}));


projectBox




// =========Portfolio flex style===========


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
        var percentOfSkills = [100, 90, 70, 85, 95, 65,90,70];
        skillpercentChange(percentOfSkills);
    } else {
        skillStarts.classList.remove('animateSkills');
        for (var i = 0; i < percentDiv.length; i++) {
            percentDiv[i].style.width = 0 + "%";
            percentP[i].innerHTML = "";
        }
    }
}



abc.addEventListener('click', function() {
    window.scrollTo(0, 0);
});
// ===============preloader==============
const loadingText = document.querySelector('#loadingText');
let points = 0;
window.addEventListener('load',()=>{
    setInterval(() => {
        if(points==-1){
            loadingText.innerHTML="";
            points++;
        }else if(points==0){
            loadingText.innerHTML=".";
            points++;
        }else if(points==1){
            loadingText.innerHTML="..";
            points++;
        }
        else if(points==2){
            loadingText.innerHTML="...";
            points=-1;
        }
    }, 500);

})

const Full_Body = document.querySelector('#Full_Body');

function stopLoading() {
    loader.style.display = 'none';
    Full_Body.style.display = 'block';
}

function skillpercentChange(a) {
    for (var i = 0; i < percentDiv.length; i++) {
        percentDiv[i].style.width = a[i] + "%";
        percentP[i].innerHTML = parseInt((percentDiv[i].offsetWidth * 100) / percentMainDiv.offsetWidth) + "%";


    }
}