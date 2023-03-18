// Load the Google Drive API client library
gapi.load('client', function() {
  // Initialize the API client with your API key
  gapi.client.init({
    apiKey: 'AIzaSyDC0_hBFv3L8057WG-zqygdMJH4w1Hq9hs',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
  }).then(function() {
    // Retrieve the file metadata for PSD files in the public folder
    gapi.client.drive.files.list({
      q: "'1m-Aw3f_8ng1KoF1SzSfOWQ_BDuncK9ZJ' in parents and mimeType='image/x-photoshop'",
      fields: 'nextPageToken, files(id, name, thumbnailLink, webContentLink)'
    }).then(function(response) {
      var files = response.result.files;
      // Iterate through the files and display them on your web page
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var url = file.webContentLink;
        var name = file.name;
        var thumbnailUrl = file.thumbnailLink;
        if(!thumbnailUrl)thumbnailUrl="https://abdul-karim-mia.github.io/hostingwebfiles/bmf/img/no-data-concept-illustration_114360-536.webp";
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
        img.setAttribute('src', thumbnailUrl);
        //img.setAttribute('data-lity','');
        img.setAttribute('loading','lazy')
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
    });
  });
});
