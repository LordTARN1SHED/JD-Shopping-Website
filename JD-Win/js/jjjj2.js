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
    $('.seckill').hide();
    $('.recommand').hide();
    $('.recommand').hide();
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

       

        let searchArr=['苹果手机','苹果手机','苹果手机','苹果手机','苹果手机','苹果手机','苹果手机','苹果手机','苹果手机','Electronics','Clothing','Shoes','Accessories','Home appliances','Furniture','Toys','Books','Stationery','Sportswear','Fitness equipment','Beauty products','Watches','Jewelry','Kitchen appliances','Outdoor gear','Luggage','Gaming accessories','Pet supplies','Automotive parts','Tools','Smartphones','Tablets','Laptops','Cameras','Headphones','Speakers','Drones','Printers','Office supplies','Video games','Board games','Garden tools','Bicycles','Camping equipment','Cookware','Sunglasses','Perfumes','Handbags','Wallets','Hiking boots','Backpacks','Cosmetics','Skincare products','Haircare products','Projectors','Television','Soundbars','Vacuum cleaners','Air purifiers','Bedding','Mattresses','Pillows','Golf clubs','Tennis rackets','Bath towels','Candles','Light fixtures','Art supplies','Paintings','Sculptures','Running shoes','Soccer balls','Baseball gloves','Fishing rods','Binoculars','Board shorts','Swimwear','Umbrellas','Hiking gear','Snowboards','Skis','Surfboards','Cycling helmets','Gym bags','Yoga mats','Treadmills','Elliptical machines','Power tools','Paintball gear','Camping tents','Sleeping bags','Travel adapters','Hiking shoes','Ski jackets','Snow boots','Winter gloves','Scarves','Belts','Ties','Cufflinks','Dress shirts','Sweaters','Coats','Scarves','Gloves','Beanies','Hats','Socks','Underwear','电子产品','服装','鞋','配饰','家电','家具','玩具','图书','文具','运动服','健身设备','美容产品','手表','珠宝','厨房电器','户外装备','行李','游戏配件','宠物用品','汽车配件','工具','智能手机','平板电脑','笔记本电脑','相机','耳机','音响','无人机','打印机','办公用品','视频游戏','棋盘游戏','园艺工具','自行车','露营装备','炊具','太阳镜','香水','手袋','钱包','徒步靴','背包','化妆品','护肤品','发护产品','投影仪','电视','音响','吸尘器','空气净化器','床上用品','床垫','枕头','高尔夫球杆','网球拍','浴巾','蜡烛','灯具','美术用品','绘画','雕塑','跑鞋','足球','棒球手套','钓竿','望远镜','沙滩裤','泳衣','雨伞','徒步装备','滑雪板','滑雪板','冲浪板','自行车头盔','健身包','瑜伽垫','跑步机','椭圆机','电源工具','枪战装备','露营帐篷','睡袋','旅行适配器','徒步鞋','滑雪夹克','雪靴','冬季手套','围巾','皮带','领带','袖扣','衬衫','毛衣','外套','围巾','手套','无檐帽','帽子','袜子','内衣'
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
                    if((searchArr[i].indexOf(keyword)>=0&&keyword!="")||(searchArr[i].indexOf(keyword2)>=0&&keyword2!="")){
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
            $('.itemcontainer1').css('left','-258px');
            $('.itemcontainer2').css('left','-272px');
            console.log('yes');
        })

        $('.but1').click(function(){
            $('.itemcontainer1').css('left','0px');
            $('.itemcontainer2').css('left','-14px');
        })


        document.addEventListener("DOMContentLoaded", function () {
            // setInterval(function(){},100);
            var mainImage = document.getElementById("mainImage");
            var cover = document.getElementById("cover");
            var zoomOverlay = document.getElementById("zoomOverlay");
            var previewContainer = document.querySelector(".preview-container");
          
            cover.addEventListener("mousemove", function (event) {
              var rect = mainImage.getBoundingClientRect();
              var x = event.clientX - rect.left;
              var y = event.clientY - rect.top;
          
              var offsetX = (x - 50) / rect.width * 100; // 20 是你希望的横向偏移量
              var offsetY = (y - 50) / rect.height * 100; // 20 是你希望的纵向偏移量
              
          
            // 添加固定偏移量
    var fixedOffsetX = 50; // 通过调整这个值来控制横向偏移
    var fixedOffsetY = 50; // 通过调整这个值来控制纵向偏移

    // 直接设置偏移量
    zoomOverlay.style.left = offsetX - (50) + fixedOffsetX + "%";
    zoomOverlay.style.top = offsetY - (50) + fixedOffsetY + "%";
          
              previewContainer.style.display = "block";
              zoomOverlay.style.display = "block";
          
              var previewImage = document.getElementById("zoomedPreview");
              previewImage.style.transform = "translate(-" + offsetX + "%, -" + offsetY + "%)";
            });
          
            cover.addEventListener("mouseleave", function () {
                setInterval(function(){},100);
              previewContainer.style.display = "none";
              zoomOverlay.style.display = "none";
            });
          });
          

          $('.it1').click(function(){
            $("#mainImage").attr("src", "../imgs/nv1.jpg");
            $("#zoomedPreview").attr("src", "../imgs/nv1.jpg");
          })
          $('.it2').click(function(){
            $("#mainImage").attr("src", "../imgs/nv2.jpg");
            $("#zoomedPreview").attr("src", "../imgs/nv2.jpg");
          })
          $('.it3').click(function(){
            $("#mainImage").attr("src", "../imgs/nv3.jpg");
            $("#zoomedPreview").attr("src", "../imgs/nv3.jpg");
          })
          $('.it4').click(function(){
            $("#mainImage").attr("src", "../imgs/nv4.jpg");
            $("#zoomedPreview").attr("src", "../imgs/nv4.jpg");
          })
          $('.it5').click(function(){
            $("#mainImage").attr("src", "../imgs/nv5.jpg");
            $("#zoomedPreview").attr("src", "../imgs/nv5.jpg");
          })
          $('.it6').click(function(){
            $("#mainImage").attr("src", "../imgs/nv6.jpg");
            $("#zoomedPreview").attr("src", "../imgs/nv6.jpg");
          })
          $('.it7').click(function(){
            $("#mainImage").attr("src", "../imgs/nv7.jpg");
            $("#zoomedPreview").attr("src", "../imgs/nv7.jpg");
          })
          $('.it8').click(function(){
            $("#mainImage").attr("src", "../imgs/nv8.jpg");
            $("#zoomedPreview").attr("src", "../imgs/nv8.jpg");
          })
       