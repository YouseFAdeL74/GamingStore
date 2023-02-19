let myScrollTopPage = document.querySelector(".scrollTop");
// get ScrollHeight
let ScrollHeights = document.documentElement.scrollHeight;
// clientHeight
let clientHeight = document.documentElement.clientHeight;

// Difference

let deffHeight = ScrollHeights - clientHeight;

window.addEventListener("scroll", (e) => {
  let scrollTop = document.documentElement.scrollTop;
  myScrollTopPage.style.width = `${(scrollTop / deffHeight) * 100}%`
})

let myHeader = document.querySelector(".header-area");
window.addEventListener("scroll", () => {
  if (window.scrollY > 72) {
    myHeader.classList.add("headerFixed")
  } else {
    myHeader.classList.remove("headerFixed")
  }
})
// Click On Toggle Show ul
let toggle = document.querySelector(".toggle"),
  myUl = document.querySelector(".links");
let myA = document.querySelectorAll(".links li a");

myA.forEach(a => {
  a.addEventListener("click", (e) => {
    myA.forEach(ele => {
      ele.classList.remove("active")
    })
    e.target.classList.add("active")
  })
})


toggle.onclick = function () {
  if (this.classList.contains("bx-menu-alt-right")) {
    this.classList.replace("bx-menu-alt-right", "bx-x");
  } else {
    this.classList.replace("bx-x", "bx-menu-alt-right");
  }
  // Add Class to ul
  myUl.classList.toggle("open");
}
document.addEventListener("click", (e) => {
  if (e.target != toggle && e.target != myUl) {
    myUl.classList.remove("open");
    if (toggle.classList.contains("bx-x")) {
      toggle.classList.replace("bx-x", "bx-menu-alt-right")
    }
  }
})
myUl.addEventListener("click", (e) => {
  e.stopPropagation();
})
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector('.info').classList.add("show-info")
  }, 5000);
  let myButton = document.querySelectorAll(".info .mybtns button");
  let text = document.querySelector(".info > h4");
  myButton.forEach(el => {
    el.addEventListener("click", (e) => {
      // condition
      if (e.target.dataset.question === "yes") {
        document.querySelector(".info .inputs").classList.add("show");
        e.target.classList.add("active");
        document.querySelector(".info .mybtns .no").remove();
        text.innerHTML = "Write Your Name"
      } else {
        text.innerHTML = "Okay Website Loading"
        document.querySelector(".info .mybtns .no").classList.add("active");
        document.querySelector(".info .mybtns .yes").remove();
        setInterval(() => {
          document.querySelector(".loader").classList.add("load-close");
          document.body.style.overflow = "auto";
        }, 3000)
      }
    })
  });
  // select
  let submitButton = document.querySelector(".inputs .submit");
  let textInput = document.getElementById("inputText");
  let typeText = document.querySelector(".type")
  submitButton.onclick = function () {
    if (textInput.value !== "") {
      text.innerHTML = `Welcome ${textInput.value}`;
      typeText.innerHTML = `${textInput.value}`
      setInterval(() => {
        document.querySelector(".loader").classList.add("load-close");
        document.body.style.overflow = "auto";
      }, 3000)
    } else {
      alert("Write Your Name")
    }
  }
})

// Section Games

let myBoxes = document.querySelectorAll(".games .left-box .box");
let myContent = document.querySelectorAll(".games .content");

myBoxes.forEach(box => {
  box.addEventListener("click", (e) => {
    e.stopPropagation();
  })
})


// loop

