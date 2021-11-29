import $ from "jquery";
import { resourceImages } from "../../../resources";
import { useEffect } from "react";

export const ChooseViewModel = () => {
  let stop: boolean = false;
  let fpsInterval: any;
  let then: any;
  let startTime: any;

  const agentImages = [
    { name: "agent1" },
    { name: "agent2" },
    { name: "agent3" },
  ];

  function totalyCorrupted() {
    console.log("Totaly corrupted image");
  }

  function myGlitch() {
    let images: any = getImages();
    glitchCycle(images);
  }

  /* glitch init */
  function glitchInit(fps: any) {
    startAnimating(fps);
  }

  /* start animation */
  function startAnimating(fps: any) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
  }

  /* animate */
  function animate() {
    if (stop) {
      return;
    }
    requestAnimationFrame(animate);
    let now: any = Date.now();
    let elapsed: any = now - then;
    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      myGlitch();
    }
  }

  /* get images */
  function getImages() {
    let images = [];
    let id: any = "#agent1";
    let Object: any = $(id);
    let Data: any = Object.attr("src");
    let protectedOffsetStart: any = 1000;
    let protectedOffsetEnd: any = 1000;
    let maxGlitch: any = 3000;
    let protectedStrings: any = getProtectedImageStrings(
      Data,
      protectedOffsetStart,
      protectedOffsetEnd
    );

    let protectedStart: any = protectedStrings[0];
    let protectedEnd: any = protectedStrings[1];

    let agent1 = {
      id: id,
      object: Object,
      data: Data,
      offsetStart: protectedOffsetStart,
      offsetEnd: protectedOffsetEnd,
      stringStart: protectedStart,
      stringEnd: protectedEnd,
      maxGlitch: maxGlitch,
    };
    images.push(agent1);

    id = "#agent2";
    Object = $(id);
    Data = Object.attr("src");
    protectedOffsetStart = 1000;
    protectedOffsetEnd = 1000;
    maxGlitch = 3000;
    protectedStrings = getProtectedImageStrings(
      Data,
      protectedOffsetStart,
      protectedOffsetEnd
    );
    protectedStart = protectedStrings[0];
    protectedEnd = protectedStrings[1];

    let agent2 = {
      id: id,
      object: Object,
      data: Data,
      offsetStart: protectedOffsetStart,
      offsetEnd: protectedOffsetEnd,
      stringStart: protectedStart,
      stringEnd: protectedEnd,
      maxGlitch: maxGlitch,
    };
    images.push(agent2);

    id = "#agent3";
    Object = $(id);
    Data = Object.attr("src");
    protectedOffsetStart = 1000;
    protectedOffsetEnd = 1000;
    maxGlitch = 3000;
    protectedStrings = getProtectedImageStrings(
      Data,
      protectedOffsetStart,
      protectedOffsetEnd
    );
    protectedStart = protectedStrings[0];
    protectedEnd = protectedStrings[1];

    let agent3 = {
      id: id,
      object: Object,
      data: Data,
      offsetStart: protectedOffsetStart,
      offsetEnd: protectedOffsetEnd,
      stringStart: protectedStart,
      stringEnd: protectedEnd,
      maxGlitch: maxGlitch,
    };
    images.push(agent3);
    return images;
  }

  function setImageOffset(
    i: any,
    j: any,
    p: any,
    ref: any,
    corrupted: any,
    image: any,
    glitch: any
  ) {
    for (
      i = j = 0, ref = glitch;
      0 <= ref ? j < ref : j > ref;
      i = 0 <= ref ? ++j : --j
    ) {
      p =
        image.offsetStart +
        Math.round(Math.random() * (corrupted.length - image.offsetStart - 1));
      corrupted =
        corrupted.substr(0, p) +
        corrupted.charAt(p + 1) +
        corrupted.charAt(p) +
        corrupted.substr(p + 2);
    }
  }

  function setGlitchIntensity(glitchIntensity: any, image: any) {
    if (glitchIntensity > image.maxGlitch) {
      glitchIntensity = image.maxGlitch;
    }
  }

  function onHovered(
    glitchIntensity: any,
    image: any,
    glitch: any,
    i: any,
    j: any,
    p: any,
    ref: any,
    corrupted: any,
    corrupt: any
  ) {
    setGlitchIntensity(glitchIntensity, image);
    glitch = setGlitchValue(glitch, glitchIntensity);
    setImageOffset(i, j, p, ref, corrupted, image, glitch);
    corrupt = true;
  }

  /* set glitch value*/
  function setGlitchValue(glitch: any, glitchIntensity: any) {
    glitch = Math.round(Math.random() * glitchIntensity);
    return glitch;
  }

  /* is No GlitchChance */
  const isNoGlitchChance = (noGlitchChance: any) =>
    Math.random() > noGlitchChance;

  /* get protected image strings */
  function glitchCycle(images: any) {
    let noGlitchChance: any = 0.3;
    let noGlitchChanceActive: any = 0.9;
    let glitchIntensity: any = 10;
    let glitchIntensityActive: any = 2;
    let iL: any = images.length;

    for (let ii = 0; ii < iL; ii++) {
      let corrupted: any;
      let glitch: any;
      let i: any;
      let j: any;
      let p: any;
      let ref: any;
      let image = images[ii];
      corrupted = image.data;
      let corrupt = false;

      let isHovered: any = $(image.object).filter(
        ".agent-image-selected"
      ).length;

      $(image.object)
        .siblings()
        .each(function () {
          if (isHovered) {
            return;
          }
          isHovered = !!$(this).filter(":hover").length;
        });

      if (!isHovered) {
        isHovered = !!$(image.object).filter(":hover").length;
      }

      if (!isHovered) {
        if (Math.random() > noGlitchChance) {
          onHovered(
            glitchIntensity,
            image,
            glitch,
            i,
            j,
            p,
            ref,
            corrupted,
            corrupt
          );
        }
      } else {
        if (Math.random() > noGlitchChanceActive) {
          onHovered(
            glitchIntensity,
            image,
            glitch,
            i,
            j,
            p,
            ref,
            corrupted,
            corrupt
          );
        }
      }

      if (corrupt) {
        let corruptedLength: any = corrupted.length;
        corrupted =
          image.stringStart +
          corrupted.substring(
            image.stringStart.length,
            corruptedLength - image.stringEnd.length
          ) +
          image.stringEnd;
      }

      $(image.object).attr("src", corrupted);
    }
  }

  /* get protected image string */
  function getProtectedImageStrings(
    data: any,
    offsetStart: any,
    offsetEnd: any
  ) {
    let protectedStart, protectedEnd;
    protectedStart = data.substring(0, offsetStart);
    protectedEnd = data.substring(data.length - offsetEnd, data.length);
    return [protectedStart, protectedEnd];
  }

  /*agent select */
  function agentSelect(event: any) {
    let reference: any;
    let startOffset: any;
    let width: any;
    let endOffset: any;
    let otherAgents: any;

    // $(event).unbind();
    reference = event;
    startOffset = $(reference).position().left;
    width = $(reference).width();
    endOffset = startOffset - width / 2;
    otherAgents = $(reference).siblings();

    console.log(`\nreference`, reference);
    console.log(`startOffset`, startOffset);
    console.log(`endOffset`, endOffset);
    console.log(`width`, width);

    $(otherAgents).find("*").hide(600);
    $(otherAgents).hide({
      duration: 600,
      done: function () {
        $(reference).css("margin-left", startOffset + "px");
      },
    });

    setTimeout(function () {
      const leftPosition = $(reference).position().left;
      const parentWidth = $(reference).parent().width();
      let leftRel;

      /* idk */
      $(reference).css("margin-left", startOffset + "px");

      if (parentWidth && leftPosition) {
        leftRel = (100 * leftPosition) / parentWidth + "%";
      }

      // @ts-ignore
      $(reference).css("margin-left", leftRel);
      /* /idk */
      $(reference).addClass("agent-container-selected");
      $(reference).animate(
        {
          marginLeft: "50%",
        },
        {
          step: function (now, fx) {
            $(this).css("transform", "translateX(-" + now + "%)");
          },
          duration: 200,
          easing: "swing",
          done: function () {
            setTimeout(function () {
              $(".overlay").css("z-index", 1000);
              $(".images").addClass("images-blur");
              $(".content").addClass("content-blur");
              $(".overlay").animate(
                {
                  opacity: 1,
                },
                {
                  duration: 3000,
                  done: function () {
                    $(otherAgents).find("*").show();
                    $(otherAgents).show();
                    $(reference).removeClass("agent-container-selected");
                    $(reference)
                      .find(".agent-image-container")
                      .removeClass("agent-image-container-selected");
                    $(reference)
                      .find(".agent-image")
                      .removeClass("agent-image-selected");
                    $(reference).removeAttr("style");
                    $(".images").removeClass("images-blur");
                    $(".content").removeClass("content-blur");
                    setTimeout(function () {
                      $(".overlay").removeAttr("style");
                    }, 2000);
                  },
                }
              );
            }, 3000);
          },
        }
      );
    }, 600);

    $(reference)
      .find(".agent-image-container")
      .addClass("agent-image-container-selected");
    $(reference).find(".agent-image").addClass("agent-image-selected");
  }

  useEffect(() => {
    glitchInit(15);
  }, []);

  return { agentImages, totalyCorrupted, resourceImages, agentSelect };
};
