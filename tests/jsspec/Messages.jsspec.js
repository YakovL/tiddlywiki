// <![CDATA[
function getMessage() {
	return msgArea.getElementsByTagName("div")[1].innerHTML;
}

describe('displayMessage', {
		msgArea.style.visibility = "hidden";

	/* NOTE: disabled to suppress alert()
		msgArea.id = "messageArea_disabled";
		displayMessage("test value");
		var actual = getMessage();
	*/
