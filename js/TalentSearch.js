
// 搜索弹窗一中的选项
$('.search .type_two').click(function () {
	$('.search_pop_one').hide();
	$('.search_pop_one .pop_three').hide();
	$('.search_pop_two').css('display') == 'none' ? $('.search_pop_two').show() : $('.search_pop_two').hide();
});

// 点击搜索一中的取消
$('.search .type i').click(function () {
	if($(this).hasClass('iconquxiao')){
		$(this).parent().removeClass('active');
		$(this).removeClass('iconquxiao').addClass('icontriangle-bottom');
		$('.search_pop_two').hide();
		$('.search_pop_one').hide();
		if($(this).parent().hasClass('type_one')){
			$('.search_pop_one .list').removeClass('active');
			$(this).siblings().text('Job type');
		}else{
			$('.search_pop_two .list').removeClass('active');
			$(this).siblings().text('Industry');
		}
		return false;
	}
})

// 搜索弹窗一中的选项
$('.search_pop_two .list').mouseover(function () {
	$(this).addClass('active').siblings().removeClass('active');
})
$('.search_pop_two .list').click(function () {
	$(this).parent().hide();
	$('.search .type_two').addClass('active');
	$('.search .type_two .text').text($(this).text());
	$('.search .type_two .iconfont').removeClass('icontriangle-bottom').addClass('iconquxiao');
})

// 搜索弹窗二中的选项
$('.search .type_one').click(function () {
	$('.search_pop_one').css('display') == 'none' ? $('.search_pop_one').show() : $('.search_pop_one').hide();
	$('.search_pop_two').hide();
});
$('.search_pop_one .row .list').mouseover(function () {
	$(this).addClass('active').siblings().removeClass('active');
})
$('.search_pop_one .pop_one').mouseover(function () {
	$('.search_pop_one .pop_three').hide();
})
$('.search_pop_one .pop_two').mouseover(function () {
	$('.search_pop_one .pop_three').show();
})
$('.search_pop_one .pop_three').click(function () {
	$('.search_pop_one').hide();
	$('.search .type_one').addClass('active');
	$('.search .type_one .iconfont').removeClass('icontriangle-bottom').addClass('iconquxiao');
	$('.type_one .job_type').text($(this).text());
})


// 筛选更多
$('.fillter_box .more').click(function () {
	if ($(this).hasClass('active') == false) {
		$(this).addClass('active');
		$(this).children('.icon').children().addClass('iconquxiao').removeClass('icontriangle-bottom');
		$('.fillter .fillter_r').css('height','auto')
	} else {
		$(this).removeClass('active');
		$(this).children('.icon').children().addClass('icontriangle-bottom').removeClass('iconquxiao');
		$('.fillter .fillter_r').css('height','40px')
	}
});
	// 点击icon选择人才
$('.talent_list .icon').click(function(){
	$(this).parent().hasClass('active') ? $(this).parent().removeClass('active') : $(this).parent().addClass('active');
})
	// 点击图片选择人才
$('.talent_list .img_box').click(function(){
	$(this).parent().parent().hasClass('active') ? $(this).parent().parent().removeClass('active') : $(this).parent().parent().addClass('active');
})
	// 选中Have avatar
$('.condition .urgent').click(function(){
	$(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active');
})
	// 选择人才选择全部
$('.condition .list').click(function(){
	if($(this).hasClass('active') == false){
		$(this).addClass('active');
		$('.talent_list').addClass('active');
	}else{
		$(this).removeClass('active');
		$('.talent_list').removeClass('active');
	}
})

// 排序方式
$('.referred .smart').click(function () {
	if($(this).children('.smart_r').hasClass('active') == false){
		$(this).children('.smart_r').addClass('active');
	}else{
		$(this).children('.smart_r').removeClass('active');
	}
})

$('.smart_list').click(function () {
	$(this).parent().addClass('active');
	$('.smart .text').text($(this).text())
})