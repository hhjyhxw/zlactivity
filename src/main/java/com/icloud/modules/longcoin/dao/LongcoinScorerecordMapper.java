package com.icloud.modules.longcoin.dao;

import com.icloud.modules.longcoin.entity.LongcoinScorerecord;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.List;
import java.util.Map;

/**
 * 积分商城龙币记录
 * @author zdh
 * @email yyyyyy@cm.com
 * @date 2020-11-12 16:32:46
 */
public interface LongcoinScorerecordMapper extends BaseMapper<LongcoinScorerecord> {

	List<LongcoinScorerecord> queryMixList(Map<String, Object> map);
}
