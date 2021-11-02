const product = [
	{
	"imageA":"01a.jpg",
	"imageB":"01b.jpg",
	"reference_name":"ぱくたそ",
	"reference_url":"https://www.pakutaso.com/20130926245post-3238.html",
	"desc1":`
		題材：どこかで見たような個性的なポーズをキメる男性
		加工方針：ポーズの元ネタに寄せたコミック調アート
`,
	"desc2":`
		・2階調化を駆使してイラスト調に変換
		・色収差を追加してアクセントを付ける
		・ハーフトーン化して背景に配置
		・ワープテキストを配置して全体のバランス調整
`
	},{
	"imageA":"02a.jpg",
	"imageB":"02b.jpg",
	"reference_name":"写真AC",
	"reference_url":"https://www.photo-ac.com/main/detail/701342",
	"desc1":`
		題材：イカ
		加工方針：とある任天堂作品を意識したポップなストリートアート調
`,
	"desc2":`
		・2階調化を駆使してイラスト(劇画調)に変換
		・ストリートアートである事を意識してCMYK色空間を用いた配色を用いる
		・カラーハーフトーンを用いて印刷物らしさを付加
		・ラフなインクのこぼれを配置してストリートアート調を強調
		・いかぽっぽを元ネタにポップに仕上げた事を主張するダジャレを配置
`
	},{
	"imageA":"03a.jpg",
	"imageB":"03b.jpg",
	"reference_name":"1%の需要に応えた看護師フリー写真素材サイト スキマナース",
	"reference_url":"https://nurse-web.jp/photo/archives/205",
	"desc1":`
		題材：患者とビート板をかじり合う看護師
		加工方針：せめてビート板以外の物を奪い合ってほしい
`,
	"desc2":`
		・ビート板を形状と陰影だけを残し、テクスチャの差し替えが可能な状態に加工
		・フリー素材の牛肉をテクスチャとして適用
`
	},{
	"imageA":"04a.jpg",
	"imageB":"04b.jpg",
	"reference_name":"ぱくたそ",
	"reference_url":"https://www.pakutaso.com/20191007289post-23781.html",
	"desc1":`
		題材：親の敵のごとくチーズドッグを睨みつける男性
		加工方針：素材が持つインパクトを残したまま世界観を変更
`,
	"desc2":`
		・男性を背景から切り出す
		・男性を絵画調に変換
		・絵画調に変換した背景を用意
		・背景と男性を合成
`
	},{
	"imageA":"05a.jpg",
	"imageB":"05b.jpg",
	"reference_name":"gogonogoat Portfolio",
	"reference_url":"index.html",
	"desc1":`
		題材：このサイトのロゴ
		加工方針：チープな絵を少ない手間で豪華に
`,
	"desc2":`
		・アンティーク調を意識して背景にレンガを採用
		・背景に暗めな色調補正を適用
		・ロゴをレイヤー効果を利用してゴールド調に加工
`
	}
];

const vue = new Vue({
	el:'#app',
	data:{
		product:product
	},
	methods:{
		prefix:function(str){return (str=="") ? "" : "images/retouch/";},
		toImageUrl:function(str){
			const prefix = this.prefix(str);
			const result = prefix + str;
			return result;
		},
		toIcon:function(str){
			const prefix = this.prefix(str);
			const extDict = {
				audacity:".png"
			};
			const suffix = (str in extDict) ? extDict[str] : ".svg";
			const result = (str=="") ? "" : prefix + str + suffix;
			return result;
		},
		descFix:function(str){
			console.log(str);
			const replaceList = [
				[/^\n/,""],
				[/\n$/,""],
				[/\n\t{2}/g,"<br>\n"],
				[/\t{2}/g,""],
				[/\t/g,"　"]
			];
			const replaceReducer = (r,v) => r.replace(v[0],v[1]);
			const replacefix = replaceList.reduce(replaceReducer,str);
			
			console.log(replacefix);
			const result = replacefix;
			return result;
		}
	},
});