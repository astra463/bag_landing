import "../../src/index.css";

document.querySelectorAll(".return details").forEach((item) => {
  item.addEventListener("toggle", (event) => {
    if (event.target.open) {
      document.querySelectorAll(".return details").forEach((otherItem) => {
        if (otherItem !== event.target) {
          otherItem.removeAttribute("open");
        }
      });
    }
  });

});