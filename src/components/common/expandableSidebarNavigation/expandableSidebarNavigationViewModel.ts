import anime from "animejs";
import { useEffect } from "react";

export const ExpandableSidebarNavigationViewModel = ({
  triggerRef,
  navigationContainerRef,
}: any) => {
  useEffect(() => {
    const trigger: HTMLElement | null = document.getElementById(
      "js_navigation-collapse-trigger"
    );

    const navigationContainer: HTMLElement | null = document.getElementById(
      "js_navigation-container"
    );

    const navigationModifierClass: string = "navigation-container--collapsed";
    const animationDuration: number = 400;
    const widthChange: anime.AnimeTimelineInstance = anime.timeline({
      autoplay: false,
      easing: "easeInOutBack",
    });

    widthChange
      .add({
        targets: navigationContainer,
        width: 80,
        duration: animationDuration,
      })
      .add(
        {
          targets: ".js_navigation-item-name",
          opacity: [1, 0],
          duration: animationDuration / 2,
        },
        `-=${animationDuration}`
      );

    let navigationIsCollapsed: boolean = false;

    const onClick = () => {
      navigationIsCollapsed = !navigationIsCollapsed;

      if (navigationContainer) {
        if (navigationIsCollapsed) {
          navigationContainer.classList.add(navigationModifierClass);
        } else {
          navigationContainer.classList.remove(navigationModifierClass);
        }
      }

      if (widthChange.began) {
        widthChange.reverse();
        if (
          widthChange.progress === 100 &&
          widthChange.direction === "reverse"
        ) {
          widthChange.completed = false;
        }
      }

      if (widthChange.paused) {
        widthChange.play();
      }
    };

    if (trigger && navigationContainer) {
      trigger.addEventListener("click", onClick);
    }
  }, []);
};
