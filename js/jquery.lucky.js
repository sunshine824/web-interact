/**
 * 抽奖功能函数封装
 */
(function ($) {
    $.fn.lucky = function (options) {
        var settings = $.extend({
            time: 10,    //间隔时间呢
            imgs: [],    //图片头像集合
            count: 1,    //同时抽奖几人
            isStart: true, //是否空格执行
            clickDom: '',   //点击元素
            url: '',   //ajax请求接口
            data: {},  //请求参数
            start: function () {
            },  //开始执行函数
            stop: function () {
            }   //停止执行函数
        }, options)

        var $this = $(this), loop

        if (settings.isStart) {
            //停止所有定时器
            for (var k in arr) {
                clearInterval(arr[k])
            }

            //停止处理函数
            settings.stop(succData, errData)

        } else {
            arr = []
            succData = []
            errData = []
            var current = getStorage('current') ? getStorage('current') : 0;

            //获取中奖用户
            getWiner()

            $this.each(function (i) {
                var $this = $(this)
                if (i >= current && i < current + settings.count) {
                    loop = setInterval(function () {
                        index = Math.floor(Math.random() * settings.imgs.length + 1)
                        //开始处理函数
                        settings.start(index, $this)
                    }, settings.time)
                    arr.push(loop)
                }
            })

            current += settings.count
            setStorage('current', current)
        }

        function getWiner() {
            $.ajax({
                type: 'post',
                url: settings.url,
                dataType: 'json',
                data: settings.data,
                success: function (data) {
                    succData = data
                },
                error: function (err) {
                    errData = err
                }
            })
        }

        function setStorage(key, val) {
            localStorage.setItem(key, val)
        }

        function getStorage(key) {
            return parseInt(localStorage.getItem(key))
        }
    }
})(jQuery)