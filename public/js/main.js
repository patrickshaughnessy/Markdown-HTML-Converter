'use strict';

(function($){

  $(document).ready(init);

  function init(){

    $('#convertButton').click(convertToHTML);
  }

  function convertToHTML(){
    let textToConvert = $('#markdownInput').val();
    console.log(textToConvert);
    $.post(window.location.pathname, {text:textToConvert}, function(data){
      // debugger;
      console.log(data);
      $('#htmlDiv').empty();
      $('#htmlDiv').append(data);

    });
  }

}(jQuery));
