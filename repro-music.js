const playlist = [
    {
      title: "La Balada del Diablo",
      artist: "La Renga",
      src: "musica/balada.mp3"
    },
    {
      title: "Tan Solo",
      artist: "Los Piojos",
      src: "musica/tansolo.mp3"
    },
    {
      title: "Jijiji",
      artist: "Los Redondos",
      src: "musica/jijiji.mp3"
    }
  ];
  
  const audio = document.getElementById("audio");
  const title = document.getElementById("title");
  const artist = document.getElementById("artist");
  const playBtn = document.getElementById("play");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const progress = document.getElementById("progress");
  const playlistEl = document.getElementById("playlist");
  
  let currentIndex = 0;
  
  function loadTrack(index) {
    const track = playlist[index];
    title.textContent = track.title;
    artist.textContent = track.artist;
    audio.src = track.src;
    document.querySelectorAll("#playlist li").forEach((li, i) => {
      li.classList.toggle("active", i === index);
    });
  }
  /* controla la reproducción y pausa de */ 
  function togglePlay() {
    if (audio.paused) {
      audio.play();
      playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
    } else {
      audio.pause();
      playBtn.innerHTML = `<i class="fas fa-play"></i>`;
    }
  }
  
  function nextTrack() {
    currentIndex = (currentIndex + 1) % playlist.length;
    loadTrack(currentIndex);
    audio.play();
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
  }
  
  function prevTrack() {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentIndex);
    audio.play();
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
  }
  
  audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;
  });
  
  progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
  });
  
  playBtn.addEventListener("click", togglePlay);
  nextBtn.addEventListener("click", nextTrack);
  prevBtn.addEventListener("click", prevTrack);
  
  playlist.forEach((track, index) => {
    const li = document.createElement("li");
    li.textContent = `${track.title} - ${track.artist}`;
    li.addEventListener("click", () => {
      currentIndex = index;
      loadTrack(currentIndex);
      audio.play();
      playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
    });
    playlistEl.appendChild(li);
  });
  
  loadTrack(currentIndex);
  

  