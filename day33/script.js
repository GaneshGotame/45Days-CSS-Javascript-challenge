let tablinks=document.querySelectorAll('.tab-links');
let tabcontents=document.querySelectorAll('.tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
}

let sidemenu=document.getElementById('sidemenu');
function openmenu(){
    sidemenu.style.right="0";
}

function closemenu(){
    sidemenu.style.right="-220px";
}

function submit(){
const scriptURL = 'https://script.google.com/macros/s/AKfycbzoSioilxY5O3m2nmKpOKmroOUoxKl0iijUsK7F2AK_mh6mUtZ63Lxs1qhDJ_fsQI0OmQ/exec';
    const form = document.forms['submit-to-google-sheet']
    const message=document.getElementById('message');
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            message.innerHTML="Message send sucessfully.";
            setTimeout(function(){
                message.innerHTML="";
            }, 5000);
        })
        .catch(error => console.error('Error!', error.message))
    })
}