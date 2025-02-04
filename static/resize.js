let isLeftDragging = false;
let isRightDragging = false;

function ResetColumnSizes() {
	// when page resizes return to default col sizes
  //let page = document.getElementById("pageFrame");
  //page.style.gridTemplateColumns = "3fr 3px 6fr 3px 2fr";
}

function SetCursor(cursor) {
	let page = document.getElementById("page");
	page.style.cursor = cursor;
}

function StartLeftDrag() {
	console.log("mouse down");
	isLeftDragging = true;
	
	SetCursor("ew-resize");
}

function StartRightDrag() {
	console.log("mouse down");
	isRightDragging = true;
	
	SetCursor("ew-resize");
}

function EndDrag() {
	console.log("mouse up");
	isLeftDragging = false;
	isRightDragging = false;
	
  //document.getElementById("graph_frame").style.visibility = "visible";
	SetCursor("auto");
}

function OnDrag(event) {
	if(isLeftDragging || isRightDragging) {
		//document.getElementById("graph_frame").style.visibility = "hidden";
		let page = document.getElementById("page");
		let leftcol = document.getElementById("leftcol");
		let rightcol = document.getElementById("rightcol");
		
		let leftColWidth = isLeftDragging ? event.clientX : leftcol.clientWidth;
    if (leftColWidth < 365)
    {
      leftColWidth = 365;
    }
		let rightColWidth = isRightDragging ? page.clientWidth - event.clientX : rightcol.clientWidth;
		
		let dragbarWidth = 3;
		
		let cols = [
			leftColWidth,
			dragbarWidth,
			page.clientWidth - (2*dragbarWidth) - leftColWidth - rightColWidth,
			dragbarWidth,
			rightColWidth
		];
		
		let newColDefn = cols.map(c => c.toString() + "px").join(" ");
			
		console.log(newColDefn);
		page.style.gridTemplateColumns = newColDefn;
		
		event.preventDefault()
	}
}
