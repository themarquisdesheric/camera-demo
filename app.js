const video = document.querySelector('video');
const constraints = {
    audio: false,
    video: {
        facingMode: 'user'
    }
}

navigator.mediaDevices.getUserMedia(constraints)
  .then(stream => video.srcObject = stream)
  .catch(err => {
      console.log(err);
      alert(err);
  });
  
