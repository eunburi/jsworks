//아이템 리스트
let itemList = []

let addbtn = document.getElementById("add");
addbtn.addEventListener("click", addList);

//아이템 추가 함수
function addList(){
    //item은 itemList에 push()로 저장(입력)
    let item= document.getElementById("item").value;
    itemList.push(item);
    document.getElementById("item").value = ""; //기존 아이템 내용 초기화
    document.getElementById("item").focus(); // 커서의 위치

    showList();
}   //addlist닫기

function showList(){
    //document.getElementById("itemList").innerHTML = itemList[0];
    let list = "<ul>"; //목록 리스트 변수
    for(let i=0; i<itemList.length; i++){
        //document.getElementById("itemList").innerHTML = itemList[0];
        list += "<li>" + itemList[i] + "<span class='close' id="+ i +">X</li>"
    }

    list += "</ul>"
    document.getElementById("itemList").innerHTML = itemList[0];

    


//아이템삭제
//'x'를 선택
let removeList = document.querySelectorAll(".close");

//'X'fmf 클릭했을때 삭제 이벤트가 발생함
for(let i=0; i<removeList.length; i++){
removeList[i].addEventListener("click", remove);
}

function remove(){
    console.log(this); // 클릭 이벤트가 일어난 대상
    //itemList.splice(인덱스,삭제할 개수); //id 값 가져옴
    let id = this.getAttribute("id"); //해당 위치에서 1개 삭제
    itemList.splice(id,1);

    //목록보기
    showList();
} //remove닫기
}//showlist 닫기