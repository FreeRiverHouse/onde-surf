(() => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  const resetInitialScroll = () => window.scrollTo(0, 0);
  resetInitialScroll();
  window.addEventListener("pageshow", resetInitialScroll, { once: true });

  function wireRelease({
    form,
    input,
    endpoint,
    download,
  }) {
    if (
      !(form instanceof HTMLFormElement) ||
      !(input instanceof HTMLInputElement)
    ) {
      return;
    }

    const button = form.querySelector("button[type='submit']");
    const status = form.querySelector(".unlock-status");
    const led = form.querySelector(".unlock-head i");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      input.setAttribute("aria-invalid", "false");
      if (button instanceof HTMLButtonElement) {
        button.disabled = true;
        button.firstChild.textContent = "CHECKING";
      }
      if (status) status.textContent = "Verifying private beta access.";

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ code: input.value }),
        });

        if (!response.ok) {
          input.setAttribute("aria-invalid", "true");
          if (status) {
            status.textContent = "That code is not valid.";
            status.className = "unlock-status status-error";
          }
          return;
        }

        if (status) {
          status.textContent = "Access granted. Download starting.";
          status.className = "unlock-status status-ready";
        }
        led?.classList.add("ready");
        window.location.assign(download);
      } catch {
        input.setAttribute("aria-invalid", "true");
        if (status) {
          status.textContent = "Download check failed. Please try again.";
          status.className = "unlock-status status-error";
        }
      } finally {
        if (button instanceof HTMLButtonElement) {
          button.disabled = false;
          button.firstChild.textContent = "UNLOCK";
        }
      }
    });
  }

  wireRelease({
    form: document.querySelector("#download .unlock-card"),
    input: document.querySelector("#release-code"),
    endpoint: "/api/onde-delay-unlock",
    download: "/download/onde-delay",
  });
  wireRelease({
    form: document.querySelector("#ondexj-preview .unlock-card"),
    input: document.querySelector("#ondexj-release-code"),
    endpoint: "/api/ondexj-unlock",
    download: "/download/ondexj",
  });
})();
