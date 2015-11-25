jQuery(function($) {
  window.Toyota.carDetailInteraction = (function() {
    // This module must be called in window onload
    var view = $('.car-detail');
    if (view.length === 0) {
      return;
    }

    var module = {};

    // Private Methods
    // ======================= Handling Carousels Lives Directly in Tab ========================
    var initTabContentCarousel = function(tabDetailContentView) {

      var $tabDetailContentView = $(tabDetailContentView);
      if ($tabDetailContentView.length === 0) {
        return false;
      }
      if ($tabDetailContentView.find('.owl-carousel-car-view .item').length <= 1) {
        return false;
      }

      var owlCarousel = $tabDetailContentView.find('.owl-carousel-car-view');
      owlCarousel.data('owlCarouselLength', owlCarousel.find(".item").length);
      owlCarousel.owlCarousel({
        center: true,
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        mouseDrag: false,
        touchDrag: false,
        margin: 0
      });

      owlCarousel.on('changed.owl.carousel', function(slider) {
        $(this).parent().find('.tooltip-title-container p').eq(slider.page.index).removeClass('hide').siblings().addClass('hide');
      });
      $tabDetailContentView.find('.nav-5 a').on('click', function(event) {
        event.preventDefault();
        var dirNext = $(this).hasClass('next');
        var tmpCarousel = $(this).closest('.tab-content-car-carousel').find('.owl-carousel-car-view');
        $(tmpCarousel).trigger(dirNext ? 'next.owl.carousel' : 'prev.owl.carousel');
      });
    };

    // ======================= UI of Tooltip Landing  ========================
    // Init tooltip position for each car section
    module.initTooltip = function() {
      $(".car-detail .tooltip").each(function() {
        var $this = $(this);

        var xc = $this.attr('data-x');
        var yc = $this.attr('data-y');
        var dx = $this.attr('data-dx');
        var dy = $this.attr('data-dy');
        var dir = $this.attr('data-dir');
        xc = xc ? parseFloat(xc) : 0;
        yc = yc ? parseFloat(yc) : 0;
        dx = dx ? parseFloat(dx) : 0;
        dy = dy ? parseFloat(dy) : 0;

        var left, top;
        var ttW = $(this).width() / 19.20;
        var ttH = $(this).height() / 19.20;


        if (dir === "bottom") {
          top = yc - (dy + ttH);
          left = xc + dx + ttW / 2;
        } else if (dir === "top") {
          top = yc + dy;
          left = xc + dx + ttW / 2;
        } else if (dir === "left") {
          top = yc + dy + ttH / 2;
          left = xc + dx;
        } else if (dir === "right") {
          top = yc + dy - ttH / 2;
          left = xc - (dx + ttW);
        }

        $this.css({
          'top': top + "%",
          'left': left + "%"
        });

        if (dx !== 0) {
          $this.find('span').css({
            width: dx / (ttW / 100) + "%"
          });
        } else if (dy !== 0) {
          $this.find('span').css({
            height: dy / (ttH / 100) + "%"
          });
        }
      });

      view.find('.block-tooltip .tooltip').on('click.tooltip', function(e) {
        e.preventDefault();
        var dataTaget = "#" + $(this).attr('data-target');
        $(dataTaget)
          .siblings('.tooltip-detail-content').removeClass('active').end()
          .addClass('active')
          .closest('.block-popup').addClass('active');
        updateTooltipTitle(dataTaget);
      });
    }

    // Init Tab detail control navigation
    module.initTooltipNav = function() {
      // init action close popup
      view.find('.car-section-content .close-btn a').on('click', function(e) {
        e.preventDefault();
        $(this)
          .closest('.block-popup').removeClass('active')
          .find('.tooltip-detail-content').removeClass('active');
      });

      view.find('.tooltip-navigation').find('.next, .prev').on('click', function() {
        var isNext = $(this).hasClass('next');

        var popup = $(this).closest('.block-popup');
        var curContent = popup.find('.tooltip-detail-content.active');
        curContent.removeClass('active');
        var detailContent = isNext ? curContent.next('.tooltip-detail-content') : curContent.prev('.tooltip-detail-content');
        if (detailContent.length) {
          var targetTooltipContent = detailContent.addClass('active');
        } else {
          if (isNext) {
            var targetTooltipContent = popup.find('.tooltip-detail-content').first().addClass('active');
          } else {
            var targetTooltipContent = popup.find('.tooltip-detail-content').last().addClass('active');
          }
        }
        updateTooltipTitle(targetTooltipContent);

      });
    }

    // ======================= UI of Tooltip Landing Content ========================
    // Carousel
    module.initTooltipCarousel = function(tooltipDetailContent) {
      var $tooltipDetailContent = $(tooltipDetailContent);
      if ($tooltipDetailContent.length === 0) {
        return false;
      }
      if ($tooltipDetailContent.find('.images-container .item').length <= 1) {
        return false;
      }
      var owlCarousel = $tooltipDetailContent.find('.images-container').owlCarousel({
        center: true,
        items: 1,
        loop: false,
        dots: true,
        nav: false,
        margin: 0
      });
      if ($tooltipDetailContent.find('.dots-nav').length) {
        $tooltipDetailContent.find('.dots-nav a').on('click', function(event) {
          event.preventDefault();
          $tooltipDetailContent.find('.images-container').data('owlCarousel').to($(this).attr('data-index'), 200);
        });
      }
    };

    // Range Slider
    module.initTooltipRangeSlider = function(tooltipDetailContent) {
      var $tooltipDetailContent = $(tooltipDetailContent);
      if ($tooltipDetailContent.length === 0) {
        return false;
      }
      if ($tooltipDetailContent.find('.images-container .item').length <= 1) {
        return false;
      }

      $tooltipDetailContent.find('.images-container .item').css('opacity', 1);
      var dP = 100 / ($tooltipDetailContent.find('.images-container .item').length - 1);

      $tooltipDetailContent.find('input[type="range"]').css({
        'position': 'absolute',
        'top': 0
      }).rangeslider({
        polyfill: false,
        onSlide: function(position, value) {
          var imagesContainer = $tooltipDetailContent.find('.images-container');
          var ind = Math.ceil((100 - value) / dP);
          imagesContainer.find('.item:gt(' + ind + ')')
            .css('opacity', 0);
          imagesContainer.find('.item:eq(' + ind + ')')
            .css('opacity', 1 - ((value) % dP) / dP);
        }
      });
    }

    // ======================= Init Detail section UI ========================
    var updateTooltipTitle = function(target) {
      $(target).closest('.block-popup').find(".tooltip-title-container").html($(target).find('.tooltip-title').html());
    };

    var tooltipMobile = function() {
      if ($(window).width() < 1025) {
        view.find('.block-popup .tooltip-detail-content').find('.icon-tooltip-phone, .tooltip-title').on('click.tooltip', function(event) {
          event.preventDefault();
          $(this).parent().toggleClass('active');
        });
      } else {
        view.find('.block-popup .tooltip-detail-content').find('.icon-tooltip-phone, .tooltip-title').off('click.tooltip');
      }
    };

    var initTooltipContent = function() {
      view.find('.tooltip-detail-content').each(function(index, el) {
        var dataType = $(this).attr('data-type');
        // Init Tooltip detail content based on each detail content type
        switch (dataType) {
          case 'carousel':
            module.initTooltipCarousel(this);
            break;
          case 'range-slider':
            module.initTooltipRangeSlider(this);
            break;
        }
      });
    }

    var initDetailTab = function() {
      var carDetailNav = view.find(".section-car-detail-navigation");
      carDetailNav.find('.tab').on('click', function(e) {
        e.preventDefault();

        var idTab = $(this).attr('data-id');
        carDetailNav.find('.tab').removeClass('active');
        carDetailNav.find('.tab[data-id=' + idTab + ']').addClass('active');

        var sectionContentsElement = view.find('.section-car-detail-content');
        sectionContentsElement.find('> div').removeClass('active');
        sectionContentsElement.find('#tab-' + idTab).addClass('active');
      });
    }

    module.init = function() {
      if (!view.find('.section-car-detail').length) {
        return false;
      }

      window.Toyota.GeneralUI.IEPolyfill();

      // Init tab 
      initDetailTab();

      // Init tooltipContent
      module.initTooltip();
      initTooltipContent();
      if ($(window).width() < 1025) {
        tooltipMobile();
      }

      // Init carousel of a tab which contain directly a carousel
      initTabContentCarousel('.section-car-detail-content .tab-content-car-carousel');

      // Init Tab detail control navigation
      module.initTooltipNav();

      $(window).resize(function() {
        // if ($(window).width() < 1025) {
        //   tooltipMobile();
        // }
      });
    }

    $(window).load(function() {
      module.init();
    });

    return module;
  })();

});

jQuery(window).load(function() {
  window.Toyota.GeneralUI.initListOfInterest();
});
