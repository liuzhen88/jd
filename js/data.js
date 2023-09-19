$(function() {

  var currentCompanyName = "优天辰网络科技有限公司";

  var data = [
    {
      "title": "连接消防安全平台",
      "companyName": currentCompanyName,
      "projectContent": "联捷安全平台是一款专注火灾报警，自动喷淋，消防栓物联监测，防排烟，消防机器人的在线平台，涉及用户微信端，pc管理端，物联设备接入端。其中pc端核心包括：物联监测大屏，设备台账，维保管理，权限等，设备端涉及6类设备数据采集和远程控制等",
      "responsibility": "负责整个系统的后端开发，物联数据采集解析，远程控制，以及运维部署",
      "skill": "Ruby on Rails + Mysql + RabbitMQ + Nodejs + sequelize + Docker + Nginx + MQTT"
    },
    {
      "title": "深圳电动自行车安全管理平台",
      "companyName": currentCompanyName,
      "projectContent": "深圳政府安全项目，打款一款消防安全，电梯安全，集中消防管理，集中充电管理，rfid报警，电器指纹报警的系统，告警消息会推送到消防人员的手机公众号上，进行告警接单处理以及进度跟进",
      "responsibility": "负责整个系统的后端开发，运维部署",
      "skill": "Ruby on Rails + Mysql + RabbitMQ + Nodejs + Docker + Nginx + MQTT"
    },
    {
      "title": "低代码批量报告生成平台",
      "companyName": currentCompanyName,
      "projectContent": "一款在线编辑报告的平台，支持在线拖拽编辑生成各种报表，在线设计。通过导入excel数据，批量生成报表内容，自定义选择发送短信或邮箱",
      "responsibility": "负责整个系统的后端开发，运维部署",
      "skill": "Ruby on Rails + Mysql + RabbitMQ + Nodejs + Docker + Nginx"
    },
    {
      "title": "三保打工网",
      "companyName": currentCompanyName,
      "projectContent": "山西洪洞县响应国家打工政策，研发了打工网的在线平台以及微信公众号用户端，用户可在微信端注册个人信息，接受pc端维护的打工招聘信息，并安排接送服务，以及管理销售人员的推广工作和绩效提成",
      "responsibility": "负责整个系统的后端开发，运维部署",
      "skill": "Ruby on Rails + Mysql + RabbitMQ + Nodejs + Docker + Nginx"
    },
    {
      "title": "财税管理系统",
      "companyName": currentCompanyName,
      "projectContent": "财税系统分为pc端和用户微信公众号端，pc端核心涉及代账业务管理，收款，续单，结算，人员绩效，工资表，凭证报送，公司税务管理等等，用户在微信客户端能及时查看财税情况",
      "responsibility": "负责整个系统的后端开发，运维部署",
      "skill": "Ruby on Rails + Mysql + RabbitMQ + Nodejs + Docker + Nginx"
    },
    {
        "title": "私有化标准平台 (2021.05 - 2021.07)",
        "companyName": "苏州思必驰信息科技有限公司",
        "projectContent": "私有化平台分为管理端和用户端，\n              管理端：可以创建对应的识别，合成，唤醒等产品，以及对于产品的docker镜像，资源，文档，部署，标签，类型进行管理。\n              用户端可以自助选择服务完成购买集成",
        "responsibility": "负责整个管理端和用户端的开发，组件库建设，以及技术架构设计。",
        "skill": "vue + vue-router + vuex + elementui + typescript + docker + k8s"
    },
    {
        "title": "唤醒自训练平台 (2021.03 - 2021.05)",
        "companyName": "苏州思必驰信息科技有限公司",
        "projectContent": "用户可以自定义选择唤醒词，添加内置模型，或自定义模型训练，在线完成训练，sdk打包集成，bin集成，客观/主观，真机/非真机的测试，以及固件编译等",
        "responsibility": "负责整个管理端和用户端的开发，组件库建设，以及技术架构设计。",
        "skill": "vue + vue-router + vuex + elementui + typescript + docker + k8s"
    },
    {
        "title": "大数据dp管理系统 (2021.01 - 2021.02)",
        "companyName": "苏州思必驰信息科技有限公司",
        "projectContent": "dp系统可以自助添加数据库，表，字段，自定义添加统计维度，呈现各种报表，以及控制ui如何展示，自定义测试机器人",
        "responsibility": "负责dp的维护，以及3个sprint迭代开发",
        "skill": "vue + vue-router + vuex + elementui + docker + k8s"
    },
    {
        "title": "dui控制台 (2019.05 - 2021.07)",
        "companyName": "苏州思必驰信息科技有限公司",
        "projectContent": "\n              控制台核心分为产品和技能，用户使用控制台可以自定义技能语义，对话，tts，语义训练，对话训练，技能的生产发布，产品的技能集成使用。\n              控制台的涉及服务许多，目前有26个前端服务，主要在于产品接入，技能定制，基础技术，数据，文档，下载，数据设置，智能家居，技能商店，帮助，学习等\n            ",
        "responsibility": "负责每个sprint迭代的开发，技术架构设计，组件库建设，26个服务的管理， 团队的管理",
        "skill": "vue + vue-router + vuex + elementui + docker + k8s + 微前端 qiankun + webpack + html entry + typescript + CI / CD"
    },
    {
        "title": "流程型技能开发 (2020.08 - 2020.10)",
        "companyName": "苏州思必驰信息科技有限公司",
        "projectContent": "\n              个人开发者或公司通过流程型技能开发工具，自助创建技能，通过拖拽节点，自定义配置流程。可以自定义配置动态和条件以及跳转节点。\n              用户在不写代码的情况下，自定义拖拽节点完成技能的开发。\n              该项目，需要在思必驰控制台和弛必准公司流程型技能中同时使用\n            ",
        "responsibility": "负责 开发整个流程型技能，跨公司 和 弛必准对接，思必驰控制台和弛必准流程型技能，前端架构设计",
        "skill": "vue + vue-router + vuex + elementui + docker + k8s + svg"
    },
    {
        "title": "基础技术 (2020.04 - 2020.08)",
        "companyName": "苏州思必驰信息科技有限公司",
        "projectContent": "\n              公司提供基础技术对外销售。开发者或公司可以在基础技术管理平台上，开通，支付，购买套餐，查看使用明细等操作。\n            ",
        "responsibility": "主导基础技术的开发， 主导基础技术的上架，从上架申请 -> 竞品调研 -> 计费方式确定 -> 成本计算 -> 套餐和价格制定 -> 开发/测试 -> 上线 -> 周知财务，业务线，盈利168万",
        "skill": "vue + vue-router + vuex + elementui + docker + k8s + typescript"
    },
    {
        "title": "控制台后台管理系统 (2019.05 - 至今)",
        "companyName": "苏州思必驰信息科技有限公司",
        "projectContent": "\n              后台管理进行控制台相关数据的生产，以及权限控制，基础资源管理，全链路解决方案，产品高级配置，热词管理，敏感词管理，识别热词，产品关联一路，二路，三路训练，内容管理，工单管理等。\n            ",
        "responsibility": "负责相关的前端开发，以及技术设计",
        "skill": "vue + vue-router + vuex + elementui + docker + k8s"
    },
    {
        "title": "财税管理系统 (2020.04 - 2020.05)",
        "companyName": "苏州思必驰信息科技有限公司",
        "projectContent": "\n              公司内部系统，面向12个财税人员使用。\n              基础管理员工，公司，客户，收款周期，收款方式，部门，活动等，业务员可以新增开户单，财务，会计完成审批流。收单管理，开户管理，续单管理，结算管理，其他业务管理，员工的工资，提成计算等\n            ",
        "responsibility": "负责整个系统的后端开发",
        "skill": "ruby on rails + activeRecord + mysql + nginx + docker + rabbitMQ"
    },
    {
        "title": "人力资源三保系统 (2020.2 - 2020.2)",
        "companyName": "个人",
        "projectContent": " \n                此项目是个人对接企业项目，春节期间2个星期完成。\n                三保打工网是致力于 打工的网络招聘平台。可在公众号中搜索：三保打工网。 公众号部分：用户使用公众号内h5网页，可以查看招聘信息，工厂信息，以及注册微信会员，报名，坐车，推广，排名，消息推送。\n                pc管理端：管理员可以在后台包括：会员管理，角色管理，菜单权限，会员管理，客服管理，门店管理，工厂管理，车次管理，招聘管理，报名记录管理，以及推广绩效管理。\n            ",
        "responsibility": "负责整个系统的后端开发，消息队列的处理程序开发，用户微信端的开发",
        "skill": "ruby on rails + activeRecord + mysql + nginx + docker + rabbitMQ + express + sequelize"
    },
    {
        "title": "罗普斯金产品站 (2019.06 - 2019.06)",
        "companyName": "个人",
        "projectContent": "\n              罗普斯金是苏州一家做门窗的公司。\n              此项目重在ui，主要是罗普斯金的核心产品宣传网站。\n              以及罗普斯金管理员可以在后台设置更新产品。\n              网站地址：http://www.innok-lpsk.com\n            ",
        "responsibility": "负责整个系统的前后端开发",
        "skill": " thinkphp + docker + mysql "
    },
    {
        "title": "工艺服务平台 (2019.05 - 2019.05)",
        "companyName": "江苏慧物数据科技有限公司",
        "projectContent": "\n                该系统属于老板另一家公司业务，\n                此项目打造工艺制造在线平台，客户可以在 此平台上自助下单，选择对应的工艺，以及在线支付, 以及耗材相关的购买。\n                \n                该系统还有一个 企业管理后台，企业在后台可设置用户，发票管理，产品工艺管理，订单管理，耗材管理，广告设置，权限控制等等。\n            ",
        "responsibility": "负责整个系统的前后端开发",
        "skill": "后端部分： ruby on rails + activeRecord + mysql + nginx + docker \n              前端部分： react + react-router + redux + antd + axios \n            "
    },
    {
        "title": "电梯部件生产系统 (2019.02 - 2019.04)",
        "companyName": "江苏慧物数据科技有限公司",
        "projectContent": "\n                该系统属于老板另一家公司业务，\n                该项目致力于电梯部件生产管理。解决分切钢丝绳工序中难追溯，效率低，难管理等问题 \n                pc后台管理系统：\n                包括：基础人员，供应商，客户，权限，木轮，产品，设备，班组等信息管理，以及生产中的合同，订单，排产，辅料库存管理，成品库存，发货，直发，数据统计管理。\n\n                app部分：\n                包括：入库管理，出库管理，分切生产，发货管理，直发管理，设备等\n\n                工业plc控制机\n                此服务和机台硬件设备通信。 使用西门子s7通讯协议，与plc程序通信。控制机器的分切和上料，以及最后的木轮收线。\n                另外自动称重钢丝绳，检测是否合格。称重机器485串口通信，采用有人模块，串口转网口通信，使用node.js 接受tcp流数据\n                \n            ",
        "responsibility": "负责整个系统的后端开发",
        "skill": "\n              后端部分：ruby on rails + activeRecord + mysql + nginx + docker \n              前端部分：react + react-router + redux + antd + axios \n              app部分：react-native\n            "
    },
    {
        "title": "珀莱雅H5发光季 (2019.1 - 2019.1)",
        "companyName": "江苏慧物数据科技有限公司",
        "projectContent": "\n                珀莱雅-发光季是一个h5营销和吸粉的活动，通过分享邀请好友参加获取助力值，以及活动期间消费值，排行所有会员，对应的会员将获取不同的奖品。\n            ",
        "responsibility": "负责整个系统的前后端开发",
        "skill": "  \n              后端部分：  Go + Gorm + mysql + Echo + ElasticSearch + redis + Docker + Nginx + RabbitMQ \n              前端部分： vue.js + vue-router + vuex + js sdk + webpack + babel + es6\n            "
    },
    {
        "title": "积分商城 (2018.11 - 2018.12)",
        "companyName": "江苏慧物数据科技有限公司",
        "projectContent": "\n              商户在PC端管理积分兑换的商品和卡券，以及需要支付的金额，商品详情等信息。C端用户实现积分兑换卡券，物品，或者积分+钱换购商品。小程序具体包括：热卖商品，首页，商品选购列表，商品详情，购物车，订单详情，订单管理，个人地址管理，微信支付，积分变更记录等模块。\n            ",
        "responsibility": "负责整个系统的后端开发",
        "skill": "  \n              后端部分： Ruby on Rails + Active Record + Mysql + Docker + Linux + Nginx + Redis \n            "
    },
    {
        "title": "微信营销 (2018.08 - 2018.10)",
        "companyName": "江苏慧物数据科技有限公司",
        "projectContent": "\n                智悦客一直以来涉足于B端管理系统，而该项目帮助B端用户实现C端拓展，B端商户可以对C端用户实现基于微信生态的精准营销。其中包括：卡券，赠品，礼包，满额活动，限时折扣，优惠促销，组合购，加钱购，分享任务，活动报名等等。\n                C端用户使用小程序，可以使用卡券，礼包，订单管理，消费记录，积分，储值，活动任务，会员权益等。\n                另外导购使用导购App, 实现对导购下微信粉丝管理，粉丝的卡券推送，礼包推送，聊天，任务分享，活动报名等等。\n            ",
        "responsibility": "负责整个系统的前后端开发，第三方开放平台微信开发，公众号开发",
        "skill": "  \n              后端部分： Ruby on Rails + Active Record + Mysql + Docker + Linux + Nginx + Redis \n              前端部分： React + React-Router + Redux + Redux-thunk + Webpack + Es6 + Babel \n            "
    },
    {
        "title": "东巨商贸 (2018.06 - 2018.07)",
        "companyName": "江苏慧物数据科技有限公司",
        "projectContent": "\n                东巨商贸是一家未实现互联网化的贸易公司，我们微信第三方开放平台帮助公众号开发微信营销， \n                利用公众号实现简易版的h5营销体系。\n                其中包括：微信h5网页授权，个人中心，个人储值，微信支付，个人订单，个人积分，积分储值历史，模块消息推送，会员管理等功能。\n            ",
        "responsibility": "负责整个系统的前后端开发",
        "skill": "  \n              后端部分： Ruby on Rails + Active Record + Mysql + Docker + Linux + Nginx + Redis \n              前端部分： React + React-Router + Redux + Redux-thunk + Webpack + Es6 + Babel\n            "
    },
    {
        "title": "设备管理系统 (2018.04 - 2018.05)",
        "companyName": "江苏慧物数据科技有限公司",
        "projectContent": "\n                设备管理系统是工业生产中管理机床，生产，维修软件。pc端可以管理维护设备信息，人员管理，权限管理，角色管理，零部件管理，工厂加工生产管理，维修管理，业绩管理等。app端用于工人生产使用，工单调度，生产，报警，维修，打卡，业绩，以及维修工单消息推送等。\n            ",
        "responsibility": "负责整个系统的前后端开发",
        "skill": "  \n              后端部分： Ruby on Rails + Active Record + Mysql + Docker + Linux + Nginx + Redis \n              前端部分： React + React-Router + Redux + Redux-thunk + Webpack + Es6 + Babel \n              app端： react-native + jpush\n            "
    },
    {
        "title": "春鹏钢绞线生产系统 (2018.02 - 2018.04)",
        "companyName": "江苏慧物数据科技有限公司",
        "projectContent": "\n              该系统属于老板另一家公司业务，\n              给天津春鹏管理日常工业生产，其中包括订单分解，订单计划 ，生产订单，工业用料，排产，费用明细，成品库存管理，财务管理，人员管理，角色管理，权限管理等功能。解决了企业在生产工业产品中各种问题。\n            ",
        "responsibility": "负责整个系统的前后端开发",
        "skill": "  \n              后端部分： node.js + express + mongodb + redis + pm2 \n              前端部分： React + React-Router + Redux + Redux-thunk + Webpack + Es6 + Babel \n            "
    },
    {
        "title": "线下零售-导购APP (2018.01 - 2019.05)",
        "companyName": "江苏慧物数据科技有限公司",
        "projectContent": "\n              智悦客导购App为线下导购打造的，用户从进店摄像机抓拍人脸，进行人脸识别，推送访客画像至导购App上，导购能精准定位访客的消费情况，购买偏好，消费能力等信息，进行精准营销。店员可以使用App直接对用户收银，支持微信支付，支付宝支付，现金。导购还可以绑定访客，完善会员，可以和C端微信用户直接聊天，推送卡券，商品，以及业务，任务管理等等\n            ",
        "responsibility": "负责整个系统的前后端开发",
        "skill": "  \n              后端部分： Ruby on Rails + Active Record + Mysql + Docker + Linux + Nginx + Redis \n              app部分： React-Native + JPush + Redux \n            "
    },
    {
        "title": "库存管理系统 (2017.11 - 2018.01)",
        "companyName": "江苏慧物数据科技有限公司",
        "projectContent": "\n                商品库存管理系统旨在帮助线下商户管理库存，商品包括：商品资料管理，门店商品管理，商品下发门店，商品大小类管理，商品规格管理，商品价格管理，商品库存管理。\n                其中商品库存管理包括：品牌库存和门店库存，以及商品库存的调拨，申请单，库存变更历史记录。以及商品赠品管理\n            ",
        "responsibility": "负责整个系统的前后端开发",
        "skill": "  \n              后端部分： Ruby on Rails + Active Record + Mysql + Docker + Linux + Nginx + Redis \n              前端部分： React + React-Router + Redux + Redux-thunk + Webpack + Es6 + Babel \n              app部分： React-Native + Redux \n            "
    },
    {
        "title": "智能吊牌 (2017.10 - 2017.10)",
        "companyName": "江苏慧物数据科技有限公司",
        "projectContent": "\n                智能吊牌利用硬件MPU6050六轴运行处理组件，小球在组件内发生的加速度，角度上，弹性形变转化为动能采集，后台tcp记录采集数据进行机器学习。利用吊牌采集数据，分析商品是否被试穿次数，被摸次数，以及最后收银采集成交转化率分析，最后在PC报表数据分析。\n            ",
        "responsibility": "负责与MPU6050硬件版对接接口，以及PC端数据分析",
        "skill": "  \n              后端部分： Ruby on Rails + Active Record + Mysql + Docker + Linux + Nginx + Redis \n              前端部分： React + React-Router + Redux + Redux-thunk + Webpack + Es6 + Babel \n              数据收集： Node.js + Express + Mysql + Redis + Nginx + PM2 \n            "
    },
    {
        "title": "线下零售-智悦客 (2017.08 - 2019.05)",
        "companyName": "江苏慧物数据科技有限公司",
        "projectContent": "\n                该项目利用人工智能+微信营销给企业商户提供线下会员管理，门店端安装摄像机，监控人脸，利用动态人脸识别技术，\b分析访客身份。同时监控门店的人流量和顾客在店内的行为数据，为企业商户提供精确的数据分析和管理。这是一个sass系统，接入微信第三方开放平台，融入微信生态，系统提供公众号，小程序开发，微信支付，支付宝支付开发等，替商户开发微信营销和线下会员管理。\n            ",
        "responsibility": "负责前端1.0-1.4版本开发，后端1.0-.1.5版本开发，app部分1.0-1.3开发",
        "skill": "  \n              后端部分： Ruby on Rails + Active Record + Mysql + Docker + Linux + Nginx + Redis \n              前端部分： React + React-Router + Redux + Redux-thunk + Webpack + Es6 + Babel \n              app部分： react-native \n            "
    },
    {
        "title": "inkanban (2016.06 - 2017.07)",
        "companyName": "苏州易恒智行科技有限公司",
        "projectContent": "\n              工业4.0智能生产系统inkanban，解决工业钢丝绳生产的自动化，互联网化，管理化，大大提供生产效率，并提供大数据分析工业生产中的问题以及咨询方案。主要包括: 计划订单，分解订单，生产订单，作业计划，智能排产，捻股合绳生产等\n            ",
        "responsibility": "负责前后端开发",
        "skill": "  \n              后端部分： Node.js + express + sequelize + mysql \n              前端部分： React + React-Router + Redux + Redux-thunk + Webpack + Es6 + Babel \n            "
    },
    {
        "title": "inkanban App (2017.03 - 2017.05)",
        "companyName": "苏州易恒智行科技有限公司",
        "projectContent": "\n              产品提供生产订单，定制产品，从下单选择，提供定制化服务->支付->订单管理->客服服务->会员服务->发票邮寄等等\n            ",
        "responsibility": "负责前端开发",
        "skill": "  \n              前端部分： mui + (h5+) + css3 + jquery + artTemplate \n            "
    },
    {
        "title": "智能看板 (2016.12 - 2017.01)",
        "companyName": "苏州易恒智行科技有限公司",
        "projectContent": "\n                智能看板主要提供整个看板系统的数据服务，一切产生的数据都可以在这里获取到，不仅提供了工业的日常数据获取，还有数据可视化数据服务，工人绩效等\n                其中包括：订单状态， 存量动态， 日明细报，日汇总，日不合格品统计， 工人绩效表， 生产量报表， 开机率，图表分析\n            ",
        "responsibility": "负责前后端开发",
        "skill": "  \n              前端部分： React + React-Router + Redux + Redux-thunk + Webpack + Es6 + Babel \n              后端部分： Node.js + express + sequelize + mysql \n            "
    },
    {
        "title": "问卷调查 (2016.12 - 2017.01)",
        "companyName": "苏州易恒智行科技有限公司",
        "projectContent": "\n                问卷调查，用户对产品的满意度，或建议\n            ",
        "responsibility": "负责前后端开发",
        "skill": "  \n              前端部分： React + React-Router + Redux + Redux-thunk + Webpack + Es6 + Babel \n              后端部分： Node.js + express + sequelize + mysql \n            "
    },
    {
        "title": "报警系统 (2016.11 - 2016.11)",
        "companyName": "苏州易恒智行科技有限公司",
        "projectContent": "\n              报警系统的开发旨在帮助工厂能高效，顺速，可追溯的解决异常情况\n            ",
        "responsibility": "负责前后端开发",
        "skill": "  \n              前端部分： html5+css3+zepto+doT+gulp+git \n              后端部分： Node.js + express + mongodb + redis + nginx + git + linux + q \n            "
    },
    {
        "title": "库存看板系统 (2016.09 - 2016.10)",
        "companyName": "苏州易恒智行科技有限公司",
        "projectContent": "\n                看板系统的库存系统管理，以及企业的ERP集成。现有的ERP只能管理非工业中间品，并且数据是滞后的。通过看板的库存看板系统不久能管理在制品/中间品，还能管理成品。\n                以上是在pc端操作，另外工人的操作是基于平板端操作。另外还有admin库存和ERP集成表\n            ",
        "responsibility": "负责前后端开发",
        "skill": "  \n              前端部分： react.js + react-router + redux + webpack + es6 + babel + redux-thunk + history + antd + git + linux \n              后端部分： Node.js + express + mongodb + redis + nginx + git + linux + q \n            "
    },
    {
        "title": "inkanban admin管理系统 (2016.06 - 2016.09)",
        "companyName": "苏州易恒智行科技有限公司",
        "projectContent": "\n                主要包括：生产订单，订单产品分解表，后台admin的内部表单：钢丝绳的分解，成品股的分解，单股，中心股，外股，金属股芯，金属绳芯等表单\n            ",
        "responsibility": "负责前后端开发",
        "skill": "  \n              前端部分： html5 + css3 + jquery + dataTable + jade + git + linux \n              后端部分： Node.js + express + mongodb + redis + nginx + git + linux + q \n            "
    },
    {
        "title": "微信跟单 (2016.05 - 2016.05)",
        "companyName": "苏州易恒智行科技有限公司",
        "projectContent": "\n              微信跟单旨在提供订单的跟踪服务，关联订单计划表。主要包括：订单的进度，订单的工段产品，以及详细每个订单工段产品的详细进度。计划产量，完成时间等。\n            ",
        "responsibility": "负责前后端开发",
        "skill": "  \n              前端部分： react.js + html5 + css3 + webpack + git + linux \n              后端部分： Node.js + express + mongodb + redis + nginx + git + linux + q \n            "
    },
    {
        "title": "捻股,合绳生产APP (2016.03 - 2016.04)",
        "companyName": "苏州易恒智行科技有限公司",
        "projectContent": "\n                平台是基于工业4.0平台，旨在提供工业大数据，智能化服务。\n                捻股，合绳工单是班组长安排作业计划后生成的工单。\n                操作工可以在工单上：收线，换轴，调产，暂停调产，开始调产，上线等\n            ",
        "responsibility": "负责前端开发",
        "skill": "  \n              前端部分： html5 + css3 + zepto + gulp + git + linux \n            "
    },
    {
        "title": "易卖会后台管理系统 (2016.02 - 2016.02)",
        "companyName": "江苏慧库天下软件科技有限公司",
        "projectContent": "\n                易卖会后台管理系统提供给电商部分运营管理商城。\n                主要包括：\n                1.首页广告图的上传，修改，删除，添加链接等\n                2.商品的上传，下架，编辑，商品权重排名管理。\n                3.平台公告的新增，删除，权重，修改管理。\n                4.商品分类的管理，包括：新增分类，合并分类，删除分类，修改分类等。\n                5.专题管理：包括：新增专题，关联商品，权重，删除专题，修改专题等。\n            ",
        "responsibility": "负责前后端开发",
        "skill": "Node.js + express + mongodb + jade + css3 + html5 + git + linux + nginx + forever + q + Mongoose\n            "
    },
    {
        "title": "易卖会用户端系统 (2016.01 - 2016.01)",
        "companyName": "江苏慧库天下软件科技有限公司",
        "projectContent": "\n                易卖会是一个电商部门推出的新的商城系统。通过义卖价卖出商品，来帮助中国更多的贫苦人们改善生活。\n                主要包括：首页，平台公告，平台新闻，商品详情，我的订单，分类，商品搜索等。\n            ",
        "responsibility": "负责前后端开发",
        "skill": "  Node.js + express + mongodb + jade + css3 + html5 + git + linux + nginx + forever + q + Mongoose\n            "
    },
    {
        "title": "同城配送/跑腿邦 (2015.11 - 2015.12)",
        "companyName": "江苏慧库天下软件科技有限公司",
        "projectContent": "\n                跑腿邦项目是基于微信开发的一套同城配送项目，用户可以搜索周边3km以内的商户，进行商品选购，满30元免配送费，送货上门服务。送货时间：1小时之内送达。\n            ",
        "responsibility": "负责前端开发",
        "skill": " html5 + css3 + zepto + gulp + git\n            "
    },
    {
        "title": "微信本土商城 (2015.08 - 2015.10)",
        "companyName": "江苏慧库天下软件科技有限公司",
        "projectContent": "\n                本土商城是一种基于线下支付的商城，用户可以在微信本土商城中搜索商品，到店消费。商城主体包括：首页，发现，商家，个人中心，我的订单，积分，人脉，商品详情，预约等\n            ",
        "responsibility": "负责前端开发",
        "skill": " html5 + css3 + zepto + gulp + git\n            "
    },
    {
        "title": "微信电商 (2015.03 - 2015.09)",
        "companyName": "江苏慧库天下软件科技有限公司",
        "projectContent": "\n                微信商城，提供用户在商城上购物。项目包括：首页，发现，分类，个人中心，积分，商品详情，商品搜索，购物车，收藏，个人订单，物流信息，用户信息修改，二度人脉，退换货，平台仲裁，支付（微信，支付宝）。店铺详情，个人返佣，消费记录等。\n            ",
        "responsibility": "负责前端开发",
        "skill": " html5 + css3 + jquery + gulp + git\n            "
    },
    {
        "title": "电商后台系统 (2014.07 - 2015.02)",
        "companyName": "江苏慧库天下软件科技有限公司",
        "projectContent": "\n                后台管理系统分为：商户管理系统，代理商管理系统，平台的后台管理系统。\n                三个系统都是基于DWZ框架构建，项目为电商的o2o项目，提供给用户的不同平台，\n                可以给不同用户管理和发布自己的活动。\n            ",
        "responsibility": "负责前端开发",
        "skill": " html5 + css3 + jquery + gulp + git\n            "
    },
    {
        "title": "官网开发 (2014.07 - 2016.02)",
        "companyName": "江苏慧库天下软件科技有限公司",
        "projectContent": "\n                官网的开发，商学院的开发。其中，官网的不断改版，升级，一共历时6个全新版本\n            ",
        "responsibility": "负责前端开发",
        "skill": " html5 + css3 + jquery + git\n            "
    }
]

  var child = "";

  data.map((item, index) => {
    child = child + `
      <section class="p-info project-list">
        <div>
          <p class="title">${index + 1}. ${item.title}</p>
          <p>所属公司：${item.companyName}</p>
          <p>项目描述：${item.projectContent}</p>
          <p>责任描述：${item.responsibility}</p>
          <p>使用技术：${item.skill}</p>
        </div>
      </section>
    `
  })
  $("#projects").append(child);

  // var aa = [];
  // $(".project-list").each((index, item) => {
  //   var title = $(item).find(".title").text()
  //   var companyName = $(item).find("p").eq(1).text().replace("所属公司：", "");
  //   var projectContent = $(item).find("p").eq(2).text().replace("项目描述：", "");
  //   var responsibility = $(item).find("p").eq(3).text().replace("责任描述：", "");
  //   var skill = $(item).find("p").eq(4).text().replace("使用技术：", "");
  //   var res = {title, companyName, projectContent, responsibility, skill};
  //   aa.push(res);
  // });

  // var b = new Blob([JSON.stringify(aa)], {type: "application/json"});
  //   var url = URL.createObjectURL(b);
  //   var a = document.createElement("a");
  //   a.href = url;
  //   a.download = "data.json";
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
});