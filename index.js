const videoClips = document.querySelectorAll(".video-clip");


videoClips.forEach((videoClip) => {
  videoClip.addEventListener('mouseenter', () => {
    videoClip.play();
  });

  videoClip.addEventListener('mouseout', () => {
    videoClip.pause();
  });
});


 function subscribeBtn(event) {
  event.preventDefault();
  const mySubscribe = document.getElementById('subscribe-btn');
  mySubscribe.classList.toggle('subscribe');
  if(mySubscribe.classList.contains('subscribe')){
    mySubscribe.innerText = 'Subscribed';
  }
  else{
    mySubscribe.innerText = 'Subscribe'
  }
}



