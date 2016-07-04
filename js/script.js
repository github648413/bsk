/**
 * Created by Administrator on 2016/6/21 0021.
 */
$(function(){
    var sectionContainer=$("#section-container");
    var page1_logo=$(".section-1 .logo-big"),page1_text=$(".section-1 .text-1");
    //Parallax
    sectionContainer.find(".box").parallax({});
    //ParallaxEnd
    var audio=$("#audio").get(0);
    var audioBtn=$(".music");
    (function autoPlayAudio1() {
        wx.config({
            // 配置信息, 即使不正确也能使用 wx.ready
            debug: false,
            appId: '',
            timestamp: 1,
            nonceStr: '',
            signature: '',
            jsApiList: []
        });
        wx.ready(function() {
            document.getElementById('audio').play();
        });
    })();
    audioBtn.addClass("music-f");
    //Loading禁用touch
    var loadingContainer=$(".loading");
    loadingContainer.on("touchstart",function(e){
        //e.preventDefault();
    });

//-----------------------适配--------------------
    var height=$(window).height();
    sectionContainer.find("section .content").css("height",height);
    var scale=height/1334;
    sectionContainer.find(".box").css("transform","scale("+scale+")");
    sectionContainer.find(".box").css("-webkit-transform","scale("+scale+")");
//-----------------------适配---------------------

//-----------------------Preload---------------------
    var load = new createjs.LoadQueue();
    load.installPlugin(createjs.Sound);
    load.on("complete",Complete);
    load.on("progress",Progress);
    load.loadFile({id:"sound", src:"a.mp3"});
    load.loadManifest([
        {id: "myImage1", src:"images/bg3.jpg"},
        {id: "myImage2", src:"images/bg4.jpg"},
        {id: "myImage3", src:"images/bg5.jpg"},
        {id: "myImage4", src:"images/book1.png"},
        {id: "myImage5", src:"images/book2.png"},
        {id: "myImage6", src:"images/book3.png"},
        {id: "myImage7", src:"images/c1.png"},
        {id: "myImage8", src:"images/c2.png"},
        {id: "myImage9", src:"images/ks1.png"},
        {id: "myImage10", src:"images/ks2.png"},
        {id: "myImage11", src:"images/ks3.png"},
        {id: "myImage12", src:"images/logo3.png"},
        {id: "myImage13", src:"images/logo-big.png"},
        {id: "myImage14", src:"images/logo-big-bottom.png"},
        {id: "myImage15", src:"images/logo-small.png"},
        {id: "myImage16", src:"images/photo2-1.png"},
        {id: "myImage17", src:"images/photo2-2.png"},
        {id: "myImage18", src:"images/star1.png"},
        {id: "myImage19", src:"images/star2.png"},
        {id: "myImage20", src:"images/star3.png"},
        {id: "myImage21", src:"images/star4.png"},
        {id: "myImage22", src:"images/test1.png"},
        {id: "myImage23", src:"images/test2.png"},
        {id: "myImage24", src:"images/test3.png"},
        {id: "myImage25", src:"images/text1.png"},
        {id: "myImage26", src:"images/text3-1-bg.png"},
        {id: "myImage27", src:"images/text3-2-bg.png"},
        {id: "myImage28", src:"images/text4-1-bg.png"},
        {id: "myImage29", src:"images/text5-1-bg.png"},
        {id: "myImage30", src:"images/bottom3.png"},
        {id: "myImage31", src:"images/bottom4.png"},
        {id: "myImage32", src:"images/bottom5.png"},
        {id: "myImage33", src:"images/earth.png"},
    ]);
    function Progress(){
        var a=(load.progress*100).toFixed(1);
        loadingContainer.find("p").text(a+"%");
    }
    function Complete() {
        loadingContainer.hide();
        sectionContainer.css("visibility","inherit");
        page1_logo.addClass("fadeInDownBig");
        setTimeout(function(){
            page1_text.addClass("rubberBand")
        },800);

    }

//-----------------------Fullpage---------------------
    sectionContainer.fullpage({
        afterLoad:function(anchorLink,index){
            var page2_text1=$(".section-2 .text-1"),page2_text2=$(".section-2 .text-2"),page2_text3=$(".section-2 .text-3"),page2_text4=$(".section-2 .text-4"),page2_left=$(".section-2 .photo-2-1"),page2_right=$(".section-2 .photo-2-2"),page3_text1=$(".section-3 .text-3-1"),page3_text2=$(".section-3 .text-3-2"),page3_text3=$(".section-3 .text-3-3"),page3_text4=$(".section-3 .text-3-4"),page3_book1=$(".section-3 .book-1"),page3_book3=$(".section-3 .book-3"),page4_text1=$(".section-4 .text-4-1"),page4_text2=$(".section-4 .text-4-2"),page4_text3=$(".section-4 .text-4-3"),page4_text4=$(".section-4 .text-4-4"),page4_book1=$(".section-4 .test-1"),page4_book2=$(".section-4 .test-2"),page4_book3=$(".section-4 .test-3"),page5_text1=$(".section-5 .text-5-1"),page5_text2=$(".section-5 .text-5-2"),page5_text3=$(".section-5 .text-5-3"),page5_text4=$(".section-5 .text-5-4"),page5_text5=$(".section-5 .text-5-5"),page5_book1=$(".section-5 .ks-1"),page5_book2=$(".section-5 .ks-2"),page5_book3=$(".section-5 .ks-3");
            var arr=[page1_logo,page1_text,page2_text1,page2_text2,page2_text3,page2_text4,page2_left,page2_right,page3_text1,page3_text2,page3_text3,page3_text4,page3_book1,page3_book3,page4_text1,page4_text2,page4_text3,page4_text4,page4_book1,page4_book2,page4_book3,page5_text1,page5_text2,page5_text3,page5_text4,page5_text5,page5_book1,page5_book2,page5_book3];
            for(var i=0;i<arr.length;i++){
                arr[i].removeClass("fadeInDownBig rubberBand fadeInDown rotateInDownLeft rotateInDownRight fadeInUp rightRotate leftRotate fadeInLeftBig");
            }
            if(index==1){
                page1_logo.addClass("fadeInDownBig");
                setTimeout(function(){
                    page1_text.addClass("rubberBand")
                },800)
            }
            if(index==2){
                page2_text1.addClass("fadeInDown");
                setTimeout(function(){
                    page2_text2.addClass("fadeInDown")
                },250);
                setTimeout(function(){
                    page2_text3.addClass("fadeInDown")
                },500);
                setTimeout(function(){
                    page2_text4.addClass("fadeInDown")
                },750);
                setTimeout(function(){
                    page2_left.addClass("rotateInDownLeft");
                    page2_right.addClass("rotateInDownRight");
                },900)
            }
            if(index==3){
                page3_text1.addClass("fadeInDown");
                setTimeout(function(){
                    page3_text2.addClass("fadeInDown");
                },250);
                setTimeout(function(){
                    page3_text3.addClass("fadeInUp");
                    page3_text4.addClass("fadeInUp");
                },500);
                setTimeout(function(){
                    page3_book1.addClass("rightRotate");
                    page3_book3.addClass("leftRotate");
                },750)
            }
            if(index==4){
                page4_text1.addClass("fadeInDown");
                setTimeout(function(){
                    page4_text2.addClass("fadeInDown");
                },250);
                setTimeout(function(){
                    page4_text3.addClass("fadeInUp");
                    page4_text4.addClass("fadeInUp");
                },500);
                setTimeout(function(){
                    page4_book1.addClass("fadeInLeftBig");
                },750);
                setTimeout(function(){
                    page4_book2.addClass("fadeInLeftBig");
                },900);
                setTimeout(function(){
                    page4_book3.addClass("fadeInLeftBig");
                },1050);
            }
            if(index==5){
                page5_text1.addClass("fadeInDown");
                setTimeout(function(){
                    page5_text2.addClass("fadeInDown");
                },250);
                setTimeout(function(){
                    page5_text3.addClass("fadeInUp");
                    page5_text4.addClass("fadeInUp");
                    page5_text5.addClass("fadeInUp");
                },500);
                setTimeout(function(){
                    page5_book1.addClass("fadeInLeftBig");
                },750);
                setTimeout(function(){
                    page5_book2.addClass("fadeInLeftBig");
                },900);
                setTimeout(function(){
                    page5_book3.addClass("fadeInLeftBig");
                },1090);
            }
        }
    });

    var a=false;
    audioBtn.on("click",function(){
        if(a==false){
            audio.pause();
            $(this).removeClass("music-f");
            a=true;
            console.log("pause")
        }
        else{
            audio.play();
            $(this).addClass("music-f");
            a=false;
            console.log("play")
        }
    })
});