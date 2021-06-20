
export function clipboard() {
  const copyBtn = document.querySelector('.js-copyBtn');

  const notification = document.getElementById("notification");

  function showNotification() {
    notification.classList.add("is-active");
    setTimeout(() => {
      notification.classList.remove("is-active");
    }, 1500);
  }
  
  const clipboard = new ClipboardJS(".js-copyBtn");
  clipboard.on("success", function(e) {
    showNotification();
    e.clearSelection();
  });
}