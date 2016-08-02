// past startups
const startups = [
  {
    src: "aerserve.jpg",
    alt: "AerServe",
    url: "//www.aerserv.com"
  },
  {
    src: "assetavenue.png",
    alt: "AssetAvenue",
    url: "//www.assetavenue.com/"
  },
  {
    src: "avant.png",
    alt: "Avant",
    url: "//www.avant.com"
  },
  {
    src: "beehive.png",
    alt: "Beehive",
    url: "//www.heybeehive.com"
  },
  {
    src: "datascience.png",
    alt: "DataScience",
    url: "//www.datascience.com"
  },
  {
    src: "dropin.png",
    alt: "DropIn",
    url: "//www.dropininc.com/"
  },
  {
    src: "eatthismuch.png",
    alt: "EatThisMuch",
    url: "//www.eatthismuch.com"
  },
  {
    src: "epoxy.png",
    alt: "Epoxy",
    url: "//epoxy.tv"
  },
  {
    src: "fluxcharger.png",
    alt: "FluxCharger",
    url: "//www.fluxchargers.com"
  },
  {
    src: "fluxla.png",
    alt: "FluxLA",
    url: "//flux.la"
  },
  {
    src: "gem.png",
    alt: "Gem",
    url: "//gem.co"
  },
  {
    src: "goguardian.png",
    alt: "GoGuardian",
    url: "//www.goguardian.com"
  },
  {
    src: "gridspace.png",
    alt: "Gridspace",
    url: "//www.gridspace.com"
  },
  {
    src: "gustudio.png",
    alt: "Gu Studio",
    url: "//www.gustudio.com/"
  },
  {
    src: "hart.png",
    alt: "Hart",
    url: "//hart.com"
  },
  {
    src: "irobot.png",
    alt: "iRobot",
    url: "//irobot.com"
  },
  {
    src: "laserfiche.png",
    alt: "Laserfiche",
    url: "//www.laserfiche.com"
  },
  {
    src: "localrootsfarm.png",
    alt: "Local Roots Farm",
    url: "//www.localrootsfarms.com"
  },
  {
    src: "locent.png",
    alt: "Locent",
    url: "//locent.com"
  },
  {
    src: "microduino.png",
    alt: "Microduino",
    url: "//www.microduino.cc"
  },
  {
    src: "mkpartners.png",
    alt: "MK Partners",
    url: "//www.mkpartners.com"
  },
  {
    src: "moopon.jpg",
    alt: "Moopon",
    url: "//moopon.us/"
  },
  {
    src: "nimble.png",
    alt: "Nimble",
    url: "//www.nimble.com"
  },
  {
    src: "originate.png",
    alt: "Originate",
    url: "//www.originate.com"
  },
  {
    src: "rackspace.png",
    alt: "RackSpace",
    url: "//www.rackspace.com"
  },
  {
    src: "rendermedia.png",
    alt: "Render Media",
    url: "//www.rndr.com"
  },
  {
    src: "rivo.jpg",
    alt: "rivo",
    url: "//www.justrevel.com"
  },
  {
    src: "scorebig.png",
    alt: "ScoreBig",
    url: "//www.scorebig.com"
  },
  {
    src: "shadowbid.png",
    alt: "Shadowbid",
    url: "//www.shadowbid.com"
  },
  {
    src: "snapchat.png",
    alt: "Snapchat",
    url: "//www.snapchat.com"
  },
  {
    src: "songabout.png",
    alt: "SongAbout",
    url: "//songabout.fm/"
  },
  {
    src: "stackcommerce.png",
    alt: "StackCommerce",
    url: "//stackcommerce.com"
  },
  {
    src: "tenoneten.png",
    alt: "TenOneTen",
    url: "//tenoneten.net"
  },
  {
    src: "tinder.png",
    alt: "Tinder",
    url: "//www.tinder.com"
  },
  {
    src: "tripscope.jpg",
    alt: "TripScope",
    url: "//www.tripscopeapp.com/"
  },
  {
    src: "tuitionio.png",
    alt: "Tuitionio",
    url: "//www.tuition.io"
  },
  {
    src: "videoamp.jpeg",
    alt: "VideoAmp",
    url: "//videoamp.com"
  },
  {
    src: "zestfinance.png",
    alt: "Zest Finance",
    url: "//www.zestfinance.com"
  }
];

document.querySelector("#past-startups").innerHTML +=
  startups
    .map(({src, alt, url}) => `
    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6 text-xs-center">
        <div class="card">
            <a href="${url}"> <img src="img/startups/${src}" alt=${alt} class="img-fluid" /></a>
        </div>
    </div>`)
    .join('');

(function($) {
    "use strict";
    new WOW().init();

    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });


    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

})(jQuery);
