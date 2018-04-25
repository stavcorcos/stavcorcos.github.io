var count = 0;
var pressed = 0;
var scrolled_to_aboutme = 0;
var scrolled_to_projects = 0;
var scrolled_to_contact = 0;

function fadeIn() {
    fadeIns = document.getElementsByClassName("fadeIn");
    fadeInsCount = fadeIns.length;
    for (let i = 0; i < fadeInsCount; i++) {
        setTimeout(function timer() {
            fadeIns[i].className += " load";
        }, 1500 * i)
    }
    setTimeout(function arrowtimer() {
        count += 1;
    }, 7000)
}

function fadeInAboutme() {
    if (count >= 1) {
        scrolled_to_aboutme = 1;
        fadeInAboutme = document.getElementsByClassName("fadeInAboutme");
        fadeInAboutmeCount = fadeInAboutme.length;
        for (let i = 0; i < fadeInAboutmeCount; i++) {
            setTimeout(function timer() {
                fadeInAboutme[i].className += " load";
            }, 1500 * i)
        }
        setTimeout(function arrowtimer() {
            count += 1;
        }, 3500)
    }
}

function fadeInProjects() {
    if (count >= 2) {
        scrolled_to_projects = 1;
        fadeInsFour = document.getElementsByClassName("fadeInProjects");
        fadeInsCount = fadeInsFour.length;
        for (let i = 0; i < fadeInsCount; i++) {
            setTimeout(function timer() {
                fadeInsFour[i].className += " load";
            }, 2500 * i)
        }
        setTimeout(function timer() {
            cube = document.getElementsByClassName("cube");
            cubeCount = cube.length;
            for (let i = 0; i < cubeCount; i++) {
                cube[i].className += " load";
            }
        }, 1500)
        setTimeout(function arrowtimer() {
            count += 1;
        }, 3500)
    }
}

function fadeInContact() {
    if (count >= 3) {
        scrolled_to_contact = 1;
        fadeInsFour = document.getElementsByClassName("fadeInContact");
        fadeInsCount = fadeInsFour.length;
        for (let i = 0; i < fadeInsCount; i++) {
            setTimeout(function timer() {
                fadeInsFour[i].className += " load";
            }, 2500 * i)
        }
        setTimeout(function timer() {
            contacts = document.getElementsByClassName("contacts");
            contactsCount = contacts.length;
            for (let i = 0; i < contactsCount; i++) {
                contacts[i].className += " load";
            }
        }, 1500)
    }
}

landing = document.getElementById("landing");
projects = document.getElementById("projects");
contact = document.getElementById("contact");
aboutme = document.getElementById("aboutme");

function scroll_to_landing () {
    zenscroll.center(landing);
}
function scroll_to_aboutme () {
    if (count >= 1) {
        zenscroll.center(aboutme);
    }
}
function scroll_to_projects () {
    if (count >= 2) {
        zenscroll.center(projects);
    }
}
function scroll_to_contact () {
    if (count >= 3) {
        zenscroll.center(contact);
    }
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
window.onresize = function() {
    window.scrollTo(0, 0);
}
var selScrollable = '.superrow';
// Uses document because document will be topmost level in bubbling
$(document).on('touchmove',function(e){
  e.preventDefault();
});
// Uses body because jQuery on events are called off of the element they are
// added to, so bubbling would not work if we used document instead.
$('body').on('touchstart', selScrollable, function(e) {
  if (e.currentTarget.scrollTop === 0) {
    e.currentTarget.scrollTop = 1;
  } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
    e.currentTarget.scrollTop -= 1;
  }
});
$('body').on('touchmove', selScrollable, function(e) {
    if (e.currentTarget.scrollTop === 0) {
      e.currentTarget.scrollTop = 1;
    } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
      e.currentTarget.scrollTop -= 1;
    }
  });
// Stops preventDefault from being called on document if it sees a scrollable div
$('body').on('touchmove', selScrollable, function(e) {
  e.stopPropagation();
});

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 38:
            if (pressed === 0) {
                fullheight = $(document).height();
                offsets = (fullheight/4);
                if (window.pageYOffset == 0) {
                } else if (window.pageYOffset == offsets) {
                    pressed = 1;
                    setTimeout(function arrowtimer() {
                        pressed = 0;
                    }, 800)
                    zenscroll.center(landing);
                } else if (window.pageYOffset == 2 * offsets) {
                    if (count >= 1) {
                        pressed = 1;
                        setTimeout(function arrowtimer() {
                            pressed = 0;
                        }, 800)
                        zenscroll.center(aboutme);
                    }
                } else if (window.pageYOffset == 3 * offsets) {
                    if (count >= 2) {
                        pressed = 1;
                        setTimeout(function arrowtimer() {
                            pressed = 0;
                        }, 800)
                        zenscroll.center(projects);
                    }
                } else {
                }
            }
        break;
        case 40:
            if (pressed === 0) {
                fullheight = $(document).height();
                offsets = (fullheight/4);
                if (window.pageYOffset == 0) {
                    if (count >= 1) {
                        pressed = 1;
                        setTimeout(function arrowtimer() {
                            pressed = 0;
                        }, 800)
                        zenscroll.center(aboutme);
                        if (scrolled_to_aboutme == 0) {
                            fadeInAboutme();
                        }
                    }
                } else if (window.pageYOffset == offsets) {
                    if (count >= 2) {
                        pressed = 1;
                        setTimeout(function arrowtimer() {
                            pressed = 0;
                        }, 800)
                        zenscroll.center(projects);
                        if (scrolled_to_projects == 0) {
                            fadeInProjects();
                        }
                    }
                } else if (window.pageYOffset == 2 * offsets) {
                    if (count >= 3) {
                        pressed = 1;
                        setTimeout(function arrowtimer() {
                            pressed = 0;
                        }, 800)
                        zenscroll.center(contact);
                        if (scrolled_to_contact == 0) {
                            fadeInContact();
                        }
                    }
                }  else {
                }
                break;
            }
    }
};