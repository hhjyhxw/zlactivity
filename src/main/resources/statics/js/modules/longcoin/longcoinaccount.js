$(function () {
    $("#jqGrid").jqGrid({
        url: baseURL + 'longcoin/longcoinaccount/list',
        datatype: "json",
        colModel: [			
			{ label: 'id', name: 'id', index: 'id', width: 50, key: true },
			{ label: '账号sid', name: 'sid', index: 'sid', width: 80 }, 			
			{ label: '签名key', name: 'signkey', index: 'signkey', width: 80 }, 			
			{ label: '充值类型', name: 'rechargetype', index: 'rechargetype', width: 80 }, 			
			{ label: '消费类型', name: 'consumetype', index: 'consumetype', width: 80 }, 			
			{ label: '查询地址', name: 'queryUrl', index: 'query_url', width: 80 }, 			
			{ label: '充值地址', name: 'rechargeUrl', index: 'recharge_url', width: 80 }, 			
			{ label: '消费地址', name: 'consumeUrl', index: 'consume_url', width: 80 }, 			
			{ label: '龙币商城账单文件路径', name: 'dataFileDir', index: 'data_file_dir', width: 80 }, 			
			{ label: '下载账单后的备份路径', name: 'dataBakDir', index: 'data_bak_dir', width: 80 }, 			
			{ label: '本地下载账单路径', name: 'longcoinDataBill', index: 'longcoin_data_bill', width: 80 }, 			
			{ label: '账号分配的活动名称', name: 'activityNam', index: 'activity_nam', width: 80 }			
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
		longcoinAccount: {}
	},
	methods: {
		query: function () {
			vm.reload();
		},
		add: function(){
			vm.showList = false;
			vm.title = "新增";
			vm.longcoinAccount = {};
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
                var url = vm.longcoinAccount.id == null ? "longcoin/longcoinaccount/save" : "longcoin/longcoinaccount/update";
                $.ajax({
                    type: "POST",
                    url: baseURL + url,
                    contentType: "application/json",
                    data: JSON.stringify(vm.longcoinAccount),
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
                        url: baseURL + "longcoin/longcoinaccount/delete",
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
			$.get(baseURL + "longcoin/longcoinaccount/info/"+id, function(r){
                vm.longcoinAccount = r.longcoinAccount;
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