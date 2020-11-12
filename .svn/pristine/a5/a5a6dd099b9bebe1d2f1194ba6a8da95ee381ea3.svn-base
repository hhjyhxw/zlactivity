package com.icloud.font.card;

import com.icloud.modules.bsactivity.service.BsactivityAdService;
import com.icloud.modules.bsactivity.service.BsactivityShopService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 扫码兑换
 */
@Controller
@RequestMapping("/frontpage/card/cardVerify")
public class CardVerifyController {

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
     * 进入扫码核销页面之前的页面，做中转（解决第一次登陆因携带若干参数导致获取jssdk错误问题）
     * @return
     */
    @RequestMapping("/beforeVerify")
    public String beforeVerify(){
        return "modules/front/card/beforeVerify";
    }
    /**
     * 进入扫码核销页面
     * @return
     */
    @RequestMapping("/goverify")
    public String goverify(){
        return "modules/front/card/goverify";
    }


    /**
     * 进入扫码核销页面
     * @return
     */
    @RequestMapping("/verify")
    public String verify(String cardCode){
        log.info("cardCode==="+cardCode);
        return "modules/front/card/verifySucess";

//        verifyError
    }


}