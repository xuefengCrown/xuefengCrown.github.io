function showPic(whichPic){ //whichPic 代表<a>元素
	if(!document.getElementById("placeholder")) return true;
	var placeholder = document.getElementById("placeholder");
	var source = whichPic.getAttribute("href");
	placeholder.setAttribute("src", source);
	if(whichPic.getAttribute("title")){
		var titletext =  whichPic.getAttribute("title");
	} else {
		titletext = "";
	}
	if(!document.getElementById("description")) return false;
	var description = document.getElementById("description");
	//alert(description.nodeType);// 元素节点
	//alert(description.childNodes[0].nodeValue); //<p> 元素 的第一个子节点
	description.childNodes[0].nodeValue = titletext;
	// or description.firstChild.nodeValue = titletext;
	return false;
}
//var items = document.getElementsByTagName("li");
function countBodyC(){
	var body_ele = document.getElementsByTagName("body")[0];
	//alert(body_ele.childNodes.length);
	alert(body_ele.nodeType);
}	
//window.onload = countBodyC;
function prepareGallery() {
	if(!document.getElementsByTagName || !document.getElementById) 
		return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for(var i=0; i<links.length; i++){
		links[i].onclick=function(){
			return showPic(this);
		}
		//links[i].onkeypress = links[i].onclick;
	}
}
// 每个事件处理函数只能绑定一条指令
// 页面加载后 要执行 prepareGallery() 函数
function addLoadEvent(func) {
	var oldonload = window.onload;
	if(typeof window.onload != 'function') {
		window.onload = func;
	}else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

function createPlaceHolder(){
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "images/css secrets standard.jpg");
	placeholder.setAttribute("alt", "iLike-books");
	
	var description = document.createElement("p");
	description.setAttribute("id", "description");
	
	var desctext = document.createTextNode("Choose a book");
	description.appendChild(desctext);
	//document.getElementsByTagName("body")[0].appendChild(placeholder);
	//document.getElementsByTagName("body")[0].appendChild(description);
	document.getElementById("books-iLike").appendChild(placeholder);
	document.getElementById("books-iLike").appendChild(description);
}

addLoadEvent(prepareGallery);
addLoadEvent(createPlaceHolder);