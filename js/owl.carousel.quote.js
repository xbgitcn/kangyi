/*
 * Copyright (c) 2020.
 * 作者：sky
 * 邮箱：ztianb@foxmail.com
 * 日期：2017-03-07 11:49
 * ---
 * 项目：kangyi
 * 类名：owl.carousel.quote.js
 * 路径：D:/ideaworkspace/MyWebSite/kangyi/web/js/owl.carousel.quote.js
 * Copyright (c) 2020.
 */

// HBD banner
$(document).ready(function() {
$("#owl-banner").owlCarousel({
autoPlay : 3000,
stopOnHover : true,
navigation : true,
pagination : true,
paginationNumbers : true,
slideSpeed : 300,
paginationSpeed : 400,
singleItem:true,
autoHeight : true,
//Mouse Events
dragBeforeAnimFinish : false,
mouseDrag : false,
touchDrag : false
});
});
// HBD team
$(document).ready(function() {
$("#owl-team").owlCarousel({
navigation : true,
pagination : false,
slideSpeed : 300,
paginationSpeed : 400,
singleItem:true,
autoHeight : true,
lazyLoad : true,
//Mouse Events
dragBeforeAnimFinish : false,
mouseDrag : false,
touchDrag : false
});
});