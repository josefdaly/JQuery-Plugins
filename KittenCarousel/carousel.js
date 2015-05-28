
$.Carousel = function(el) {
  var that = this;
  this.$el = $(el);
  this.activeIdx = 0;
  $('img:first').addClass('active');
  $('.slide-left').on('click', this.slideLeft.bind(that));
  $('.slide-right').on('click', this.slideRight.bind(that));
  this.$images = $('img');
  // this.$currentImage = this.$image.
};

$.fn.carousel = function() {
  return this.each(function() {
    new $.Carousel(this);
  });
};

$.Carousel.prototype.slideLeft = function() {
  this.slide(-1);
};

$.Carousel.prototype.slideRight = function() {
  this.slide(1);
};

$.Carousel.prototype.slide = function(dir) {
  // keep new center, old center
  var that = this;
  if (dir > 0) {
    $('.active').addClass('left');
  } else {
    $('.active').addClass('right');
  }

  $('.active').one('transitionend', function (){
    $('.left').removeClass('left');
    $('.right').removeClass('right');
  });

  $('.active').removeClass('active');
  if (that.activeIdx + dir < 0) {
    that.activeIdx = that.$images.length - 1;
  } else if (that.activeIdx + dir > that.$images.length - 1) {
    that.activeIdx = 0;
  } else {
    that.activeIdx += dir;
  }
  that.$images.eq(that.activeIdx).addClass('active');
  if (dir > 0) {
    $('.active').addClass('right');
  } else {
    $('.active').addClass('left');
  }

  setTimeout(function(){
    $('.left').removeClass('left');
    $('.right').removeClass('right');
  }, 0);
};
