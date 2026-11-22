/**
 * Shared utility functions
 */

function formatDate(date = new Date()) {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function isOnline() {
  return navigator.onLine;
}

function updateOnlineStatus(element) {
  if (!element) return;
  const online = isOnline();
  element.textContent = online ? "Yes" : "No";
  element.style.color = online ? "#16a34a" : "#ef4444";
  document.body.classList.toggle("offline", !online);
}
