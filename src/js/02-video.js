import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));



function onPlay(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));

}
const secondsSaved = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime((JSON.parse(secondsSaved))).then(function(seconds) {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});
export default throttle;