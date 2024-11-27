function modalDialogShow_IE(url,t,width,height) 
	{
	if(url.indexOf("?")==-1) url=url+"?ffilter=" + t;
	else url=url+"&ffilter=" + t;
	
	return window.showModalDialog(url,window,
		"dialogWidth:"+width+"px;dialogHeight:"+height+"px;edge:Raised;center:Yes;help:No;Resizable:Yes;Maximize:Yes");
	}
function modalDialogShow_Moz(url,width,height) 
    {
    var left = screen.availWidth/2 - width/2;
    var top = screen.availHeight/2 - height/2;
    activeModalWin = window.open(url, "", "width="+width+"px,height="+height+"px,left="+left+"px,top="+top+"px");
    window.onfocus = function(){if (activeModalWin.closed == false){activeModalWin.focus();};};
    }
var sActiveAssetInput;
function setAssetValue(v) 
    {
    document.getElementById(sActiveAssetInput).value = v;
    }
function UploadPenceresiAc(Nesne_GeriDeger,Tur)
	{
	sActiveAssetInput = Nesne_GeriDeger
	if(navigator.appName.indexOf('Microsoft')!=-1)
		document.getElementById(sActiveAssetInput).value=modalDialogShow_IE("/yonetici/bt_daolpu/Upload.aspx",Tur,650,510); 
	else
		modalDialogShow_Moz("/yonetici/bt_daolpu/Upload.aspx",650,510); 
	}
