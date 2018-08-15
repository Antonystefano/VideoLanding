var videoObj;

$(document).ready ( function(){
    autoPlay();
});

function autoPlay(){
    var width = $(window).width();
    var height = $(window).height();

    // fire up the plugin
    videoObj = videojs('video', {
        controls: false,
        height: height,
        muted : true,
        loop : true,
        playsinline : true
      }, function(){
          var player = this;
          window.player = player;
          
          player.on('loadedmetadata', function(){
            resizeVideo();
            videoObj.play();
        })
    });
}

function resizeVideo(){
    if (videoObj == undefined) return;
    
    var width = $(window).width();
    var height = $(window).height();

    videoObj.height(height);

    var videoWidth_org = document.getElementById('video').offsetWidth;
    var videoHeight_org = document.getElementById('video').offsetHeight;
    var screenwidth = height / videoHeight_org * videoWidth_org;
    if (screenwidth < width){
        var d = document.getElementById('video');
        d.style.left = ((width - screenwidth)/2)+'px';
    }else{
        var d = document.getElementById('video');
        d.style.left = '-'+((screenwidth - width)/2)+'px';
    }
}