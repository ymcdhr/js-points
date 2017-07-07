# Mobile-Demo
利用：zepto/artTemplate/rem/jsonp 等技术实现的移动端wap页DEMO

# 项目说明
## 一、基本的wap demo
参考下文:[本页目录](#一本页目录)
## 二、滑动Tab/List组件 demo
参考[滑动tab/list效果，目前淘宝/京东/苏宁在用](https://github.com/ymcdhr/Mobile-Demo/issues/3)<br>
该demo在工程中：scrollTab.html 有完整代码。

# 一、本页目录
[1、公共的HTML头部](#公共的html头部)<br>
[2、使用arttemplate渲染模版（包括子模板的渲染）](#使用arttemplate渲染模版包括子模板的渲染)<br>
[3、使用zepto代替jquery作为库文件](#使用zepto代替jquery作为库文件)<br>
[4、使用rem单位来做响应式布局，并规范设计尺寸](#使用rem单位来做响应式布局并规范设计尺寸)<br>
[5、页面中的跨域方案，通常使用jsonp，但也可以使用cors方式](#页面中的跨域方案通常使用jsonp但也可以使用cors方式)<br>
[6、微信分享接口的调用](#微信分享接口的调用)<br>
[7、wap端页面的调试，chrome/远程/app调试](#wap端页面的调试chrome远程app调试)<br>
[8、唤起客户端的方法](#唤起客户端的方法)<br>
[9、页面的埋点方案](#页面的埋点方案包括流量埋点和点击埋点)<br>
[10、页面数据分页加载的方案](#页面数据分页加载的方案)<br>
[11、页面图片或者dom懒加载的方案](#页面图片或者dom懒加载的方案)<br>
[12、页面性能优化方案](#页面性能优化方案)<br>

# 公共的HTML头部
```html
<!--统一使用HTML5文档声明；-->
<!DOCTYPE html>
<html lang="en">
<head>
    <!--统一使用UTF-8编码 ；-->
    <meta charset="UTF-8">
    <!--//initial-scale=1.0：强制让文档的宽度与设备的宽度保持1:1-->
    <!--//maximum-scale=1.0：文档最大的宽度比例是1.0-->
    <!--//user-scalable=0：且不允许用户点击屏幕放大浏览-->
    <!--//尤其要注意的是：content里多个属性的设置一定要用“分号+空格”来隔开，如果不规范将不会起作用。-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <meta content="telephone=no" name="format-detection"/>
    <meta name="wap-font-scale" content="no" />
    <!--必须预留title、keywords和description；-->
    <title>买神手册</title>
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <!--所有页面都要引用favicon并且直接使用线上地址；-->
    <!--<link rel="shortcut icon" href="http://xxx.xxx.com/favicon.ico" type="image/x-icon"/>-->
    <link href="common.css">
</head>
<body>

<!--zepto 可以自定义扩展-->
<script src="https://cdn.bootcss.com/zepto/1.2.0/zepto.min.js"></script>
<!--参考地址：https://aui.github.io/art-template/docs/installation.html-->
<script src="https://raw.githubusercontent.com/aui/art-template/master/lib/template-web.js"></script>

<script src="index.js"></script>

</body>
</html>
  ```
  
为什么要将<script>放在页面底部，参考：[web页面加载流程](https://github.com/ymcdhr/Mobile-Demo/issues/1)


# 使用arttemplate渲染模版（包括子模板的渲染）
使用artTemplate的好处：<br>
1、性能卓越，执行速度通常是 Mustache 与 tmpl 的 20 多倍（性能测试）<br>
2、支持运行时调试，可精确定位异常模板所在语句（演示）<br>
3、对 NodeJS Express 友好支持<br>
4、安全，默认对输出进行转义、在沙箱中运行编译后的代码（Node版本可以安全执行用户上传的模板）<br>
5、支持include语句，可在浏览器端实现按路径加载模板<br>
6、支持预编译，可将模板转换成为非常精简的 js 文件<br>
7、模板语句简洁，无需前缀引用数据<br>
8、支持所有流行的浏览器<br>
详细参考：https://aui.github.io/art-template/docs/<br>

使用artTemplate普通模版<br>
```html
<!--artTemplate模版定义-->
<!--父模版-->
<script type="text/html" id="fTemp">

    <div class="list-box">
        <ul>
            {{each list as value index}}
            <li class="list-li">
                {{include 'sTemp' value}}
            </li>
            {{/each}}
        </ul>
    </div>

</script>
```

使用arttemplate子模板
```html
<!--子模板-->
<!--注意：子模板中直接取父摸版中value的值-->
<script type="text/html" id="sTemp">

    <a class="list-a">
        <div class="list-title">{{godsDesc}}</div>
        <div class="list-abs">{{godsName}}</div>
    </a>

</script>
```

渲染模版，并将数据插入到html
```javascript
/**
 * 渲染页面
 */
renderPage: function(){

    var list = this.list;
    var html = template("fTemp",{list: list});


    $(".w").append(html);
}
```

# 使用zepto代替jquery作为库文件
尽量试用cdn资源，以提高访问速度：<br>
<script src="https://cdn.bootcss.com/zepto/1.2.0/zepto.min.js"></script>

# 使用rem单位来做响应式布局，并规范设计尺寸
详细参考：http://www.qdfuns.com/notes/19478/6ccc9300876e9347dcbd8ae40e64a939.html<br>

1、REM的定义：<br>
rem是相对于根元素<html>来设置字体大小的，这样就意味着，我们只需要在根元素确定一个参考值，在根元素中设置多大的字体，这完全可以根据您自己的需求。<br>

2、REM使用方法示例：<br>
（1）html中默认的 font-size:16px; 也就是 1rem = 16px<br>
（2）以设计宽度为750px为例，那么定义 font-size:50px; 那么 1rem = 50px，比例为：750/50=15<br>
（3）定义页面中的尺寸，就是: 宽度/50 rem（比例为15）。例如：设计稿中dom（20px）的尺寸为：20px/50=0.4rem<br>
（4）针对不同屏幕尺寸，按同比例设置font-size（比例仍为15）。相当于1rem 变成对应大小（font-size变小多少，1rem就同比例变小多少）。<br>
（5）例如：<br>
屏幕宽度为750px，则html设置的font-size为：750/15 = 50，设计稿中dom（20px）的尺寸为：20px/50=0.4rem，1rem = 50px<br>
屏幕宽度为320px，则html设置的font-size为：320/15 = 21.33....，设计稿中dom（20px）的尺寸依然为：20px/50=0.4rem，1rem = 320/750*50px<br>

# 页面中的跨域方案，通常使用jsonp，但也可以使用cors方式
jsonp方式跨域<br>
详细参考：http://blog.csdn.net/superhosts/article/details/9057301<br>

jsonp原理：<br>
1、html中script、img、iframe等标签的src属性支持跨域请求<br>
2、jsonp是通过将请求的url地址塞到script标签的src中发起请求<br>
3、收到请求后相当于在html中引入了一个script，并加载了里面的代码（这部分代码就是服务器响应的具体数据）<br>
4、因为服务器响应的数据释放到scrpit中，所以需要数据是以函数调用的格式（当然是字符串的形式），例如：<br>
```javascript
callback({name:"name"})
```
5、jquery/zepto有自己的回调方法，服务端的callback不要写死，最好根据前端传值来定：
```javascript
$.ajax({
    type : "GET",
    //<实例1：jsonp结构>
    //url : "http://searchpre.cnsuning.com/emall/mobile/mobileSearch.jsonp?set=5&keyword=&st=0&ci=293006&cityId=9173&ps=20&cp=0&cf=&iv=-1&ct=-1",
    //<实例2：dom结构+callback>
    //url :"http://zone.suning.com/review/wcs_review/000000000104083059-0-1---pinglunLoadData.html",
    //<实例3：jsonp结构+callback>  
    url : "http://zone.suning.com/review/ajax/top10user/000000000104083059-pinglunLoadDataCallback.html",
    dataType : "jsonp",
    jsonpCallback : "callback",
    success : function(data){
    alert("商品数量："+data.goodsCount);
    }
});
```

cors方式跨域<br>
需要服务器支持

# 微信分享接口的调用
微信公众平台：https://mp.weixin.qq.com/wiki<br>
微信JS SDK DEMO：http://203.195.235.76/jssdk/<br>

# wap端页面的调试，chrome/远程/app调试
使用fidder参考：http://www.qdfuns.com/notes/19478/de3df94004e5e24ffb5ad26c4ab78e57.html

# 客户端与页面的通信（包括跳转页面路由到客户端，调用客户端公用js sdk等）
如果在客户端APP中webview打开wap页面，需要做一些操作时，会由客户端提供js方法供wap页调用：<br>
1、客户端会暴露js接口给wap页面使用，wap中相当于直接调用全局方法。<br>
2、在wap调用客户端方法是要注意：客户端暴露的接口不一定在wap页加载完成时就能用（有可能客户端并没有加载完成）。如果不能使用，需要定时去查询客户端方法，直到加载完成后才能在wap端调用。<br>


# 唤起客户端的方法
唤起场景：<br>
微信、QQ等 -> 唤醒APP<br>
用户通过某APP分享了一条链接至微信或QQ，用户B点开该链接后，会引导用户B打开该APP或者下载该APP。<br>
浏览器 -> 唤醒APP<br>
用户A通过浏览器打开了某APP的M站或者官网，如果检测到A来自手机端，则会引导用户打开该APP或者下载该APP。<br>
短信、邮件、二维码等 -> 唤醒APP<br>
用户A打开了某APP的推广短信，邮件或者扫描二维码等，会引导用户打开该APP或者下载该APP。<br>
其他APP -> 唤醒APP<br>
用户A通过第三方APP分享了（任何可以分享信息的品台或工具：IM或者短信等）一条链接至用户B，用户B点开该链接后，链接会引导用户B打开指定APP或者下载指定APP。<br>

参考：http://www.jianshu.com/p/862885bd8ea2<br>

# 页面的埋点方案，包括流量埋点和点击埋点
流量埋点：统计页面访问流量<br>
点击埋点：统计某一区域点击次数<br>

参考：http://blog.csdn.net/simongeek/article/details/53464005

# 页面数据分页加载的方案
分页实现大致方案：<br>
1、接口支持通过分页方案获取，通常必须两个参数：1个是页码pageNumber，2个是页面数据长度pageSize<br>
2、页面滑动一定的位置触发分页加载<br>
3、加新获取的数据添加到页面，并做好页面的记录<br>
4、在分页请求数据时，要避免重复请求（需要做好标记位）

触发分页加载的条件：
```javascript
    /**
     * 滚动事件，触发分页加载
     * 根据loadmore的位置来判断是否分页加载
     */
    pageScroll(){

        var self = this;
        var $lod = $("#loadmore");
        window.addEventListener("scroll",myFunc);
        window.addEventListener("mousewheel", myFunc, false);

        function myFunc(){
            var n = $lod[0]
                , r = $lod.offset().top
                , o = window.innerHeight || window.screen.height;


            if(window.pageYOffset > r + o || window.pageYOffset < r - o && "done" != n.getAttribute("data-loaded")){
                //void clearTimeout(i)
            }
            else{
                if (window.pageYOffset > r - o - 30 && "done" != n.getAttribute("data-loaded")){
                    self.pageNum > 0 && self.getF1Data();
                }
            }
        }
    }
```



# 页面图片或者dom懒加载的方案
实现原理：<br>
1.在学习懒加载方案前，请先了解一下JS/Jquery获取文档高度的方法：<br>
2. 大体实现方案：<br>
（1）配置所有的img的url到data-src中，不配置src，例如：<img data-src="http://..../"><br>
（2）监听屏幕滚动事件<br>
（3） 屏幕滚动时， 查找有data-src的图片，判断图片位置<br>
（4）如果图片位置在屏幕底部边缘以上，则将data-src的值设置到src中，此时图片开始加载<br>
（5）对加载的图片做标记：data-loaded="done"<br>

# 页面性能优化方案
参考：[页面性能优化方案](https://github.com/ymcdhr/Mobile-Demo/issues/2)
