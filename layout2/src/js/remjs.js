export const remjs = function () {
    function changeFontSize() {//根据设计图来确定版面：750，font-size设置为100，要同个rem的值，就需更改font-size的值
        var designWidth = 750;
        var docElement = document.documentElement;
        var deviceWidth = docElement.clientWidth;
        if (deviceWidth > designWidth) deviceWidth = designWidth;
        var fontSize = deviceWidth * 100 / designWidth;
        docElement.style.fontSize = fontSize + "px";
    }
    window.addEventListener(window.orientationchage ? 'orientationchage' : 'resize', changeFontSize, false)
    changeFontSize();
}



