// 搜索弹窗选项

$('.search .type').click(function () {
    $('.search_pop').css('display') == 'none' ? $('.search_pop').show() : $('.search_pop').hide();
});

// 点击搜索中的取消
$('.search .type i').click(function () {
    $('.search_pop').hide();
    $('.search_pop .list').removeClass('active');
    if($(this).hasClass('iconquxiao')){
        $('.search .type').removeClass('active');
        $('.search .type .iconfont').removeClass('iconquxiao').addClass('icontriangle-bottom');
        $(this).siblings().text('Industry');
        return false;
    }
})

// 搜索弹窗中的选项
$('.search_pop .list').mouseover(function () {
    $(this).addClass('active').siblings().removeClass('active');
})
$('.search_pop .list').click(function () {
    $(this).parent().hide();
    $('.search .type').addClass('active');
    $('.search .type .text').text($(this).text());
    $('.search .type .iconfont').removeClass('icontriangle-bottom').addClass('iconquxiao');
})

// 搜索下面单选框选择
$('.content .list').click(function () {
    $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');
});
