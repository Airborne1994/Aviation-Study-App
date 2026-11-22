/**
 * Main application logic + PWA install handling
 */

(function () {
  "use strict";

  // DOM elements
  const swStatusEl = document.getElementById("swStatus");
  const onlineStatusEl = document.getElementById("onlineStatus");
  const installStatusEl = document.getElementById("installStatus");
  const installBtn = document.getElementById("installBtn");

  let deferredPrompt = null;

  // ----- Online / Offline -----
  function refreshOnlineStatus() {
    updateOnlineStatus(onlineStatusEl);
  }

  window.addEventListener("online", refreshOnlineStatus);
  window.addEventListener("offline", refreshOnlineStatus);
  refreshOnlineStatus();

  // ----- Service Worker registration -----
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered:", registration.scope);
        if (swStatusEl) {
          swStatusEl.textContent = "Registered";
          swStatusEl.style.color = "#16a34a";
        }
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
        if (swStatusEl) {
          swStatusEl.textContent = "Failed";
          swStatusEl.style.color = "#ef4444";
        }
      });
  } else {
    if (swStatusEl) {
      swStatusEl.textContent = "Not supported";
      swStatusEl.style.color = "#ef4444";
    }
  }

  // ----- Install prompt (beforeinstallprompt) -----
  window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    deferredPrompt = e;

    if (installStatusEl) {
      installStatusEl.textContent = "Yes – ready to install";
      installStatusEl.style.color = "#16a34a";
    }

    if (installBtn) {
      installBtn.hidden = false;
    }
  });

  // Install button click
  if (installBtn) {
    installBtn.addEventListener("click", async () => {
      if (!deferredPrompt) return;

      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log("Install prompt outcome:", outcome);

      deferredPrompt = null;
      installBtn.hidden = true;

      if (installStatusEl) {
        installStatusEl.textContent =
          outcome === "accepted" ? "Installed / Accepted" : "Dismissed";
      }
    });
  }

  // Detect if already installed (standalone mode)
  window.addEventListener("appinstalled", () => {
    console.log("PWA was installed");
    if (installStatusEl) {
      installStatusEl.textContent = "Installed";
      installStatusEl.style.color = "#16a34a";
    }
    if (installBtn) installBtn.hidden = true;
    deferredPrompt = null;
  });

  // Check if running as installed PWA
  if (window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true) {
    if (installStatusEl) {
      installStatusEl.textContent = "Running as installed app";
      installStatusEl.style.color = "#16a34a";
    }
    if (installBtn) installBtn.hidden = true;
  } else if (!deferredPrompt) {
    // Give the browser a moment; if no beforeinstallprompt fires, show not ready
    setTimeout(() => {
      if (!deferredPrompt && installStatusEl &&
          installStatusEl.textContent === "Checking...") {
        installStatusEl.textContent = "Not yet (needs HTTPS + criteria)";
        installStatusEl.style.color = "#64748b";
      }
    }, 2500);
  }

  console.log("App ready at", formatDate());
})();
