let data = function () {
    return {
      isScroll: false,
      navOpen: false,
      menu: [
        {
          name: "home",
          link : "https://bpskaltim.com"
        }
      ],
      isScrolling: () =>
        document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80,
    };
  };