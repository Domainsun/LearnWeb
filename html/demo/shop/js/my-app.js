// 初始化 app
var myApp = new Framework7({
    init: false //禁用App的自动初始化功能
});
 
// 为便于使用，自定义DOM库名字为$$
var $$ = Dom7;

var myApp = new Framework7({
  modalTitle: "提示",
  modalButtonOk: "确定",
  modalButtonCancel: "取消",
  modalPreloaderTitle: "加载中...",
  modalUsernamePlaceholder: "用户名",
  modalPasswordPlaceholder: "密码"
}); 

// 添加首页视图
var mainView = myApp.addView('.view-main', {
  // 让这个视图支持动态导航栏
  dynamicNavbar: true,
});

/****以下为各页面JS||以下为各页面JS****/

/*----------------------------首页--------------------------*/
  /*首页二级菜单显示隐藏*/
 myApp.onPageInit('index', function (page) {
  myApp.alert("测试");

// 幻灯片特效
  var mySwiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination'
  });
// 页面二级菜单效果
  $$('.create-links').on('click', function () {
  var clickedLink = this;
  var popoverHTML = '<div class="popover popover-new">'+
                      '<div class="popover-inner">'+
                        '<div class="list-block">'+
                          '<ul>'+
                          '<li><a href="index.html" class="item-link list-button close-popover">首页</li>'+
                          '<li><a href="search.html" class="item-link list-button close-popover">会员查询</li>'+
                          '</ul>'+
                        '</div>'+
                      '</div>'+
                    '</div>'
  myApp.popover(popoverHTML, clickedLink);
});

}).trigger();
/*----------------------------查询--------------------------*/
 myApp.onPageInit('search', function (page) {
  myApp.alert('会员查询 测试！');
  //页面下拉刷新 
})
/*----------------------------个人中心/我的积分--------------------------*/
 myApp.onPageInit('user', function (page) {
  myApp.alert('个人中心 测试！');
  //页面下拉刷新
  var ptrContent = $$('.pull-to-refresh-content');
  ptrContent.on('refresh', function (e) {
    setTimeout(function () {
        myApp.pullToRefreshDone();
    }, 2000);
  });
  
})

/*----------------------------个人中心/设置--------------------------*/
myApp.onPageInit('set', function (page) {
  //页面下拉刷新
  var ptrContent = $$('.pull-to-refresh-content');
  ptrContent.on('refresh', function (e) {
    setTimeout(function () {
        myApp.pullToRefreshDone();
    }, 2000);
  });

  //清除缓存提示
  $$('.alert-text').on('click', function () {
    myApp.confirm('是否确认清除缓存?', function () {
      myApp.alert('清除成功！');
    });
  });
  //退出登录提示
  $$('.exit-landing').on('click', function () {
    myApp.confirm('是否确认退出系统?', function () {
      myApp.alert('操作成功！');
    });
  });
})

/*----------------------------个人中心/修改密码--------------------------*/
myApp.onPageInit('setNewpassw', function (page) {
  //页面下拉刷新
  var ptrContent = $$('.pull-to-refresh-content');
  ptrContent.on('refresh', function (e) {
    setTimeout(function () {
        myApp.pullToRefreshDone();
    }, 2000);
  });

  //修改密码确认
  $$('.pasw-submit').on('click', function () {
    myApp.confirm('是否确认修改密码?', function () {
      myApp.alert('修改成功！');
    });
  });
})
/*----------------------------个人中心/我的糖卡--------------------------*/
myApp.onPageInit('My-card', function (page) {
  //页面下拉刷新
  var ptrContent = $$('.pull-to-refresh-content');
  ptrContent.on('refresh', function (e) {
    setTimeout(function () {
      myApp.pullToRefreshDone();
    }, 2000);
  });
})
 
