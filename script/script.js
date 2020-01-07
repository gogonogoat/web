/* IEユーザーご退場*/
function AntiIE() {
	let userAgent = window.navigator.userAgent.toLowerCase();
	if ( userAgent.indexOf( 'msie' ) !== -1 || userAgent.indexOf( 'trident' ) !== -1 ) {
		location.href='https://www.google.co.jp/chrome/index.html';
	}
}

/* DOM構造ロード完了を以てアンチIE発動 */
document.addEventListener("DOMContentLoaded", function () {
	AntiIE()
});