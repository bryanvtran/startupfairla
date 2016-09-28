var titleSponsor = [
    {
        src: "rufuslabs.png",
        alt: "Rufus Labs",
        url: "http://www.getrufus.com/"
    }
];

var goldSponsors = [
    {
        src: "freedompop.png",
        alt: "FreedomPop",
        url: "http://freedompop.com/"
    },
    {
        src: "gumgum.png",
        alt: "GumGum",
        url: "http://www.gumgum.com"
    },
    {
        src: "replicated.png",
        alt: "Replicated",
        url: "https://www.replicated.com/"
    },
];

var silverSponsors = [
    {
        src: "blackstone.png",
        alt: "Blackstone Launchpad",
        url: "https://blackstonelaunchpad.org/"
    },
    {
        src: "enervee.png",
        alt: "Enervee",
        url: "https://enervee.com/"
    },
    {
        src: "farapp.png",
        alt: "FarApp",
        url: "http://www.farapp.com/"
    },
    {
        src: "patientpop.png",
        alt: "PatientPop",
        url: "https://www.patientpop.com/"
    },
    {
        src: "skurt.png",
        alt: "Skurt",
        url: "http://www.skurt.com/"
    },
    {
        src: "startupucla.png",
        alt: "StartupUCLA",
        url: "http://startupucla.com/"
    }
]

var bronzeSponsors = [
    {
        src: "ariento.png",
        alt: "Ariento",
        url: "http://www.ariento.com"
    },
    {
        src: "mkpartners.png",
        alt: "MK Partners",
        url: "http://www.mkpartners.com"
    },
    {
        src: "nopical.png",
        alt: "Nopical",
        url: "http://nopical.com/"
    },
]

function eachFun(company, title) {
    var query = "#" + title + "-sponsors"
    document.querySelector(query).innerHTML +=
    `<div class="card ` +  title + `">
        <a href="` + company.url + `" target="_blank"> <img src="img/startups/` + company.src +  `" alt="` + company.alt + `" class="img-fluid" /></a>
    </div>`
}


titleSponsor.forEach(function(company) { eachFun(company, "title"); });
goldSponsors.forEach(function(company) { eachFun(company, "gold"); });
silverSponsors.forEach(function(company) { eachFun(company, "silver"); });
bronzeSponsors.forEach(function(company) { eachFun(company, "bronze"); });

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
