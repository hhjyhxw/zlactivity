package com.icloud.modules.longcoin.dao;

import com.icloud.modules.longcoin.entity.LongcoinAccount;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import java.util.List;
import java.util.Map;

/**
 * 龙币账号参数管理
 * @author zdh
 * @email yyyyyy@cm.com
 * @date 2020-11-12 16:32:46
 */
public interface LongcoinAccountMapper extends BaseMapper<LongcoinAccount> {

	List<LongcoinAccount> queryMixList(Map<String, Object> map);
}
