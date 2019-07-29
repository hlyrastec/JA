const lib = {
	convertDate:function(date){
		let str = date.split('-');
		if(str!=""){
			var convertedDate = str[2]+"/"+str[1]+"/"+str[0];
		} else {
			var convertedDate = "";
		};
		return convertedDate;
	},
	genDate: function(){
		let d = new Date();
		let date = "";
		if(d.getDate()<10 && parseInt(d.getMonth())+1>9){
			date = "0"+d.getDate()+"/"+(parseInt(d.getMonth())+1)+"/"+d.getFullYear();
		} else if(d.getDate()>9 && parseInt(d.getMonth())+1<10){
			date = ""+d.getDate()+"/0"+(parseInt(d.getMonth())+1)+"/"+d.getFullYear();
		} else if(parseInt(d.getDate())<10 && parseInt(d.getMonth())+1<10){
			date = "0"+d.getDate()+"/0"+(parseInt(d.getMonth())+1)+"/"+d.getFullYear();
		} else {
			date = ""+d.getDate()+"/"+parseInt(d.getMonth()+1)+"/"+d.getFullYear();
		};
		return date;
	},
	genFullDate: function(){
		let d = new Date();
		let date = "";
		if(d.getDate()<10 && parseInt(d.getMonth())+1>9){
			date = "0"+d.getDate()+"/"+(parseInt(d.getMonth())+1)+"/"+d.getFullYear()+"/"+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
		} else if(d.getDate()>9 && parseInt(d.getMonth())+1<10){
			date = ""+d.getDate()+"/0"+(parseInt(d.getMonth())+1)+"/"+d.getFullYear()+"/"+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
		} else if(parseInt(d.getDate())<10 && parseInt(d.getMonth())+1<10){
			date = "0"+d.getDate()+"/0"+(parseInt(d.getMonth())+1)+"/"+d.getFullYear()+"/"+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
		} else {
			date = ""+d.getDate()+"/"+parseInt(d.getMonth()+1)+"/"+d.getFullYear()+"/"+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
		};
		return date;
	},
	colectByMonth: function(month, dates){
		let array = [];
		let str = [];
		for(i in dates){
			str = dates[i].date.split('/');
			if(parseInt(str[1])==parseInt(month)){
				array.push(dates[i]);
			};
		};
		return array;
	}
};

function checkImage(url) {
	
}

// First a couple helper functions
// function $(id) {
//     return !id || id.nodeType === 1 ? id : document.getElementById(id);
// }
// function isType(o,t) {    return (typeof o).indexOf(t.charAt(0).toLowerCase()) === 0;}

// Here's the meat and potatoes
// function image(src,cfg) {    var img, prop, target;
//     cfg = cfg || (isType(src,'o') ? src : {});

//     img = $(src);
//     if (img) {
//         src = cfg.src || img.src;
//     } else {
//         img = document.createElement('img');
//         src = src || cfg.src;
//     }

//     if (!src) {
//         return null;
//     }

//     prop = isType(img.naturalWidth,'u') ? 'width' : 'naturalWidth';
//     img.alt = cfg.alt || img.alt;

//     // Add the image and insert if requested (must be on DOM to load or
//     // pull from cache)
//     img.src = src;

//     target = $(cfg.target);
//     if (target) {
//         target.insertBefore(img, $(cfg.insertBefore) || null);
//     }

//     // Loaded?
//     if (img.complete) {
//         if (img[prop]) {
//             if (isType(cfg.success,'f')) {
//                 cfg.success.call(img);
//             }
//         } else {
//             if (isType(cfg.failure,'f')) {
//                 cfg.failure.call(img);
//             }
//         }
//     } else {
//         if (isType(cfg.success,'f')) {
//             img.onload = cfg.success;
//         }
//         if (isType(cfg.failure,'f')) {
//             img.onerror = cfg.failure;
//         }
//     }

//     return img;
// }

//USO 

// image('http://somedomain.com/image/typooed_url.jpg', {
//     success : function () {alert(this.width)},
//     failure : function () {alert('Oops!')}
// });

// image('https://www.gravatar.com/avatar/bac48b9b301f4b2aea7ec399a14b8bc9?s=128&d=identicon&r=PG', {
//     success : function () {/** ... */},
//     failure : function () {alert('Oops!')},
//     target : 'successImageContainer'
// });