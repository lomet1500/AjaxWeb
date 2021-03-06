/**
 * //showPage2.js
 */

function showPage() {
	let doc = xhtp.responseXML;
	let data = doc.getElementsByTagName('record');
	console.log(data);
	let tableTag = document.createElement('table');
	tableTag.setAttribute('border','1');
	tableTag.setAttribute('id','tbl');
	//title tr
	//data tr =>[배열]
	let headerTr = titleRow(data);
	let dataTrs = contentRow(data);
	tableTag.appendChild(headerTr);
	for(let i = 0; i< dataTrs.length; i++){
	tableTag.appendChild(addBtn(dataTrs[i], delFunc));		
	}	
	document.getElementById('show').appendChild(tableTag);
}

function delFunc(){
	console.log(this);
	this.parentNode.parentNode.remove();
}
function addBtn(tr, callBackFunc){
	// 버튼 추가 코드. 이벤트 등록
	let butn = document.createElement('button');
	butn.onclick = callBackFunc;
	butn.innerHTML = '삭제';
	let tdTag = document.createElement('td');
	tdTag.appendChild(butn);
	tr.appendChild(tdTag);
	return tr;  
}

function titleRow(result){
	console.log(result[0].childNodes[3].nodeName);
	let trTag = document.createElement('tr');
	for(let i = 0; i < result[0].childNodes.length; i++){
		let tdTag = document.createElement('th');
		let textNode = document.createTextNode(result[0].childNodes[i].nodeName);
		tdTag.appendChild(textNode);
		trTag.appendChild(tdTag);
	}
	
	return trTag;
}

function contentRow(result){
	let trTags = [];
	for(let j=0; j<result.length; j++){
		let trTag = document.createElement('tr');
		let empId = result[j].childNodes[0].firstChild.nodeValue;  //emp input 수정
		trTag.setAttribute('id','emp_' + empId); // emp input 수정
	for(let i = 0; i < result[0].childNodes.length; i++){
		let tdTag = document.createElement('td');
		let textNode = document.createTextNode(result[j].childNodes[i].firstChild.nodeValue);
		tdTag.appendChild(textNode);
		trTag.appendChild(tdTag);
	
		trTag.onmouseover = function(){
		trTag.style.backgroundColor = "green";
		
		
		trTag.onmouseout = function(){
		trTag.style.background = "none";
		
		trTag.onclick = function(){
			
		    document.getElementById('empId').value = this.childNodes[0].childNodes[0].nodeValue;
			document.getElementById('fName').value = this.childNodes[1].childNodes[0].nodeValue;
			document.getElementById('lName').value = this.childNodes[2].childNodes[0].nodeValue;
			document.getElementById('email').value = this.childNodes[3].childNodes[0].nodeValue;
			document.getElementById('phoneNumber').value = this.childNodes[4].childNodes[0].nodeValue;
			document.getElementById('jobId').value = this.childNodes[6].childNodes[0].nodeValue;
			}	
	} 
	}	
	}	
	
	trTags.push(trTag);
}

		return trTags;
}