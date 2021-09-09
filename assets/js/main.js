/*
	Read Only by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$titleBar = null,
		$nav = $('#nav'),
		$wrapper = $('#wrapper');

	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['1025px', '1280px'],
		medium: ['737px', '1024px'],
		small: ['481px', '736px'],
		xsmall: [null, '480px'],
	});

	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Tweaks/fixes.

	if (!browser.canUse('object-fit')) {

		$('.image[data-position]').each(function () {

			var $this = $(this),
				$img = $this.children('img');

			$this
				.css('background-image', 'url("' + $img.attr('src') + '")')
				.css('background-position', $this.data('position'))
				.css('background-size', 'cover')
				.css('background-repeat', 'no-repeat');

			// Hide img.
			$img
				.css('opacity', '0');

		});

	}

	// Header Panel.

	var $nav_a = $nav.find('a');

	$nav_a
		.addClass('scrolly')
		.on('click', function () {

			var $this = $(this);

			if ($this.attr('href').charAt(0) != '#')
				return;

			$nav_a.removeClass('active');

			$this
				.addClass('active')
				.addClass('active-locked');

		})
		.each(function () {

			var $this = $(this),
				id = $this.attr('href'),
				$section = $(id);

			if ($section.length < 1)
				return;

			$section.scrollex({
				mode: 'middle',
				top: '5vh',
				bottom: '5vh',
				initialize: function () {

					$section.addClass('inactive');

				},
				enter: function () {

					$section.removeClass('inactive');

					if ($nav_a.filter('.active-locked').length == 0) {

						$nav_a.removeClass('active');
						$this.addClass('active');

					}

					else if ($this.hasClass('active-locked'))
						$this.removeClass('active-locked');

				}
			});

		});

	// Title Bar.
	$titleBar = $(
		'<div id="titleBar">' +
		'<a href="#header" class="toggle"></a>' +
		'<span class="title">' + $('#logo').html() + '</span>' +
		'</div>'
	)
		.appendTo($body);

	// Panel.
	$header
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'right',
			target: $body,
			visibleClass: 'header-visible'
		});

	// Scrolly.
	$('.scrolly').scrolly({
		speed: 1000,
		offset: function () {

			if (breakpoints.active('<=medium'))
				return $titleBar.height();

			return 0;

		}
	});

})(jQuery);

particlesJS("particles-js", {
	particles: {
		number: { value: 119, density: { enable: true, value_area: 800 } },
		color: { value: "#ffffff" },
		shape: {
			type: "circle",
			stroke: { width: 0, color: "#000000" },
			polygon: { nb_sides: 5 },
			image: { src: "img/github.svg", width: 100, height: 100 }
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
		},
		size: {
			value: 3,
			random: true,
			anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
		},
		line_linked: {
			enable: true,
			distance: 150,
			color: "#ffffff",
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 5,
			direction: "none",
			random: false,
			straight: false,
			out_mode: "out",
			bounce: true,
			attract: { enable: false, rotateX: 600, rotateY: 1200 }
		}
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: { enable: true, mode: "repulse" },
			onclick: { enable: true, mode: "push" },
			resize: true
		},
		modes: {
			grab: { distance: 400, line_linked: { opacity: 1 } },
			bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
			repulse: { distance: 200, duration: 0.4 },
			push: { particles_nb: 4 },
			remove: { particles_nb: 2 }
		}
	},
	retina_detect: true
});