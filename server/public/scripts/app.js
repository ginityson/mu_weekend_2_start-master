$(document).ready(function(){
  var personIndex = 0;
  var mu = [];

    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        mu = data.mu;
        for(var i = 0; i<mu.length; i++) {
          $('#indexNumbers').append('<p class="' + i + '">' + i + '</p>');
        }

        //make function to update dom so I dont repete so much
        //function shoutout() {

        currentIndex();
        $('.' + personIndex).addClass('highlighted');
        //$('.indexnumber').text(data.mu[personIndes].i);
        console.log(personIndex, "one");
      //}
      }
    });
    $('#previous').on('click', function() {
      $('.' + personIndex).removeClass('highlighted');
      if (personIndex == 0) {
        personIndex = mu.length - 1;
      } else {
        personIndex--;
      }
      currentIndex();
      $('.' + personIndex).addClass('highlighted');
      console.log(personIndex, "two");
    });
    $('#next').on('click', function() {
      $('.' + personIndex).removeClass('highlighted');
      if (personIndex == mu.length - 1) {
        personIndex = 0;
      } else {
      personIndex++;
    }
    currentIndex();
    $('.' + personIndex).addClass('highlighted');
      console.log(personIndex, 'three');
    });
    function currentIndex() {
      $('.git_username').text(mu[personIndex].git_username);
      $('.name').text(mu[personIndex].name);
      $('.shoutout').text(mu[personIndex].shoutout);
    }
});
