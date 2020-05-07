$(function(){
  // 鼠标移入
  // params: 触发元素，内容元素，类名
  function mouseEnter(btn, cont, className) {

    $(btn).each(function (i) {

      var that = this;

      $(that).mouseenter(function () {

        $(that).addClass(className).siblings().removeClass(className);
        $($(cont)[i]).addClass(className).siblings().removeClass(className);

      })

    })

  }
  mouseEnter('.jg-head li', '.jg-bd li', 'on');
});