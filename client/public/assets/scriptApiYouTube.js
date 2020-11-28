  // 2. This code loads the IFrame Player API code asynchronously.
  // var tag = document.createElement('script');
  // tag.src = "https://www.youtube.com/iframe_api";
  // var firstScriptTag = document.getElementsByTagName('script')[0];
  // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var playerInfoList = [{
    id: 'player1',
    height: '390',
    width: '640',
    videoId: '95UFbhFpUUs'
}, {
    id: 'player2',
    height: '390',
    width: '640',
    videoId: 'AZh-Ih_CnUk'
}, {
    id: 'player3',
    height: '390',
    width: '640',
    videoId: 'OgqlCZe9r9w'
}, {
    id: 'player4',
    height: '390',
    width: '640',
    videoId: 'GU6iPW561Vg'
}, {
    id: 'player5',
    height: '390',
    width: '640',
    videoId: 'ChqdCudA1sM'
}, {
    id: 'player6',
    height: '390',
    width: '640',
    videoId: 'cd3bke9vdHw'
}, {
    id: 'player7',
    height: '390',
    width: '640',
    videoId: 'cd3bke9vdHw'
}, {
    id: 'player8',
    height: '390',
    width: '640',
    videoId: 'cd3bke9vdHw'
}, {
    id: 'player9',
    height: '390',
    width: '640',
    videoId: 'UQbknNrqxOw'
}];

let playersLen = playerInfoList.length;
console.log(playersLen)

// https://jsfiddle.net/wzalazar/72NYY/
function onYouTubeIframeAPIReady() {
    if (typeof playerInfoList === 'undefined') return;
    
    for (var i = 0; i < playerInfoList.length; i++) {
        var curplayer = createPlayer(playerInfoList[i]);
        players[i] = curplayer;
    }
}

var players = new Array();

function createPlayer(playerInfo) {
    return new window.YT.Player(playerInfo.id, {
        height: playerInfo.height,
        width: playerInfo.width,
        videoId: playerInfo.videoId,
    });
}
  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }
  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data ==  window.YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    let player;
    player.stopVideo();
  }