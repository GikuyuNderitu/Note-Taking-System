function closeNotes(){
   $(".note-section").toggleClass();
}

$(document).ready(function(){
   var currentContext = $(".active");

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
	  currentContext.toggleClass("active");
	  currentContext = $(this);
	  currentContext.toggleClass("active");
   });
});
