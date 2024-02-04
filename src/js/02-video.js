import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

try {
  player.setCurrentTime(
    JSON.parse(localStorage.getItem('videoplayer-current-time'))
  );
} catch (error) {
  switch (error.name) {
    case 'RangeError':
      console.log(
        'The time was less than 0 or greater than the video’s duration'
      );
      break;

    default:
      console.log('An error occured');
      break;
  }
}
const setTime = currentTime => {
  localStorage.setItem('videoplayer-current-time', currentTime.seconds);
};
player.on('timeupdate', throttle(setTime, 1000));
