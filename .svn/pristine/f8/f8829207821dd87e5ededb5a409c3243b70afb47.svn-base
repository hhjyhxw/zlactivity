package com.icloud.modules.longcoin.controller;

import java.util.Arrays;
import java.util.Map;
import com.icloud.basecommon.model.Query;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.icloud.modules.longcoin.entity.LongcoinAccount;
import com.icloud.modules.longcoin.service.LongcoinAccountService;
import com.icloud.basecommon.model.Query;
import com.icloud.common.PageUtils;
import com.icloud.common.R;
import com.icloud.common.validator.ValidatorUtils;
import com.icloud.modules.sys.controller.AbstractController;


/**
 * 龙币账号参数管理
 *
 * @author zdh
 * @email yyyyyy@cm.com
 * @date 2020-11-12 14:09:18
 * 菜单主连接： modules/longcoin/longcoinaccount.html
 */
@RestController
@RequestMapping("longcoin/longcoinaccount")
public class LongcoinAccountController extends AbstractController{
    @Autowired
    private LongcoinAccountService longcoinAccountService;

    /**
     * 列表
     */
    @RequestMapping("/list")
    @RequiresPermissions("longcoin:longcoinaccount:list")
    public R list(@RequestParam Map<String, Object> params){
        Query query = new Query(params);
        PageUtils page = longcoinAccountService.findByPage(query.getPageNum(),query.getPageSize(), query);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{id}")
    @RequiresPermissions("longcoin:longcoinaccount:info")
    public R info(@PathVariable("id") Long id){
        LongcoinAccount longcoinAccount = (LongcoinAccount)longcoinAccountService.getById(id);

        return R.ok().put("longcoinAccount", longcoinAccount);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    @RequiresPermissions("longcoin:longcoinaccount:save")
    public R save(@RequestBody LongcoinAccount longcoinAccount){
        longcoinAccountService.save(longcoinAccount);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    @RequiresPermissions("longcoin:longcoinaccount:update")
    public R update(@RequestBody LongcoinAccount longcoinAccount){
        ValidatorUtils.validateEntity(longcoinAccount);
        longcoinAccountService.updateById(longcoinAccount);
        
        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    @RequiresPermissions("longcoin:longcoinaccount:delete")
    public R delete(@RequestBody Long[] ids){
        longcoinAccountService.removeByIds(Arrays.asList(ids));

        return R.ok();
    }

}