myBoxes.forEach(box => {
  box.addEventListener('click', (e) => {
    myBoxes.forEach(box => {
      box.classList.remove("active")
    })
    e.target.classList.add("active")
    myContent.forEach(content => {
      content.style.display = 'none';
    })
    document.querySelectorAll(e.target.dataset.section).forEach(el => {
      el.style.display = 'flex';
    })
  })
})
let myLis = document.querySelectorAll(".show-mobile li");
myLis.forEach(li => {
  li.addEventListener("click", (e) => {
    myLis.forEach(li => {
      li.classList.remove("active");
    })
    e.target.classList.add("active");
    myContent.forEach(content => {
      content.style.display = 'none';
    })
    document.querySelectorAll(e.target.dataset.section).forEach(el => {
      el.style.display = 'flex';
    })
  })
})
let myPlay = document.querySelectorAll(".box .myIcon");
let myVideos = document.querySelectorAll(".videos")
myPlay.forEach(play => {
  play.addEventListener("click", (e) => {
    //create Element
    let overlay = document.createElement("div");
    overlay.className = "overlay-video"
    document.body.appendChild(overlay);
    let boxVideo = document.createElement("div");
    boxVideo.className = "boxvideo";
    let myVideo = document.createElement("video");
    myVideo.setAttribute("controls", "controls");
    myVideo.setAttribute("autoplay", "autoplay");
    myVideo.src = play.dataset.video;
    let div = document.createElement("div");
    div.className = "video-content";
    div.appendChild(myVideo)
    boxVideo.appendChild(div)
    document.body.appendChild(boxVideo)
    let mySpan = document.createElement("span");
    mySpan.appendChild(document.createTextNode("X"));
    mySpan.className = "deleted"
    boxVideo.appendChild(mySpan)
  })
})
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleted")) {
    e.target.parentElement.remove();
    document.querySelector(".overlay-video").remove();
  }
})



let theGames = document.querySelector(".games");

let ulShow = document.querySelector(".show-mobile");


window.addEventListener("scroll", (e) => {

  if (window.scrollY >= theGames.offsetTop) {
    ulShow.classList.add("show");
  } else {
    ulShow.classList.remove("show");
  }


  if (window.scrollY >= theGames.offsetTop + 1350) {
    ulShow.classList.remove("show")
  }

  if (window.scrollY >= theGames.offsetTop + 1150) {
    ulShow.classList.add("close-mobile");
  } else {
    ulShow.classList.remove("close-mobile")
  }
})

let myPaganation = document.querySelectorAll('.paganation li');
let myAllContent = document.querySelectorAll(".allcontent");

myPaganation.forEach(li => {
  li.addEventListener("click", (e) => {
    myPaganation.forEach(li => {
      li.classList.remove("active")
    })
    e.target.classList.add("active")
    myAllContent.forEach(cont => {
      cont.style.display = 'none';
    })
    document.querySelectorAll(e.target.dataset.filter).forEach(filter => {
      filter.style.display = 'flex';
    })
  })
})


// Start Counter

let newDate = new Date("Feb 28, 2023 23:59:59").getTime();


