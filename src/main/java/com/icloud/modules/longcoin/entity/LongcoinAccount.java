package com.icloud.modules.longcoin.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.io.Serializable;

/**
 * 龙币账号参数管理
 * 
 * @author zdh
 * @email yyyyyy@cm.com
 * @date 2020-11-12 16:32:46
 */
@Data
@TableName("t_longcoin_account")
public class LongcoinAccount implements Serializable {
	private static final long serialVersionUID = 1L;

   	   /*  */
       @TableId(value="id", type= IdType.AUTO)
       private Long id;
   	   	   /* 账号sid */
       @TableField("sid")
       private String sid;
   	   	   /* 签名key */
       @TableField("signkey")
       private String signkey;
   	   	   /* 充值类型 */
       @TableField("rechargetype")
       private String rechargetype;
   	   	   /* 消费类型 */
       @TableField("consumetype")
       private String consumetype;
   	   	   /* 查询地址 */
       @TableField("query_url")
       private String queryUrl;
   	   	   /* 充值地址 */
       @TableField("recharge_url")
       private String rechargeUrl;
   	   	   /* 消费地址 */
       @TableField("consume_url")
       private String consumeUrl;
   	   	   /* 龙币商城账单文件路径 */
       @TableField("data_file_dir")
       private String dataFileDir;
   	   	   /* 下载账单后的备份路径 */
       @TableField("data_bak_dir")
       private String dataBakDir;
   	   	   /* 本地下载账单路径 */
       @TableField("longcoin_data_bill")
       private String longcoinDataBill;
   	   	   /* 账号分配的活动名称 */
       @TableField("activity_nam")
       private String activityNam;
   	
}
