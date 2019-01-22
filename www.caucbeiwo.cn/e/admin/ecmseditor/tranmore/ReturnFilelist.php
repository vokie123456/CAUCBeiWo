<?php
define('EmpireCMSAdmin','1');
require("../../../class/connect.php");
require("../../../class/db_sql.php");
require("../../../class/functions.php");
require("../../../data/dbcache/class.php");
$link=db_connect();
$empire=new mysqlquery();
$editor=2;
//验证用户
$lur=is_login();
$logininid=$lur['userid'];
$loginin=$lur['username'];
$loginrnd=$lur['rnd'];
$loginlevel=$lur['groupid'];
$loginadminstyleid=$lur['adminstyleid'];
//ehash
$ecms_hashur=hReturnEcmsHashStrAll();

include('tranmorefun.php');
if(!defined('EmpireCMSDefSession'))
{
	session_start();
	define('EmpireCMSDefSession',TRUE);
}

$tmtrantype=tranmore_ReturnTranType();
?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>上传多文件 - EmpireCMS</title>
</head>
<body>

<?php
if($tmtrantype=='editormorepic')//编辑器上传
{
	$efromurl=RepPostStrUrl(urldecode($_GET['efromurl']));
	if(strstr($efromurl,'://'))
	{
		exit();
	}
	$tmfilelist=tranmore_ReturnMorepic('editormorepic');
	$addcs=tranmore_ReturnEditorMorepicAdd();
	$string=tranmore_EchoEditorMorepic($tmfilelist,$addcs);
?>
<script>
window.parent.EHEcmsEditorDoTranMore("<?=$string?>");
self.location.href="<?=$efromurl?>";
</script>
<?php
}
elseif($tmtrantype=='morepic')//图集上传
{
	$tmfilelist=tranmore_ReturnMorepic('morepic');
	$tmcount=count($tmfilelist);
	$oldmorepicnum=tranmore_ReturnOldMorepicNum();
	$oldmorepicnum=(int)$oldmorepicnum;
	$string=tranmore_EchoFieldMorepic($tmfilelist,$oldmorepicnum);
?>
<script>
opener.eTranMoreForMorepic("<?=$string?>",<?=$tmcount?>);
window.close();
</script>
<?php
}
elseif($tmtrantype=='mainpic')//普通上传
{
?>
<script>
opener.eTranMoreForFileMain('');
window.close();
</script>
<?php
}
else
{
?>
<script>
opener.eTranMoreForFileMain('');
window.close();
</script>
<?php
}
?>

</body>
</html>
<?php
tranmore_EmptyFileList('all');
db_close();
$empire=null;
?>