(function() {

function getPlayerHTML(style) {
    var j = document.createElement('div');
    j.innerHTML = '<audio controls="controls" src="http://208.76.152.74:8000/;stream.nsv&type=mp3" style="' + style + '"></audio>';
    return j;
}

var e = document.querySelector('img[onclick][src*="listen-live.png"]');
if (e) {
    e.insertAdjacentElement('beforeBegin', getPlayerHTML("width: 270px; margin-bottom: 1em;"));
}
else {
    e = document.querySelector('.right-panel');
    if (e) {
        e.insertBefore(getPlayerHTML("width: 260px; margin-left: 20px; margin-top: 2em;"), e.firstChild);
    }
}

})();
