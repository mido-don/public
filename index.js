// 元集計データの表示非表示を切り替える
document.getElementById("origin_data").style.display ="none";
function button0(){
    const origin_data = document.getElementById("origin_data");
    if(origin_data.style.display=="block"){
    origin_data.style.display ="none";
    }else{
    origin_data.style.display ="block";
    }
}



// 回答があったと想定して仮で設定
let titles = ['回答者', '親切さ', 'わかりやすさ', '清潔感', '知識', 'その他', 
                '電話対応', 'WEBページのデザイン', '予約の取りやすさ', '資料の内容', 'その他'];
let answer_list = [];
answer_list.push(['Aさん', 5, 1, 2, 1, 2, 4, 2, 3, 4, 2]);
answer_list.push(['Bさん', 3, 3, 3, 3, 3, 2, 3, 4, 3, 2]);
answer_list.push(['Cさん', 1, 5, 1, 5, 1, 5, 1, 1, 5, 4]);

// htmlのテーブルのセルを、質問数分だけクローンする
let ids = ['titles', 'answers1', 'answers2', 'answers3', ];
for (const id of ids){
    for (var i = 0; i < titles.length-1; i++) {
        var elm_area = document.getElementById(id);
        var elm_clone = elm_area.cloneNode(true);
        elm_area.after(elm_clone);
    }
}
// htmlのテーブルのヘッダーに、titlesの内容を転記
for (let h = 0; h < titles.length; h++) {
    var table = document.getElementById('origin_data');
    var tr = table.rows[0];
    var td = tr.cells[h];
    td.firstChild.nodeValue = titles[h];
}
// htmlのテーブルの各セルに、answersの内容を転記
for (let n = 0; n < answer_list.length; n++) {
    for (let k = 0; k < answer_list[n].length; k++) {
        var table = document.getElementById('origin_data');
        var tr = table.rows[n+1];
        var td = tr.cells[k];
        td.firstChild.nodeValue = answer_list[n][k];
    }
}



// 営業への評価に関するグラフを表示させる
function button1(){
    let ctx = document.getElementById("myRaderChart");
    let myRadarChart = new Chart(ctx, {
        type: 'radar', 
        data: { 
            labels: titles.slice(1, 6),
            datasets: [{
                label: answer_list[0][0],
                data: answer_list[0].slice(1, 6),
                backgroundColor: 'RGBA(225,95,150, 0.2)',
                borderColor: 'RGBA(225,95,150, 1)',
                borderWidth: 1,
                pointBackgroundColor: 'RGB(46,106,177)'
            }, {
                label: answer_list[1][0],
                data: answer_list[1].slice(1, 6),
                backgroundColor: 'RGBA(115,255,25, 0.2)',
                borderColor: 'RGBA(115,255,25, 1)',
                borderWidth: 1,
                pointBackgroundColor: 'RGB(46,106,177)'
            }, {
                label: answer_list[2][0],
                data: answer_list[2].slice(1, 6),
                backgroundColor: 'RGBA(30,144,255, 0.2)',
                borderColor: 'RGBA(30,144,255, 1)',
                borderWidth: 1,
                pointBackgroundColor: 'RGB(46,106,177)'
            }]
        },
        options: {
            title: {
                display: true,
                text: '営業への評価',
                fontSize: 20,
                padding: 30
            },
            scale: {
                pointLabels: {
                    fontSize: 20,
                },
                ticks: {
                    fontSize:15,
                    suggestedMin: 0,
                    suggestedMax: 5,
                    stepSize: 1,
                    callback: function(value, index, values){
                        return  value +  '点'
                    }
                },
            },
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 60,
                    fontSize: 20,
                    padding: 20
                },
            },
        }
    });
}


// WEBへの評価に関するグラフを表示させる
function button2(){
    let ctx = document.getElementById("myRaderChart");
    let myRadarChart = new Chart(ctx, {
        type: 'radar', 
        data: { 
            labels: ["電話対応", "WEBページのデザイン", "予約の取りやすさ", "資料の内容", "その他"],
            datasets: [{
                label: 'Aさん',
                data: answers2[0],
                backgroundColor: 'RGBA(243,152,0, 0.2)',
                borderColor: 'RGBA(243,152,0, 1)',
                borderWidth: 1,
                pointBackgroundColor: 'RGB(46,106,177)'
            }, {
                label: 'Bさん',
                data: answers2[1],
                backgroundColor: 'RGBA(148,87,164, 0.2)',
                borderColor: 'RGBA(148,87,164, 1)',
                borderWidth: 1,
                pointBackgroundColor: 'RGB(46,106,177)'
            }, {
                label: 'Cさん',
                data: answers2[2],
                backgroundColor: 'RGBA(115,255,25, 0.2)',
                borderColor: 'RGBA(115,255,25, 1)',
                borderWidth: 1,
                pointBackgroundColor: 'RGB(46,106,177)'
            }]
        },
        options: {
            title: {
                display: true,
                text: 'WEBへの評価',
                fontSize: 20,
                padding: 30
            },
            scale: {
                pointLabels: {
                    fontSize: 20,
                },
                ticks: {
                    fontSize:15,
                    suggestedMin: 0,
                    suggestedMax: 5,
                    stepSize: 1,
                    callback: function(value, index, values){
                        return  value +  '点'
                    }
                },
            },
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 60,
                    fontSize: 20,
                    padding: 20
                },
            },
        }
    });
}


// 満足度に関するグラフを表示させる
function button3(){
    let ctx = document.getElementById("myRaderChart");
    let myRadarChart = new Chart(ctx, {
        type: 'doughnut', 
        data: { 
            labels: ["とても満足", "満足", "不満", "とても不満"],
            datasets: [{
                data: answers3[0],
                backgroundColor: [
                    'RGBA(243,152,0, 0.2)',
                    'RGBA(115,255,25, 0.2)',
                    'RGBA(30,144,255, 0.2)',
                    'RGBA(148,87,164, 0.2)',
                ],
            }]
        },
        options: {
            title: {
                display: true,
                text: '満足度',
                fontSize: 20,
                padding: 30
            },
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 60,
                    fontSize: 20,
                    padding: 20
                },
            },
        }
    });
}
