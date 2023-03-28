// Load the Google Drive API client library
gapi.load('client', function () {
  // Initialize the API client with your API key
  gapi.client.init({
    apiKey: 'AIzaSyDC0_hBFv3L8057WG-zqygdMJH4w1Hq9hs',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
  }).then(function () {
    // Retrieve the file metadata for PSD files in the public folder
    gapi.client.drive.files.list({
      q: "'1m-Aw3f_8ng1KoF1SzSfOWQ_BDuncK9ZJ' in parents and mimeType='image/x-photoshop'",
      fields: 'nextPageToken, files(id, name, thumbnailLink, webContentLink)'
    }).then(function (response) {
      var files = response.result.files;
      // Iterate through the files and display them on your web page
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var url = file.webContentLink;
        var name = file.name;
        var placeHolder = "https://abdul-karim-mia.github.io/hostingwebfiles/bmf/img/Bulk%20mockups%20filler%20loading%20placeholder.gif"
        var thumbnailUrl = file.thumbnailLink;
        if (!thumbnailUrl) {
          // Remove extension from name
          var nameWithoutExt = name.split('.').slice(0, -1).join('.');
          // Check for jpg image with the same name
          var jpgFile = files.find(function(f) {
            return f.name == nameWithoutExt + '.jpg' && f.mimeType == 'image/jpeg';
          });
          if (jpgFile) {
            thumbnailUrl = jpgFile.thumbnailLink;
          } else {
            thumbnailUrl = "https://abdul-karim-mia.github.io/hostingwebfiles/bmf/img/no-data-concept-illustration_114360-536.webp";
          }
        }
        // Create the <div> element
        var div = document.createElement('div');
        div.classList.add('psd');
        div.setAttribute('data-aos', 'fade-up');
        div.setAttribute('data-aos-duration', '1000');
        // Create the <img> element
        var img = document.createElement('img');
        img.classList.add('psdThumb');
        img.setAttribute('alt', name);
        img.setAttribute('title', name);
        img.setAttribute('src', placeHolder);
        img.setAttribute('data-src', thumbnailUrl);
        img.setAttribute('loading', 'lazy');
        div.appendChild(img);
        // Create the <button> element
        var button = document.createElement('button');
        button.classList.add('dBt');
        // Create the <a> element
        var a = document.createElement('a');
        a.setAttribute('href', url);
        a.innerHTML = 'Download';
        button.appendChild(a);
        div.appendChild(button);
        document.querySelector('.max-width').appendChild(div);
        // TODO: Append the <div> element to your web page
      }
      ///////////////////////////////////////////////////////
       // Get all the "psd" div elements on the page
    var psdDivs = document.getElementsByClassName("psd");

    // Create an array of image elements from the "psd" divs
    var images = [];
    for (var i = 0; i < psdDivs.length; i++) {
      var imgElemnt = psdDivs[i].getElementsByTagName("img")[0];
      images.push(imgElemnt);
    }

    // Load the first image and then load the rest one by one
    loadNextImage(0, images);

    function loadNextImage(index, images) {
      // Exit function if all images have been loaded
      if (index >= images.length) {
        return;
      }

      // Load the next image and update the "src" attribute when it's loaded
      var img = new Image();
      img.onload = function() {
        // Set the "src" attribute of the current image to the loaded image's source
        images[index].setAttribute("src", img.src);

        // Fade in the current image when it's loaded
        fadeOutImage(images[index], 1);

        // Load the next image after this one has loaded
        loadNextImage(index + 1, images);
      };
      img.src = images[index].getAttribute("data-src");
      //fadeInImage(images[index], 0);
    }

    function fadeInImage(element, opacity) {
      // Set the initial opacity to 0
      //element.style.opacity = 0;

      // Increase the opacity gradually using a loop
      var intervalID = setInterval(function() {
        // Increase the opacity by 0.1 on each loop iteration
        opacity += 0.1;
        element.style.opacity = opacity;

        // Exit loop when the opacity reaches 1
        if (opacity >= 1) {
          clearInterval(intervalID);
        }
      }, 10); // 50ms delay between loop iterations
    }
    function fadeOutImage(element, opacity) {
      // Set the initial opacity to 0
      //element.style.opacity = 0;

      // Increase the opacity gradually using a loop
      var intervalID = setInterval(function() {
        // Increase the opacity by 0.1 on each loop iteration
        opacity -= 0.1;
        element.style.opacity = opacity;

        // Exit loop when the opacity reaches 1
        if (opacity <= 0) {
          clearInterval(intervalID);
        }
<<<<<<< Updated upstream

        // Load the next image and update the "src" attribute when it's loaded
        var img = new Image();
        img.onload = function () {
          images[index].setAttribute("src", img.src);

          // Fade in the current image when it's loaded
          fadeInImage(images[index], 0);

          // Load the next image after this one has loaded
          loadNextImage(index + 1, images);
        };
        img.src = images[index].getAttribute("data-src");
      }

      function fadeInImage(element, opacity) {
        // Set the initial opacity to 0
        element.style.opacity = 0;

        // Increase the opacity gradually using a loop
        var intervalID = setInterval(function () {
          // Increase the opacity by 0.1 on each loop iteration
          opacity += 0.1;
          element.style.opacity = opacity;

          // Exit loop when the opacity reaches 1
          if (opacity >= 1) {
            clearInterval(intervalID);
          }
        }, 10); // 50ms delay between loop iterations
      }

=======
      }, 1000); // 50ms delay between loop iterations
    }
>>>>>>> Stashed changes
      ///////////////////////////////////////////////////////
    });
  });
});
