package com.icloud.modules.longcoin.dao;

import com.icloud.modules.longcoin.entity.LongcoinLocalrecord;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.List;
import java.util.Map;

/**
 * 本地龙币消费记录
 * @author zdh
 * @email yyyyyy@cm.com
 * @date 2020-11-12 16:32:46
 */
public interface LongcoinLocalrecordMapper extends BaseMapper<LongcoinLocalrecord> {

	List<LongcoinLocalrecord> queryMixList(Map<String, Object> map);
}
