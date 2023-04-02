
// Load the Drive API client
gapi.load('client', function () {
  // Initialize the API client with the authorization key
  gapi.client.init({
    apiKey: 'AIzaSyDC0_hBFv3L8057WG-zqygdMJH4w1Hq9hs',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
    scope: 'https://www.googleapis.com/auth/drive.readonly'
  }).then(function () {
    // Set the ID of the folder to retrieve files from
    var folderId = '1xcmITjDd3XaD4TLRKg6BYygK5PTPSFux';

    // Set the MIME types of the files to retrieve
    var mimeTypes = ['image/x-photoshop', 'image/jpeg', 'image/png', 'image/webp'];

    // Initialize an empty array to store the files
    var allFiles = [];

    // Define a function to retrieve files from the Drive API
    function getFiles(pageToken) {
      // Set the query to retrieve files with the specified MIME types in the specified folder
      var query = "'" + folderId + "' in parents and (";
      for (var i = 0; i < mimeTypes.length; i++) {
        if (i > 0) {
          query += " or ";
        }
        query += "mimeType='" + mimeTypes[i] + "'";
      }
      query += ")";

      // Set the fields to retrieve for each file
      var fields = 'nextPageToken, files(id, name, thumbnailLink, webContentLink, mimeType)';

      // Set the page size for each request
      var pageSize = 100;

      // Call the Drive API to retrieve the files
      gapi.client.drive.files.list({
        q: query,
        fields: fields,
        pageSize: pageSize,
        pageToken: pageToken
      }).then(function (response) {
        // Add the retrieved files to the array
        allFiles = allFiles.concat(response.result.files);

        // Check if there are more files to retrieve
        if (response.result.nextPageToken) {
          // Call the API again with the next page token to retrieve the next set of files
          getFiles(response.result.nextPageToken);
        } else {
          // All files have been retrieved, so process them with a loop
          for (var i = 0; i < allFiles.length; i++) {
            var file = allFiles[i];
            if (file.mimeType === "image/x-photoshop") {
              //console.log(file)
              var url = file.webContentLink;
              var name = file.name.replace(/\.[^/.]+$/, ""); // remove file extension
              var thumbnailUrl = file.thumbnailLink;
              // check if thumbnailUrl is undefined or empty, or if there is an image with the same name
              if (!thumbnailUrl || thumbnailUrl === "") {
                var imageFile = allFiles.find(f => f.mimeType !== "image/x-photoshop" && f.name.replace(/\.[^/.]+$/, "") === name && f.thumbnailLink);
                if (imageFile) {
                  thumbnailUrl = imageFile.thumbnailLink;
                } else {
                  thumbnailUrl = "https://abdul-karim-mia.github.io/hostingwebfiles/bmf/img/no-data-concept-illustration_114360-536.webp";
                }
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
            // Do something with the file
          }
          loadAfterDane();
        }
      });
    }

    // Call the function to retrieve the files
    getFiles();
  });
});

function loadAfterDane() {

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

}
