/**
 * Created by Administrator on 2016/6/28 0028.
 */
$(function(){
    var sectionContainer=$("#section-container");
    var  page1_logo=$(".section-1 .logo"),page1_text=$(".section-1 .text")
    //-----------------------适配--------------------
    var height=$(window).height();
    sectionContainer.find("section .content").css("height",height);
    var scale=height/1334;
    sectionContainer.find(".box").css("transform","scale("+scale+")");
    sectionContainer.find(".box").css("-webkit-transform","scale("+scale+")");
    //---------------------适配结束---------------------
    var audio=$("#audio").get(0);
    var audioBtn=$(".music");
    (function autoPlayAudio1() {
        wx.config({
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
    });
    //Loading禁用touch
    var loadingContainer=$(".loading");
    loadingContainer.on("touchstart",function(e){
        e.preventDefault();
    });

    //-----------------------Preload---------------------
    var load = new createjs.LoadQueue();
    load.installPlugin(createjs.Sound);
    load.on("complete",Complete);
    load.on("progress",Progress);
    load.loadFile({id:"sound", src:"a.mp3"});
    load.loadManifest([
        {id: "myImage1", src:"images/book1.png"},
        {id: "myImage2", src:"images/book2.png"},
        {id: "myImage3", src:"images/book3.png"},
        {id: "myImage4", src:"images/book-bg.png"},
        {id: "myImage5", src:"images/bottom5.png"},
        {id: "myImage6", src:"images/bottom-cloud.png"},
        {id: "myImage7", src:"images/bubble.png"},
        {id: "myImage8", src:"images/buding.png"},
        {id: "myImage9", src:"images/company-profile.png"},
        {id: "myImage10", src:"images/could-1.png"},
        {id: "myImage11", src:"images/could-2.png"},
        {id: "myImage12", src:"images/left-plane.png"},
        {id: "myImage13", src:"images/letter.png"},
        {id: "myImage14", src:"images/logo1.png"},
        {id: "myImage15", src:"images/people.png"},
        {id: "myImage16", src:"images/people-balloon.png"},
        {id: "myImage17", src:"images/right-plane.png"},
        {id: "myImage18", src:"images/star.png"},
        {id: "myImage19", src:"images/star2.png"},
        {id: "myImage20", src:"images/star5-1.png"},
        {id: "myImage21", src:"images/star5-2.png"},
        {id: "myImage22", src:"images/test.png"},
        {id: "myImage23", src:"images/text1.png"},
        {id: "myImage24", src:"images/text-bg.png"}
    ]);
    function Progress(){
        var a=(load.progress*100).toFixed(1);
        loadingContainer.find("p").text(a+"%");
    }
    function Complete() {
        loadingContainer.hide();
        sectionContainer.css("visibility","inherit");
        page1_logo.addClass("bounceIn");
        setTimeout(function(){
            page1_text.addClass("fadeInUpBig")
        },700);

    }

    //---------------------Fullpage------------------
    sectionContainer.fullpage({
        afterLoad:function(anchorLink,index){
            var page2_ballon=$(".section-2 .people-balloon"),page2_txt=$(".section-2 .text-contanier"),page3_book1=$(".section-3 .book-1"),page3_book2=$(".section-3 .book-2"),page3_book3=$(".section-3 .book-3"),page3_p1=$(".section-3 .p-1"),page3_p2=$(".section-3 .p-2"),page3_p3=$(".section-3 .p-3"),page3_p4=$(".section-3 .p-4"),page4_test1=$(".section-4 .test-1"),page4_test2=$(".section-4 .test-2"),page4_p1=$(".section-4 .p-1"),page4_p2=$(".section-4 .p-2"),page4_p3=$(".section-4 .p-3"),page4_p4=$(".section-4 .p-4"),page4_p5=$(".section-4 .p-5"),page5_logo=$(".section-5 .logo"),page5_letter=$(".section-5 .letter");
            var arr=[page1_logo,page1_text,page2_ballon,page3_book1,page3_book2,page3_book3,page3_p1,page3_p2,page3_p3,page3_p4,page4_test1,page4_test2,page4_p1,page4_p2,page4_p3,page4_p4,page4_p5,page5_logo,page5_letter];
            var printTxt="北京乾坤翰林文化传播有限公司是于2006年经北京市新闻出版局批准、北京市工商行政管理局注册成立的一家专业从事教育图书的策划、编辑、出版发行及游戏、动漫、电子阅读、EST（文具、学具、玩具）产品的研究、设计、开发于一体的小学高端教育辅助提供商，注册资金，1亿元。";
            for(var i=0;i<arr.length;i++){
                arr[i].removeClass("bounceIn fadeInUpBig ballon-f1 fadeInRightBig fadeInDown fadeInUp flip width-f");
            }
            console.log(page2_txt.html());
            page2_txt.html(" ");
            if(index==1){
                page1_logo.addClass("bounceIn");
                setTimeout(function(){
                    page1_text.addClass("fadeInUpBig")
                },700);
            }
            if(index==2){
                page2_ballon.addClass("ballon-f1");
                changeText(printTxt,$(".section-2").find(".text-contanier"),16);
            }
            if(index==3){
                page3_book1.addClass("fadeInRightBig");
                setTimeout(function(){
                    page3_book2.addClass("fadeInRightBig");
                },150);
                setTimeout(function(){
                    page3_book3.addClass("fadeInRightBig");
                },300);
                setTimeout(function(){
                    page3_p1.addClass("fadeInDown");
                },450);
                setTimeout(function(){
                    page3_p2.addClass("fadeInDown");
                },600);
                setTimeout(function(){
                    page3_p3.addClass("fadeInDown");
                },750);
                setTimeout(function(){
                    page3_p4.addClass("fadeInDown");
                },900);
            }
            if(index==4){
                page4_test1.addClass("fadeInRightBig");
                setTimeout(function(){
                    page4_test2.addClass("fadeInRightBig");
                },150);
                setTimeout(function(){
                    page4_p1.addClass("fadeInUp");
                },300);
                setTimeout(function(){
                    page4_p2.addClass("fadeInUp");
                },450);
                setTimeout(function(){
                    page4_p3.addClass("fadeInUp");
                },600);
                setTimeout(function(){
                    page4_p4.addClass("fadeInUp");
                },750);
                setTimeout(function(){
                    page4_p5.addClass("fadeInUp");
                },900);
            }
            if(index==5){
                page5_logo.addClass("flip");
                setTimeout(function(){
                    page5_letter.addClass("width-f")
                },300);
            }

        }
    });
    //--------------------Fullpage结束-----------------
    //-----------------------打字机---------------------
    function changeText(cont1,cont2,speed){
        var Ocontent=cont1.split("");
        var i=0;
        function show(){
            if(i<Ocontent.length)
            {cont2.append(Ocontent[i]);i=i+1;}
            else{clearInterval(Otimer);}
        }
        var Otimer=setInterval(show,speed);
    }
    //-------------------打字机结束----------------------
});