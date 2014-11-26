// Intro Animation Scroll Junk
'use strict';

$( function () {
    //Activate CSS transition
    var $body = $( "body" )
        .addClass( "loaded" );

    $( "#menu-button" ).click( function () {
        $body.toggleClass( "show-menu" )
    } );

    // Add scroll classes
    var blocksShown = 0;
    var scrollStep = 100;
    var scrollBlockSize = 300;
    var scrollClass = '.project-thumbnail';
    var $scrollItems = $( scrollClass ).each( function () {
        $( this ).data( 'top', this.offsetTop );
    } );
    $( window ).scroll( function () {
        var top = document.body.scrollTop;
        $scrollItems.each( function () {
                if( $( this ).offset().top + scrollStep < top ) {
                    $( this ).addClass( 'scroll-after' )
                } else {
                    $( this ).removeClass( 'scroll-after' )
                }
            }
        );
        var blocks = Math.floor( top / scrollBlockSize );
        if( blocks >= 0 ) {
            if( blocksShown < blocks ) {
                for( var i = blocksShown; i < blocks; i++ ) {
                    $body.addClass( 'scroll-' + scrollBlockSize * (i + 1) );
                }
            }
            if( blocksShown > blocks ) {
                for( var x = blocks; x < blocksShown; x++ ) {
                    $body.removeClass( 'scroll-' + scrollBlockSize * (x + 1) );
                }
            }
            blocksShown = blocks;
        }
    } );
} );

$(window).load(function(){
  // Retina Images
  $('[src$="_retina.png"]', '.slide').each(function(i, img){
    $(img).width($(img).width()/2);
  });

  // Sidebar
  $('.blog .sidebar-container .sidebar').sticky({ offset: 80, stopper: '.footer' });
  $('.works .sidebar-container .sidebar').sticky({ offset: 80, stopper: '.footer' });
})

