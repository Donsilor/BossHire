// 工作类型（三个的）选项卡切换
$('.content .type_i').click(function () {
	$(this).addClass('on').siblings().removeClass('on');

	var i = $(this).index();
	$('.job_box').eq(i).show().siblings().hide();
});

// 工作分类（Job Classification）鼠标移入移出样式切换，显示弹窗
var i;
$('.classify_box .classify_list').mouseover(function(){
	i = $(this).index();
	$(this).addClass('active');
	$('.classify_box .isNone').show();
})
$('.classify_box .classify_list').mouseout(function(){
	$(this).removeClass('active')
	$('.classify_box .isNone').hide()
})
$('.classify_box .isNone').mouseover(function(){
	$('.classify_box .isNone').show();
	$('.classify_box .classify_list').eq(i).addClass('active');
})
$('.classify_box .isNone').mouseout(function(){
	$('.classify_box .isNone').hide()
	$('.classify_box .classify_list').eq(i).removeClass('active');
})

// 全部工作（All Jobs）点击样式切换
$('.box .classify_list').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	$(this).parent().siblings().children().removeClass('active');
})
