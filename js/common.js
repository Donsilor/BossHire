$('.drop_down').mouseover(function(){
	$(this).addClass('active');
})

$('.drop_down').mouseout(function(){
	$(this).removeClass('active');
})

$('.language_r .txt').click(function(){
	let txt = $(this).text();
	$('.drop_one .language .txt').text(txt);
	$('.drop_down').removeClass('active');
})

// 搜索筛选
$('.fillter_list').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
})

// 选择条件
$('.select .list').click(function (i) {
	$(this).siblings().children('.fillter_pop').hide();
	if($(this).children('.fillter_pop').css('display') == 'none'){
		$(this).children('.fillter_pop').show();
	}else{
		$(this).children('.fillter_pop').hide();
	}
})
// 点击图标
$('.select .list .icon').click(function () {
	if($(this).parent().hasClass('active')){
		$(this).parent().removeClass('active');
		$(this).children().addClass('icontriangle-bottom').removeClass('iconquxiao');
		$(this).siblings('.fillter_pop').hide();
		return false;
	}
})
// 选中一个选项
$('.select .list_r').click(function () {
	$('.fillter_pop').hide();
	$(this).parent().parent().addClass('active');
	$(this).parent().siblings('.icon').children().removeClass('icontriangle-bottom').addClass('iconquxiao');
	$(this).parent().siblings('.name').text($(this).text());
	return false;
})
// 清楚所有选项
$('.select .clear').click(function () {
	$('.select .list').removeClass('active');
	$('.select .list i').removeClass('iconquxiao').addClass('icontriangle-bottom');
})
