$(function () {
    $("#jqGrid").jqGrid({
        url: baseURL + 'longcoin/longcoinlocalrecord/list',
        datatype: "json",
        colModel: [			
			{ label: 'id', name: 'id', index: 'id', width: 50, key: true },
			{ label: '设备号', name: 'sid', index: 'sid', width: 80 },
			{ label: '流水号', name: 'seq', index: 'seq', width: 80 }, 			
			{ label: '用户账户', name: 'useraccount', index: 'useraccount', width: 80 }, 			
            { label: '账户类型', name: 'accounttype', width: 60, formatter: function(value, options, row){
                            return value =='1' ?'<span class="label label-success">手机号</span>':(value =='2' ?'<span class="label label-success">微信openId</span>':
                                (value =='3' ?'<span class="label label-success">微信unionId</span>':(value =='4' ?'<span class="label label-success">未知</span>':'其他')));
                        }},
			 { label: '操作类别', name: 'operatortype', width: 60, formatter: function(value, options, row){
                                        return value =='2' ?'<span class="label label-success">充值</span>':(value =='3' ?'<span class="label label-success">消费</span>':'其他');

                                    }},
			{ label: '充值消耗类别ID ', name: 'operatortypeid', index: 'operatortypeid', width: 80 }, 			
			{ label: '金额', name: 'amount', index: 'amount', width: 80 }, 			
			{ label: '本地创建时间', name: 'createTime', index: 'create_time', width: 80 }, 			
			{ label: '是否已对账', name: 'checked', width: 60, formatter: function(value, options, row){
                return value =='0' ?'<span class="label label-success">否</span>':(value =='1' ?'<span class="label label-success">已对账</span>':'其他');

            }},
			{ label: '对账结果', name: 'checkedResult', width: 60, formatter: function(value, options, row){
                return value =='0' ?'<span class="label label-success">本地多</span>':(value =='1' ?'<span class="label label-success">平账</span>':
                (value =='2' ?'<span class="label label-success">龙币商城多</span>':'其他'));
            }},
			{ label: '对账时间', name: 'checkedTime', index: 'checked_time', width: 80 }, 			
			{ label: '异常处理状态', name: 'exceptionFlag', width: 60, formatter: function(value, options, row){
                            return value =='0' ?'<span class="label label-success">未处理</span>':(value =='1' ?'<span class="label label-success">正常</span>':'已处理');

                        }},
			{ label: '处理结果', name: 'result', index: 'result', width: 80 },
			{ label: '来源渠道', name: 'fromType', width: 60, formatter: function(value, options, row){
                            return value =='1' ?'<span class="label label-success">百色现场会</span>':(value =='2' ?'<span class="label label-success">佛山推多多</span>':
                            (value =='3' ?'<span class="label label-success">其他</span>':'未知'));
                        }},
			{ label: '订单状态', name: 'status', width: 60, formatter: function(value, options, row){
                                        return value =='0' ?'<span class="label label-success">创建</span>':(value =='1' ?'<span class="label label-success">成功</span>':
                                        (value =='2' ?'<span class="label label-success">失败</span>':'未知'));
                                    }},
			{ label: '消费充值结果描述', name: 'statusResult', index: 'status_result', width: 80 }			
        ],
		viewrecords: true,
        height: 385,
        rowNum: 10,
		rowList : [10,30,50],
        rownumbers: true, 
        rownumWidth: 25, 
        autowidth:true,
        multiselect: true,
        pager: "#jqGridPager",
        jsonReader : {
            root: "page.list",
            page: "page.currPage",
            total: "page.totalPage",
            records: "page.totalCount"
        },
        prmNames : {
            page:"page", 
            rows:"limit", 
            order: "order"
        },
        gridComplete:function(){
        	//隐藏grid底部滚动条
        	$("#jqGrid").closest(".ui-jqgrid-bdiv").css({ "overflow-x" : "hidden" }); 
        }
    });
});

var vm = new Vue({
	el:'#icloudapp',
	data:{
		showList: true,
		title: null,
		longcoinLocalrecord: {}
	},
	methods: {
		query: function () {
			vm.reload();
		},
		add: function(){
			vm.showList = false;
			vm.title = "新增";
			vm.longcoinLocalrecord = {};
		},
		update: function (event) {
			var id = getSelectedRow();
			if(id == null){
				return ;
			}
			vm.showList = false;
            vm.title = "修改";
            
            vm.getInfo(id)
		},
		saveOrUpdate: function (event) {
		    $('#btnSaveOrUpdate').button('loading').delay(1000).queue(function() {
                var url = vm.longcoinLocalrecord.id == null ? "longcoin/longcoinlocalrecord/save" : "longcoin/longcoinlocalrecord/update";
                $.ajax({
                    type: "POST",
                    url: baseURL + url,
                    contentType: "application/json",
                    data: JSON.stringify(vm.longcoinLocalrecord),
                    success: function(r){
                        if(r.code === 0){
                             layer.msg("操作成功", {icon: 1});
                             vm.reload();
                             $('#btnSaveOrUpdate').button('reset');
                             $('#btnSaveOrUpdate').dequeue();
                        }else{
                            layer.alert(r.msg);
                            $('#btnSaveOrUpdate').button('reset');
                            $('#btnSaveOrUpdate').dequeue();
                        }
                    }
                });
			});
		},
		del: function (event) {
			var ids = getSelectedRows();
			if(ids == null){
				return ;
			}
			var lock = false;
            layer.confirm('确定要删除选中的记录？', {
                btn: ['确定','取消'] //按钮
            }, function(){
               if(!lock) {
                    lock = true;
		            $.ajax({
                        type: "POST",
                        url: baseURL + "longcoin/longcoinlocalrecord/delete",
                        contentType: "application/json",
                        data: JSON.stringify(ids),
                        success: function(r){
                            if(r.code == 0){
                                layer.msg("操作成功", {icon: 1});
                                $("#jqGrid").trigger("reloadGrid");
                            }else{
                                layer.alert(r.msg);
                            }
                        }
				    });
			    }
             }, function(){
             });
		},
		getInfo: function(id){
			$.get(baseURL + "longcoin/longcoinlocalrecord/info/"+id, function(r){
                vm.longcoinLocalrecord = r.longcoinLocalrecord;
            });
		},
		reload: function (event) {
			vm.showList = true;
			var page = $("#jqGrid").jqGrid('getGridParam','page');
			$("#jqGrid").jqGrid('setGridParam',{ 
                page:page
            }).trigger("reloadGrid");
		}
	}
});