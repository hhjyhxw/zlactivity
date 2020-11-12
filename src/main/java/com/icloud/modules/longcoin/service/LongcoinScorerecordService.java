package com.icloud.modules.longcoin.service;


import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.icloud.common.MapEntryUtils;
import com.icloud.common.PageUtils;
import com.icloud.modules.longcoin.entity.LongcoinScorerecord;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.icloud.basecommon.service.BaseServiceImpl;
import com.icloud.modules.longcoin.dao.LongcoinScorerecordMapper;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Map;
/**
 * 积分商城龙币记录
 * @author zdh
 * @email yyyyyy@cm.com
 * @date 2020-11-12 16:32:46
 */
@Service
@Transactional
public class LongcoinScorerecordService extends BaseServiceImpl<LongcoinScorerecordMapper,LongcoinScorerecord> {

    @Autowired
    private LongcoinScorerecordMapper longcoinScorerecordMapper;

    @Override
    public PageUtils<LongcoinScorerecord> findByPage(int pageNo, int pageSize, Map<String, Object> query) {
        PageHelper.startPage(pageNo, pageSize);
        List<LongcoinScorerecord> list = longcoinScorerecordMapper.queryMixList(MapEntryUtils.clearNullValue(query));
        PageInfo<LongcoinScorerecord> pageInfo = new PageInfo<LongcoinScorerecord>(list);
        PageUtils<LongcoinScorerecord> page = new PageUtils<LongcoinScorerecord>(list,(int)pageInfo.getTotal(),pageSize,pageNo);
        return page;
    }
}

