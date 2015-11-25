(function($) {
    $(function() {
        FE.casestudy.init();
        FE.global.init();
        FE.home.init();
        FE.contact.init();
        FE.videoResource.init();
        FE.signUp.init();
        FE.whoIsCemintel.init();
        FE.newsDetail.init();
        FE.login.init();
        FE.news.init();
        FE.locator.init();
    });

    $(window).load(function() {
        FE.casestudy.loaded();
        FE.global.loaded();
        FE.home.loaded();
        FE.contact.loaded();
        FE.whoIsCemintel.loaded();
        FE.signUp.loaded();
        FE.locator.loaded();
    });

    // Window resize
    var width = $(window).width();
    var resize = 0;
    $(window).resize(function() {
        var _self = $(this);
        resize++;
        setTimeout(function() {
            resize--;
            if (resize === 0) {
                // Done resize ...
                if (_self.width() !== width) {
                    width = _self.width();
                    // Done resize width ...
                    FE.casestudy.resize();
                    FE.global.resize();
                    FE.home.resize();
                    FE.contact.resize();
                    FE.signUp.resize();
                    FE.whoIsCemintel.resize();
                    FE.locator.resize();
                }
            }
        }, 100);
    });

    $(window).scroll(function() {
        FE.global.scroll();
        FE.whoIsCemintel.scroll();
    });
}(jQuery));