/* 轮播图左右翻页按钮淡入淡出效果 */
var $bannerControl = $('.carousel-control-prev span,.carousel-control-next span');
var $banner = $('#banner');
$banner.hover(function(){
  $bannerControl.stop().fadeIn();
},function(){
  $bannerControl.stop().fadeOut();
});



/* 房源选项卡逻辑处理 */
var curHouseIndex = 0;      //当前显示选项菜单的index
var $houseMenuItem = $('.house_resource > .content > .nav_list > li');  //选项卡各个菜单
var $houseListItem = $('.house_resource > .content > .list_container > ul');  //选项卡菜单对应内容

  /* 选项卡菜单点击事件 */
$houseMenuItem.click(function(){
  let newHouseIndex = $(this).index();   //取得点击菜单的index
  if(newHouseIndex === curHouseIndex) return;  //如果点击的是当前正在显示的菜单则什么都不做
  $houseMenuItem.eq(curHouseIndex).removeClass('active');  //把active类转移到点击的菜单上
  $houseMenuItem.eq(newHouseIndex).addClass('active');
  $houseListItem.eq(curHouseIndex).removeClass('active');
  $houseListItem.eq(newHouseIndex).addClass('active');
  curHouseIndex = newHouseIndex;  //更新当前显示菜单的index
});


/* 新闻资讯导航菜单逻辑处理 */
var curNewsIndex = 0;      //当前显示选项菜单的index
var $newsMenuItem = $('.news > .content > .nav_bar > ul > li');  //选项卡各个菜单
var $newsListItem = $('.news > .content > .list_item > ul');   //选项卡菜单对应中间内容
var $newsListDetails = $('.news > .content > .details > div');   //选项卡菜单对应右边内容

  /* 选项卡菜单点击事件 */
$newsMenuItem.click(function(){
  let newNewsIndex = $(this).index();   //取得点击菜单的index
  if(newNewsIndex === curNewsIndex) return;  //如果点击的是当前正在显示的菜单则什么都不做
  if(newNewsIndex === 3) return;  //如果点击"查看更多"选项，则什么都不做
  $newsMenuItem.eq(curNewsIndex).removeClass('active');  //把active类转移到点击的菜单上
  $newsMenuItem.eq(newNewsIndex).addClass('active');
  $newsListItem.eq(curNewsIndex).removeClass('active');
  $newsListItem.eq(newNewsIndex).addClass('active');
  $newsListDetails.eq(curNewsIndex).removeClass('active');
  $newsListDetails.eq(newNewsIndex).addClass('active');
  curNewsIndex = newNewsIndex;  //更新当前显示菜单的index
});