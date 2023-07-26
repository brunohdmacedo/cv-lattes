function addListener(element, type, expression, bubbling) {
bubbling = bubbling || false;

	if(window.addEventListener) { // Standard
	element.addEventListener(type, expression, bubbling);
	return true;
	} 
	
	else if(window.attachEvent) { // IE
	element.attachEvent('on' + type, expression);
	return true;
	}
	
	else return false;
}