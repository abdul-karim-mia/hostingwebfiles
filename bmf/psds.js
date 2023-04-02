
// Load the Google Drive API client library
gapi.load('client', function () {
    // Initialize the API client with your API key
    gapi.client.init({
      apiKey: 'AIzaSyDC0_hBFv3L8057WG-zqygdMJH4w1Hq9hs',
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
    }).then(function () {
      // Retrieve the file metadata for PSD files in the public folder
      gapi.client.drive.files.list({
        q: "'1xcmITjDd3XaD4TLRKg6BYygK5PTPSFux' in parents and (mimeType='image/x-photoshop' or mimeType='image/jpeg' or mimeType='image/png' or mimeType='image/webp')",
        fields: 'nextPageToken, files(id, name, mimeType, thumbnailLink, webContentLink)'
      }).then(function (response) {
        var files = response.result.files;
        //console.log(files)
        // Iterate through the PSD files and display them on your web page
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          if (file.mimeType === "image/x-photoshop") {
            var url = file.webContentLink;
            var name = file.name.replace(/\.[^/.]+$/, ""); // remove file extension
            var thumbnailUrl = file.thumbnailLink;
            // check if thumbnailUrl is undefined or empty, or if there is an image with the same name
            if (!thumbnailUrl || thumbnailUrl === "" || !files.some(f => f.mimeType !== "image/x-photoshop" && f.name.replace(/\.[^/.]+$/, "") === name && f.thumbnailLink)) {
              thumbnailUrl = files.find(f => f.mimeType !== "image/x-photoshop" && f.name.replace(/\.[^/.]+$/, "") === name && f.thumbnailLink)?.thumbnailLink || "https://abdul-karim-mia.github.io/hostingwebfiles/bmf/img/no-data-concept-illustration_114360-536.webp";
            }
            var div = document.createElement('div');
            div.classList.add('psd');
            div.setAttribute('data-aos', 'fade-up');
            div.setAttribute('data-aos-duration', '1000');
            var img = document.createElement('img');
            img.classList.add('psdThumb');
            img.setAttribute('alt', name);
            img.setAttribute('title', name);
            img.setAttribute('src', "https://abdul-karim-mia.github.io/hostingwebfiles/bmf/img/Bulk%20mockups%20filler%20loading%20placeholder.gif");
            img.setAttribute('data-src', thumbnailUrl);
            img.setAttribute('loading', 'lazy')
            div.appendChild(img);
            var button = document.createElement('button');
            button.classList.add('dBt');
            var a = document.createElement('a');
            a.setAttribute('href', url);
            a.innerHTML = 'Download';
            button.appendChild(a);
            div.appendChild(button);
            document.querySelector('.max-width').appendChild(div);
          }
        }
        ///////////////////////////////////////////////////////
      var psdDivs = document.getElementsByClassName("psd");

      if (psdDivs.length > 0) {
        // Loop over each "psdDiv" element
        for (var i = 0; i < psdDivs.length; i++) {
          var imgElements = psdDivs[i].getElementsByTagName("img");

          // Load the images in each "psdDiv" one by one
          for (var j = 0; j < imgElements.length; j++) {
            loadNextImage(0, [imgElements[j]]);
          }
        }
      }
      function loadNextImage(index, images) {
        // Exit function if all images have been loaded
        if (index >= images.length) {
          return;
        }

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

      ///////////////////////////////////////////////////////
      });
    });
  });
