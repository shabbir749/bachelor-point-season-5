fetch("videos.json")
  .then(response => response.json())
  .then(videos => {

    const container = document.getElementById("video-container");

    videos.forEach(video => {

      container.innerHTML += `
        <div class="video-box">

          <h2>${video.title}</h2>

          <iframe
            src="${video.url}"
            width="100%"
            height="500"
            frameborder="0"
            allowfullscreen>
          </iframe>

        </div>
      `;
    });

  })
  .catch(error => {
    console.log("Error loading videos:", error);
  });
