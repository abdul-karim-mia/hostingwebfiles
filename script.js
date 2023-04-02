try {
  var targetId = "HTML2";

  var i = 0;
  var intervalId = setInterval(function () {
    var targetElement = document.getElementById(targetId);
    if (targetElement && targetElement !== null && targetElement !== undefined) {
      var spanElements = targetElement.getElementsByTagName("span");
      var fadeoutterval = setInterval(function () {
        var opacityy = parseFloat(spanElements[1].style.opacity);
        if (opacityy > 0) {
          opacityy -= 0.1;
          spanElements[1].style.opacity = opacityy.toString();
        } else {
          clearInterval(fadeoutterval);
        }
      }, 10);
      spanElements[1].textContent = words[i];
      var randomColor = Math.floor(Math.random() * 16777215).toString(16);
      spanElements[1].style.color = "#" + randomColor;
      spanElements[1].style.opacity = "0";
      var fadeInterval = setInterval(function () {
        var opacity = parseFloat(spanElements[1].style.opacity);
        if (opacity < 1) {
          opacity += 0.1;
          spanElements[1].style.opacity = opacity.toString();
        } else {
          clearInterval(fadeInterval);
        }
      }, 10);
      i = (i + 1) % words.length;
    }
  }, 3000);
} catch (w) { }
try {
  // get the header element
  const header = document.querySelector('.header');

  // get the initial offset position of the header
  const headerOffsetTop = header.offsetTop;

  // add an event listener for scrolling
  window.addEventListener('scroll', () => {
    // get the current scroll position
    const scrollPosition = window.scrollY;

    // check if the user has scrolled beyond the initial offset position of the header
    if (scrollPosition >= headerOffsetTop) {
      // if so, add the "sticky" class to the header
      header.classList.add('sticky');
    } else {
      // if not, remove the "sticky" class from the header
      header.classList.remove('sticky');
    }

    // check if the user has scrolled back to the top of the page
    if (scrollPosition === 0) {
      // if so, remove the "sticky" class from the header
      header.classList.remove('sticky');
    }
  });
} catch (w) { }


function elverta() {
  const e = [
    "forEa",
    "Selec",
    "nus",
    "rdion",
    "11YEXhMu",
    "conta",
    "705540fkcsqj",
    " .fa-",
    ".desc",
    "add",
    "er .f",
    "ent",
    "fa-ey",
    "5oiGuwE",
    "tor",
    "e-sla",
    "oncli",
    "-cont",
    "ch-bo",
    "remov",
    "28QZwmKj",
    "2725620qEZzxk",
    "704064rWmHmv",
    "open",
    "osebt",
    "style",
    "2517744hUfuvR",
    "a-sea",
    "lHeig",
    "0px",
    "fa-pl",
    "heigh",
    ".acco",
    "torAl",
    ".head",
    "repla",
    "#sear",
    "5096529koMgpy",
    "stene",
    "inkLi",
    "heade",
    "er .L",
    "query",
    "2xXIIqd",
    "1078144cJXCED",
    "ins",
    "scrol",
    "438615MwyJhL",
    "List",
    "activ",
    "a-bar",
    "class",
    "ripti",
  ];
  return (elverta = function () {
    return e;
  })();
}
const carylon = jykeria;
function jykeria(e, r) {
  const t = elverta();
  return (jykeria = function (e, r) {
    return t[(e -= 151)];
  })(e, r);
}
(function (e, r) {
  const t = jykeria,
    i = elverta();
  for (; ;)
    try {
      if (
        359696 ===
        (-parseInt(t(177)) / 1) * (parseInt(t(198)) / 2) +
        -parseInt(t(202)) / 3 +
        (parseInt(t(181)) / 4) * (parseInt(t(168)) / 5) +
        -parseInt(t(176)) / 6 +
        (parseInt(t(175)) / 7) * (parseInt(t(199)) / 8) +
        parseInt(t(192)) / 9 +
        (-parseInt(t(161)) / 10) * (parseInt(t(159)) / 11)
      )
        break;
      i.push(i.shift());
    } catch (e) {
      i.push(i.shift());
    }
})(),
  (MenuOn = document[carylon(197) + carylon(156) + carylon(169)](
    carylon(189) + carylon(165) + carylon(152) + "s"
  )),
  (MenuOff = document["querySelec" + carylon(169)](
    carylon(189) + "er ul" + carylon(162) + "times"
  )),
  (SearchOn = document[carylon(197) + "Selec" + carylon(169)](
    carylon(189) + carylon(165) + carylon(182) + "rch"
  )),
  (SearchOff = document[carylon(197) + carylon(156) + carylon(169)](
    carylon(191) + carylon(173) + "x .cl" + carylon(179) + "n"
  )),
  (MenuOn[carylon(171) + "ck"] = function () {
    const e = carylon;
    document[e(197) + e(156) + e(169)](e(189) + e(196) + e(194) + "st")[
      e(153) + "List"
    ][e(164)](e(151) + "e");
  }),
  (MenuOff[carylon(171) + "ck"] = function () {
    const e = carylon;
    document["query" + e(156) + "tor"](".head" + e(196) + e(194) + "st")[
      e(153) + e(203)
    ][e(174) + "e"]("active");
  }),
  (SearchOn[carylon(171) + "ck"] = function () {
    const e = carylon;
    document[e(197) + e(156) + e(169)]("#sear" + e(173) + "x")[e(153) + e(203)][
      e(164)
    ](e(151) + "e");
  }),
  (SearchOff[carylon(171) + "ck"] = function () {
    const e = carylon;
    document[e(197) + e(156) + e(169)](e(191) + e(173) + "x")[e(153) + e(203)][
      e(174) + "e"
    ]("active");
  });
