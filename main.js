//初始化
var keys = {
	'0': {0: 'q', 1: 'w', 2: 'e', 3: 'r', 4: 't', 5: 'y', 6: 'u', 7: 'i', 8: 'o', 9: 'p', length: 10},
	'1': {0: 'a', 1: 's', 2: 'd', 3: 'f', 4: 'g', 5: 'h', 6: 'j', 7: 'k', 8: 'l', length: 9},
	'2': {0: 'z', 1: 'x', 2: 'c', 3: 'v', 4: 'b', 5: 'n', 6: 'm', length: 7},
	'length': 3
}
var hash = {
	'q': 'qq.com',
	'w': 'weibo.com',
	'e': 'ele.me',
	'r': 'renren.com',
	't': 'tianya.com',
	'y': 'youtube.com',
	'u': 'uc.com',
	'i': 'iqiyi.com',
	'o': 'opera.com',
	'p': undefined,
	'a': 'acfun.tv',
	's': 'sohu.com',
	'z': 'zhihu.com',
	'm': 'www.mcdonalds.com.cn'
}
//取出localStorage中对应的hash
var hashInLocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null')
if (hashInLocalStorage) {
	hash = hashInLocalStorage
}

//2.生成键盘
//便利keys ,生成kbd标签
index = 0
while (index < keys['length']) {
	var div = document.createElement('div')
	div.className = 'row'

	main.appendChild(div)

	var row = keys[index] //第一个数组 第二个数组 第三个数组
	var index2 = 0
	while (index2 < row['length']) {//0-10 0-9 0-7
		var span = document.createElement('span')
		span.textContent = row[index2] //row 里面的index2  row 是一个hash
		span.className = 'text'

		kbd = document.createElement('kbd')
		kbd.appendChild(span)
		kbd.className = 'key'


		var button = document.createElement('button')
		button.textContent = '编辑'
		button.id = row[index2]

		img = document.createElement('img')
		if (hash[row[index2]]) {  // row[index2]是qwert ,hash[qwert]是 网址 hash包hash
			img.src = 'http://' + hash[row[index2]] + '/favicon.ico'
		} else {
			img.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
		}
		img.onerror = function (xxx) {
			xxx.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
		}

		button.onclick = function (xzkjcnxlkcjlk) {
			var button2 = xzkjcnxlkcjlk['target']
			var img2 = button2.previousSibling
			var key = button2['id']
			var x = prompt('给我一个网址') // qq.com
			hash[key] = x  // hash 变更
			img2.src = 'http://' + x + '/favicon.ico'
			img2.onerror = function (xxx) {
				xxx.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
			}
			localStorage.setItem('zzz', JSON.stringify(hash))
		}

		kbd.appendChild(img)
		kbd.appendChild(button)
		div.appendChild(kbd)
		index2 = index2 + 1
	}
	index = index + 1
}
//3.监听键盘
document.onkeypress = function (xzkjcnxlkcjlk) {
	var key = xzkjcnxlkcjlk['key']
	var website = hash[key]
	window.open('http://' + website, '_blank')

}
