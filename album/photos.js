var OWNER_ID = "-146480406"
var names = [];

var cat = [
  {
    index: {left: -1, right: -1
		},value: "Свадебные",
		album_id: "250686463" // 0
  },
	{
		index: {left: -1, right: -1
		},value: "Фототорты",
		album_id: "244710683" // 1
	},
  {
    index: {left: -1, right: -1
		},value: "Для мужчин",
		album_id: "250686457" // 2
  },
	{
		index: {left: -1, right: -1
		},value: "Разные",
		album_id: "244710593" // 3
	},
	{
		index: {left: -1, right: -1
		},value: "Детские",
		album_id: "244710660" // 4
	}
];


var album_i = 0;
function photos_init(){
	load_album(cat[album_i].album_id);
}

function load_album(album_id){
	var script = document.createElement('SCRIPT'); 
	script.src = "https://api.vk.com/method/getPhotos?photo_sizes=1&extended=0&owner_id=" + OWNER_ID +
				 "&album_id=" + album_id + "&callback=vkCallbackFunc"; 
	document.getElementsByTagName("head")[0].appendChild(script); 
}

function vkCallbackFunc(result) {
	cat[album_i].index.left = names.length+1;
	names = names.concat(
		result["response"].map(function(e){
			return [e.sizes[e.sizes.length-1].src, album_i];
		})
	)
	cat[album_i].index.right = names.length
	if (album_i < cat.length-1){
		load_album(cat[++album_i].album_id);
	}
}
