const toggleOverlay = () => {
  const overlay = document.getElementById("overlay");
  overlay.classList.toggle("overlay--open");
  document.body.classList.toggle("not-overflow");
};
const toggleMenu = () => {
  const menuDrawer = document.getElementById("menu-drawer");
  menuDrawer.classList.toggle("drawerOpen");
  toggleOverlay();
};
const toggleViewImages = () => {
  if (window.innerWidth > 1440) {
    const imageModal = document.getElementById("image-modal");
    toggleOverlay();
    imageModal.classList.toggle("image-modal-open");
  }
};
