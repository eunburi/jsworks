//놀이공원 입장료 계산//
let age = prompt("나이를 입력하세요~", "1");
age = parseInt(age);
let charge;

//if문 처리


if(age <8){ 
    document.write("취확 전 아동입니다.<br>");
    charge = 1000;
    
}

else if(age >= 8 && age <14){
    document.write("초등학생입니다.<br>");
    charge = 2000;

}

else if(age >= 14 && age < 20){
    document.write("중,고등학생입니다.<br>");
    charge = 2500;

}
else {//age >= 20
    document.write("성인입니다.<br>");
    charge = 3000;
}

document.write("입장료는 <span class='access'>"+ charge + "원</span>입니다.")