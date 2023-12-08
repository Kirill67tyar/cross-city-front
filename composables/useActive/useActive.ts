import { reactive, toRef } from "vue";
import gsap, { Power3 } from "gsap";

const tl = gsap.timeline();

export default function useActive(initialValue: any) {
  const activeState = reactive({
    value: initialValue,
    previousValue: "",
  });

  const handleClickActive = (e: any) => {
    activeState.previousValue = activeState.value;
    activeState.value = e.target.id;

    if (activeState.value !== activeState.previousValue) {
      gsap.to(e.target, {
        duration: 0.6,
        minHeight: "350px",
        background: "#fff",

        onStart: () => {
          gsap.to(e.target.children[0], {
            duration: 0.2,
            rotation: 180,
            ease: Power3.easeInOut,
          });
          gsap.to(e.target.children[2], {
            duration: 0.6,
            minHeight: "112px",
            opacity: 1,
          });
        },
      });
    } else {
      activeState.value = "";
      gsap.to(e.target, {
        duration: 0.6,
        minHeight: "139px",
        background: "transparent",

        onStart: () => {
          gsap.to(e.target.children[0], {
            duration: 0.2,
            rotation: 0,
            ease: Power3.easeInOut,
          });
          gsap.to(e.target.children[2], {
            duration: 0.3,
            minHeight: "0px",
            opacity: 0,
          });
        },
      });
    }

    console.log(e.target.children);
  };
  return {
    ...toRef(activeState),
    handleClickActive,
  };
}
