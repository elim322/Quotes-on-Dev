(function($) {
  'use strict';

  /**
   * Ajax-based random post fetching & History API
   */
  $('#new-quote-button').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      method: 'get',
      url: qod_vars.rest_url + 'wp/v2/posts/?filter[orderby]=rand&filter[posts_per_page]=1', 
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', qod_vars.wpapi_nonce)
      }
    }).done( function(data) {
      var quotes = data.shift()
      $('.entry-content').html(
      quotes.content.rendered 
      );
      $('.entry-meta h2').text(
       quotes.title.rendered
      );
      $('.entry-meta span').html(
      '<a href="' + quotes._qod_quote_source_url + '">' + quotes._qod_quote_source + '</a>'
      );


    
      console.log(data)
    
    })
  })


lastPage = document.URL
history.pushState(null, null, getRandomIndex());

  /**
   * Ajax-based front-end post submissions.
   */

})(jQuery);



$(window).on("popstate", function () {
  window.location.replace(lastPage);
});