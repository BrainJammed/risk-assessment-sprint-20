/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}



$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})



$( document ).ready(function() {

  $("#strangerYes").click(function(){
      $(".hiddenStranger").show();
  });

  $("#strangerNo").click(function(){
      $(".hiddenStranger").hide();
  });

  $("#currentYes").click(function(){
      $(".hiddenOffencesCurrent").show();
  });

  $("#currentNo").click(function(){
      $(".hiddenOffencesCurrent").hide();
  });

  $("#offencesPrevYes").click(function(){
      $(".hiddenOffencesPrev").show();
  });

  $("#offencesPrevNo").click(function(){
      $(".hiddenOffencesPrev").hide();
  });

  $("#covitionForFirearmYes").click(function(){
      $(".hidePreviousCurrent").show();
  });

  $("#covitionForFirearmNo").click(function(){
      $(".hidePreviousCurrent").hide();
  });

  $("#concernsInRelationYes").click(function(){
      $(".contactSocialServices").show();
  });

  $("#concernsInRelationNo").click(function(){
      $(".contactSocialServices").hide();
  });

  $("#concernsInRelationDont").click(function(){
      $(".contactSocialServices").hide();
  });



  $("#interviewYes").click(function(){
      $(".hiddenNeeds").show();
  });

  $("#interviewNo").click(function(){
      $(".hiddenNeeds").hide();
  });

   $("#act1997Yes").click(function(){
      $(".registered").show();
  });

  $("#act1997No").click(function(){
      $(".registered").hide();
  });


  $("#criticalPPRefferNo").click(function(){
      $(".preRelease").show();
  });

  $("#criticalPPRefferYes").click(function(){
      $(".preRelease").hide();
  });

    
  $("#criticalPPNo").click(function(){
    	$(".criticalPP").show();
	});

	$("#criticalPPYes").click(function(){
    	$(".criticalPP").hide();
	});

    $("#hasBeenReferredNo").click(function(){
      $(".shouldReferA").show();
  });

  $("#hasBeenReferredYes").click(function(){
      $(".shouldReferA").hide();
  });

    $("#sexualOffenceYes").click(function(){
      $(".hiddenDate").show();
  });

  $("#sexualOffenceNo").click(function(){
      $(".hiddenDate").hide();
  });

  $("#childConYes").click(function(){
      $(".childCon").show();
  });

  $("#childConNo").click(function(){
      $(".childCon").hide();
  });

  $('.rsr').click(function() {
     if($('#lduDiv1').is(':checked') && $('#kentTeamA').is(':checked')) 
      { 
        $("#button").attr("onclick","location.href = 'assessmentDetailsUpdated.html';");

      }
  });

//BUSINESS LOGIC


  //if no risk assessment is completed
  $('.riskAssess').click(function() {
     if($('#riskassessmentNo').is(':checked')) 
      { 
        $("#button").attr("onclick","location.href = 'checkNoRiskAssessment.html';");

      }
  });

  $('.riskAssess').click(function() {
     if($('#riskassessmentNo').is(':checked') && $('#interviewNo').is(':checked')) 
      { 
        $("#button").attr("onclick","location.href = 'checkNoRiskAssessment2.html';");

      }
  });

  $('.riskAssess').click(function() {
     if($('#riskassessmentNo').is(':checked') && $('#interviewYes').is(':checked') && $('#weaponNo').is(':checked')) 
      { 
        $("#button").attr("onclick","location.href = 'checkNoRiskAssessment3.html';");

      }
  });

  //if 180 is yes
  $('.appropriateToDoFullRiskOhHarm').click(function() {
     if($('#fullRiskYes').is(':checked')) 
      { 
        $("#button").attr("onclick","location.href = 'previousBehaviour2.html';");

      }
  });

  //If 165.1 is no (Risk to others)
  $('.contactWithChild').click(function() {
     if($('#1651No').is(':checked')) 
      { 
        $("#button").attr("onclick","location.href = 'riskToselfNo1516.html';");

      }
  });

$('input.example1').on('change', function() {
    $('input.example').not(this).prop('checked', false);  
});



  	



	







	







});