$(window).on('load', function(){
    console.log('ロードイベントが発生しました');
})
$(function() {
    $(window).on('scroll', () => {
            console.log('スクロールイベントが発生しました');
        }
    )
})
