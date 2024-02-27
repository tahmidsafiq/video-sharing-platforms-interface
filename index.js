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
    mySubscribe.style.transition = "0.5s";
    mySubscribe.innerText = 'Subscribed';
  }
  else{
    mySubscribe.innerText = 'Subscribe'
  }
}


function btnFunction(clickedElement) {
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const likeShare = document.querySelectorAll('.likeShare');

  likeShare.forEach(element => {
    element.style.color = "";
    element.style.border = "";
  });

  clickedElement.style.color = "crimson";
  clickedElement.style.transition = "0.5s";

  if (windowWidth > 1250) { 
    clickedElement.style.border = "1px solid crimson";
  }
}






