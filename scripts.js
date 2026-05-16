async function loadVideos(){
  try{
    const res = await fetch('videos.json');
    if(!res.ok) throw new Error('Could not load videos.json')
    const videos = await res.json();
    renderVideos(videos)
  }catch(e){
    document.getElementById('videos').innerHTML = `<p style="padding:18px;color:#900">Failed to load videos: ${e.message}</p>`
  }
}

function toYouTubeEmbed(url){
  try{
    const u = new URL(url);
    if(u.hostname.includes('youtu.be')) return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    if(u.hostname.includes('youtube.com')){
      const v = u.searchParams.get('v');
      if(v) return `https://www.youtube.com/embed/${v}`;
    }
  }catch(e){}
  return null;
}

function renderVideos(videos){
  const container = document.getElementById('videos');
  container.innerHTML = '';
  videos.forEach((vid, idx)=>{
    const card = document.createElement('section');
    card.className = 'video-card';

    const serial = document.createElement('div');
    serial.className = 'video-meta';
    serial.innerHTML = `<div class="video-serial">#${(idx+1).toString().padStart(2,'0')}</div><h2 class="video-title">${escapeHtml(vid.title)}</h2>`;

    const embedContainer = document.createElement('div');
    const yt = toYouTubeEmbed(vid.url);
    if(yt){
      const iframe = document.createElement('iframe');
      iframe.src = yt;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      embedContainer.appendChild(iframe);
    } else {
      const video = document.createElement('video');
      video.controls = true;
      video.src = vid.url;
      embedContainer.appendChild(video);
    }

    const footer = document.createElement('div');
    footer.className = 'video-footer';
    footer.innerHTML = `<div>${escapeHtml(vid.copyright||'')}</div><div>Developed by ${escapeHtml(vid.developed_by||'')}</div>`;

    card.appendChild(serial);
    card.appendChild(embedContainer);
    card.appendChild(footer);
    container.appendChild(card);
  })
}

function escapeHtml(s){
  if(!s) return '';
  return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')
}

loadVideos();
