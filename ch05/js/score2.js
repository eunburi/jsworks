//학생 5명의 국어, 수학 점수
// score배열 선언, 값 저장
let score = [
    [80, 70],
    [90, 60],
    [70, 70],
    [95, 90],
    [83, 35]
]

//전체 출력
for(let i=0; i<score.length; i++){
    for(let j=0; j<score[i].length; j++){
        document.write(score[i][j] + " ");
    }
    document.write("<br>");
}

// 과목별 총점
// let korSum = 0;
// let mathSum = 0;

let arrSum = [0,0];
//arrSum[0] = 0, arrSum[1] = 0


for(let i=0; i<score.length; i++){
    arrSum[0] += score[i][0]; //국어 점수의 합계
    arrSum[1] += score[i][1]; //수학의 합계
}


// 과목별 평균
//let korAvg, mathAvg;
let arrAvg = [0.0, 0.0]; // arrAvg[0] = 0.0, arrAvg[1] = 0.0

arrAvg[0] = arrSum[0] / score.length;  //국어평균
arrAvg[1] = arrSum[1] / score.length; //수학평균

document.write("국어총점 : " + arrSum[0] + "<br>");
document.write("수학총점 : " + arrSum[1] + "<br>");
document.write("국어평균 : " + arrAvg[0] + "<br>");
document.write("수학평균 : " + arrAvg[1] + "<br>");


