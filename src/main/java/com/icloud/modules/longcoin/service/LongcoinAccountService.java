package com.icloud.modules.longcoin.service;


import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.icloud.common.MapEntryUtils;
import com.icloud.common.PageUtils;
import com.icloud.modules.longcoin.entity.LongcoinAccount;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.icloud.basecommon.service.BaseServiceImpl;
import com.icloud.modules.longcoin.dao.LongcoinAccountMapper;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Map;
/**
 * 龙币账号参数管理
 * @author zdh
 * @email yyyyyy@cm.com
 * @date 2020-11-12 16:32:46
 */
@Service
@Transactional
public class LongcoinAccountService extends BaseServiceImpl<LongcoinAccountMapper,LongcoinAccount> {

    @Autowired
    private LongcoinAccountMapper longcoinAccountMapper;

    @Override
    public PageUtils<LongcoinAccount> findByPage(int pageNo, int pageSize, Map<String, Object> query) {
        PageHelper.startPage(pageNo, pageSize);
        List<LongcoinAccount> list = longcoinAccountMapper.queryMixList(MapEntryUtils.clearNullValue(query));
        PageInfo<LongcoinAccount> pageInfo = new PageInfo<LongcoinAccount>(list);
        PageUtils<LongcoinAccount> page = new PageUtils<LongcoinAccount>(list,(int)pageInfo.getTotal(),pageSize,pageNo);
        return page;
    }
}

