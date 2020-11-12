package com.icloud.modules.longcoin.service;


import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.icloud.common.MapEntryUtils;
import com.icloud.common.PageUtils;
import com.icloud.modules.longcoin.entity.LongcoinLocalrecord;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.icloud.basecommon.service.BaseServiceImpl;
import com.icloud.modules.longcoin.dao.LongcoinLocalrecordMapper;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Map;
/**
 * 本地龙币消费记录
 * @author zdh
 * @email yyyyyy@cm.com
 * @date 2020-11-12 16:32:46
 */
@Service
@Transactional
public class LongcoinLocalrecordService extends BaseServiceImpl<LongcoinLocalrecordMapper,LongcoinLocalrecord> {

    @Autowired
    private LongcoinLocalrecordMapper longcoinLocalrecordMapper;

    @Override
    public PageUtils<LongcoinLocalrecord> findByPage(int pageNo, int pageSize, Map<String, Object> query) {
        PageHelper.startPage(pageNo, pageSize);
        List<LongcoinLocalrecord> list = longcoinLocalrecordMapper.queryMixList(MapEntryUtils.clearNullValue(query));
        PageInfo<LongcoinLocalrecord> pageInfo = new PageInfo<LongcoinLocalrecord>(list);
        PageUtils<LongcoinLocalrecord> page = new PageUtils<LongcoinLocalrecord>(list,(int)pageInfo.getTotal(),pageSize,pageNo);
        return page;
    }
}

