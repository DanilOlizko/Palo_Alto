$(document).ready(function () {

  nunjucks.configure({
    autoescape: true,
    web: {
      async: false
    }
  });

  $.ajax({
    url: "./mockapi/getAllArticles.json",
    success: function(data, status) {
      nunjucks.render('./partials/base.html', data, function (err, res) {
        $('.js-articles').append(res);
      });
    }
  });

});
