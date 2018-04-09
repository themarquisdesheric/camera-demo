const video = document.querySelector('video');
const constraints = {
	audio: false,
	video: {
		facingMode: 'user'
	}
}

navigator.mediaDevices.getUserMedia(constraints)
	.then(stream => {
		try {
			video.srcObject = stream;
		} catch (error) {
			video.src = URL.createObjectURL(stream);
			alert(error);
		}
	})
	.catch(err => {
		console.log(err);
		alert(err);
	});

