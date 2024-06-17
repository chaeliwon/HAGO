// 사진 누르면 routineN.html 페이지로 이동
document.addEventListener("DOMContentLoaded", function () {
  const layouts = document.querySelectorAll(".layout");

  layouts.forEach((layout) => {
    layout.addEventListener("click", function () {
      const url = layout.getAttribute("data-url");
      window.location.href = url;
    });
  });
});
