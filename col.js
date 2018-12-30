var widgetHtml = '<iframe src="https://www.prepostseo.com/widget/plagiarismchecker" style="border:0;width:100%;min-height:400px auto;height:100% auto;overflow: hidden;"></iframe>';
var widgetTag = document.getElementById("ppsLink");
if (widgetTag === null){ 
	widgetHtml += '<div style="text-align: center; font-size:12px; color:#e2e2e2;margin-top:-40px;"><p><a href="https://writeforbenefits.blogspot.com/p/plagiarism-checker.html" target="parent" style="color:#e2e2e2;" id="ppsLink">Plagiarism Checker</a> provided by <a href="https://www.prepostseo.com/" rel="nofollow noreferrer noopener noindex" target="_blank"  style="color:#e2e2e2;">PrePostSEO</a></p></div>';
	
} else {
	var linkUrl = widgetTag.getAttribute("href");	
	if(linkUrl !== 'https://writeforbenefits.blogspot.com/p/plagiarism-checker.html'){
		widgetHtml += '<div style="text-align: center; font-size:12px; color:#333;margin-top:-40px;"><p><a href="https://writeforbenefits.blogspot.com/p/plagiarism-checker.html" target="parent" style="color:#e2e2e2;" id="ppsLink">Plagiarism Checker</a> provided by <a href="https://www.prepostseo.com/" rel="nofollow noreferrer noopener noindex" target="_blank"  style="color:#e2e2e2;">PrePostSEO</a></p></div>';
	}
}

var isNew = document.getElementById("ppsWidgetCode");
if(isNew === null){
	document.write('<iframe src="https://www.prepostseo.com/widget/plagiarismchecker" style="border:0;width:100%;min-height:400px auto;height:100% auto;overflow: hidden;"></iframe>');
} else {
	document.getElementById("ppsWidgetCode").innerHTML = widgetHtml;
}
