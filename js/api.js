(function($) {
  'use strict';
var lastPage = '';
  /**
   * Ajax-based random post fetching & History API
   */
  $('#new-quote-button').on('click', function(event) {
    event.preventDefault(); lastPage = document.URL
    $.ajax({
      method: 'get',
      url: qod_vars.rest_url + 'wp/v2/posts/?filter[orderby]=rand&filter[posts_per_page]=1', 
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
      history.pushState(null, null, quotes.slug);
   
    });
  });




  /**
   * Ajax-based front-end post submissions.
   */
  $('#submit-btn').on('click', function(event) {
    event.preventDefault();
    $.ajax({
       method: 'post',
       url: qod_vars.rest_url + 'wp/v2/posts/',
       data: {
          author: $('#quote-author').val(),
          quote: $('#quote-content').val(),
          source: $('#quote-source').val(),
          url: $('#quote-source-url').val(),
       },
       beforeSend: function(xhr) {
          xhr.setRequestHeader( 'X-WP-Nonce', qod_vars.wpapi_nonce );
       }
      }).done(function(data) {
        
      })
  })



})(jQuery);