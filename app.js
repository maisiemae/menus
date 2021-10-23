var counter = 0;
function onClickAbout() {
    document.getElementById("interact_tab").style.display = "none";
    document.getElementById("home_tab").style.display = "none";
    document.getElementById("about_tab").style.display = "block";
}
function onClickHome() {
    document.getElementById("home_tab").style.display = "block";
    document.getElementById("interact_tab").style.display = "none";
    document.getElementById("about_tab").style.display = "none";

}
function onClickInteract() {
    document.getElementById("interact_tab").style.display = "block";
    document.getElementById("home_tab").style.display = "none";
    document.getElementById("about_tab").style.display = "none";

}

function countClick() {
    ++counter;
    document.getElementById('counter_label').innerHTML = 'Counter: ' + counter;
}
/*
var tabs;

window.addEventListener('load', () => {
    tabs = document.getElementsByClassName('tab');

    document.getElementById('home_button').addEventListener('click', () => {
        switch_tab('home_tab');
    })

    document.getElementById('about_button').addEventListener('click', () => {
        switch_tab('about_tab');
    })

    document.getElementById('interact_button').addEventListener('click', () => {
        switch_tab('interact_tab');
    })

    document.getElementById('counter_button').addEventListener('click', (e) => {
        ++counter;
        document.getElementById('counter_label').innerHTML = 'Counter: ' + counter;
    })
});


function hide_all_tabs() {
    for (let i = 0; i < tabs.length; ++i) {
        tabs.item(i).style.display = 'none';
    };
}

function switch_tab(tab_name) {
    hide_all_tabs();
    document.getElementById(tab_name).style.display = 'block';
}*/