window.onload=function(){
    $('.point').eq(0).css('background-color','#fff');
    $('.point').eq(0).css('border','3px solid #7575754e');
    hidebut();
    $('.searchlist').hide();
    $('.location').hide();
    $('.p1').hide();
    $('.p2').hide();
    $('.p3').hide();
    $('.p4').hide();
    $('.p5').hide();
    $('.cartp').hide();
    $('.cartp2').hide();
    $('.b1p1').hide();
}


        let text1 = document.getElementById("t1");
        let text2 = document.getElementById("t2");
        let text3 = document.getElementById("t3");
        let text4 = document.getElementById("t4");
        let text5 = document.getElementById("t5");
        let text6 = document.getElementById("t6");
        let u1 = document.getElementsByClassName("up")[0];
        let u2 = document.getElementsByClassName("up")[1];
        let u3 = document.getElementsByClassName("up")[2];
        let u4 = document.getElementsByClassName("up")[3];
        let u5 = document.getElementsByClassName("up")[4];
        let u6 = document.getElementsByClassName("up")[5];
        let d1 = document.getElementsByClassName("down")[0];
        let d2 = document.getElementsByClassName("down")[1];
        let d3 = document.getElementsByClassName("down")[2];
        let d4 = document.getElementsByClassName("down")[3];
        let d5 = document.getElementsByClassName("down")[4];
        let d6 = document.getElementsByClassName("down")[5];
        text1.onmouseover = function(){
            u1.style.color="red"
            d1.style.color="red"
        }
        text1.onmouseout = function(){
            u1.style.color="#000"
            d1.style.color="#9a9a9a"
        }
        text2.onmouseover = function(){
            u2.style.color="red"
            d2.style.color="red"
        }
        text2.onmouseout = function(){
            u2.style.color="#000"
            d2.style.color="#9a9a9a"
        }
        text3.onmouseover = function(){
            u3.style.color="red"
            d3.style.color="red"
        }
        text3.onmouseout = function(){
            u3.style.color="#000"
            d3.style.color="#9a9a9a"
        }
        text4.onmouseover = function(){
            u4.style.color="red"
            d4.style.color="red"
        }
        text4.onmouseout = function(){
            u4.style.color="#000"
            d4.style.color="#9a9a9a"
        }
        text5.onmouseover = function(){
            u5.style.color="red"
            d5.style.color="red"
        }
        text5.onmouseout = function(){
            u5.style.color="#000"
            d5.style.color="#9a9a9a"
        }
        text6.onmouseover = function(){
            u6.style.color="red"
            d6.style.color="red"
        }
        text6.onmouseout = function(){
            u6.style.color="#000"
            d6.style.color="#9a9a9a"
        }

        let imgArr = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'];
        let count = 0;


        function changeimg(){
            noselected();
            $('.banner2').css('background-image','url(../imgs/'+imgArr[count] + ')');
            selected();

        }
        function nextimg(){

            count++;
            if(count>=6){
                count=0;
            }
            changeimg();

        }
        function preimg(){

            count--;
            if(count<0){
                count=5;
            }
            changeimg();

        }

        function selected(){
            $('.point').eq(count).css('background-color','#fff');
            $('.point').eq(count).css('border','3px solid #7575754e');
        }
        function noselected(){
            $('.point').eq(0).css('background-color','#d4d4d458');
            $('.point').eq(0).css('border','1px solid #7575754e');
            $('.point').eq(1).css('background-color','#d4d4d458');
            $('.point').eq(1).css('border','1px solid #7575754e');
            $('.point').eq(2).css('background-color','#d4d4d458');
            $('.point').eq(2).css('border','1px solid #7575754e');
            $('.point').eq(3).css('background-color','#d4d4d458');
            $('.point').eq(3).css('border','1px solid #7575754e');
            $('.point').eq(4).css('background-color','#d4d4d458');
            $('.point').eq(4).css('border','1px solid #7575754e');
            $('.point').eq(5).css('background-color','#d4d4d458');
            $('.point').eq(5).css('border','1px solid #7575754e');
            $('.point').eq(6).css('background-color','#d4d4d458');
            $('.point').eq(6).css('border','1px solid #7575754e');
        }


        $('.ban2but2').click(function(){
            nextimg();
        })

        $('.ban2but1').click(function(){
            preimg();
        })

        let interval = setInterval(function(){
            nextimg();
        },3000)


        $('.banner2').hover(function(){
            clearInterval(interval)
        },function(){
            interval = setInterval(function(){
                nextimg();
            },3000)
        })

        $('.point').hover(function(){
            count = $(this).index();
            changeimg();
            
        })






        let imgArr1 = ['b1-1.jpg.avif','b2-1.png.avif','b3-1.png.avif'];
        let imgArr2 = ['b1-2.jpg.avif','b2-2.jpg.avif','b3-2.png.avif'];
        let imgArr3 = ['b1-3.png.avif','b2-3.png.avif','b3-3.png.avif'];
        let count2 = 0;


        function changeimg2(){
            $('.img1').css('background-image','url(../imgs/'+imgArr1[count2] + ')');
            $('.img2').css('background-image','url(../imgs/'+imgArr2[count2] + ')');
            $('.img3').css('background-image','url(../imgs/'+imgArr3[count2] + ')');

        }
        function nextimg2(){

            count2++;
            if(count2>=3){
                count2=0;
            }
            changeimg2();

        }
        function preimg2(){

            count2--;
            if(count2<0){
                count2=2;
            }
            changeimg2();

        }

        
        
        function hidebut(){
            $('.ban3but1').css('background-color','transparent');
            $('.ban3but1').css('color','transparent');
            $('.ban3but2').css('background-color','transparent');
            $('.ban3but2').css('color','transparent');
        }
        function showbut(){
            $('.ban3but1').css('background-color','#89898974');
            $('.ban3but1').css('color','white');
            $('.ban3but2').css('background-color','#89898974');
            $('.ban3but2').css('color','white');
        }
        
        $('.ban3but1').hover(function(){
            changebut1();
        },function(){
            returnbut1();
        })
        function changebut1(){
            $('.ban3but1').css('background-color','#35353574');
        }
        function returnbut1(){
            $('.ban3but1').css('background-color','#89898974');
        }

        $('.ban3but2').hover(function(){
            changebut2();
        },function(){
            returnbut2();
        })
        function changebut2(){
            $('.ban3but2').css('background-color','#35353574');
        }
        function returnbut2(){
            $('.ban3but2').css('background-color','#89898974');
        }


        $('.ban3but2').click(function(){
            nextimg2();
        })

        $('.ban3but1').click(function(){
            preimg2();
        })

        let interval2 = setInterval(function(){
            nextimg2();
        },3000)


        $('.banner3').hover(function(){
            clearInterval(interval2)
            showbut();
            
        },function(){
            interval2 = setInterval(function(){
                nextimg2();
            },5000)
            hidebut();
        })

        let begintime = new Date(2024,1,30,15,46,0).getTime();

        setInterval(function(){
            let currenttime = new Date().getTime();
            let time = begintime - currenttime;
            let h = Math.floor(time/1000/60/60);
            let m = Math.floor(time/1000/60)-h*60;
            let s = Math.floor(time/1000)-h*60*60-m*60;

            h=h>9?h:"0"+h;
            m=m>9?m:"0"+m;
            s=s>9?s:"0"+s;


            $(".hour").text(h);
            $(".minute").text(m);
            $(".second").text(s);

        })

        let searchArr=['苹果手机','苹果手机','苹果手机','苹果手机','苹果手机','苹果手机','苹果手机','苹果手机','苹果手机','护肤品','洗面奶','化妆水','面霜','面膜','口红','眼影','睫毛膏','香水','洗发水','护发素','沐浴露','牙膏','牙刷','洗衣液','洗衣机','空调','电风扇','电视柜','沙发','床','床垫','衣柜','餐桌','餐椅','冰箱','微波炉','烤箱','榨汁机','咖啡机','电磁炉','电饭煲','搅拌器','婴儿车','婴儿床','奶瓶','尿不湿','学步车','玩具车','积木','益智玩具','拼图','儿童图书','学习桌','文具盒','笔记本','钢笔','墨水','文件夹','打印纸','文具套装','篮球鞋','足球鞋','跑步鞋','帆布鞋','皮鞋','高跟鞋','运动裤','牛仔裤','T恤','衬衫','夹克','羽绒服','连衣裙','睡衣','泳衣','围巾','手套','帽子','腰带','手表','项链','戒指','耳环','手链','行李箱','背包','钱包','眼镜','太阳镜','护目镜','手机','平板电脑','电脑','键盘','鼠标','音响','耳机','充电器','数据线','相机','摄像机','单反相机','自拍杆','存储卡','电池','手机壳','洗碗机','电饭煲','电磁炉','榨汁机','咖啡机','吸尘器','空气净化器','电吹风','电动牙刷','剃须刀','床上用品','床单','被套','枕头套','毛巾','浴巾','牙刷','牙膏','洗发水','护发素','沐浴露','香皂','化妆棉','卸妆水','洗面奶','防晒霜','面膜','眼霜','身体乳','香水','口红','眼影','睫毛膏','指甲油','卫生巾','护理垫','纸尿裤','湿巾','卫生纸','纸巾','擦手纸','马桶纸','湿纸巾','食品','零食','饼干','巧克力','糖果','坚果','果干','方便面','泡面','米面','面条','调味品','酱油','醋','味精','盐','糖','食用油','大豆油','花生油','橄榄油','餐巾纸','垃圾袋','保鲜袋','食品袋','一次性杯子','碗','筷子','刀叉','勺子','咖啡杯','水杯','保温杯','茶壶','茶杯','酒杯','红酒杯','啤酒杯','餐具套装','烹饪锅','炒锅','煎锅','蒸锅','汤锅','炖锅','烤盘','烤架','刀具','菜刀','水果刀','剪刀','砧板','搅拌器','厨房秤','厨房定时器','调味罐','烤箱','微波炉','冰箱','消毒柜','垃圾桶','收纳盒','收纳篮','收纳架','衣架','衣柜','鞋柜','床头柜','梳妆台','书架','沙发','茶几','电视柜','电脑桌','办公椅','台灯','吸顶灯','台灯','落地灯','吊灯','墙灯','LED灯','节能灯','吸尘器','空气净化器','加湿器','电风扇','取暖器','净水器','电热水器','燃气热水器','太阳能热水器','插座','开关','插头','电线','排气扇','浴霸','风扇','挂钟','画','装饰画','相框','花瓶','餐具','杯子','碗','筷子','刀叉','勺子','酒具','红酒杯','啤酒杯','水杯','咖啡杯','保温杯','茶杯','餐巾纸','餐垫','烛台','烛台','烛台','保险箱','钥匙盒','门铃','摄像头','安防系统','对讲机','电热毯','电热毯','暖宝宝','取暖器','电熨斗','吹风机','电吹风','体重秤','剃须刀','电动牙刷','按摩器','足浴盆','卷发器','电饭煲','榨汁机','咖啡机','微波炉','电磁炉','电烤箱','电压力锅','料理机','面包机','豆浆机','电水壶','电炖锅','炸锅','电热水袋','吸尘器','扫地机器人','除湿机','加湿器','空气净化器','空调','电风扇','取暖器','饮水机','冰箱','洗衣机','热水器','电视','投影仪','音响','DVD播放器','收音机','游戏机','剧场音响','电子琴','吉他','尤克里里','电子鼓','音箱','麦克风','电脑','笔记本电脑','平板电脑','台式电脑','服务器','显示器','键盘','鼠标','耳机','音箱','硬盘','U盘','打印机','扫描仪','复印机','传真机','办公电话','投影仪','电视盒','电脑包','数码相机','单反相机','摄像机','微单相机','摄影包','相机三脚架','闪光灯','相机镜头','滤镜','相机电池','相机充电器','相机包','单肩包','双肩包','背包','手提包','电脑包','旅行箱','登机箱','拉杆箱','背包','挎包','手提包','行李箱','钱包','手拿包','化妆包','卡包','长款钱包','短款钱包','手提包','斜挎包','胸包','钥匙包','零钱包','卡夹','手袋','手套','帽子','围巾','领带','领带夹','领结','领巾','袖扣','丝袜','裤袜','打底裤','长筒袜','中筒袜','短袜','帽子','围巾','领带','领巾','领结','袖扣','袖套','颈环','披肩','眼镜','太阳镜','眼镜架','隐形眼镜','老花镜','防辐射眼镜','翻盖手机壳','硅胶手机壳','皮质手机壳','软胶手机套','金属手机壳','创意手机壳','手机支架','手机贴膜','数据线','手机充电器','无线充电器','手机电池','手机耳机','手机饰品','自拍杆','手机保护套','手机支架','车载支架','手机底座','手机贴纸','手机链','手机挂件','手机配件','电源插座','插线板','插头','电源适配器','排插','遥控器','电池','电池充电器','家用电源','移动电源','充电宝','数码相框','摄像机','数码伴侣','耳机','音箱','MP3/MP4','收音机','电脑音响','U盘','记忆卡','移动硬盘','读卡器','路由器','网卡','交换机','网络存储','摄像头','投影仪','显示器','电脑','笔记本电脑','一体机','服务器','显示器支架','键盘','鼠标','电脑包','散热器','摄像头','高清线','硬盘盒','UPS电源','电脑清洁','游戏本','DIY电脑配件','办公家具','电脑椅','会议桌','文件柜','办公柜','工作站','实木家具','板式家具','红木家具','实木床','榻榻米床','皮艺床','布艺床','儿童床','婴儿床','实木衣柜','板式衣柜','斗柜','电视柜','实木餐桌','餐椅','实木书桌','书柜','实木沙发','皮艺沙发','布艺沙发','实木茶几','电脑桌','书架','实木餐椅','电脑椅','公寓家具','床','床垫','床头柜','衣柜','梳妆台','电视柜','沙发','餐桌','餐椅','书桌','书椅','儿童家具','儿童床','婴儿床','儿童衣柜','学习桌','学习椅','儿童书桌','儿童书椅','儿童沙发','儿童床垫','儿童玩具','玩具车','积木','益智玩具','遥控玩具','模型玩具','娃娃','动漫玩具','电动玩具','拼图','教育玩具','户外玩具','儿童DIY','婴儿用品','奶瓶','奶嘴','吸奶器','牙胶','牙刷','宝宝尿布','尿垫','湿巾','抱被','婴儿衣服','宝宝外套','婴儿裤','婴儿鞋','宝宝袜子','宝宝礼盒','婴儿床','婴儿推车','学步车','儿童安全座椅','婴儿背包','Electronics','Clothing','Shoes','Accessories','Home appliances','Furniture','Toys','Books','Stationery','Sportswear','Fitness equipment','Beauty products','Watches','Jewelry','Kitchen appliances','Outdoor gear','Luggage','Gaming accessories','Pet supplies','Automotive parts','Tools','Smartphones','Tablets','Laptops','Cameras','Headphones','Speakers','Drones','Printers','Office supplies','Video games','Board games','Garden tools','Bicycles','Camping equipment','Cookware','Sunglasses','Perfumes','Handbags','Wallets','Hiking boots','Backpacks','Cosmetics','Skincare products','Haircare products','Projectors','Television','Soundbars','Vacuum cleaners','Air purifiers','Bedding','Mattresses','Pillows','Golf clubs','Tennis rackets','Bath towels','Candles','Light fixtures','Art supplies','Paintings','Sculptures','Running shoes','Soccer balls','Baseball gloves','Fishing rods','Binoculars','Board shorts','Swimwear','Umbrellas','Hiking gear','Snowboards','Skis','Surfboards','Cycling helmets','Gym bags','Yoga mats','Treadmills','Elliptical machines','Power tools','Paintball gear','Camping tents','Sleeping bags','Travel adapters','Hiking shoes','Ski jackets','Snow boots','Winter gloves','Scarves','Belts','Ties','Cufflinks','Dress shirts','Sweaters','Coats','Scarves','Gloves','Beanies','Hats','Socks','Underwear','电子产品','服装','鞋','配饰','家电','家具','玩具','图书','文具','运动服','健身设备','美容产品','手表','珠宝','厨房电器','户外装备','行李','游戏配件','宠物用品','汽车配件','工具','智能手机','平板电脑','笔记本电脑','相机','耳机','音响','无人机','打印机','办公用品','视频游戏','棋盘游戏','园艺工具','自行车','露营装备','炊具','太阳镜','香水','手袋','钱包','徒步靴','背包','化妆品','护肤品','发护产品','投影仪','电视','音响','吸尘器','空气净化器','床上用品','床垫','枕头','高尔夫球杆','网球拍','浴巾','蜡烛','灯具','美术用品','绘画','雕塑','跑鞋','足球','棒球手套','钓竿','望远镜','沙滩裤','泳衣','雨伞','徒步装备','滑雪板','滑雪板','冲浪板','自行车头盔','健身包','瑜伽垫','跑步机','椭圆机','电源工具','枪战装备','露营帐篷','睡袋','旅行适配器','徒步鞋','滑雪夹克','雪靴','冬季手套','围巾','皮带','领带','袖扣','衬衫','毛衣','外套','围巾','手套','无檐帽','帽子','袜子','内衣'

];

     

        // $('.stext').hover(function(){
        //     setTimeout(function(){
        //         $('.searchlist').hide();
        //     },1000)
            
        // })
        $('.stext').blur(function(){
            $('.searchlist').hide();
            console.log("xx1")
        })
        $('.stext').focus(function(){
            showsearch();
            console.log("xx2")
        })
        $('.stext')[0].oninput=function(){
            showsearch();
            console.log("xx3")
        }

        $('.topfix .stext').blur(function(){
            $('.searchlist').hide();
            console.log("hh1")
        })
        $('.topfix .stext').focus(function(){
            showsearch();
            console.log("hh2")
        })
        $('.topfix .stext')[0].oninput=function(){
            showsearch();
            console.log("hh3")
        }


        function showsearch(){
            let keyword=$('.stext').val();
            let keyword2=$('.topfix .stext').val();
            if(keyword==""){
                console.log('true');
            }
            
            if(keyword||keyword2){
                
                $('.searchlist').show();
                let sheight = 25;
                $('.searchlist li.lb').remove();
                for(let i=0;i<searchArr.length;i++){
                    if(((searchArr[i].indexOf(keyword)>=0&&keyword!="")||(searchArr[i].indexOf(keyword2)>=0&&keyword2!=""))&&sheight<=500){
                        $('.searchlist').append("<li class=\"lb\">"+searchArr[i]+"</li>");
                        sheight+=25;
                    }
                    $('.searchlist').css('height',sheight+'px');

                }
            }
            else{
                $('.searchlist').hide();
                // console.log('hide');
            }
        }
        
        
        $('.close').click(function(){
            $('.searchlist').hide();
        })


        let seckilltop=$('.seckill').offset().top;
        let feedstop=$('.recommand').offset().top;

        let etop=0;
        let flag=0;
        let flag2=0;
        $(document).scroll(function(){
            
            etop=$(this).scrollTop();
            if(etop>=600){
                $('.lift').css('position','fixed');
                $('.lift').css('top','70px');
                $('.lift').css('height','275px');
                
            }else{
                $('.lift').css('position','relative');
                $('.lift').css('top','0px');
                $('.lift').css('height','220px');

            }

            if(etop>=seckilltop){
                $('.lift').find("span").eq(0).css("color","red")
                $('.lift').find("span").eq(0).parent().siblings("div").children('span').css("color","#000")
                $('.topfix').css('top','0px');
                $('.searchlist').css('position','fixed');
                $('.searchlist').css('top','45px');
                $('.cartp2').css('position','fixed');
                $('.cartp2').css('top','43px');
            }else{
                $('.lift').find("span").eq(0).css("color","black")
                $('.topfix').css('top','-60px');
                $('.searchlist').css('position','absolute');
                $('.searchlist').css('top','108px');
                $('.cartp2').css('position','absolute');
                $('.cartp2').css('top','105px');
                $('.topfix .cart').css('position','absolute');

                 
            }
            if(etop>=feedstop){
                $('.lift').find("span").eq(1).css("color","red")
                $('.lift').find("span").eq(1).parent().siblings("div").children('span').css("color","#000")
                $('.topfix2').css('top','52px');
                $('.lift').css('top','130px');
                
            }
            else{
                $('.topfix2').css('top','-115px');
            }

        })

        $('.floor').hover(function(){
            $(this).find("span").css('color','white');
            $(this).find("div").css('color','white');
        },function(){
            $(this).find("span").css('color','#000');
            $(this).find("div").css('color','red');
        })

        $('.db').click(function(){
            console.log("top");
            $("html, body").animate({ scrollTop: 0 }, "slow");
        })

        $('.jdseckill').click(function(){
            console.log("top");
            $("html, body").animate({ scrollTop: seckilltop }, "slow");
        })

        $('.wntj').click(function(){
            console.log("top");
            $("html, body").animate({ scrollTop: feedstop }, "slow");
        })

        $(".topnav a").eq(9).hover(function(){
            $('.location').show();
            $(".topnav a").eq(9).css('color','red')
            $(".topnav a").eq(9).css('background-color','#fff')
            $(".topnav a").eq(9).css('border','1px solid #90909076')
            $(".topnav a").eq(9).css('border-bottom','1px solid white')
        },function(){
            $('.location').hide();
            $(".topnav a").eq(9).css('border','1px solid transparent')
            $(".topnav a").eq(9).css('background-color','transparent')
            $(".topnav a").eq(9).css('color','#999')
        })

        $(".location").hover(function(){
            $('.location').show();
            $(".topnav a").eq(9).css('color','red')
            $(".topnav a").eq(9).css('background-color','#fff')
            $(".topnav a").eq(9).css('border','1px solid #90909076')
            $(".topnav a").eq(9).css('border-bottom','1px solid white')
        },function(){
            $('.location').hide();
            $(".topnav a").eq(9).css('border','1px solid transparent')
            $(".topnav a").eq(9).css('background-color','transparent')
            $(".topnav a").eq(9).css('color','#999')
        })





        $(".topnav a").eq(3).hover(function(){
            $('.p1').show();
            $(".topnav a").eq(3).css('color','red')
            $(".topnav a").eq(3).css('background-color','#fff')
            $(".topnav a").eq(3).css('border','1px solid #90909076')
            $(".topnav a").eq(3).css('border-bottom','1px solid white')
        },function(){
            $('.p1').hide();
            $(".topnav a").eq(3).css('border','1px solid transparent')
            $(".topnav a").eq(3).css('background-color','transparent')
            $(".topnav a").eq(3).css('color','#999')
        })

        $(".p1").hover(function(){
            $('.p1').show();
            $(".topnav a").eq(3).css('color','red')
            $(".topnav a").eq(3).css('background-color','#fff')
            $(".topnav a").eq(3).css('border','1px solid #90909076')
            $(".topnav a").eq(3).css('border-bottom','1px solid white')
        },function(){
            $('.p1').hide();
            $(".topnav a").eq(3).css('border','1px solid transparent')
            $(".topnav a").eq(3).css('background-color','transparent')
            $(".topnav a").eq(3).css('color','#999')
        })

        $(".topnav a").eq(4).hover(function(){
            $('.p2').show();
            $(".topnav a").eq(4).css('color','red')
            $(".topnav a").eq(4).css('background-color','#fff')
            $(".topnav a").eq(4).css('border','1px solid #90909076')
            $(".topnav a").eq(4).css('border-bottom','1px solid white')
        },function(){
            $('.p2').hide();
            $(".topnav a").eq(4).css('border','1px solid transparent')
            $(".topnav a").eq(4).css('background-color','transparent')
            $(".topnav a").eq(4).css('color','#999')
        })

        $(".p2").hover(function(){
            $('.p2').show();
            $(".topnav a").eq(4).css('color','red')
            $(".topnav a").eq(4).css('background-color','#fff')
            $(".topnav a").eq(4).css('border','1px solid #90909076')
            $(".topnav a").eq(4).css('border-bottom','1px solid white')
        },function(){
            $('.p2').hide();
            $(".topnav a").eq(4).css('border','1px solid transparent')
            $(".topnav a").eq(4).css('background-color','transparent')
            $(".topnav a").eq(4).css('color','#999')
        })

        $(".topnav a").eq(5).hover(function(){
            $('.p3').show();
            $(".topnav a").eq(5).css('color','red')
            $(".topnav a").eq(5).css('background-color','#fff')
            $(".topnav a").eq(5).css('border','1px solid #90909076')
            $(".topnav a").eq(5).css('border-bottom','1px solid white')
        },function(){
            $('.p3').hide();
            $(".topnav a").eq(5).css('border','1px solid transparent')
            $(".topnav a").eq(5).css('background-color','transparent')
            $(".topnav a").eq(5).css('color','#999')
        })

        $(".p3").hover(function(){
            $('.p3').show();
            $(".topnav a").eq(5).css('color','red')
            $(".topnav a").eq(5).css('background-color','#fff')
            $(".topnav a").eq(5).css('border','1px solid #90909076')
            $(".topnav a").eq(5).css('border-bottom','1px solid white')
        },function(){
            $('.p3').hide();
            $(".topnav a").eq(5).css('border','1px solid transparent')
            $(".topnav a").eq(5).css('background-color','transparent')
            $(".topnav a").eq(5).css('color','#999')
        })

        $(".topnav a").eq(6).hover(function(){
            $('.p4').show();
            $(".topnav a").eq(6).css('color','red')
            $(".topnav a").eq(6).css('background-color','#fff')
            $(".topnav a").eq(6).css('border','1px solid #90909076')
            $(".topnav a").eq(6).css('border-bottom','1px solid white')
        },function(){
            $('.p4').hide();
            $(".topnav a").eq(6).css('border','1px solid transparent')
            $(".topnav a").eq(6).css('background-color','transparent')
            $(".topnav a").eq(6).css('color','#999')
        })

        $(".p4").hover(function(){
            $('.p4').show();
            $(".topnav a").eq(6).css('color','red')
            $(".topnav a").eq(6).css('background-color','#fff')
            $(".topnav a").eq(6).css('border','1px solid #90909076')
            $(".topnav a").eq(6).css('border-bottom','1px solid white')
        },function(){
            $('.p4').hide();
            $(".topnav a").eq(6).css('border','1px solid transparent')
            $(".topnav a").eq(6).css('background-color','transparent')
            $(".topnav a").eq(6).css('color','#999')
        })

        $(".topnav a").eq(7).hover(function(){
            $('.p5').show();

        },function(){
            $('.p5').hide();

        })

        $(".p5").hover(function(){
            $('.p5').show();

        },function(){
            $('.p5').hide();
        })


        $(".cart").hover(function(){
            $('.cartp').show();
            $('.cartp2').show();
            $('.cart').css('border','1px solid red');
            $('.cart').css('border-bottom','1px solid white');
        },function(){
            $('.cartp').hide();
            $('.cartp2').hide();
            $('.cart').css('border','1px solid #cecece');
        })
        $(".cartp").hover(function(){
            $('.cartp').show();
            $('.cartp2').show();
            $('.cart').css('border','1px solid red');
            $('.cart').css('border-bottom','1px solid white');
        },function(){
            $('.cartp').hide();
            $('.cartp2').hide();
            $('.cart').css('border','1px solid #cecece');
        })
        $(".cartp2").hover(function(){
            $('.cartp').show();
            $('.cartp2').show();
            $('.cart').css('border','1px solid red');
            $('.cart').css('border-bottom','1px solid white');
        },function(){
            $('.cartp').hide();
            $('.cartp2').hide();
            $('.cart').css('border','1px solid #cecece');
        })


        $(".banner1 li").hover(function(){
            $('.b1p1').show();
        },function(){
            $('.b1p1').hide();
        })
        $(".b1p1").hover(function(){
            $('.b1p1').show();
        },function(){
            $('.b1p1').hide();
        })

        $('.but2').click(function(){
            $('.itemcontainer1').css('left','-834px');
            $('.itemcontainer2').css('left','-834px');
            console.log('yes');
        })

        $('.but1').click(function(){
            $('.itemcontainer1').css('left','0px');
            $('.itemcontainer2').css('left','0px');
        })

        $('.good').click(function(){
            window.location.href = "../html/index2.html"
        })
        $('.pic').click(function(){
            window.location.href = "../html/index2.html"
        })