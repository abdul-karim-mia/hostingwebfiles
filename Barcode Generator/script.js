 try {
    var targetId = "HTML2";
    var i = 0;
    var intervalId = setInterval(function () {
      var targetElement = document.getElementById(targetId);
      if (targetElement && targetElement !== null && targetElement !== undefined) {
        var spanElements = targetElement.getElementsByTagName("span");
        if (spanElements[1]) {
          spanElements[1].textContent = words[i];
          var randomColor = Math.floor(Math.random() * 16777215).toString(16);
          spanElements[1].style.color = "#" + randomColor;
          spanElements[1].style.opacity = "0";
          spanElements[1].style.transition = "opacity 0.5s linear";
          setTimeout(function () {
            spanElements[1].style.opacity = "1";
          }, 100);
          setTimeout(function () {
            spanElements[1].style.opacity = "0";
          }, 8000);
          i = (i + 1) % words.length;
        }
      }
    }, 3000);
  } catch (error) {
   // console.error(error);
  }
try {
  const header = document.querySelector('.header');
  const headerOffsetTop = header.offsetTop;

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= headerOffsetTop) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }

    if (scrollPosition === 0) {
      header.classList.remove('sticky');
    }
  });
} catch (w) { }

const menuOn = document.querySelector('.menu');
const menuOff = document.querySelector('.header ul.times');
const searchOn = document.querySelector('.search');
const searchOff = document.querySelector('.close-btn');

menuOn.addEventListener('click', () => {
  document.querySelector('.menu-first').classList.add('active');
});

menuOff.addEventListener('click', () => {
  document.querySelector('.header ul.times').classList.remove('active');
});

searchOn.addEventListener('click', () => {
  document.querySelector('.search-box').classList.add('active');
});

searchOff.addEventListener('click', () => {
  document.querySelector('.search-box').classList.remove('active');
});

const accordionContent = document.querySelectorAll('.accordion-item');

function removeOpen(exceptIndex) {
  accordionContent.forEach((item, index) => {
    if (exceptIndex !== index) {
      item.querySelector('.accordion-item-description').classList.remove('open');
      item.querySelector('.icon i').classList.replace('fa-minus', 'fa-eye');
    }
  });
}

accordionContent.forEach((item, index) => {
  item.querySelector('.accordion-header').addEventListener('click', () => {
    item.querySelector('.accordion-item-description').classList.toggle('open');
    let description = item.querySelector('.accordion-item-description');
    
    if (item.querySelector('.accordion-item-description').classList.contains('open')) {
      description.style.height = description.scrollHeight + 'px';
      item.querySelector('i').classList.replace('fa-eye', 'fa-minus');
    } else {
      description.style.height = '0px';
      item.querySelector('i').classList.replace('fa-minus', 'fa-eye');
    }
    
    removeOpen(index);
  });
});

try {
  // Get the image elements
  var image2 = document.getElementById("Image2");
  var image3 = document.getElementById("Image3");
  var image4 = document.getElementById("Image4");
  var image5 = document.getElementById("Image5");

  // Create an array of YouTube video IDs
  var videoIds = ["JTBg-wfok_M", "CqQ7h5nGqjs", "CqQ7h5nGqjs", "CqQ7h5nGqjs"];

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
  if ((linkyT.href.includes("youtube.com") || linkyT.href.includes("youtu.be"))&& !linkyT.href.includes("@")) {

    // Add the "data-lity" attribute to the <a> element
    linkyT.setAttribute("data-lity", "");
  }
}
