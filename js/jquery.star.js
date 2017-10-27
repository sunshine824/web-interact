(function ($) {
    $.fn.star = function (options) {
        var stars = $.extend({
            count: 10, //爱心个数
            initBottom: 0,  //初始bottom位置
            initLeft: 100,  //初始left位置
            maxHeight: 800,  //最大上浮高度
            maxWidth: 300,  //最大上浮宽度
            opacity: 0,   //透明度
            time: 3000,   //消失时间
        }, options)

        var count = 0,
            $this = $(this),
            loop,
            imgs = ['heart.png', 'heart.png', 'heart.png', 'heart.png', 'heart.png', 'chick.png', 'elephant.png', 'hippo.png', 'koala.png', 'owl.png']

        function play() {
            count++
            if (count >= stars.count) {
                clearInterval(loop)
            }
            var el = $(`<p class="icon-img"><img src="../../images/test/${imgs[randomFn(imgs.length)]}" style="width:100%"/></p>`)
            el.css({
                'position': 'absolute',
                'bottom': stars.initBottom,
                'left': stars.initLeft,
                'width': '45px',
                'opacity': 1
            }).stop().animate({
                'left': randomFn(stars.maxWidth),
                'bottom': randomFn(stars.maxHeight),
                'opacity': 0.5
            }, 2000, function () {
                el.remove()
            })

            $this.append(el)
        }

        loop = setInterval(function () {
            play()
        }, stars.time)

        function randomFn(max) {
            return Math.floor(Math.random() * max)
        }
    }
})(jQuery)