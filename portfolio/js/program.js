
const product = [
	{
	"image":"jankenman.png",
	"name":"ジャンケンゲーム",
	"url":"http://www.gogonogoat00.shop/jkm",
	"desc":`
		子供向けゲームコーナーにあるようなジャンケンゲームを、
		モダンなカジノ風の見た目にアレンジしました。
		
		Javaの初学者向けの書籍を読み終えた事から、
		スキルチェックの為にスタンドアロン版を設計・開発しました。
		
		その後にサーバーサイドの技能を示す目的で、
		Web版の設計・開発及び公開を行いました。
		
		Cookieやセッションの利用、DBアクセスの要素を含める為に、
		Web版は試験用アカウントにログインする形式を採っています。
`,
	"skill":`
		Web版：
			サーバー：PHP, MySQL
			クライアント：HTML, CSS, Vue.js
		スタンドアロン版：Java
		画像素材作成：Photoshop, Illustrator
		サウンドエフェクト加工：Audacity
`,
	"iconA":["html","css","js","vue","php","mysql","java"],
	"iconB":["photoshop","illustrator","audacity"]
	},
	{
	"image":"word_checker.png",
	"name":"文字数・文字種チェッカー",
	"url":"https://gogonogoat.github.io/web/private/word_checker/index.html",
	"desc":`
		Webライティングを行う人を利用者に想定して開発したWebアプリです。
		テキストエリアに文章をペーストすると、
		文字種の比率や文字数を即座に表示することができます。
		
		自分でこのようなツールが欲しくなったので作りました。
`,
	"skill":`
		HTML, CSS, Vue.js
`,
	"iconA":["html","css","js","vue"],
	"iconB":[]
	},
	{
	"image":"vovo.png",
	"name":"Vomit Vortex",
	"url":"https://gogonogoat.github.io/web/private/vomitvortex.html",
	"desc":`
		とあるソフトウェアの拡張機能をWebページ形式で一覽にするアプリケーションです。
		PythonによるGUIや実行ファイルの出力を行う試みの過程で設計・開発をしました。
		
		これを開発した後にVue.jsを学び、
		よりスマートな実装ができた事に気がついて悶々としています。
`,
	"skill":`
		アプリケーション本体：Python
		出力ファイル：HTML, CSS
`,
	"iconA":["python"],
	"iconB":["html","css","xml"]
	}/*,
	{
	"image":"",
	"name":"",
	"url":"",
	"desc":`
		
`,
	"skill":`
		
`,
	"iconA":["","","",""],
	"iconB":["","","",""]
	}*/
];
const vue = new Vue({
	el:'#app',
	data:{
		product:product
	},
	methods:{
		prefix:function(str){return (str=="") ? "" : "images/program/";},
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