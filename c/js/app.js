document.addEventListener("DOMContentLoaded", function () {
  let f = 120;
  const p = document.getElementById("timer");
  if (p) {
    p.textContent = "02:00";
    const t = setInterval(function () {
      if (f <= 0) return clearInterval(t);
      f--;
      const e = Math.floor(f / 60),
        n = f % 60,
        o = e.toString().padStart(2, "0") + ":" + n.toString().padStart(2, "0");
      p.textContent = o;
    }, 1e3);
  }
});