// Easter Egg & Cheet.js Junk
var __slice = Array.prototype.slice;
var __hasProp = Object.prototype.hasOwnProperty;
var __bind = function(fn, me) {
    return function() {
        return fn.apply(me, arguments);
    };
};
var __extends = function(child, parent) {
    for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
    }

    function ctor() {
        this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
};
var __indexOf = Array.prototype.indexOf || function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
        if (this[i] === item) return i;
    }
    return -1;
};
(function() {
    var animateGoogles, blink, doom, godmode, googleAnim, googles, googling,
        iddqd_imgs, idx, imgidx, imgs, seq, setImg, transitioned;
    (function() {
        var lastTime, vendors, x;
        lastTime = 0;
        vendors = ["webkit", "moz"];
        x = 0;
        while (x < vendors.length && !window.requestAnimationFrame) {
            window.requestAnimationFrame = window[vendors[x] +
                "RequestAnimationFrame"];
            window.cancelAnimationFrame = window[vendors[x] +
                "CancelAnimationFrame"] || window[vendors[x] +
                "CancelRequestAnimationFrame"];
            ++x;
        }
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function(callback, element) {
                var currTime, id, timeToCall;
                currTime = new Date().getTime();
                timeToCall = Math.max(0, 16 - (currTime - lastTime));
                id = window.setTimeout(function() {
                    return callback(currTime + timeToCall);
                }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }
        if (!window.cancelAnimationFrame) {
            return window.cancelAnimationFrame = function(id) {
                return clearTimeout(id);
            };
        }
    })();
    /*
      in ur codez
      */
    seq = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    idx = 0;
    imgs = ['doritos.jpg', 'do.jpg', 'nam.jpg', 'wat3.png', 'yes.png'];
    iddqd_imgs = ['doritos_iddqd.png', 'do_iddqd.png', 'nam_iddqd.png',
        'wat3_iddqd.png', 'yes_iddqd.png'
    ];
    googles = [
        [
            [187, 137, 40],
            [229, 130, 32], 295
        ],
        [
            [113, 117, 38],
            [184, 116, 34], 300
        ],
        [
            [157, 182, 60],
            [259, 182, 60], 409
        ],
        [
            [134, 172, 48],
            [228, 152, 52], 400
        ],
        [
            [97, 119, 100],
            [298, 76, 112], 396
        ]
    ];
    imgidx = 2;
    godmode = false;
    googling = false;
    googleAnim = null;
    animateGoogles = function() {
        googleAnim = window.requestAnimationFrame(animateGoogles);
        return $('.google > div').each(function(i) {
            var ang, angv, d, dv, g, tang, tangv, td, tdv, tx,
                txv, ty, tyv,
                w, x, xv, y, yv, _ref, _ref1, _ref10, _ref11,
                _ref2, _ref3,
                _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
            w = googles[imgidx][i][2] / googles[imgidx][2];
            g = $(this);
            ang = (_ref = g.data('ang')) != null ? _ref : 0;
            angv = (_ref1 = g.data('angv')) != null ? _ref1 : 0;
            tang = (_ref2 = g.data('tang')) != null ? _ref2 : 0;
            tangv = tang - ang;
            angv += (tangv - angv) * 0.08;
            ang += angv;
            g.css({
                transform: "rotate(" + (ang + Math.PI /
                    2) + "rad)"
            });
            g.data('ang', ang);
            g.data('angv', angv);
            d = (_ref3 = g.data('d')) != null ? _ref3 : 0;
            dv = (_ref4 = g.data('dv')) != null ? _ref4 : 0;
            td = (_ref5 = g.data('td')) != null ? _ref5 : 0;
            tdv = td - d;
            dv += (tdv - dv) * 0.2;
            d += dv;
            x = (_ref6 = g.data('x')) != null ? _ref6 : 0;
            xv = (_ref7 = g.data('xv')) != null ? _ref7 : 0;
            tx = (_ref8 = g.data('tx')) != null ? _ref8 : 0;
            tx -= d / 2;
            txv = tx - x;
            xv += (txv - xv) * 1;
            x += xv;
            y = (_ref9 = g.data('y')) != null ? _ref9 : 0;
            yv = (_ref10 = g.data('yv')) != null ? _ref10 : 0;
            ty = (_ref11 = g.data('ty')) != null ? _ref11 : 0;
            ty -= d / 2;
            tyv = ty - y;
            yv += (tyv - yv) * 1;
            y += yv;
            if (!((Math.abs(dv) > 0.01) || (Math.abs(xv) > 0.01) ||
                (Math.abs(yv) > 0.01) || (Math.abs(angv) >
                    0.1))) {
                return;
            }
            g.parent().css({
                width: d + '%',
                height: d + '%',
                left: x + '%',
                top: y + '%'
            });
            return g.data({
                d: d,
                dv: dv,
                x: x,
                xv: xv,
                y: y,
                yv: yv
            });
        });
    };
    setImg = function(idx) {
        $('header > div > img').remove();
        $('header > div').prepend(
            "<img title='mandatory face-in-circle image' src='" +
            imgs[idx] + "'></img><img class='iddqd' src='" +
            iddqd_imgs[idx] + "'></img>");
        if (godmode) {
            $('.iddqd').show();
        } else {
            $('.iddqd').hide();
        }
        $('.google > div').each(function(i) {
            var _this = this;
            $(this).parent().hide();
            if (googling) {
                return setTimeout(function() {
                    var d, g, img, w, x, y;
                    $(_this).parent().show();
                    img = $('header > div > img').first()[
                        0];
                    g = googles[idx][i];
                    w = googles[idx][2];
                    x = g[0] / w;
                    y = g[1] / w;
                    d = g[2] / w;
                    console.log("x: " + x + ", y: " + y +
                        ", d: " + d);
                    return $(_this).data({
                        d: 0,
                        td: d * 100,
                        tx: x * 100,
                        ty: y * 100
                    });
                }, 50 * i);
            }
        });
        window.cancelAnimationFrame(googleAnim);
        if (googling) {
            return animateGoogles();
        }
    };
    cheet.done(function() {
        return $('.easter').empty();
    });
    cheet.fail(function() {
        return $('.easter').empty();
    });
    cheet.next(function(str, key) {
        if (key === 'up' || key === 'down' || key === 'left' || key ===
            'right') {
            return $('.easter').append(
                '<i class="fa fa-arrow-circle-' + key + '">');
        } else {
            return $('.easter').append(key);
        }
    });
    cheet('up up down down left right left right b a', function() {
        var secret = new Audio('secret.wav'); 						// declare secret variable and location
        setTimeout((function() { 									// redirect time delay
            return location.href = "hello/facebook.html"; 			// redirect to thing
        }), 2000); 													// redirect timing
        secret.play(); 												// play secret sound
    });
}).call(this);