/*----------------------------个人中心/消费查询--------------------------*/
 myApp.onPageInit('consumption-query', function (page) {
  //页面下拉刷新
  var ptrContent = $$('.pull-to-refresh-content');
  ptrContent.on('refresh', function (e) {
    setTimeout(function () {
      myApp.pullToRefreshDone();
    }, 2000);
  });
})
/*----------------------------个人中心/我的礼包--------------------------*/
 myApp.onPageInit('giftbag', function (page) {
  //页面下拉刷新
  var ptrContent = $$('.pull-to-refresh-content');
  ptrContent.on('refresh', function (e) {
    setTimeout(function () {
      myApp.pullToRefreshDone();
    }, 2000);
  });
})
/*----------------------------个人中心/我的礼包--------------------------*/
 myApp.onPageInit('giftbag-detail', function (page) {
  //页面下拉刷新
  var ptrContent = $$('.pull-to-refresh-content');
  ptrContent.on('refresh', function (e) {
    setTimeout(function () {
      myApp.pullToRefreshDone();
    }, 2000);
  });
})
/*----------------------------个人中心/我的积分--------------------------*/
 myApp.onPageInit('mywallet', function (page) {
  myApp.alert('我的我的积分 测试！');
  //页面下拉刷新
  var ptrContent = $$('.pull-to-refresh-content');
  ptrContent.on('refresh', function (e) {
    setTimeout(function () {
      myApp.pullToRefreshDone();
    }, 2000);
  });
  
})
/*----------------------------个人中心/我的积分明细--------------------------*/
 myApp.onPageInit('mywallet-detail', function (page) {
  myApp.alert('我的我的积分 测试！');
  //页面下拉刷新
  var ptrContent = $$('.pull-to-refresh-content');
  ptrContent.on('refresh', function (e) {
    setTimeout(function () {
      myApp.pullToRefreshDone();
    }, 2000);
  });
  
})
/*----------------------------个人中心/我的优惠券--------------------------*/
 myApp.onPageInit('mycoupons', function (page) {
  myApp.alert('我的优惠券 测试！');
  //页面下拉刷新
  var ptrContent = $$('.pull-to-refresh-content');
  ptrContent.on('refresh', function (e) {
    setTimeout(function () {
      myApp.pullToRefreshDone();
    }, 2000);
  });
  
})
/*----------------------------个人中心/我的优惠券--------------------------*/
 myApp.onPageInit('mycoupons-detail', function (page) {
  myApp.alert('我的优惠券明细 测试！');
  //页面下拉刷新
  var ptrContent = $$('.pull-to-refresh-content');
  ptrContent.on('refresh', function (e) {
    setTimeout(function () {
      myApp.pullToRefreshDone();
    }, 2000);
  });
  
})
/*----------------------------个人中心/领券--------------------------*/
 myApp.onPageInit('coupons', function (page) {
  myApp.alert('我的优惠券明细 测试！');
  //页面下拉刷新
  var ptrContent = $$('.pull-to-refresh-content');
  ptrContent.on('refresh', function (e) {
    setTimeout(function () {
      myApp.pullToRefreshDone();
    }, 2000);
  });

  //领取提示
  $$('.cr-successful').on('click', function () {
    myApp.confirm('是否确认领取?', function () {
      myApp.alert('领取成功！');
    });
  });
  
})

/*----------------------------个人中心/我的标签--------------------------*/
 myApp.onPageInit('thelabel', function (page) {
  myApp.alert('我的标签 测试！');
  //页面下拉刷新
  var ptrContent = $$('.pull-to-refresh-content');
  ptrContent.on('refresh', function (e) {
    setTimeout(function () {
      myApp.pullToRefreshDone();
    }, 2000);
  });
  /*我的标签*/
  $$(".tlb-bq-m").click(function(){
    $$(this).toggleClass("tlbactive");
  });

$$(".tlb-bq-x").click(function(){
    $$(this).toggleClass("tlbactive-x");
  });
/*待添加标签样式*/
  $$('.tlb-bq-x2').on('click', function () {
    myApp.prompt('请输入新标签名称', function (value) {
      myApp.alert('是否确认保存当前新增标签');
    });
  });

  //删除提示
  $$('.tlb-del-bq').on('click', function () {
    myApp.confirm('是否确认删除选中标签?', function () {
      myApp.alert('删除成功！');
    });
  });
//保存提示
  $$('.tlb-add-bq').on('click', function () {
    myApp.confirm('是否确认保存选中标签?', function () {
      myApp.alert('保存成功！');
    });
  });
})

//初始化应用
myApp.init();

