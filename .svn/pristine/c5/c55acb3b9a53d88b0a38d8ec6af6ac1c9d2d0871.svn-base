package com.icloud.font.card;

import com.icloud.common.R;
import com.icloud.modules.bsactivity.service.BsactivityAdService;
import com.icloud.modules.bsactivity.service.BsactivityShopService;
import com.icloud.modules.wx.entity.WxUser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 扫码兑换
 */
@Controller
@RequestMapping("/frontpage/user/usernfo")
public class UserInfoController {

    private Logger log = LoggerFactory.getLogger(getClass());
    @Autowired
    private HttpServletRequest request;
    @Autowired
    private HttpServletResponse response;

    @Autowired
    private BsactivityShopService bsactivityShopService;
    @Autowired
    private BsactivityAdService bsactivityAdService;



    /**
     * 获取用户信息
     * @return
     */
    @RequestMapping("/getUserinfo")
    @ResponseBody
    public R getUserinfo(){
        WxUser user = (WxUser) request.getSession().getAttribute("wx_user");
        return R.ok().put("user",user);
    }


}