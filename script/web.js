(function($){

    $('.main-btn')
    .mouseenter(function(){
        $('.sb-bg,.sub').stop().slideDown(400)
        $('.main-btn').removeClass('addhover')
        $(this).addClass('addhover')
    })
    .focusin(function(){
        $('.sb-bg,.sub').stop().slideDown(400)
        $('.main-btn').removeClass('addhover')
        $(this).addClass('addhover')
    });
    
    $('#nav').mouseleave(function(){
        $('.sb-bg,.sub').stop().slideUp(400)
        $('.main-btn').removeClass('addhover')
    })

    var cnt=0
    function slidefn(){
        cnt++;
        $('.slide-wrap').animate({left:-1200*cnt},1000,function(){
            if(cnt>2){cnt=0} 
            $('.slide-wrap').animate({left:-1200*cnt},0)
        })
    }
    setInterval(slidefn,3000)



    // 팝업창 열기
    // 공지사항 첫번째 줄 클릭 팝업창 열기
    // $('.notice-list li').eq(0).click(function(){
    //     $('#popup').stop().show();
    // });

    // 공지사항 첫번째 줄 링크문자만 클릭 팝업창 열기
    // 첫번째 줄 자식요소중 a링크만 클릭
    $('.notice-list li').eq(0).children('a').click(function(){
        $('#popup').stop().show();
    });


    // 팝업창 닫기
    $('.close-btn').click(function(){
        $('#popup').stop().hide();
    });



    //패밀리사이트 :  select 상자는 체인지 이벤트
    $('#family').change(function(){
        // console.log( $(this).val() ); //선택 항목의 값이 출력
        // location.href = 'http://www.naver.com';

         location.href = $(this).val();
    });

    $('#family').click(function(){
         $('#familyForm').toggleClass('addafter');
    });


})(jQuery);