!function(e) {
    var n = {};
    function t(a) {
        if (n[a])
            return n[a].exports;
        var i = n[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(i.exports, i, i.exports, t),
        i.l = !0,
        i.exports
    }
    t.m = e,
    t.c = n,
    t.d = function(e, n, a) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: a
        })
    }
    ,
    t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    t.t = function(e, n) {
        if (1 & n && (e = t(e)),
        8 & n)
            return e;
        if (4 & n && "object" == typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (t.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & n && "string" != typeof e)
            for (var i in e)
                t.d(a, i, function(n) {
                    return e[n]
                }
                .bind(null, i));
        return a
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(n, "a", n),
        n
    }
    ,
    t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }
    ,
    t.p = "",
    t(t.s = 0)
}([function(e, n) {
    var t = null;

        var movebox=document.getElementById("J_movebox"),
            btn=document.getElementById("J_movingbtn"),
            transition="transition",
            body=document.body || document.documentElement,
            style=body.style;
        var vendorPrefix=(function(){
                    var i=0, vendor=["Moz", "Webkit", "Khtml", "O", "ms"];
                    transition=transition.charAt(0).toUpperCase() + transition.substr(1);   
                    while (i < vendor.length) {
                        if (typeof style[vendor[i] + transition] === "string") {
                          return vendor[i];
                        }
                        i++;
                    }
                    return false;
            })();
        var animationEnd=(function(){
            if(vendorPrefix=="Webkit"){
                return "webkitAnimationEnd";
            }else{
                return "animationend";
            }
        }());
    
function addEnd(obj,fn){
    setTimeout(function(){document.getElementById("levelSwitchBox").click();}, 1000);
    obj.addEventListener('WebkitTransitionEnd',fn,false);
    obj.addEventListener('transitionend',fn,false);
    obj.addEventListener('click',fn,false);
}
    window.onload = function() {
        //if (document.getElementById("levelSwitchBox").addEventListener('webkitAnimationEnd', function() {
        if (addEnd(document.getElementById("levelSwitchBox"),function(){
            $("#levelSwitchBox").css("display", "none"),
            $("#levelSwitchBoxMain").attr("src", sysGame[1].switch),
            $("#levelSwitchBox").removeClass("hidden")
        }),
        $("#levelSwitchBox").addClass("hidden"),
        !t) {
            if (-1 == JSON.parse($.cookie("game_cookie")).game_pay)
                var e = !1;
            else
                e = !0;
            !function(e) {
                (t = new HardestGame(document.getElementById("gameStage"),e)).levelSuccessHandle = function() {
                    //“4”是否总关数，判断是否闯关成功
                	if (t.level < tmpTotalLevel) {
                        $("#success_audio").get(0).paused && $("#success_audio").get(0).play(),
                        document.getElementById("currentLevel").getElementsByTagName("span")[0].innerHTML = t.level;
                        var e = 4;
                        document.getElementById("gameTip").innerHTML = "完美通过第" + (t.level - 1) + "关, " + e + "秒后,开始第" + t.level + "关";
                        var n = setInterval(function() {
                            e--,
                            document.getElementById("gameTip").innerHTML = "完美通过第" + (t.level - 1) + "关, " + e + "秒后,开始<span>第" + t.level + "关</span>",
                            e <= 0 && (clearInterval(n),
                            document.getElementById("gameTip").innerHTML = "",
                            t.gameContinue(!0))
                        }, 1e3)
                        if(nowOid > 0){
	                        $.ajax({
	                    		type:'post',
	                    		url:initUrl,
	                    		data:{op: 'ing', logId: logId, mid: nowMid, oid: nowOid,level:t.level-1},
	                    		success:function(data){
	                    			if(data == 0){t.gameOverHandle.call(t, t.level-1);	
	                    				$.ajax({type:'post',url:initUrl,data:{op: 'fail', logId: logId, mid: nowMid, oid: nowOid, level:t.level-1}})
	                    			}else{sparams=data};
	                    		}
	                		})
                        }
                    } else {
                    	if(nowMid && nowMid>0){
                    		if(levelStr && levelStr != ''){
                            	$('.level_tip').text(levelStr);
                            	$(".level_tip").css("display", "block");
                            }

                    		$.ajax({
                        		type:'post',
                        		url:initUrl,
                        		data:{op: 'suc', logId: logId, mid: nowMid, oid: nowOid},
                        		success:function(data){
                        			data = JSON.parse(data);
                        			if(data.code == 0) {
                                        // 挑战失败
                        				t.gameOverHandle.call(t, t.level-1);
                        				$("#gameOverBoxTitle").html('数据异常')
                        				$("#gameOverBoxBtn").html('返回首页')
                            			$("#gameOverBoxBtn").on("click", function() {
                            				history.back(-1);
                        				})
                        			} else {
                                        // 挑战成功
                                        $("#gameSuccess_audio").get(0).paused && $("#gameSuccess_audio").get(0).play(),
                                        $("#gameOverBox").css("display", "block"),
                                        $(".is_suc").css("display", "block"),
                                        $("#goBuy").css("display", "none"),
                                        $("#gameOverBoxTitle").html('挑战成功'),
                                        $("#gameOverBoxBtn").html(r_msg),
                                        $("#gameOverBoxBtn").on("click", function() {
                                            console.log(5)
                                            location.href = appUrl;
                                            if(nowWindow==2) {
                                                location.href = appUrl;
                                            } else {
                                                wx.miniProgram.redirectTo({
                                                    url: "/pages/order/order"
                                                })
                                            }
                                        }),
                                        $("#gameOverClose").on("click", function() {
                                            if(nowWindow==2){
                                                console.log('xxxx')
                                                // location.href = appUrl;
                                            }
                                            else{
                                                wx.miniProgram.redirectTo({
                                                    url: "/pages/order/order"
                                                })
                                            }
                                        });
                                    }
                        		}
                    		});
                        }
                    	else{
                    		$("#gameSuccess_audio").get(0).paused && $("#gameSuccess_audio").get(0).play(),
                            $("#app").addClass("blur"),
                            $("#goBuy").css("display", "none"),
                            $("#wx_no").css("display", "none"),
                            $("#gameSuccessBox").css("display", "block"),
                            $("#gameSuccessBoxBtn").on("click", function() {
                            	//if(nowWindow==2) history.back(-1);
                            	//else wx.miniProgram.navigateBack()
                                history.back(-1);
                            }),
                            $("#gameSuccessClose").on("click", function() {
                            	//if(nowWindow==2) history.back(-1);
                            	//else wx.miniProgram.navigateBack()
                                history.back(-1);
                            })
                    	}
                    }
                }
                ,
                t.gameOverHandle = function() {
                    clearInterval(timeboxInterval),
                    //(t = null) && delete t,
                    $(".is_err").css("display", "block"),
                    $("#gameOverBox").css("display", "block"),
                    $("#wx_no").css("display", "none"),
                    $("#app").addClass("blur");
                    if(t.level == 3) $('#gamereplay').show();
                    if(levelStr && levelStr != ''){
                    	$('.level_tip').text(levelStr);
                    	$(".level_tip").css("display", "block");
                    }
                    var e = 5;
                    document.getElementById("gameTip").innerHTML = "游戏结束, " + e + "秒后,重启游戏";
                    var n = setInterval(function() {
                        e--,
                        document.getElementById("gameTip").innerHTML = "游戏结束, " + e + "秒后,重启游戏",
                        e <= 0 && (wx.miniProgram.navigateBack(),
                        clearInterval(n),
                        document.getElementById("gameTip").innerHTML = "")
                    }, 1e3);
                    $("#gameOverBoxBtn").on("click", function() {
                        console.log('返回首页')
                    	//if(nowWindow==2) history.back(-1);
                        // window.location.replace(indexUrl);
                    }),
                    $("#gameOverClose").on("click", function() {
                    	//if(nowWindow==2) history.back(-1);
                        window.location.replace(indexUrl);
                    })
                }
                ,
                t.init(),
                t.canvas.parentNode.style.width = t.canvas.width + "px",
                t.canvas.parentNode.style.height = t.canvas.height + "px",
                t.gameStart(),
                gameobj = t;
                document.getElementById("currentLevel").getElementsByTagName("span")[0].innerHTML = t.level
            }(e)
        }
    }
}
]);
