function search_check(obj){if(obj.keyboard.value.length==0){alert('请输入搜索关键字');return false;}return true;}document.write("<table width=99% border=0 cellpadding=3 cellspacing=1><form name=search_js2 method=post action=\'/e/search/index.php\' onsubmit=\'return search_check(document.search_js2);\'><tr><td height=25><div align=center>关键字: <input name=keyboard type=text size=13></div></td></tr><tr><td><div align=center>范围: <select name=show><option value=title>标题</option><option value=smalltext>简介</option><option value=newstext>内容</option><option value=writer>作者</option><option value=title,smalltext,newstext,writer>搜索全部</option></select></div></td></tr><tr><td><div align=center>栏目:<select name=classid><option value=0>所有栏目</option><option value='36'>|-新闻</option><option value='37' style='background:#99C4E3'>&nbsp;&nbsp;|-平台通知</option><option value='38' style='background:#99C4E3'>&nbsp;&nbsp;|-学校通知</option><option value='39' style='background:#99C4E3'>&nbsp;&nbsp;|-社团公告</option><option value='40' style='background:#99C4E3'>&nbsp;&nbsp;|-今日头条</option><option value='1'>|-文章</option><option value='28' style='background:#99C4E3'>&nbsp;&nbsp;|-菜鸟教程</option><option value='41' style='background:#99C4E3'>&nbsp;&nbsp;|-随便写写</option><option value='42' style='background:#99C4E3'>&nbsp;&nbsp;|-表白墙</option><option value='4'>|-图片</option><option value='30' style='background:#99C4E3'>&nbsp;&nbsp;|-校园美景</option><option value='43' style='background:#99C4E3'>&nbsp;&nbsp;|-美工作品</option><option value='44' style='background:#99C4E3'>&nbsp;&nbsp;|-动漫图片</option><option value='7'>|-资源</option><option value='32' style='background:#99C4E3'>&nbsp;&nbsp;|-常用软件</option><option value='45' style='background:#99C4E3'>&nbsp;&nbsp;|-热门游戏</option><option value='46' style='background:#99C4E3'>&nbsp;&nbsp;|-教程集锦</option><option value='47' style='background:#99C4E3'>&nbsp;&nbsp;|-网盘种子</option><option value='10'>|-视频</option><option value='33' style='background:#99C4E3'>&nbsp;&nbsp;|-热门电影</option><option value='49' style='background:#99C4E3'>&nbsp;&nbsp;|-综艺动漫</option><option value='50' style='background:#99C4E3'>&nbsp;&nbsp;|-校园生活</option><option value='48' style='background:#99C4E3'>&nbsp;&nbsp;|-电视剧</option><option value='24'>|-学习</option><option value='34' style='background:#99C4E3'>&nbsp;&nbsp;|-课堂课件</option><option value='51' style='background:#99C4E3'>&nbsp;&nbsp;|-在线学堂</option><option value='52' style='background:#99C4E3'>&nbsp;&nbsp;|-考试题库</option><option value='25'>|-创客中心</option><option value='53' style='background:#99C4E3'>&nbsp;&nbsp;|-网站开发</option><option value='54' style='background:#99C4E3'>&nbsp;&nbsp;|-编程设计</option><option value='35' style='background:#99C4E3'>&nbsp;&nbsp;|-数学建模</option><option value='13'>|-商城</option><option value='14' style='background:#99C4E3'>&nbsp;&nbsp;|-站内购买</option><option value='15' style='background:#99C4E3'>&nbsp;&nbsp;|-站外购买</option><option value='16'>|-综合栏目（导航不显示，用于网站底部，不要删除）</option><option value='17'>&nbsp;&nbsp;|-关于我们</option><option value='55'>&nbsp;&nbsp;|-使用须知</option><option value='19'>&nbsp;&nbsp;|-免责声明</option><option value='20'>&nbsp;&nbsp;|-广告合作</option><option value='21'>&nbsp;&nbsp;|-资源集锦</option><option value='22' style='background:#99C4E3'>|-幻灯片添加（导航不显示，用于首页大图幻灯，不要删除）</option></select></div></td></tr><tr><td><div align=center><input type=submit name=Submit value=搜索></div></td></tr></form></table>");