(function () {
    var _title = '乾坤！';
    var _desc = '乾坤翰林';
    var _link = 'http://wjs.qkhl.net';
    var _imgUrl = 'http://topic.xcar.com.cn/201403/ad_q3/pic/banner.jpg';
    var url = window.location.href.split("#")[0];
    var signPackage;
    var info = {
        appId: '',
        secret: '',
        url: url
    };
    wx.config({
        appId:"wxae2c36b0cba642a0",
        timestamp:"",
        nonceStr:"",
        signature:"",
        jsApiList: [
            // 所有要调用的 API 都要加到这个列表中
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'hideMenuItems',
            'showMenuItems',
            'hideAllNonBaseMenuItem',
            'showAllNonBaseMenuItem',
            'getNetworkType',
            'openLocation',
            'getLocation',
            'hideOptionMenu',
            'showOptionMenu',
            'closeWindow'
        ]
    });

    wx.ready(function () {
        // 在这里调用 API
        // 2. 分享接口
        // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
        wx.onMenuShareAppMessage({
            title: _title,
            desc: _desc,
            link: _link,
            imgUrl: _imgUrl,
            trigger: function (res) {
                //alert('用户点击发送给朋友');
            },
            success: function (res) {
                //alert('已分享');
            },
            cancel: function (res) {
                //alert('已取消');
            },
            fail: function (res) {
                //alert(JSON.stringify(res));
            }
        });


        // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口

        wx.onMenuShareTimeline({
            title: _title,
            link: _link,
            imgUrl: _imgUrl,
            trigger: function (res) {
                // alert('用户点击分享到朋友圈');
            },
            success: function (res) {
                // alert('已分享');
            },
            cancel: function (res) {
                // alert('已取消');
            },
            fail: function (res) {
                // alert(JSON.stringify(res));
            }
        });
    });	//end of wx.ready

})();
