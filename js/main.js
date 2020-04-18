

$(document).ready(function(){

     $('.tab1').click(function(){

          $('.bio').show();
          $('.profile').hide();
          $('.interest').hide();
          $('.project').hide();


     })

     $('.tab2').click(function(){

          $('.interest').show();
          $('.bio').hide();
          $('.profile').hide();
          $('.project').hide();


     })

     $('.tab3').click(function(){

          $('.profile').show();
          $('.bio').hide();
          $('.interest').hide();
          $('.project').hide();

     })

     $('.tab4').click(function(){

          $('.project').show();
          $('.profile').hide();
          $('.bio').hide();
          $('.interest').hide();

     })

});
