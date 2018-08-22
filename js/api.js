(function($) {
  'use strict';

  /**
   * Ajax-based random post fetching & History API
   */


lastPage = document.URL
history.pushState(null, null, getRandomIndex());

  /**
   * Ajax-based front-end post submissions.
   */

})(jQuery);



$(window).on("popstate", function () {
  window.location.replace(lastPage);
});