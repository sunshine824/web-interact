/**
 * 自适应高度
 */
function autoTop() {
    var totHeight=$('.bg').height(),
        headHeight=$('.header').outerHeight(true),
        mainHeight=$('.main').height()

    $('.main').css({marginTop:(totHeight-headHeight-mainHeight)/2+'px'})
}

/**
 * 自动生成随机数
 * @param max 最大随机数
 * @returns {number}
 */
function random(max) {
    return Math.floor(Math.random() * max + 1)
}

