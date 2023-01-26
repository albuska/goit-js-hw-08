import Player from '@vimeo/player';
import throttle from 'lodash.throttle'; 

const iframeRef = document.getElementById('vimeo-player');

const player = new Player(iframeRef);   

player.on('timeupdate', throttle(data => {
    localStorage.setItem("videoplayer-current-time", data.seconds)   
}, 1000)
)
const currentTime = Number(localStorage.getItem("videoplayer-current-time"));

player.setCurrentTime(currentTime).then(function(seconds) {
  
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
          
            break;
        default:
     
            break;
    }
});

// 2 СПОСІБ
// const VIDEOPLAYER_CURRENT_TIME = "videoplayer-current-time";

// player.on(
//     'timeupdate',
//     throttle(data => {
//       localStorage.setItem(
//         VIDEOPLAYER_CURRENT_TIME,
//         JSON.stringify(data.seconds)
//       );
//     }, 1000)
//   );

// 3 СПОСІБ
// const onPlay = function(data) {
//     localStorage.setItem("videoplayer-current-time", data.seconds);
// }
   
// player.on('timeupdate', throttle(onPlay, 1000));  
