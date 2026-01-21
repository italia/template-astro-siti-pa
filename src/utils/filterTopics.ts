export const initFilters = () => {
  const container = document.querySelector("#filter-container") as HTMLElement;
  const sections = document.querySelectorAll(".filter-section");

  if (!container) return;

  const labelForAll = container.dataset.labelForAll?.toLowerCase().trim() || "";

  const buttons = container.querySelectorAll("button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const labelSpan = btn.querySelector(".chip-label");
      if (!labelSpan) return;

      const filterText = labelSpan.textContent.trim();
      const filterSlug = filterText
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

      sections.forEach((section) => {
        const sectionTopic = section.getAttribute("data-topic");
        const desktopView = section.querySelector(".content-desktop");
        const mobileView = section.querySelector(".content-mobile");

        if (filterSlug === labelForAll) {
          desktopView?.classList.add("d-none", "d-lg-block");
          desktopView?.classList.remove("d-block");

          mobileView?.classList.add("d-block", "d-lg-none");
          mobileView?.classList.remove("d-none");

          section.classList.remove("d-none");
          section.classList.add("d-block");
        } else if (sectionTopic === filterSlug) {
          desktopView?.classList.remove("d-none", "d-lg-block");
          desktopView?.classList.add("d-block");

          mobileView?.classList.remove("d-block", "d-lg-none");
          mobileView?.classList.add("d-none");

          section.classList.remove("d-none");
          section.classList.add("d-block");
        } else {
          section.classList.add("d-none");
          section.classList.remove("d-block");
        }
      });

      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  const defaultBtn = Array.from(buttons).find(
    (b) =>
      b.querySelector(".chip-label")?.textContent?.toLowerCase().trim() ===
      labelForAll,
  );

  if (defaultBtn) {
    defaultBtn.click();
  }
};
