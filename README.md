# Mobile-Demo
利用：zepto/artTemplate/rem/jsonp 等技术实现的移动端wap页DEMO


# 公共的头部
```html
<!--统一使用HTML5文档声明；-->
<!DOCTYPE html>
<html>
<head lang="en">
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
    <link rel="shortcut icon" href="http://xxx.xxx.com/favicon.ico" type="image/x-icon"/>
    </head>
<body>
</body>
</html>
  ```
  
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
<script type="text/html" id="temp">
    {{each list as value index}}
    <li class='{{if index==0}}first{{/if}}'>
        <a href="{{value.targetUrl}}">
          {{value.text}}
        </a>
    </li>
    {{/each}}
</script>
```
使用arttemplate子模板
...

# 使用zepto代替jquery作为库文件

# 使用rem单位来做响应式布局，并规范设计尺寸
详细参考：http://www.qdfuns.com/notes/19478/6ccc9300876e9347dcbd8ae40e64a939.html<br>
REM的定义：<br>
rem是相对于根元素<html>来设置字体大小的，这样就意味着，我们只需要在根元素确定一个参考值，在根元素中设置多大的字体，这完全可以根据您自己的需求。<br>
REM使用方法示例：<br>
1.html中默认的 font-size:16px; 也就是 1rem = 16px<br>
2.以设计宽度为750px为例，那么定义 font-size:50px; 那么 1rem = 50px，比例为：750/50=15<br>
3.定义页面中的尺寸，就是: 宽度/50 rem（比例为15）。例如：设计稿中dom（20px）的尺寸为：20px/50=0.4rem<br>
4.针对不同屏幕尺寸，按同比例设置font-size（比例仍为15）。相当于1rem 变成对应大小（font-size变小多少，1rem就同比例变小多少）。<br>
5.例如：<br>
屏幕宽度为750px，则html设置的font-size为：750/15 = 50，设计稿中dom（20px）的尺寸为：20px/50=0.4rem，1rem = 50px<br>
屏幕宽度为320px，则html设置的font-size为：320/15 = 21.33....，设计稿中dom（20px）的尺寸依然为：20px/50=0.4rem，1rem = 320/750*50px<br>

# 页面中的跨域方案，通常使用jsonp，但也可以试用crocs

# 微信分享接口的调用
微信公众平台：https://mp.weixin.qq.com/wiki<br>
微信JS SDK DEMO：http://203.195.235.76/jssdk/<br>

# wap端页面的调试，chrome/远程/app调试
使用fidder参考：http://www.qdfuns.com/notes/19478/de3df94004e5e24ffb5ad26c4ab78e57.html

# 客户端方法的调用（包括跳转页面路由到客户端，调用客户端公用js sdk等）

# 页面的埋点方案，包括流量埋点和点击埋点
流量埋点：统计页面访问流量<br>
点击埋点：统计某一区域点击次数<br>

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