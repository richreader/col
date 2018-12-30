var widgetHtml = '<iframe src="https://www.prepostseo.com/widget/plagiarismchecker" style="border:0;width:100%;min-height:400px;height:100%;overflow: hidden;"></iframe>';
var widgetTag = document.getElementById("ppsLink");
if (widgetTag === null){ 
	widgetHtml += '<div style="text-align: center; font-size:12px; color:#333;margin-top:-40px;"><p><a href="https://writeforbenefits.blogspot.com" target="_blank" style="color:#000;" id="ppsLink">Plagiarism Checker</a> provided by <a href="https://www.prepostseo.com/" rel="nofollow noreferrer noopener noindex" target="_blank"  style="color:#000;">prepostseo.com</a></p></div>';
	
} else {
	var linkUrl = widgetTag.getAttribute("href");	
	if(linkUrl !== 'https://writeforbenefits.blogspot.com'){
		widgetHtml += '<div style="text-align: center; font-size:12px; color:#333;margin-top:-40px;"><p><a href="https://writeforbenefits.blogspot.com" target="_blank" style="color:#000;" id="ppsLink">Plagiarism Checker</a> provided by <a href="https://www.prepostseo.com/" rel="nofollow noreferrer noopener noindex" target="_blank"  style="color:#000;">prepostseo.com</a></p></div>';
	}
}

var isNew = document.getElementById("ppsWidgetCode");
if(isNew === null){
	document.write('<iframe src="https://www.prepostseo.com/widget/plagiarismchecker" style="border:0;width:100%;min-height:400px;height:100%;overflow: hidden;"></iframe>');
} else {
	document.getElementById("ppsWidgetCode").innerHTML = widgetHtml;
}