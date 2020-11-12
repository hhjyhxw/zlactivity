
$(function () {
    getUserinfo();
});
window.alert = function(msg,callback){
    parent.layer.alert(msg,function(index){
        parent.layer.close(index);
        if(typeof(callback)==="function"){
            callback("ok");
        }
    });
}

var wxdata = null;
getJssdk();
//获取微信jssdk参数
wx.config({
    debug: false,
    appId: wxdata.appid,
    timestamp: wxdata.timeStamp,
    nonceStr: wxdata.nonceStr,
    signature: wxdata.sign,
    jsApiList: ['scanQRCode']
});



function getJssdk(){
        //加载微信配置
        var link = (window.location.href).split('#')[0];
//         console.log("link1=="+link);
        $.ajax({
            url:fontbaseURL + "/frontpage/jsSdkConfig/getJsSdkConfig",//后台给你提供的接口
            type:"GET",
            data:{"url":link},
            async:false,
            dataType:"json",
            success:function (data){
                // console.log("data=="+JSON.stringify(data));
                 wxdata = data
            },
            error:function (error){
             console.log("getJssdk_error=="+JSON.stringify(error));
            }
        });
    }


    //获取用户信息
    function getUserinfo(){
        $.ajax({
            url:fontbaseURL + "/frontpage/user/usernfo/getUserinfo",
            type:"post",
            data:{},
            async:true,
            dataType:"json",
            success:function (data){
                console.log("userinfo=="+JSON.stringify(data));
                if(data.code==0){
                    vm.user = data.user;
                }
            },
            error:function (error){
                console.log("userinfo_error=="+JSON.stringify(error));
            }
        });
    }

// var verify_remoteUrl="http://zl.haiyunzy.com/realWxCardManager/realWxCard!ajaxverification.action?"

var vm = new Vue({
	el:'#icloudapp',
	data:{
        showresult:false, //展示核销结果
        user:{
            openid:'xxx'
        },
        signkey:'YRJFC03D30Dokyu75A412A74FF',
        verifySuccess:true,
        msg:'核销失败'
	},
    mounted() {

    },
	methods: {
        saoyisao:function(){
            wx.ready(() => {
                wx.checkJsApi({
                    jsApiList: ['scanQRCode'],
                    success: function (res) {

                    }
                });
                wx.scanQRCode({
                    needResult: 1,
                    desc: 'scanQRCode desc',
                    success: function (res) {
                        try{
                            var signstr = vm.user.openid+res.resultStr+vm.signkey;
                            var sign = md5(signstr);
                            $.ajax({
                                type : "get",
                                async:false,
                                url : verify_remoteUrl+"openid="+vm.user.openid+"&cardCode="+res.resultStr+"&sign="+sign,
                                dataType : "jsonp",//数据类型为jsonp
                                jsonp: "jsoncallback",//服务端用于接收callback调用的function名的参数
                                success : function(data){
                                    vm.showresult = true;//展示核销结果
                                    if(data.status==='0'){

                                    }else{
                                        vm.verifySuccess=false;
                                        vm.msg = data.message;
                                    }
                                },
                                error:function(data){
                                    alert("核销失败，请稍后再试");
                                    // alert("result==="+JSON.stringify(data));
                                }
                            });

                           /* $.getJSON(verify_remoteUrl+"openid="+vm.user.openid+"&cardCode="+res.resultStr+"&sign="+sign,
                            {},
                            function(result) {
                                alert("result==="+JSON.stringify(result));
                                vm.showresult = true;//展示核销结果
                                if(result.status==='0'){

                                }else{
                                    vm.verifySuccess=false;
                                    vm.msg = result.message;
                                }
                            });*/

                            // let urls = "http://wx.thewm.cn/millionFans/getCard.html";
                            // let url = fontbaseURL + "/frontpage/card/cardVerify/verify?cardCode="+JSON.stringify(res);
                           // window.location.href = urls;
                        }catch (e){
                            alert("扫码失败");
                        }

                    },
                    fail: function (res) {
                        console.log("fail==="+JSON.stringify(res))
                    },
                    complete: function (res) {
                        console.log("complete==="+JSON.stringify(res))
                    }
                });
            });
        }
	}
});
