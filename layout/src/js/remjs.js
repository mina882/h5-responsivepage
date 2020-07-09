export const remjs = function () {
    function changeScale() {
        var scale = 1 / devicePixelRatio;
        document.querySelector('meta[name="viewport"]').setAttribute("content", `width=device-width,initial-scale=${scale},maximum-scale=${scale}, minimum-scale=${scale},user-scalable=no`);
        var doc = document.documentElement;
        var deviceWidth = scale == 1 ? 750 : doc.clientWidth;
        doc.style.fontSize = deviceWidth / 10 + 'px';
    }

    window.addEventListener(window.orientationchage ? 'orientationchage' : 'resize', changeScale, false);
    changeScale();
}



