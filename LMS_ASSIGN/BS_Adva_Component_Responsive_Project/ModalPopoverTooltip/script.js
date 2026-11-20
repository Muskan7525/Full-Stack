const tooltip = document.querySelectorAll('[data-bs-toggle="tooltip"]');

tooltip.forEach(function (item) {
  new bootstrap.Tooltip(item);
});

const popover = document.querySelectorAll('[data-bs-toggle="popover"]');

popover.forEach(function (item) {
  new bootstrap.Popover(item);
});
