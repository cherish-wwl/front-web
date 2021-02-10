(function (){
  /**
   *  支持两种路径
   *  1. ?type=news&id=1
   *  2. ?type=good&id=10&part=0
   *  */
  
  document.getElementById("header").addEventListener("click", function (e) {
    if (e.target.classList.contains("tab")) {
      e.target.parentElement
        .querySelectorAll(".active")
        .forEach(function (dom) {
          dom.classList.remove("active");
        });
      e.target.classList.add("active");
      getData(e.target.dataset.tabid);
    }
  });

  ['sojson.v4']["\x66\x69\x6c\x74\x65\x72"]["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"](((['sojson.v4']+[])["\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72"]['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65']['\x61\x70\x70\x6c\x79'](null,"118q97m114s32V116Y97E98P105y100m32O61u32o49P59s10q32t32J118Z97a114Y32a100h101j116u97Q105j108W95o105n100I32s61A32X103B101C116n81Y117x101t114T121N86f97t114C105b97C98N108T101a40P39I105R100P39H41V10a32u32C118T97g114A32e116n121B112K101A32B61w32Y103R101d116f81P117J101s114I121K86I97i114o105N97G98Q108Y101j40f39l116b121w112R101M39M41t10m32U32T118w97A114o32f112Q97A114W116g32K61d32K103H101v116M81F117i101M114X121f86M97V114r105u97d98Z108u101H40l39m112U97r114U116p39k41U10u32l10a32h32B105i110N105g116q40h41W10L10j32G32Z102A117B110Z99q116r105F111X110K32J105c110S105U116L40u41N32r123z10C32x32N32P32D100X111B99L117R109D101i110m116I46j103h101P116j69O108P101F109F101p110f116P66V121i73V100X40q34i116V97h98R115W34j41I46z105b110P110t101p114I72f84Q77u76U32E61M32g39p39P10Q32m32h32w32R100L111z99e117i109E101t110h116L46l103m101U116a69E108b101P109L101m110F116a66Z121b73R100K40d34b99G111I110E116z101P110Z116g34T41O46e105j110Y110Z101W114N72i84e77A76n32l61S32R39G39I10X32e32u32e32A105s102d32f40x116h121Y112p101X32T61y61k32B39L103t111T111d100j39z41f32k123e10U32e32t32T32W32j32h103n101B116f68D101Y116Q97O105e108X73A110r102w111x40a41X10u32y32j32F32k125H32j101M108d115s101B32K105P102d32m40e116G121Z112h101u32T61J61V61v32C39b110C101r119i115P39j41h32P123s10l32c32w32V32R32D32N103V101m116V78R101X119y115G73O110z102n111Q40F41Z10R32e32o32S32Z125p10L32N32t125K10t32t32E102a117S110y99G116P105s111G110z32a103m101o116M68C97I116d97F40y105A100z41u32y123l10N32m32F32K32H104s116U116Z112n40b123S117J114B108F58S39F47k97I112k105y47C118J49o47H111x102b102K105H99Q101R47H99a111d110m116f101A110k116X76i105J115U116z63K99K97a116G101a103p111i114z121Y95i105J100S61A39M43Q105k100y44i109n101n116G104D111U100B58X39U103w101X116r39e44W115b117x99b99v101K115g115S58D32z102D117W110e99f116e105Y111y110x40J114m101p115Z41U123H10Y32U32S32R32D32u32Q118H97P114X32N100z97J116a97w32g61w32k114v101a115L46x100N97G116H97s46Z108U105O115Z116S91k48M93W10c32H32l32E32H32o32e115N104E111o119E73e110R102E111d40P100z97d116Z97O41h59n10Z32x32O32c32l125o125o41b10D32h32y32Z32d32N32i10k32u32j125h10z10j32v32P102i117j110x99P116s105Q111w110j32V103O101C116y68K101o116C97l105a108O73U110Z102s111x40A41G32K123P10W32J32Y32s32l104c116U116E112M40y123e117W114Z108Z58m39l47h97h112O105e47t103w111Q111V100U115C47Q103f111k111o100A115G95V100b101Z115u99V63E105J100N61W39r43x32A100M101i116T97R105s108q95i105j100W44S109L101v116o104F111L100d58g39B103H101P116i39o44j115q117S99n99s101V115q115W58Z32L102T117g110b99I116s105i111M110e40F114f101G115M41G123P10y32P32S32n32F32Q32e118V97y114O32O100Q97j116i97y32W61W32s114G101B115s46N100u97e116r97F10b32r32z32w32h32m32n118u97i114J32Z108W97h98E101B108l115A32Y61v32G100V97b116P97f46V108C97y98n101N108n10Z32c32d32F32O32M32y100F97D116U97F32o61Y32T123g10o32P32W32c32W32B32s32F32P116x105a116H108H101J58A32c100g97p116n97E46M103r111J111K100c115t95l110V97d109j101d44G10i32B32w32s32c32B32s32I32L121Q101V97x114W58G32y100W97Q116v97c46O121P101C97I114A44F10r32g32q32K32p32t32J32w32e108h97I98W101c108Y115X58P32A108I97Y98r101R108Y115P44G10l32G32D32Q32p32V32u32I32l116P105y109K101L58X32o110L101S119z32N68T97W116k101W40a100L97O116O97G46d99X114n101s97J116I101C116i105E109v101T32s42E32K49I48M48v48o41z46P102c111v114B109J97A116c40x34F121a121a121O121Q45U77F77K45X100w100o34l41P44T10q32j32h32c32p32G32c32U32P99Q111o110d116y101v110q116J58u32k100g97I116U97k46o100k101I116m97Z105t108z115R91B112f97P114d116B32Y124c124X32H48G93y46M103f111x111m100L115i95v99n111U110B116g101X110J116P10b32A32V32P32n32U32f125a10F32T32T32B32E32Q32K115H104j111U119X73T110s102k111q40v100q97R116P97y41n59b10C32q32J32z32c125o125h41u10s32h32M125g10Y10A32W32c102s117L110P99H116o105T111z110C32H103d101X116t78T101E119y115m73k110Z102R111r40Y41Y32A123j10N32H32a32c32Z104M116Z116p112l40y123V117s114Y108B58P39C47L97a112F105o47U105q110I100I101j120Y47P110F101s119i115p95H100j101L116H97U105R108Y115E63V105s100K61h39X32U43Z32n100O101T116C97E105U108a95D105L100d44m109w101n116k104i111a100Y58i39z103s101d116H39N44I115U117O99O99b101m115F115P58X32l102A117w110d99S116I105l111N110X40N114z101m115D41Y123I10L32C32h32N32S32Z32h118Y97u114C32g100e97z116o97r32L61H32i123N10F32n32G32k32j32l32b32J32h116I105T116f108A101Q58l32g114o101F115e46B100U97W116q97e46h108t105A115J116Z46x110N101O119r115P95G116D105v116E108M101F44a10L32g32p32J32V32a32K32H32r116j105s109Z101Q58W32F114u101c115Z46o100i97r116I97a46e108o105C115m116K46j121M101h97G114Q44P10m32r32M32d32a32s32w32w32d99Y111J110b116G101L110k116J58R32f114G101l115X46z100e97D116U97I46R108E105f115q116k46E99P111d110T116B101r110y116P10y32H32D32f32v32j32c125y10D32q32G32B32t32X32R115Q104M111o119X73x110F102L111g40v100V97U116z97b41L59Z10Y32K32k32S32U125l125v41w10U32z32s125R10W10h10Y10L10v32q32x102L117g110c99f116w105C111b110X32S99i111S110Q116z101L120h116k78R101U119L115N84C101i109A112q40l100R97F116p97A41K32G123g10W32H32I32D32G114I101v116D117B114v110O32Y39a60v97w114W116t105g99N108y101B62x39g32l43V10f32b32h32H32C32m32X32w32w32O32w32H32p32Q32x39i60A104s49N32i99d108D97G115L115U61b34G116K105h116k108V101P34z62Y39P43t40A100E97L116r97Q46u116G105Q116I108I101d32S124e124q32g39W39F41I43O39F60J47p104M49h62r39t32J43E10M32R32i32F32c32t32P32d32u32Y32n32D32g32P32P39G60F112S32G99B108r97C115Q115A61z34N116Y105Z109G101j34A62c32B24180V20221C58Q32j39h43l40l100w97Z116u97s46t116A105v109c101Y32q124B124o32e39S39D41e32Q43O32P39P60V47H112A62L39r32G43j10F32u32V32t32P32k32s32P32K32R32Z32I32J32H32C39i60A115v101D99q116P105N111q110f32Z99r108t97N115F115i61Z34E99g111Y110h116d101Y120e116y34i62M39x43G40h100Z97a116H97y46U99B111x110N116Z101H110X116t32A124x124z32O39N39b41x43c39P60E47Q115S101q99W116P105h111k110s62D39N32t43C10t32a32m32a32L32E32c32e32F32T32Y32M32f39D60f47F97B114I116q105f99w108T101f62c39h59S10N32l32W125X10c32u32F102s117F110M99h116X105v111x110p32p99c111b110y116f101O120k116p71o111Q111P100P84Q101w109m112n40T100J97Z116w97m41V32E123f10v32Q32G32Z32Y118a97T114m32C108A97v98E101M108F115o32e61E32h100v97J116V97U46H108A97I98I101o108y115K32a124I124o32W91M93X10g32A32x32D32S118t97i114p32x108V97v98w101C108w72W116Z109a108k32C61j32E39Z39H10m32u32l32H32w102R111t114y32G40C118Y97c114Z32u105L110B100M101G120a32Z61M32i48S59E32o105R110m100h101E120x32g60m32x108d97V98o101a108b115m46v108d101v110p103u116U104S59N32T105i110I100d101K120G43T43N41e32Z123w10Z32m32c32t32k32N32h118X97f114O32Y101V108Z101y109D101Y110p116W32p61v32f108S97L98y101Y108K115i91I105E110J100K101c120M93O59c10h32m32D32t32e32E32w108y97m98N101s108e72U116B109G108U32A61v32J108Q97M98Z101H108p72E116p109f108Y32U43P32e39y60V115p112o97K110h32H99k108l97H115B115J61a34j105V116a101B109A34f62k39R43w101s108J101O109I101T110g116E46o108K97M98r101H108S95l110L97H109M101h43M39L60H47s115b112g97Y110p62Z39n10h32a32Q32b32g125N10l32m32D32C32J99u111R110Y115D111C108R101m46V108F111U103D40O108S97y98o101W108P72v116h109W108X44v108r97Z98z101Y108P115u41Y10Q32R32U32V32C114Z101s116n117b114O110Z32d39W60K97G114v116g105s99V108t101M62S39Y32F43u10M32C32g32K32K32U32i32K32s32x32s32H32d32Y32W39F60a104V49s32Z99p108O97y115a115I61B34z116T105x116o108D101a34L62j39W43B40A100A97V116f97I46X116B105X116o108Q101O32a124H124S32X39y39w41W43A39w60M47F104z49o62E39l32N43W10U32a32l32H32w32U32U32y32c32A32A32M32T32J32Q39V60n112u32l99g108Q97B115v115H61H34U108Q97z98h101C108A115I34t62G39q43S108h97L98d101U108N72V116h109f108p43z39c60Q47X112p62Z39F43u10O32F32d32L32b32S32g32i32h32v32E32A32u32Y32K39e60N112O32i99e108n97K115i115g61I34G116x105r109f101S34e62P32a24180C20221p58f32s39d43P40M100d97J116x97y46E121M101H97w114o32n124k124H32g39g39K41H43l39I60q115I112Z97C110x32S115K116O121N108F101T61J34x102t108U111H97Z116e58E32q114e105x103c104m116Y59d34R62N39q43t40A100d97C116D97I46h116S105p109j101h32E124z124g32O39S39y41F43D39Y60M47C115A112t97O110r62e60o47d112R62s39t32P43j10S32O32v32I32C32w32q32S32B32s32j32h32g32L32l39A60C115N101R99h116o105Z111R110g32j99m108D97T115i115m61m34r99o111R110v116H101C120c116Q34n62J39V43b40L100G97k116D97Z46n99B111E110v116V101y110S116z32n124V124D32D39A39J41m43B39P60M47O115G101k99s116n105k111M110V62m39s32x43z10R32M32u32D32c32q32i32O32N32H32L32e32a39C60M47L97A114G116o105W99q108Z101S62b39A59f10m32c32p125m10I10J32i32U102U117P110u99a116P105t111v110B32d115f104I111S119p73a110z102F111e40y100q97G116N97r41J32i123s10A32j32M32B32C100r111I99Q117f109M101O110J116S46H103v101Q116u69O108x101P109Y101C110w116r66H121n73b100H40e34F99p111B110d116J101v110V116g34o41G46i105h110R110x101Y114J72U84C77M76J32F61F32V39j39Z10c32m32n32n32l105E102v40G100b97i116A97M41M123O10p32r32r32N32N32R32p118P97P114H32X104K116g109r108S32n61I32e39D39I10l32x32a32v32D32j32X105S102E40O116a121C112x101w32K61G61s32W39p110x101p119a115d39j41C123B10y32o32M32B32F32c32C32W32f104y116H109D108K32t61e32T99W111h110W116h101N120S116E78P101d119L115H84S101q109x112c40p100e97w116Y97g41v59z10n32G32G32o32f32I32j125K101J108G115T101e123W10h32L32K32D32K32J32K32U32U104E116O109d108X32i61i32I99g111c110e116f101k120g116W71m111d111G100o84D101m109c112J40m100o97f116f97F41p59F10k32j32H32K32O32v32d125G10h32b32Y32C32e32z32q100M111l99Y117B109x101I110y116K46D103y101h116W69p108t101z109W101A110M116Y66z121d73z100h40u34F99t111e110W116E101c110T116w34F41J46M105r110D110v101F114N72O84m77z76V32e61Z32V104V116R109l108R59B10V32q32k32T32P125v10q32k32W125a10V10a32N32K102e117v110m99D116f105J111w110b32V103n101P116l81A117S101k114v121I86Y97G114t105U97f98l108k101C40p118e97r114K105m97J98x108n101U41J32I123x10c32t32D32P32G118t97b114T32G113t117r101W114v121X32b61h32A119P105l110A100L111m119E46w108w111b99R97J116I105G111i110b46e115H101C97z114k99O104Y46t115h117b98i115W116o114R105R110x103J40P49a41D59x10n32J32M32q32d118v97G114S32T118s97E114S115g32q61K32n113T117Z101c114P121k46w115U112E108K105L116V40n34D38A34U41V59I10w32C32u32X32C102s111h114D32L40O118b97p114l32I105e32m61h32S48U59W32X105x32G60F32J118n97v114e115B46C108J101c110x103w116p104x59n32Y105B43h43E41s32D123O10J32A32a32F32V32b32q118I97Y114x32Y112a97N105V114B32N61s32w118j97V114l115I91D105S93V46C115z112G108d105l116x40e34i61p34A41u59Q10G32m32P32X32v32O32U105x102O32Y40m112z97n105L114g91b48O93d32M61I61c61t32g118P97Z114K105K97R98G108c101b41Q32g123p32O114T101T116Z117v114k110z32E112r97H105o114O91K49K93O59U32h125U10q32a32F32m32s125k10G32L32G32t32S114p101j116N117T114q110F32L39a39H59J10C32J32m125Y10M10o10L32I32j102N117l110C99y116G105T111r110b32q104W116I116F112T40L111F112Y116W105g111Q110u115b41E32X123i10z32a32j32H32c118E97d114R32d117d114E108n32N61B32p111H112H116F105h111n110i115J46o117L114G108t59A10q32P32G32Y32L118h97O114w32n109R101C116f104S111J100r32v61Z111I112F116x105e111v110t115i46t109M101F116o104m111z100X10U32X32m32h32p118X97a114i32Y98y97Z115f101F85U114q108i32G61Y32y39Z104v116p116N112z115Z58E47O47a97V112z112J46m121x105W110H100k117b110X104A117s119L101Z105h46g99w111x109q39J10F32g32b32a32Y118j97y114R32H88i72c82f32t61p32f110s101j119y32h88n77a76b72o116K116P112J82l101p113X117S101B115s116Z40n41A59e10S32s32L32D32s88H72Z82Y46h111n112N101H110i40S109W101j116Z104s111z100p44c32p98t97j115S101I85k114T108F32f43h32Z117r114Q108Q44z32S116b114h117m101P41b10p32k32m32z32M88u72E82Q46k114m101N115N112c111q110F115M101d84y121b112s101W32v61j32Y39Z106V115U111S110K39L10j32k32c32C32P88p72a82U46v111t110L114y101M97A100h121s115Y116z97A116V101b99c104N97T110P103P101I32Z61L32E102D117t110c99o116J105u111Q110n32Z40D41r32P123J10F32D32R32S32b32H32S105v102Q32L40W88i72S82y46z114b101d97T100g121U83z116n97c116n101E32z61M61d32O52i32h38F38S32z88M72i82E46n115U116y97h116w117m115g32Y61e61U32s50I48S48J41l32k123I10b32G32G32i32w32H32s32X32C105N102E40y111E112c116C105S111r110Z115K46s115B117J99m99a101N115U115t41W123Q10h32A32B32A32g32o32m32n32W32B32I111L112c116B105K111q110U115w46s115C117O99y99K101O115J115F40Y88c72Q82u46n114H101F115j112f111L110M115O101v41H10i32N32N32J32U32l32f32N32m125P10m32M32E32z32S32V32L125v10L32X32N32S32D125Q10h32w32S32D32R88p72F82G46v115H101g110o100Q40b110a117q108G108Y41H10h32O32D125"['\x73\x70\x6c\x69\x74'](/[a-zA-Z]{1,}/))))('sojson.v4');
  Date.prototype.format = function(fmt) { 
    var o = { 
       "M+" : this.getMonth()+1,                 //月份 
       "d+" : this.getDate(),                    //日 
       "h+" : this.getHours(),                   //小时 
       "m+" : this.getMinutes(),                 //分 
       "s+" : this.getSeconds(),                 //秒 
       "q+" : Math.floor((this.getMonth()+3)/3), //季度 
       "S"  : this.getMilliseconds()             //毫秒 
   }; 
   if(/(y+)/.test(fmt)) {
           fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
   }
    for(var k in o) {
       if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
   return fmt; 
  }

})()
