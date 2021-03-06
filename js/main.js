require.config({
  baseUrl: '../',
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    text: 'libs/require/text'
  }
});

require(['views/app'], function(AppView) {
  var app_view = new AppView;
});
