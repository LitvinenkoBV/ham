const tabsContentItems = document.querySelectorAll(".tabs_content_item");
const tabsWorkItems = document.querySelectorAll(".tabs_work_item");
const tabsWork = document.querySelector(".tabs_work");
const tabs = document.querySelector(".tabs");
const tabsTitle = document.querySelectorAll(".tabs_title");
const btnLoadMore = document.querySelector(".load_more");
const tabsWorkItemHidden = document.querySelectorAll(".tabs_work_item_hidden");
const triangle = document.querySelectorAll(".triangle");
let currentTab = document.querySelector(".active");
let currentItem = document.querySelector(".active-item");
let currentTabWork = document.querySelector(".active_work");

tabs.addEventListener("click", (e) => {
  currentTab.classList.remove("active");
  e.target.classList.add("active");
  currentTab = e.target;
  for (const i of tabsTitle) {
    if (i.classList.contains("active")) {
      for (const e of triangle) {
        if (e.classList.contains("triangle_active")) {
          e.classList.remove("triangle_active");
          i.lastElementChild.classList.add("triangle_active");
        }
      }
    }
  }
  for (const iterator of tabsContentItems) {
    if (e.target.dataset.name === iterator.dataset.name) {
      currentItem.classList.remove("active-item");
      iterator.classList.add("active-item");
      currentItem = iterator;
    }
  }
});

tabsWork.addEventListener("click", (e) => {
  currentTabWork.classList.remove("active_work");
  e.target.classList.add("active_work");
  currentTabWork = e.target;

  for (const iterator of tabsWorkItems) {
    iterator.classList.add("tabs_work_item_filter");
    if (e.target.dataset.work_item === iterator.dataset.work_item) {
      iterator.classList.remove("tabs_work_item_filter");
    }
    if (e.target.dataset.work_item === "All") {
      iterator.classList.remove("tabs_work_item_filter");
    }
  }
});

btnLoadMore.addEventListener("click", (e) => {
  tabsWorkItemHidden.forEach((elem) =>
    elem.classList.remove("tabs_work_item_hidden")
  );
  btnLoadMore.classList.add("load_more_hidden");
});

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    adaptiveHeight: true,
    initialSlide: 2,
  });
});
