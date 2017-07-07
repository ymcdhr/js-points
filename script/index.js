/**
 * 扩展zepto的方法
 */
$.fn.buryPonit= function(){

};




/**
 * 使用单例模式，开发页面公用方法
 */
var COM = {

    buryPoint: function(){

    }
};



//数据构造
var list = [{"godsDesc":"【立即预约！不高于1099！29日0点开抢！再送厨具套装！】900尺寸大面板！近吸式烟机！经济实用型！四重油烟分离！","godsName":"美的(Midea)侧吸式油烟机CXW-180-DJ118 15立方","godsType":1,"godsNumber":"147282999"},{"godsDesc":"【29号0点火热开抢！】【2099钜惠价！送美的12J1-FV吸尘器！】智能蒸汽洗油烟机！一键轻松洗，天天用新机！","godsName":"美的(Midea)侧吸式油烟机CXW-200-DJ570R 17.5立方触控式","godsType":1,"godsNumber":"132771946"},{"godsDesc":"【年中返场钜惠！】【729钜惠价！】经典中式烟机，13.5大吸力！小面板，小户型推荐！","godsName":"美的(Midea)中式油烟机CXW-180-AS7210-G1 13.5立方","godsType":1,"godsNumber":"149982487"},{"godsDesc":"【清凉放价】【5年包修】750mm宽度！小身材，大吸力！精钢锻造，双劲风轮，双道排油！","godsName":"万家乐侧吸式油烟机CXW-200-DG13(R) 15立方","godsType":1,"godsNumber":"107875181"},{"godsDesc":"【立即预约！不高于1299！29日0点开抢！】欧式油烟机，17.5立方大风量大吸力！","godsName":"美的(Midea)欧式油烟机CXW-200-DT328 17.5立方","godsType":1,"godsNumber":"132773952"},{"godsDesc":"【品牌日超值特惠！限时疯抢！销量NO1！699特价！价保全年！限量抢购】电机终身保修，钢化玻璃面板，低噪音，双进风大吸力","godsName":"澳柯玛(AUCMA)欧式静音爆款油烟机CXW-200HT2","godsType":1,"godsNumber":"137721414"},{"godsDesc":"3490元劲爆开抢【年中狂欢 返场继续】仅剩110套！24点停！下单赠刀具七件套！全网TOP1！风量高达18立方！","godsName":"方太（FOTILE）云魔方欧式 抽油烟机EMD2T 18立方（m³/min）","godsType":1,"godsNumber":"155533794"},{"godsDesc":"【29号0点仅售2？80！万众期待】【老板大牌粉丝日火力全开】【赠厨房五件套】17方风量免拆洗【12期免息】","godsName":"老板(ROBAM)欧式油烟机CXW-200-8307 17立方触控式","godsType":1,"godsNumber":"121097204"},{"godsDesc":"【下单每千减百，厨卫超级品类日】小户型推荐-双网劲吸-拆卸方便-易清洁  ","godsName":"樱雪(INSE) 油烟机CXW-218-H1221W(Q)按键式 13立方侧吸","godsType":1,"godsNumber":"107751818"},{"godsDesc":"【29号0点火热开抢！】【1799钜惠价！买送美的861A吸尘器！！】900大尺寸！17.5立方大吸力！","godsName":"美的(Midea)欧式油烟机CXW-200-DT518R 17.5立方触控式","godsType":1,"godsNumber":"126646575"},{"godsDesc":"1？60抢先预约！下单即送高档刀具六件套！中式深腔拢烟深腔拢烟 免拆易清洗","godsName":"帅康(sacon)油烟机MD01油烟机 14.5立方 中式","godsType":1,"godsNumber":"101809603"},{"godsDesc":"【29号0点起仅售3？80！万众期待】【老板大牌粉丝日火力全开】大吸力免拆洗！下单赠刀具【12期免息】","godsName":"老板(ROBAM)侧吸式油烟机CXW-200-26A5 16.5立方触控式","godsType":1,"godsNumber":"131245677"},{"godsDesc":"【超值特惠！限时疯抢！小户型优选！715mm随心装！】中式经典设计、加轮大吸力，低噪音，黑玻璃面板","godsName":"澳柯玛(AUCMA)中式油烟机CXW-180HZ1 12立方","godsType":1,"godsNumber":"137721305"},{"godsDesc":"3490元劲爆开抢【年中狂欢 返场继续】仅剩130套！24点停！下单赠刀具！侧吸TOP1！19立方自动巡航增压！","godsName":"方太（FOTILE）风魔方侧吸式 抽油烟机JQ25TS 19立方（m³/min）（不带罩）","godsType":1,"godsNumber":"193726681"},{"godsDesc":"【29号0点仅2？80！万众期待】【赠厨房五件套】17方大吸力超强吸排【12期免息】【老板大牌粉丝日火力全开】","godsName":"老板(ROBAM)欧式油烟机CXW-200-8009 17立方 按键式","godsType":1,"godsNumber":"104746744"},{"godsDesc":"【618钜惠返场！】【1799秒杀价！买送美的861A吸尘器！】17.5m³大吸力！智能触控面板","godsName":"美的(Midea)侧吸式油烟机CXW-200-DJ366R 17.5立方触控式","godsType":1,"godsNumber":"169951628"},{"godsDesc":"【年中钜惠！豪礼不断】710mm精巧宽度！大吸力中式特价烟机！易清洁面板！拢烟效果佳！赠原装铝箔烟管长1.5米！","godsName":"巧太太(qiaotaitai)中式油烟机CXW-180-A319-W 10立方","godsType":1,"godsNumber":"124369071"},{"godsDesc":"【厨卫超级品类日】雅致黑玻璃，魅力侧吸！四维净吸系统！近距快速多方位立体拢烟！抢到即是赚到！","godsName":"华帝（vatti）油烟机i11049按键式 15立方侧吸","godsType":1,"godsNumber":"613339670"},{"godsDesc":"【厨卫超级品类日】下单送烤箱！瞬吸20m³/min，魅力侧吸！四维净吸系统！【小厨房优选】","godsName":"华帝(vatti)侧吸式油烟机i11087 20立方触控式","godsType":1,"godsNumber":"193280364"},{"godsDesc":"【立即预约！不高于1299！29日0点开抢！】17.5m³大吸力 ！900mm宽屏拢烟 ！一级能效 ！","godsName":"美的(Midea)侧吸式油烟机CXW-200-DJ336 17.5立方","godsType":1,"godsNumber":"132898719"}];



/**
 * 使用单例模式封装页面功能
 */
var M = {
    init: function () {
        this.setData(list);
        this.renderPage();

        this.pageScroll();
    },


    /**
     * 获取/构造数据
     */
    setData: function (list) {

        this.list = this.formateList(list);

    },


    /**
     * 格式化数据
     * @param list
     * @returns {*}
     */
    formateList: function(list){

        $.each(list,function(idx,item){
            item.buryPoint = "buryPoint_" + (idx+1);
            item.imgUrl = "https://img.alicdn.com/tfs/TB1JnEeRFXXXXceapXXXXXXXXXX-760-400.jpg_q75.jpg";
        });


        return list;
    },


    /**
     *  获取数据
     */
    getData: function(){

    },

    /**
     * 渲染页面
     */
    renderPage: function(){

        var list = this.list;
        var html = template("fTemp",{list: list});


        $(".w").append(html);
    },


    /**
     * 滚动事件，触发分页加载
     * 根据loadmore的位置来判断是否分页加载
     */
    pageScroll: function(){

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
                    self.pageNum > 0 && self.getData();
                }
            }
        }
    }
};


/**
 * 在页面HTML元素加载完成过后，执行方法
 */
$(function () {
    M.init();
});