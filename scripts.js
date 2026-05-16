fetch("videos.json")
  .then(response => response.json())
  .then(videos => {

    console.log(videos);

    const container = document.getElementById("video-container");

    videos.forEach(video => {

      const iframe = `
        <div style="margin-bottom:30px;">

          <h2>${video.title}</h2>

          <iframe
            src="${video.url}"
            width="100%"
            height="500"
            allowfullscreen>
          </iframe>

        </div>
      `;

      container.innerHTML += iframe;
    });

  })
  .catch(error => {
    console.log("Failed to load videos:", error);
  });
