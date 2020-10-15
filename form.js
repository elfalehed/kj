$(function() {
	$("<pre />", {
		"html":   '&lt;!DOCTYPE html>\n&lt;html>\n' + 
				$("html")
					.html()
					.replace(/[<>]/g, function(m) { return {'<':'&lt;','>':'&gt;'}[m]})
					.replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,'<a href="$1">$1</a>') + 
				'\n&lt;/html>'
	}).appendTo("#source-code");
});