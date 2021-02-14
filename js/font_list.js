/*const Counter = {
    data() {
      return {
        counter: 0
      }
    },
    mounted(){
        setInterval(() => {
            this.counter++
        }, 1000)
    }
};
Vue.createApp(Counter).mount('#counter');
console.log('aaaaaaaaaa');*/
window.onload = function () {
//console.log('xxxxxxxxxxxx');

var text_test = 'if(true){ i=1; }';
var btn_typing_obj = document.getElementById('btn_typing');
var text_typing_obj = document.getElementById('text_typing');
var text_count = 0;
var text_number = 0;
var interval_id = 0;
btn_typing_obj.addEventListener('click', function(){
    interval_id = setInterval(animeType, 100, text_typing_obj);
    //text_count++;
    //clearTimeout
    //setTimeout
    /*for (var i = 0; i < text_test.length; i++) {
        let char = text_test.charAt(i);
        text_typing_obj.innerHTML += char;
    }*/
});
function animeType(disp_obj){
    //console.log('disp_obj', disp_obj);
    //console.log('text_number', text_number);
    //for (var i = 0; i < text_test.length; i++) {
    let char = text_test.charAt(text_number);
    if(char == "\n" || char == "\r" || char == "\r\n"){
        char = '<br>';
    }else if(char == " "){
        char = '&nbsp;';
    }
    disp_obj.innerHTML += char;
    if(text_number >= text_test.length){
        clearTimeout(interval_id);
        text_number = 0;
    }
    text_number++;
    //}
}

var upload_file_obj = document.getElementById('upload_file');
upload_file_obj.onchange = function(_e){
    console.log(_e);
    console.log(_e.target.files);
    for(let i = 0;i < _e.target.files.length;i++){
        console.log(_e.target.files[i]);
        let file = _e.target.files[i];
        let file_reader = new FileReader();
        file_reader.onload = function () {
            console.log(file_reader.result);
            text_test = file_reader.result;
        }
        file_reader.readAsText(file);
    }
}


//フォント比較一覧スクリプト
var font_family_list = [
    ['serif', 'serif'],
    ['sans-serif', 'sans-serif'],
    ['monospace', 'monospace'],
    ['cursive', 'cursive'],
    ['fantasy', 'fantasy'],
    ['system-ui', 'system-ui'],
    ['ui-serif', 'ui-serif'],
    ['ui-sans-serif', 'ui-sans-serif'],
    ['ui-monospace', 'ui-monospace'],
    ['ui-rounded', 'ui-rounded'],
    ['emoji', 'emoji'],
    ['math', 'math'],
    ['fangsong', 'fangsong'],
    ['arial', '\'arial\''],
    ['arial black', '\'arial black\''],
    ['arial narrow', '\'arial narrow\''],
    ['arial unicode ms', '\'arial unicode ms\''],
    ['Century Gothic', '\'Century Gothic\''],
    ['Franklin Gothic Medium', '\'Franklin Gothic Medium\''],
    ['Gulim', '\'Gulim\''],
    ['Dotum', '\'Dotum\''],
    ['Haettenschweiler', '\'Haettenschweiler\''],
    ['Impact', '\'Impact\''],
    ['Ludica Sans Unicode', '\'Ludica Sans Unicode\''],
    ['Microsoft Sans Serif', '\'Microsoft Sans Serif\''],
    ['MS Sans Serif', '\'MS Sans Serif\''],
    ['MV Boil', '\'MV Boil\''],
    ['New Gulim', '\'New Gulim\''],
    ['Tahoma', '\'Tahoma\''],
    ['Trebuchet', '\'Trebuchet\''],
    ['Verdana', '\'Verdana\''],
    ['Batang', '\'Batang\''],
    ['Book Antiqua', '\'Book Antiqua\''],
    ['Bookman Old Style', '\'Bookman Old Style\''],
    ['Century', '\'Century\''],
    ['Estrangelo Edessa', '\'Estrangelo Edessa\''],
    ['Garamond', '\'Garamond\''],
    ['Gautami', '\'Gautami\''],
    ['Georgia', '\'Georgia\''],
    ['Gungsuh', '\'Gungsuh\''],
    ['Latha', '\'Latha\''],
    ['Mangal', '\'Mangal\''],
    ['MS Serif', '\'MS Serif\''],
    ['PMingLiU', '\'PMingLiU\''],
    ['Palatino Linotype', '\'Palatino Linotype\''],
    ['Raavi', '\'Raavi\''],
    ['Roman', '\'Roman\''],
    ['Shruti', '\'Shruti\''],
    ['Sylfaen', '\'Sylfaen\''],
    ['Times New Roman', '\'Times New Roman\''],
    ['Tunga', '\'Tunga\''],
    ['BatangChe', '\'BatangChe\''],
    ['Courier', '\'Courier\''],
    ['Courier New', '\'Courier New\''],
    ['DotumChe', '\'DotumChe\''],
    ['GulimChe', '\'GulimChe\''],
    ['GungsuhChe', '\'GungsuhChe\''],
    ['HG行書体', '\'HG行書体\''],
    ['Lucida Console', '\'Lucida Console\''],
    ['MingLiU', '\'MingLiU\''],
    ['OCRB', '\'OCRB\''],
    ['SimHei', '\'SimHei\''],
    ['SimSun', '\'SimSun\''],
    ['Small Fonts', '\'Small Fonts\''],
    ['Terminal', '\'Terminal\''],
    ['alba', '\'alba\''],
    ['alba matter', '\'alba matter\''],
    ['alba super', '\'alba super\''],
    ['baby kruffy', '\'baby kruffy\''],
    ['Chick', '\'Chick\''],
    ['Croobie', '\'Croobie\''],
    ['Fat', '\'Fat\''],
    ['Freshbot', '\'Freshbot\''],
    ['Frosty', '\'Frosty\''],
    ['Gloo Gun', '\'Gloo Gun\''],
    ['Jokewood', '\'Jokewood\''],
    ['Modern', '\'Modern\''],
    ['Monotype Corsiva', '\'Monotype Corsiva\''],
    ['Poornut', '\'Poornut\''],
    ['Pussycat Snickers', '\'Pussycat Snickers\''],
    ['Weltron Urban', '\'Weltron Urban\''],
    ['Comic Sans MS', '\'Comic Sans MS\''],
    ['HGP行書体', '\'HGP行書体\''],
    ['HG正楷書体-PRO', '\'HG正楷書体-PRO\''],
    ['Jenkins v2.0', '\'Jenkins v2.0\''],
    ['Script', '\'Script\''],
    ['【Windows】MS UI Gothic', '\'MS UI Gothic\''],
    ['【Windows】ＭＳ Ｐゴシック - MS PGothic', '\'ＭＳ Ｐゴシック\',\'MS PGothic\''],
    ['【Windows】ＭＳ ゴシック - MS Gothic', '\'ＭＳ ゴシック\',\'MS Gothic\''],
    ['【Windows】ＭＳ Ｐ明朝 - MS PMincho', '\'ＭＳ Ｐ明朝\',\'MS PMincho\''],
    ['【Windows】ＭＳ 明朝 - MS Mincho', '\'ＭＳ 明朝\',\'MS Mincho\''],
    ['【Windows】メイリオ - Meiryo', '\'メイリオ\',\'Meiryo\''],
    ['【Windows】Meiryo UI', '\'Meiryo UI\''],
    ['【Windows】游ゴシック - Yu Gothic', '\'游ゴシック\',\'Yu Gothic\''],
    ['【Windows】游明朝 - Yu Mincho', '\'游明朝\',\'Yu Mincho\''],
    ['【Mac】ヒラギノ角ゴ Pro W3 - Hiragino Kaku Gothic Pro', '\'ヒラギノ角ゴ Pro W3\',\'Hiragino Kaku Gothic Pro\''],
    ['【Mac】ヒラギノ角ゴ ProN W3 - Hiragino Kaku Gothic ProN', '\'ヒラギノ角ゴ ProN W3\',\'Hiragino Kaku Gothic ProN\''],
    ['【Mac】ヒラギノ角ゴ Pro W6 - HiraKakuPro-W6', '\'ヒラギノ角ゴ Pro W6\',\'HiraKakuPro-W6\''],
    ['【Mac】ヒラギノ角ゴ ProN W6 - HiraKakuProN-W6', '\'ヒラギノ角ゴ ProN W6\',\'HiraKakuProN-W6\''],
    ['【Mac】ヒラギノ角ゴ Std W8 - Hiragino Kaku Gothic Std', '\'ヒラギノ角ゴ Std W8\',\'Hiragino Kaku Gothic Std\''],
    ['【Mac】ヒラギノ角ゴ StdN W8 - Hiragino Kaku Gothic StdN', '\'ヒラギノ角ゴ StdN W8\',\'Hiragino Kaku Gothic StdN\''],
    ['【Mac】ヒラギノ丸ゴ Pro W4 - Hiragino Maru Gothic Pro', '\'ヒラギノ丸ゴ Pro W4\',\'Hiragino Maru Gothic Pro\''],
    ['【Mac】ヒラギノ丸ゴ ProN W4 - Hiragino Maru Gothic ProN', '\'ヒラギノ丸ゴ ProN W4\',\'Hiragino Maru Gothic ProN\''],
    ['【Mac】ヒラギノ明朝 Pro W3 - Hiragino Mincho Pro', '\'ヒラギノ明朝 Pro W3\',\'Hiragino Mincho Pro\''],
    ['【Mac】ヒラギノ明朝 ProN W3 - Hiragino Mincho ProN', '\'ヒラギノ明朝 ProN W3\',\'Hiragino Mincho ProN\''],
    ['【Mac】ヒラギノ明朝 Pro W6 - HiraMinPro-W6', '\'ヒラギノ明朝 Pro W6\',\'HiraMinPro-W6\''],
    ['【Mac】ヒラギノ明朝 ProN W6 - HiraMinProN-W6', '\'ヒラギノ明朝 ProN W6\',\'HiraMinProN-W6\''],
    ['【Mac】游ゴシック体 - YuGothic', '\'游ゴシック体\',\'YuGothic\''],
    ['【Mac】游明朝体 - YuMincho', '\'游明朝体\',\'YuMincho\''],
    ['【Mac】Osaka', '\'Osaka\''],
    ['【Mac】Osaka－等幅 - Osaka-Mono', '\'Osaka－等幅\',\'Osaka-Mono\''],
    //['Droid Sans', '\'Droid Sans\''],
    //['Roboto', '\'Roboto\''],
    //['小塚ゴシック Pro - Kozuka Gothic Pro', '\'小塚ゴシック Pro\',\'Kozuka Gothic Pro\''],
    //['', '\'\''],
    //['', ''],
    //['', '']
];
var font_weight_class_list = [
    ['Thin (Hairline) - font-weight:100', 'fw100'],
    ['Extra Light (Ultra Light) - font-weight:200', 'fw200'],
    ['Light - font-weight:300', 'fw300'],
    ['Normal (Regular) - font-weight:400', 'fw400'],
    ['Medium - font-weight:500', 'fw500'],
    ['Semi Bold (Demi Bold) - font-weight:600', 'fw600'],
    ['Bold - font-weight:700', 'fw700'],
    ['Extra Bold (Ultra Bold) - font-weight:800', 'fw800'],
    ['Black (Heavy) - font-weight:900', 'fw900']
];
var text_data = "!1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZあいうえおかきくけこがぎぐげごさしすせそざじずぜぞたちつてとだぢづでどなにぬねのはひふへほばびぶべぼぱぴぷぺぽまみむめもやゆよらりるれろわゐゑをんきゃきゅきょぎゃぎゅぎょしゃしゅしょじゃじゅじょちゃちゅちょぢゃぢゅぢょにゃにゅにょひゃひゅひょびゃびゅびょぴゃぴゅぴょみゃみゅみょりゃりゅりょしぇじぇちぇぢぇつぁつぇつぉてぃでぃてゅでゅふぁふぃふぇふぉふゅいぇうぃうぇうぉゔぁゔぃゔゔぇゔぉゔゅくぁくぃくぇくぉぐぁとぅどぅぁぃぅぇぉゕっゃゅょゎアイウエオカキクケコガギグゲゴサシスセソザジズゼゾタチツテトダヂヅデドナニヌネノハヒフヘホバビブベボパピプペポマミムメモヤユヨラリルレロワヰヱヲンキャキュキョギャギュギョシャシュショジャジュジョチャチュチョヂャヂュヂョニャニュニョヒャヒュヒョビャビュビョピャピュピョミャミュミョリャリュリョシェジェチェヂェツァツェツォティディテュデュファフィフェフォフュイェウィウェウォゔァゔィゔゔェゔォゔュクァクィクェクォグァトゥドゥァィゥェォヶッャュョヮ";
var content_obj = document.getElementById('content');
var box_html = '';
for(var i in font_family_list){
    box_html += '<div class="content_box">';
    box_html += '<div class="font_family_name" style="font-family:'+font_family_list[i][1]+'">'+font_family_list[i][0]+'</div>';
    box_html += '<div class="font_weight_box" style="font-family:'+font_family_list[i][1]+'">';
    for(var j in font_weight_class_list){
        box_html += '<div class="font_weight_name">'+font_weight_class_list[j][0]+'</div>';
        box_html += '<div class="font_weight_content '+font_weight_class_list[j][1]+'">'+text_data+'</div>';
    }
    box_html += '</div>';
    box_html += '</div>';
}

//var content_obj = 
var font_list_line_1_obj = document.getElementById('font_list_line_1');
font_list_line_1_obj.onclick = function(){
    console.log('font_list_line_1_obj click');
};
//console.log(content_obj);
//console.log(box_html);
content_obj.innerHTML = box_html;
};