const accordionContent = document["query" + carylon(156) + carylon(188) + "l"](
  carylon(187) + carylon(158) + carylon(172) + carylon(166)
);
function removeOpen(e) {
  const r = carylon;
  accordionContent[r(155) + "ch"]((t, i) => {
    const d = r;
    if (e != i) {
      t[d(153) + d(203)][d(174) + "e"](d(178)),
        (t[d(197) + d(156) + d(169)](d(163) + "ription")[d(180)][d(186) + "t"] =
          "0px"),
        t[d(197) + d(156) + d(169)]("i")[d(153) + d(203)].replace(
          "fa-mi" + d(157),
          d(185) + "us"
        );
    }
  });
}
accordionContent[carylon(155) + "ch"]((e, r) => {
  const t = carylon;
  e[t(197) + t(156) + t(169)](t(195) + "r")["addEventLi" + t(193) + "r"](
    "click",
    () => {
      const i = t;
      e[i(153) + "List"].toggle("open");
      let d = e[i(197) + i(156) + i(169)](i(163) + i(154) + "on");
      e[i(153) + i(203)][i(160) + i(200)](i(178))
        ? ((d[i(180)][i(186) + "t"] = d[i(201) + i(183) + "ht"] + "px"),
          e["query" + i(156) + i(169)]("i")["class" + i(203)][i(190) + "ce"](
            i(167) + "e",
            i(167) + i(170) + "sh"
          ))
        : ((d.style[i(186) + "t"] = i(184)),
          e["query" + i(156) + "tor"]("i")[i(153) + i(203)][i(190) + "ce"](
            i(167) + i(170) + "sh",
            "fa-eye"
          )),
        removeOpen(r);
    }
  );
});
try {
  // Get the image elements
  var image2 = document.getElementById("Image2");
  var image3 = document.getElementById("Image3");
  var image4 = document.getElementById("Image4");
  var image5 = document.getElementById("Image5");

  // Create an array of YouTube video IDs
  var videoIds = ["CqQ7h5nGqjs", "CqQ7h5nGqjs", "CqQ7h5nGqjs", "CqQ7h5nGqjs"];

  // Add event listeners to each image element
  image2.addEventListener("click", function () {
    lity('//www.youtube.com/watch?v=' + videoIds[0]);
  });

  image3.addEventListener("click", function () {
    lity('//www.youtube.com/watch?v=' + videoIds[1]);
  });

  image4.addEventListener("click", function () {
    lity('//www.youtube.com/watch?v=' + videoIds[2]);
  });

  image5.addEventListener("click", function () {
    lity('//www.youtube.com/watch?v=' + videoIds[3]);
  });
} catch (w) { }
// Get all <a> elements on the page
const linksYt = document.getElementsByTagName("a");

// Loop through each <a> element
for (let i = 0; i < linksYt.length; i++) {
  const linkyT = linksYt[i];

  // Check if the <a> element's href contains "youtube.com" or "youtu.be"
  if ((linkyT.href.includes("youtube.com") || linkyT.href.includes("youtu.be"))&& !inkyT.href.includes("@")) {

    // Add the "data-lity" attribute to the <a> element
    linkyT.setAttribute("data-lity", "");
  }
}

