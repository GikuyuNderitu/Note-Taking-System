var closeNotes = function(){
	$(".note-section").toggleClass();
}

var getTimeString = function(){
	let fulldate = new Date()
	let month = fulldate.getMonth()
	let date = fulldate.getDate()
	let year = fulldate.getFullYear()
	let curtime = fulldate.getHours()+":"
	if(fulldate.getMinutes()<10)
		curtime+='0'+fulldate.getMinutes()
	else
		curtime+=fulldate.getMinutes()

	switch (month){
		case 0:
			month = 'Jan'
			break
		case 1:
			month = 'Feb'
			break
		case 2:
			month = 'Mar'
			break
		case 3:
			month = 'Apr'
			break
		case 4:
			month = 'May'
			break
		case 5:
			month = 'Jun'
			break
		case 6:
			month = 'Jul'
			break
		case 7:
			month = 'Aug'
			break
		case 8:
			month = 'Sep'
			break
		case 9:
			month = 'Oct'
			break
		case 10:
			month = 'Nov'
			break
		case 11:
			month = 'Dec'
			break
	}

	return month+" "+date+", "+year+" "+curtime
}

var postNote = function(){
	let currentContext = $(".note-body-posts > .active")
	let note = $(this).parents('#note-modifiers').siblings('textarea')
	let type = $('select option:selected').text()
	console.log(type)
	let noteVal = $(this).parents('#note-modifiers').siblings('textarea').val()
	let currentUser = 'Gikuyu Nderitu'
	let time = getTimeString();

	if(noteVal === '')
		console.log(type)
	else{
		currentContext.prepend(function(){
			let newPost =
				 "<div class='post'>"+
					"<div class='postHead'>"+
						"<strong>"+currentUser+"</strong>"+" -\t"+time+
						"<br/><em>Type: "+type+"</em>"+
					"</div>"+
					"<p>"+noteVal+"</p>"+
					"<hr/>"+
				 "</div>";
			return newPost;
		});
		note.val('')
	}
}

var selectContext = function(ele){
	switch (true){
		case ele.hasClass("tech-tab"):
			return $(".note-body-posts > .tech-context")
			break;
		case ele.hasClass("all-tab"):
			return $(".note-body-posts > .all-context")
			break;
		case ele.hasClass("ert-tab"):
			return $(".note-body-posts > .ert-context")
			break;
		case ele.hasClass("sales-tab"):
			return $(".note-body-posts > .sales-context")
			break;
		case ele.hasClass("install-tab"):
			return $(".note-body-posts > .install-context")
			break;

	}
}

$(document).ready(function(){
	var currentTab = $(".note-tabs > .active");
	var currentContext = $(".note-body-posts > .active");


	$('#note-submit').click(postNote);

	$(".note-head a:first-child").click(function(){
		$(".note-section").toggleClass("closeNotes");
		$(".note-main").toggleClass("closeNotes");
		$(".tab").toggleClass("closeNotes");
	});

	$(".note-toggle a:first-child").click(function(){
		$(".note-section").toggleClass("closeNotes");
		$(".note-main").toggleClass("closeNotes");
		$(".tab").toggleClass("closeNotes");
	});

	$("#instructions-toggle").click(function(){
		$(".instructions-section").toggleClass("hideDiv");
	});

	$("#flag-toggle").click(function(){
		$(".flag-section").toggleClass("hideDiv");
	});

	$(".tab").click(function(){
		currentTab.toggleClass("active");
		currentContext.toggleClass("active");
		currentTab = $(this);
		currentContext = selectContext(currentTab);
		currentTab.toggleClass("active");
		currentContext.toggleClass("active");

	});

});