let myCounter = setInterval(() => {

  let dateNow = new Date().getTime();

  let diffDate = newDate - dateNow;

  let days = Math.floor(diffDate / 1000 / 60 / 60 / 24);

  let hours = Math.floor(diffDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

  let minutes = Math.floor(diffDate % (1000 * 60 * 60) / (1000 * 60))

  let seconds = Math.floor(diffDate % (1000 * 60) / (1000));


  document.querySelector(".days span").innerHTML = days;
  document.querySelector(".hours span").innerHTML = hours;
  document.querySelector(".minutes span").innerHTML = minutes;
  document.querySelector(".seconds span").innerHTML = seconds;


  if (seconds < 10) {
    document.querySelector(".seconds span").innerHTML = `0${seconds}`;
  }

  if (hours < 10) {
    document.querySelector(".hours span").innerHTML = `0${hours}`;
  }

  if (days < 10) {
    document.querySelector(".days span").innerHTML = `0${days}`;
  }


  if (minutes < 10) {
    document.querySelector(".minutes span").innerHTML = `0${minutes}`;
  }

  if (diffDate == 0) {
    clearInterval(myCounter)
  }

}, 1000)


let gameBoxes = document.querySelectorAll(".game-content .box");
let gameName = document.querySelector(".name-game")

let turn = 'x';

// arrayEmpty

let emptyArray = [];

function thEnd(ind1, ind2, ind3) {
  gameName.innerHTML = `The Winner Is { ${emptyArray[ind1]} }`
  document.getElementById("item" + ind1).style.backgroundColor = 'rgb(0 150 136 / 58%)';
  document.getElementById("item" + ind2).style.backgroundColor = 'rgb(0 150 136 / 58%)';
  document.getElementById("item" + ind3).style.backgroundColor = 'rgb(0 150 136 / 58%)';
  setTimeout(() => {
    window.location.reload();
  }, 3000)
}

function winner() {
  for (var i = 1; i < 10; i++) {
    emptyArray[i] = document.getElementById('item' + i).innerHTML;
  }
  if (emptyArray[1] == emptyArray[2] && emptyArray[2] == emptyArray[3] && emptyArray[3] !== "") {
    thEnd(1, 2, 3)
  } else if (emptyArray[4] == emptyArray[5] && emptyArray[5] == emptyArray[6] && emptyArray[6] !== "") {
    thEnd(4, 5, 6)
  } else if (emptyArray[7] == emptyArray[8] && emptyArray[8] == emptyArray[9] && emptyArray[9] !== "") {
    thEnd(7, 8, 9)
  }
  else if (emptyArray[1] == emptyArray[4] && emptyArray[4] == emptyArray[7] && emptyArray[7] !== "") {
    thEnd(1, 4, 7)
  } else if (emptyArray[2] == emptyArray[5] && emptyArray[5] == emptyArray[8] && emptyArray[8] !== "") {
    thEnd(2, 5, 8)
  } else if (emptyArray[3] == emptyArray[6] && emptyArray[6] == emptyArray[9] && emptyArray[9] !== "") {
    thEnd(3, 6, 9)
  }
  else if (emptyArray[1] == emptyArray[5] && emptyArray[5] == emptyArray[9] && emptyArray[9] !== "") {
    thEnd(1, 5, 9)
  } else if (emptyArray[3] == emptyArray[5] && emptyArray[5] == emptyArray[7] && emptyArray[7] !== "") {
    thEnd(3, 5, 7)
  }
}
gameBoxes.forEach(box => {
  box.addEventListener('click', (e) => {
    if (turn == "x" && e.target.innerHTML == "") {
      e.target.innerHTML = "X";
      turn = "o";
      gameName.innerHTML = 'Turn On { O } To Play';
    } else if (turn == "o" && e.target.innerHTML == "") {
      e.target.innerHTML = "O";
      turn = "x";
      gameName.innerHTML = 'Turn On { X } To Play';
    }
    winner()
  })
})


let theCounter = document.querySelectorAll(".count");
let sectionSocial = document.querySelector(".social");

let started = false;
window.addEventListener("scroll", (e) => {

  if (window.scrollY >= sectionSocial.offsetTop - 250) {
    if (!started) {
      theCounter.forEach((item) => count(item));
    }
    started = true;
  }
})

function count(el) {
  let count = el.dataset.count;
  let myInterval = setInterval(() => {
    el.textContent++;
    if (el.textContent == count) {
      clearInterval(myInterval)
    }
  }, 1000 / count)
}

let navLi = document.querySelectorAll(".nagavation .nav-li");


navLi.forEach(li => {
  li.addEventListener("click", (e) => {
    navLi.forEach(li => {
      li.classList.remove("active")
    })
    e.target.classList.add("active")
    document.querySelector(e.target.dataset.scroll).scrollIntoView({
      behavior: "smooth"
    })
  })
});


myA.forEach(element => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(e.target.dataset.scroll).scrollIntoView({
      behavior: "smooth"
    })
  })
});





let myInputText = document.querySelector(".inputText");
let myInputSubmit = document.querySelector(".inputSubmit");
let message = document.querySelector(".message");


myInputSubmit.onclick = function () {

  if (myInputSubmit.value !== "") {
    message.classList.add("show");
    myInputText.value = "";
  }
  setInterval(() => {
    message.style.right = "-200%"
  }, 5000)
}


let myTop = document.querySelector(".show-icon");


window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 800) {
    myTop.classList.add("show")
  } else {
    myTop.classList.remove("show")
  }
  myTop.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
})