(function () {
  function attach() {
    // Target Fluent SearchBox input inside the list iframe
    const input =
      document.querySelector("input[id^='SearchBox'][role='searchbox']") ||
      document.querySelector("input.ms-SearchBox-field[role='searchbox']");

    if (!input || input.dataset.wildcardAttached === "1") return;
    input.dataset.wildcardAttached = "1";

    function addStar() {
      const v = input.value || "";
      if (v && !v.startsWith("*")) input.value = "*" + v;
    }

    // While typing
    input.addEventListener("input", addStar, true);

    // On Enter
    input.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Enter") addStar();
      },
      true
    );

    console.log("Wildcard: attached to", input.id);
  }

  // Attach now + whenever the list re-renders
  attach();
  const obs = new MutationObserver(attach);
  obs.observe(document.documentElement, { childList: true, subtree: true });
})();
