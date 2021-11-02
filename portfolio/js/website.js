const product = [
	{
	"image":"portfolio.png",
	"name":"gogonogoat Portfolio",
	"url":"https://gogonogoat.github.io/web/portfolio",
	"desc":`
		持っているスキルを簡単に公開できるようにしたい！
		でも実名をオンラインに晒すのは怖い。
		
		だったらハンドルネーム名義で公開しよう！
		そのような流れによって、このサイトが作られました。
`,
	"skill":`
		Webサイトの骨組みは、後述のDirty Kitchenを元に微修正を加えた物です。
		
		Vue.jsについて学んだ事によって、
		私はデータと分離された文書構造の良さに気が付きました。
		それ故にこのサイト全体をを作り直したい意欲が大きくなっています。
`
	},{
	"image":"dirtykitchen.png",
	"name":"Dirty Kitchen",
	"url":"https://gogonogoat.github.io/web/portfolio/00_dirty_kitchen",
	"desc":`
		架空の飲食店のランディングページです。
		
		店舗名が直訳して「汚い台所」である等、飲食店として有りえない要素は
		実在の飲食店と見られるような誤解を防ぐ意図です。
`,
	"skill":`
		FlexBox等、CSSやHTMLに関する昨今の手法を学び、
		スキルチェックの目的で制作しました。
		
		CSSに試行錯誤の形跡が多く残されており、
		セレクタの関係性が整頓されていない点が振り返っていて辛い所です。
`
	},{
	"image":"funnypowder.png",
	"name":"Funny Powder",
	"url":"https://gogonogoat.github.io/web/portfolio/01_funnypowder/index.html",
	"desc":`
		架空の健康食品のランディングページです。
`,
	"skill":`
		レスポンシブデザインについて学ぶ前段階として、
		スマートフォン向けのWebページを制作する目的で制作しました。
`
	}
];
const vue = new Vue({
	el:'#app',
	data:{
		product:product
	},
	methods:{
		prefix:function(str){return (str=="") ? "" : "images/website/";},
		toImageUrl:function(str){
			const prefix = this.prefix(str);
			const result = prefix + str;
			return result;
		},
		descFix:function(str){
			const replaceList = [
				[/^\n/,""],
				[/\n$/,""],
				[/\n\t{2}/g,"<br>\n"],
				[/\t{2}/g,""],
				[/\t/g,"　"]
			];
			const replaceReducer = (r,v) => r.replace(v[0],v[1]);
			const replacefix = replaceList.reduce(replaceReducer,str);
			const result = replacefix;
			return result;
		}
	},
});