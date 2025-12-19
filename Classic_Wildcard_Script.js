(function () {
  function attach() {
    // Target the built-in entity list search input shown in your screenshot
    const input =
      document.querySelector(".entitylist-search input.query.form-control") ||
      document.querySelector("input.query.form-control") ||
      document.querySelector(".view-search input.query");

    if (!input || input.dataset.wildcardAttached === "1") return;
    input.dataset.wildcardAttached = "1";

    // Optional: target the Search button (for click searches)
    const btn =
      document.querySelector(".entitylist-search button.btn.btn-default") ||
      document.querySelector(".view-search button.btn.btn-default");

    function addStar() {
      const v = input.value || "";
      if (v && !v.startsWith("*")) input.value = "*" + v;
    }

    // Add wildcard while typing (remove this block if you want Enter-only)
    input.addEventListener("input", addStar, true);

    // Add wildcard on Enter
    input.addEventListener(
      "keydown",
      function (e) {
        if (e.key === "Enter") addStar();
      },
      true
    );

    // Add wildcard on search button click
    if (btn) {
      btn.addEventListener(
        "click",
        function () {
          addStar();
        },
        true
      );
    }

    console.log("Wildcard attached to classic list search input:", input);
  }

  // Run now + keep re-attaching after list reloads/re-renders
  attach();
  const obs = new MutationObserver(attach);
  obs.observe(document.documentElement, { childList: true, subtree: true });
})();
