/**
 * 抽奖功能函数封装
 */
(function ($) {
    $.fn.lucky = function (options) {
        var settings = $.extend({
            time: 10,    //间隔时间呢
            imgs: [],    //图片头像集合
            count: 1,    //同时抽奖几人
            isStart: false, //是否空格执行
            clickDom:'',   //点击元素
            start: function () {
            },  //开始执行函数
            stop: function () {
            }   //停止执行函数
        }, options)

        var $this = $(this), loop, arr = []

        //空格开始抽奖
       /* $(window).keyup(function (e) {
            e = (event) ? event : window.event;
            if (e.keyCode === 32) {
                play()
            }
        })*/

        //点击开始抽奖
      /*  settings.clickDom.click(function () {
            play()
        })*/

        /**
         * 开始抽奖
         */
        function play() {
            if (settings.isStart) {
                //停止所有定时器
                for(var k in arr){
                    clearInterval(arr[k])
                }

                //停止处理函数
                settings.stop()

                settings.isStart = false
            } else {
                arr=[]
                $this.each(function (i) {
                    var $this = $(this)
                    if (i < settings.count) {
                        loop = setInterval(function () {
                            var index = Math.floor(Math.random()*settings.imgs.length+1)
                            //开始处理函数
                            settings.start(index, $this)

                        }, settings.time)

                        arr.push(loop)
                    }
                })
                settings.isStart = true
            }
        }

        play()
    }
})(jQuery)