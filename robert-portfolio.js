if (Meteor.isClient) {
	// new Chartist.Pie('.ct-chart', {
	//     series: [70, 30]
	// }, {
	//     donut: true,
	//     donutWidth: 60,
	//     startAngle: 270,
	//     total: 200,
	//     showLabel: false
	// });

    Template.index.events = {
        'click .lead-button a': function(e) {
            var $this = $(e.target);
            var scrollspot = $('.marketing').offset().top - $('.masthead').height();

            $('html, body').animate({
            	scrollTop: scrollspot
            }, 500);

        },

        'click .masthead-nav li, click .masthead-brand a, click .toTop': function(e) {
            var $this = $(e.target);
            var scrollspot = $("." + $this.attr('data-scroller')).offset().top - $('.masthead').height();

            if (!$this.hasClass('toTop')) {
                $('.active').removeClass('active');
                $this.parent().addClass('active');
            }

            $('html, body').animate({
            	scrollTop: scrollspot
            }, 500);
        }
    }

    Template.index.rendered = function() {
        new WOW().init()
    }
    $('html').attr('lang', 'en').attr('xml:lang', 'en').attr('xmlns', 'http://www.w3.org/1999/xhtml');
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}
