

class CharCounter{
	static count(str){
		const self = CharCounter;
		const countBox = [str];
		const count = self.regexList.reduce(self.reducer,countBox);
		const result = count.map((v,i)=>[self.countListName[i],v]);
		return result;
	}
	static reducer(r,v,i){
		const self = CharCounter;
		const fl = self.fixedLength;
		const str = r[0];
		const reg = v[1];
		const [replaced,matched] = self.filtrate(str,reg);
		const isFinal = fl(self.regexList) == i+1;
		const head = isFinal ? replaced.length : replaced;
		const result = [head, ...r.slice(1), fl(matched)];
		return result;
	}
	static fixedLength(arr){ return !Array.isArray(arr) ? 0 : arr.length; }
	static filtrate(str,reg){ return [ str.replace(reg,""), str.match(reg)]; }
	static get regexList() { return [
		["かな", /[あ-ん]/g ],
		["カナ", /[ア-ンｱ-ﾝ]/g ],
		["漢字", /[々一-龠]/g],
		["数字", /[0-9０-９]/g ],
		["アルファベット", /[a-zA-Zａ-ｚＡ-Ｚ]/g ],
		["句読点", /[、。]/g ],
		["改行", /[\n\r\f]/g ],
		["空白文字", /\s/g ],
	];}
	static get countListName(){
		return ["その他の記号", ...CharCounter.regexList.map(v=>v[0])];
	}
};

class CharCalculator{
	static AllCharCount(arr){
		const countOfAll	= arr.map(v=>v[1]);
		const target = [7,8]
		const [countOfReturn, countOfSpace]	= target
			.map(v=>countOfAll[v]);
		const sum			= countOfAll.reduce((r,v)=>r+v,0);
		const removeReturn	= sum - countOfReturn;
		const removeSpace	= removeReturn - countOfSpace;
		const result		= [ removeReturn, removeSpace ];
		return result;
	}
	static CharRate(arr){
		const target = [7,8];
		const filtrate = (key) => arr.map(v=>v[key])
			.filter((_,i)=>target.every(t=>t!=i));
		const name = filtrate(0);
		const countOfAll = filtrate(1)
		const sum = countOfAll.reduce((r,v)=>r+v,0);
		const rate = sum == 0 ?
			Range.make(7):
			countOfAll.map(v=>v/sum);
		const pack = rate.map((v,i)=>[name[i],v]);
		pack.push(pack.shift());
		return pack;
	}
	static CharRateSimple(arr){
		const target = [1,2,3];
		const filtrate = (key) => arr.map(v=>v[key])
			.filter((_,i)=>target.some(t=>t==i));
		const name = filtrate(0);
		const countOfAll = filtrate(1)
		const sum = countOfAll.reduce((r,v)=>r+v,0);
		const rate = sum == 0 ?
			Range.make(3):
			countOfAll.map(v=>v/sum);
		const result = rate.map((v,i)=>[name[i],v]);
		return result;
	}
}
class Range{
	static make(length, val=0){
		return new Array(length).fill(val);
	}
}

//const defaultV = "あいウエ漢字[]「」7６,.、。abａｂ";
const defaultV = "";
const vue = new Vue({
	el:'#app',
	data:{
		input	:defaultV,
		sum		:Range.make(2),
		rateA	:CharCalculator.CharRateSimple(CharCounter.count(defaultV)),
		rateB	:CharCalculator.CharRate(CharCounter.count(defaultV)),
	},
	methods:{
		onInput:function(){
			const arr	= CharCounter.count(this.input);
			this.sum	= CharCalculator.AllCharCount(arr);
			this.rateA	= CharCalculator.CharRateSimple(arr);
			this.rateB	= CharCalculator.CharRate(arr);
		},
		toPercentage:function(num){
			return new Intl.NumberFormat('ja', { style: 'percent', maximumSignificantDigits: 3}).format(num);
		},
		toStyle:function(num){
			return{
				width:new Intl.NumberFormat('ja', { style: 'percent', maximumSignificantDigits: 9}).format(num*0.999),
				border: (num <= 0.02 ? "" : "solid 1px RGBA(0,0,0,0.333)")
			};
		},
		clear:function(){
			this.input=defaultV;
			this.onInput();
		}
	},
});
