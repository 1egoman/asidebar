function injectAsidebar(jQuery) {
  jQuery.fn.asidebar = function asidebar(status) {
    switch (status) {
      case "open":
        var that = this;
        // fade in backdrop
        if ($(".aside-backdrop").length === 0) {
          $("body").append("<div class='aside-backdrop'></div>");
        }
        $(".aside-backdrop").addClass("in");


        function close() {
          $(that).asidebar.apply(that, ["close"]);
        }

        // slide in asidebar
        $(this).addClass("in");
        $(this).find("[data-dismiss=aside], [data-dismiss=asidebar]").on('click', close);
        $(".aside-backdrop").on('click', close);
        break;
      case "close":
        // fade in backdrop
        if ($(".aside-backdrop.in").length > 0) {
          $(".aside-backdrop").removeClass("in");
        }

        // slide in asidebar
        $(this).removeClass("in");
        break;
      case "toggle":
        if($(this).attr("class").split(' ').indexOf('in') > -1) {
          $(this).asidebar("close");
        } else {
          $(this).asidebar("open");
        }
        break;
    }
  }
}

// support browser and node
if (typeof jQuery !== "undefined") {
  injectAsidebar(jQuery);
} else if (typeof module !== "undefined" && module.exports) {
  module.exports = injectAsidebar;
}
