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
     if(quotes._qod_quote_source_url.length) {
      $('.entry-content').html(
        quotes.content.rendered 
        );
        $('.entry-meta h2').text(
         quotes.title.rendered
        );
        $('.entry-meta span').html(
        '<a href="' + quotes._qod_quote_source_url + '">' + quotes._qod_quote_source + '</a>'
        );
     } else {
      $('.entry-content').html(
        quotes.content.rendered 
        );
        $('.entry-meta h2').text(
         quotes.title.rendered
        );
        $('.entry-meta span').text(
          quotes._qod_quote_source
        );
     };
 

  
      history.pushState(null, null, quotes.slug);
      $(window).on('popstate' , function() {
        window.location.replace(lastPage);
      });
    });
  });




  /**
   * Ajax-based front-end post submissions.
   */
  $('#submit-btn').on('click', function(event) {
    event.preventDefault();
    $.ajax({
       method: 'post',
       url: qod_vars.rest_url + 'wp/v2/posts',
       data: {
          title: $('#quote-author').val(),
          content: $('#quote-content').val(),
          _qod_quote_source: $('#quote-source').val(),
          _qod_quote_source_url: $('#quote-source-url').val(),
       },
       beforeSend: function(xhr) {
          xhr.setRequestHeader( 'X-WP-Nonce', qod_vars.wpapi_nonce );
       }
      }).done(function(response) {
        $('#quote-submission-form').slideUp();

        $('.submit-success-message').text(
            qod_vars.success
          ).show();
      })
      .fail(function(err) {
        $('.quote-submission .entry-header').text(
          qod_vars.failure
        )
      })   
  })



})(jQuery);