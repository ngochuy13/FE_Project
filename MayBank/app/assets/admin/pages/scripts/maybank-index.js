var Index = function() {

    var dashboardMainChart = null;

    return {

        //main function
        init: function() {
            
            // url data source
            var dataURL_1 = 'test_data/01_totalwealth.xml';
            var dataURL_2 = 'test_data/02_networth_cashflow.xml';
            var dataURL_3 = 'test_data/03_investments.xml';

            $(window).scroll(function(event) {
                $('.icon-go-top').toggleClass('show' , ($(window).scrollTop() >= 100));
            });
            $('.icon-go-top').click(function(event) {
                /* Act on the event */
                event.preventDefault();
                $('html, body').animate({scrollTop:0}, '500');
            });

            $(document).on("click",".page-header .menu-toggler", function(){
                if($("html").hasClass("openNav")){
                    $("html").removeClass("openNav");
                }else{
                    $("html").addClass("openNav");
                }
            });
            $(document).on("click",".openNav", function(e){
                if(!$(e.target).closest('.page-header-menu').length){
                    $("html").removeClass("openNav");
                }
            });

            function randValue() {
                return (Math.floor(Math.random() * (1 + 40 - 20))) + 20;
            }
            // Changes XML to JSON
            function xmlToJson(xml) {

              // Create the return object
              var obj = {};

              if (xml.nodeType == 1) { // element
                // do attributes
                if (xml.attributes.length > 0) {
                  //obj["attributes"] = {};
                  for (var j = 0; j < xml.attributes.length; j++) {
                    var attribute = xml.attributes.item(j);
                    //obj["attributes"][attribute.nodeName] = attribute.nodeValue;
                    obj['@' + attribute.nodeName] = attribute.nodeValue;
                  }
                }
              } else if (xml.nodeType == 3) { // text
                obj = xml.nodeValue.trim(); // add trim here
              }

              // do children
              if (xml.hasChildNodes()) {
                for (var i = 0; i < xml.childNodes.length; i++) {
                  var item = xml.childNodes.item(i);
                  var nodeName = item.nodeName;
                  //  console.debug('child',nodeName,item)
                  if (typeof(obj[nodeName]) == "undefined") {
                    var tmp = xmlToJson(item);
                    if (tmp !== "") // if not empty string
                      obj[nodeName] = tmp;
                  } else {
                    if (typeof(obj[nodeName].push) == "undefined") {
                      var old = obj[nodeName];
                      obj[nodeName] = [];
                      obj[nodeName].push(old);
                    }
                    var tmp = xmlToJson(item);
                    if (tmp !== "") // if not empty string
                      obj[nodeName].push(tmp);
                  }
                }
              }
              if (!Array.isArray(obj) && typeof obj == 'object') {
                var keys = Object.keys(obj);
                if (keys.length == 1 && keys[0] == '#text') return obj['#text'];
                if (keys.length === 0) return null;
              }
              return obj;
            }
            function showTooltip(x, y, contents) {
                $('<div id="tooltip">' + contents + '</div>').css({
                    position: 'absolute',
                    display: 'none',
                    top: y + 5,
                    left: x + 15,
                    border: '1px solid #333',
                    padding: '4px',
                    color: '#fff',
                    'border-radius': '3px',
                    'background-color': '#333',
                    opacity: 0.80
                }).appendTo("body").fadeIn(200);
            }

            //  --------------------------        CHART
            var options = {
                series: {
                    lines: {
                        show: true,
                        lineWidth: 1,
                        fill: true,
                        fillColor: {
                            colors: [{
                                opacity: 1
                            }, {
                                opacity: 1
                            }]
                        }
                    },
                    points: {
                        show: false,
                        radius: 1,
                        lineWidth: 1
                    },
                    shadowSize: 1
                },
                grid: {
                    hoverable: true,
                    clickable: true,
                    tickColor: "transparent",
                    borderWidth: {top: 1, right: 1, bottom: 1, left: 1},
                    borderColor: {top: "rgba(255,255,255,0.8)", left: "transparent", right: "transparent", bottom: "transparent"},
                    color: 'transparent',
                    markingsStyle: 'dashed',
                    margin: {
                        top: 0,
                        left: 30,
                        bottom: 0,
                        right: 0
                    }
                },
                colors: ["#fee178", "#e4bc2a"],
                legend: {
                    show: false
                },
                xaxis: {
                    ticks: [[1, "Jan"], [2, "Feb"], [3, "Mar"], [4, "Apr"], [5, "May"], [6, "Jun"], [7, "Jul"], [8, "Aug"], [9, "Sep"], [10, "Oct"], [11, "Nov"], [12, "Dec"]],
                    tickDecimals: 0,
                    tickLength: 0,
                    tickColor: "rgba(255,255,255,0.8)",
                    color: "#fff",
                    labelHeight: 50,
                    font: {
                        size: 18, 
                        family: "'Helvetica Neue Regular', 'Arial', sans-serif"
                    }
                },
                yaxis: {
                    ticks: 10,
                    tickDecimals: 0,
                    tickSize: 100,
                    tickColor: "rgba(255,255,255,0.8)",
                    color: "#fff"
                }
            };
            function initChart(dataChart , idChart) {
                if ($('#'+idChart).size() != 1) {
                    return;
                }
                var plot = $.plot($("#"+idChart), dataChart , options);

                var previousPoint = null;
                $("#"+idChart).bind("plothover", function(event, pos, item) {
                    $("#x").text(pos.x.toFixed(2));
                    $("#y").text(pos.y.toFixed(2));

                    if (item) {
                        if (previousPoint != item.dataIndex) {
                            previousPoint = item.dataIndex;

                            $("#tooltip").remove();
                            var x = item.datapoint[0].toFixed(2),
                                y = item.datapoint[1].toFixed(2);

                            showTooltip(item.pageX, item.pageY, "Amount " + y);
                        }
                    } else {
                        $("#tooltip").remove();
                        previousPoint = null;
                    }
                });
            }

            // initChart(pageviews , visitors);
            var chartNetworth, chartTotal;
            var monthNames = {"January": 1, "February": 2, "March": 3, "April": 4, "May": 5, "June": 6, "July": 7, "August": 8, "September": 9, "October": 10, "November": 11, "December": 12 };
            $.ajax({
                url: dataURL_2,
                type: 'GET',
                dataType: 'xml'
              })
              .done(function(data) {
                var obj = xmlToJson(data);
                // console.log('done' , obj);
                var dataChart = [], dataChart_2 = [];

                // conver name month to int month
                $.each(obj.data.networth.item,function(i, el) {
                    obj.data.networth.item[i].month = monthNames[el.month];
                });
                $.each(obj.data.cashflow.item,function(i, el) {
                    obj.data.cashflow.item[i].month = monthNames[el.month];
                });
                // console.log(obj);

                $.each(obj.data.networth.item,function(index, el) {
                    dataChart.push([parseInt(el.month) , (accounting.unformat(el.amount)/1000) ]);
                });
                chartNetworth = [{
                    data: dataChart,
                    label: 'Networth',
                    lines: {
                        lineWidth: 1,
                    },
                    shadowSize: 0
                }
                ];
                initChart(chartNetworth , 'chart_1');

                dataChart = [], dataChart_2 = [];
                $.each(obj.data.cashflow.item,function(index, el) {
                    dataChart.push([parseInt(el.month) , (accounting.unformat(el.net_worth)/1000)]);
                    dataChart_2.push([parseInt(el.month) , (accounting.unformat(el.total_assets)/1000)]);
                });
                chartTotal = [{
                    data: dataChart_2,
                    label: 'Total Assets',
                    lines: {
                        lineWidth: 1,
                    },
                    shadowSize: 0
                },{
                    data: dataChart,
                    label: 'Net Worth',
                    lines: {
                        lineWidth: 1,
                    },
                    shadowSize: 0
                }];
                initChart(chartTotal , 'chart_2');
                $('#tab_7_2').removeClass('active');
              })
              .fail(function() {
                console.log("error");
              });

            //  --------------------------        PIE

            var initPie = function(idPie , dataPie){
                var labelRadius = 40;
                if($(window).width() < 768){
                    labelRadius = 30;
                }
                return AmCharts.makeChart(idPie, {
                    "type": "pie",
                    "theme": "maybank",

                    "fontFamily": 'Arial',
                    "color":    '#fff',
                    "radius": "34.4%",
                    "innerRadius": "56.81%",

                    "dataProvider": dataPie,
                    "valueField": "percentage",
                    "titleField": "symbol",
                    "labelRadius": labelRadius,
                    "fontSize": $(window).width() > 767 ? 21: 10,

                    "balloonFunction": function(label){
                        return label.title.toUpperCase() + " - " + label.value + "%";
                    },
                    "labelFunction": function(label){
                        return label.title.toUpperCase() + " \n " + label.value + "%";
                    },

                    "exportConfig": {
                        menuItems: [{
                            icon: Metronic.getGlobalPluginsPath() + "amcharts/amcharts/images/export.png",
                            format: 'png'
                        }]
                    }
                });
            }            
            // initPie('pie_chart');

            var investments, investmentPie;
            var initDataTableInvestments = function(data){
                var dataStockRows = '';
                $.each(data.stock, function(i,el){
                    var classVolume = el.volume.indexOf('-') == -1 ? 'green' : 'red';
                    var valueVolume = el.volume.replace('-', '');

                    var tmpStock = '<tr><td><span class="text-uppercase">'+ el.symbol +'</span></td><td><span class="'+ classVolume +'">'+ valueVolume +'</span></td><td><span>'+ el.avg_price +'</span></td><td class="text-center"><span>'+ el.market_price +'</span></td><td class="text-right"><span>'+ el.profit +'</span></td></tr>';
                    dataStockRows += tmpStock;
                });
                $('.table-chart-pipe tbody').html(dataStockRows);
                $('.table-chart-pipe.stacktable-custom').remove();
                setTimeout(function(){
                    $('.table-chart-pipe').stacktable({myClass:'stacktable-custom'});
                } , 300);
            };
            $.ajax({
                url: dataURL_3,
                type: 'GET',
                dataType: 'xml'
              })
              .done(function(data) {
                var obj = xmlToJson(data);
                // console.log('done' , obj);

                investments = obj.data.investment;
                investmentPie = initPie('pie_chart' , investments.item[0].stock);
                var title = investments.item[0].title.split(' ');
                if($(window).width() > 767){
                    investmentPie.addLabel(0, '44%', title[0].toUpperCase(), "center", "21", "#fed12f");
                    investmentPie.addLabel(0, '49%', title[1].toUpperCase(), "center", "27", "#fed12f");
                }else {
                    investmentPie.addLabel(0, '44%', title[0].toUpperCase(), "center", "10.5", "#fed12f");
                    investmentPie.addLabel(0, '49%', title[1].toUpperCase(), "center", "13.5", "#fed12f");                    
                }

                var selectOption = '';
                $.each(investments.item, function(i,el){
                    selectOption += '<option value="'+el.account+'">'+el.account+'</option>';
                });
                $('.tools select').html(selectOption);
                $('.tools select').selectpicker('refresh');

                initDataTableInvestments(investments.item[0]);
              })
              .fail(function() {
                console.log("error");
              });

              $('.tools select').on('change',function(){
                var val = $(this).val();
                $.each(investments.item, function(i,el){
                   if(val == el.account){
                    investmentPie = initPie('pie_chart' , el.stock);
                    var title = el.title.split(' ');
                    if($(window).width() > 767){
                        investmentPie.addLabel(0, '44%', title[0].toUpperCase(), "center", "21", "#fed12f");
                        investmentPie.addLabel(0, '49%', title[1].toUpperCase(), "center", "27", "#fed12f");
                    }else {
                        investmentPie.addLabel(0, '44%', title[0].toUpperCase(), "center", "10.5", "#fed12f");
                        investmentPie.addLabel(0, '49%', title[1].toUpperCase(), "center", "13.5", "#fed12f");                    
                    }
                    initDataTableInvestments(el);
                   }
                });
              });

            // ---------------------------  Init data For Total Wealth
            var initDataTotalWealth = function(data){
                $('.status .total').html(data.totalwealth.amount + ' ' + data.totalwealth.currency);
                if(data.totalwealth.profit.indexOf('-') >= 0 ){
                    $('.status .up').addClass('down').html('<spam class="fa fa-sort-desc"></spam>&nbsp;'+ data.totalwealth.profit);
                }else{
                    $('.status .up').html('<spam class="fa fa-sort-asc"></spam>&nbsp;' + data.totalwealth.profit);
                }
                var accounts = '';
                $.each(data.accounts.account, function(index, el){
                    var amount = accounting.unformat(el.amount) / 1000 ;
                    var classProfit = el.profit.indexOf('-') == -1 ? 'green' : 'red';
                    var valueProfit = el.profit.replace('-', '');

                    var tmpAccount = '<tr><td><span class="head">'+ el.type +'</span></td><td class="text-right"><span class="'+ classProfit +'">'+ valueProfit +'</span></td><td class="amount_currency text-right">'+ amount +'k <span>'+ el.currency +'</span></td><td class="text-right"><span>'+ el.percentage_portfolio +'</span></td><td class="process-td"><span class="process"><i style="width: '+ el.percentage_portfolio +'"></i></span></td></tr>';
                    accounts += tmpAccount;
                });
                $('table.accounts tbody').html(accounts);

                if(data.netflow.outflow.indexOf('-') >= 0 ){
                    $('table .total .cash_out').addClass('red').html(data.netflow.outflow.replace('-', ''));
                }else{
                    $('table .total .cash_out').html(data.netflow.outflow);
                }
                
                if(data.netflow.inflow.indexOf('-') >= 0 ){
                    $('table .total .cash_in').addClass('red').html(data.netflow.inflow.replace('-', ''));
                }else{
                    $('table .total .cash_in').html(data.netflow.inflow);
                } 

                if(data.netflow.net_balance_flow.indexOf('-') >= 0 ){
                    $('table .total .net_balance').addClass('red').html(data.netflow.net_balance_flow.replace('-', ''));
                }else{
                    $('table .total .net_balance').html(data.netflow.net_balance_flow);
                }
                $('table.accounts tbody').prepend("<tr><th colspan='5' class='hidden' style='font-size: 0px'></th></tr>");
                setTimeout(function(){
                    $('table.accounts').stacktable({myClass:'stacktable-custom'});
                } , 300);
            }
            $.ajax({
                url: dataURL_1,
                type: 'GET',
                dataType: 'xml'
              })
              .done(function(data) {
                var obj = xmlToJson(data);
                // console.log('done' , obj );
                initDataTotalWealth(obj.data);
              })
              .fail(function() {
                console.log("error");
              });

        },

        initJQVMAP: function() {
            
        },

        initCharts: function() {
            
        },

        redrawCharts: function() {
            // dashboardMainChart.resizeHandler();
        },

        initMiniCharts: function() {

            
        }

    };

}();