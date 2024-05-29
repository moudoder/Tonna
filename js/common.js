$(document).ready(function () {
  if($(window).innerWidth() < 760) {
     $('#assortment-video').attr('poster', 'img/bg/video-1-mob.png');
     $('#straightaway-video').attr('poster', 'img/bg/video-2-mob.png');
     $('#options-video').attr('poster', 'img/bg/video-3-mob.png');
  }
})