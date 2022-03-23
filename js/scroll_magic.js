// var controller = new ScrollMagic.Controller();

// var tweenYoyo = TweenMax.fromTo(
//   "#animate1",
//   0.6,
//   {
//     backgroundColor: "#333333",
//     scale: 1,
//   },
//   {
//     scale: 2.5,
//     backgroundColor: "#dc143c",
//     x: 100,
//     rotation: 360,
//     repeat: -1, //무한한 애니메이션 재생
//     yoyo: true, // 애니메이션 반복 재생을 도와준다.
//     // *trigger에 닿지 않았다면 애니메이션은 중지된다,
//     // 또한 duration을 지정한 경우에도 그 번위를 넘어가면 애니메이션은 중지된다.
//   }
// );

// var tweenStagger = TweenMax.staggerFromTo(
//   ".icon", //target
//   0.4, //duration
//   {
//     scale: 0.85,
//   }, //fromVars
//   {
//     backgroundColor: "#dc143c",
//     scale: 1.2,
//     rotation: 360,
//   }, //toVars
//   0.3 //stagger(각 트윈 사이의 간격)
// );

// var scene = new ScrollMagic.Scene({
//   triggerElement: "#trigger1",
//   //   offset: 150, //시작점을 더 빠르게, 느리게
//   //   duration: 150, //애니메이션 동작 시간, 짧으면 빠르고 느리면 길다.
// })
//   .setTween(tweenStagger)
//   .addTo(controller)
//   .addIndicators({
//     name: "1", //안내선
//   });

// (function () {
//   var controller = new ScrollMagic.Controller();

//   var scene1 = new ScrollMagic.Scene({
//     triggerElement: "#trigger1",
//     triggerHook: 0.8,
//   })
//     .setClassToggle("#animate1", "visible")
//     .addTo(controller)
//     .addIndicators();

//   var revealElements = document.getElementsByClassName("animation2");
//   for (var i = 0; i < revealElements.length; i++) {
//     var scene2 = new ScrollMagic.Scene({
//       triggerElement: revealElements[i],
//       offset: 50,
//       triggerHook: 0.9,
//     })
//       .setClassToggle(revealElements[i], "visible") // add class toggle
//       .addTo(controller)
//       .addIndicators({ name: "(box) " + (i + 1), colorStart: "#F6B352", colorTrigger: "#F6B352" });
//   }

//   var tween1 = TweenMax.to("#animate1", 0.3, {
//     color: "#60c5ba",
//     scale: 4,
//     y: 10,
//     rotation: 360,
//   });
//   var tween2 = TweenMax.to("#animate2", 0.3, {
//     color: "#ffc952",
//     scale: 4,
//     y: 10,
//     rotation: 360,
//   });
//   var tween3 = TweenMax.to("#animate3", 0.3, {
//     color: "#6a60a9",
//     scale: 4,
//     y: 10,
//     rotation: 360,
//   }); // 다수의 애니메이션 재생, 클래스 토글

//   var scene1 = new ScrollMagic.Scene({
//     triggerElement: "#trigger1",
//   })
//     .setClassToggle(".info1", "active")
//     .setTween(tween1)
//     .addTo(controller)
//     .addIndicators({
//       name: "1",
//     });

//   var scene2 = new ScrollMagic.Scene({
//     triggerElement: "#trigger2",
//   })
//     .setClassToggle(".info2", "active")
//     .setTween(tween2)
//     .addTo(controller)
//     .addIndicators({
//       name: "2",
//     });

//   var scene3 = new ScrollMagic.Scene({
//     triggerElement: "#trigger3",
//     // duration: 700 setPin을 사용했을 때 특정 지점 이후로는 따라오지 않게.
//   })
//     //   .setPin("#pin1") 스크롤 할 때마다 요소가 따라오게.
//     .setClassToggle(".info3", "active")
//     .setTween(tween3)
//     .addTo(controller)
//     .addIndicators({
//       name: "3",
//     });

//   var scene = new ScrollMagic.Scene({
//     triggerElement: "#trigger1", //트리거 설정
//     triggerhook: 0, // viewport에 대해 상대적으로 어느 시점에서 보여줄 건지 설정/ 0~1 숫자와 문자열 가능
//     // "onEnter" => 1
//     // "onCenter" => 0.5 *디폴트
//     // "onLeave" => 0
//   })
//     .setClassToggle("#animate1", "visible")
//     .addTo(controller)
//     .addIndicators({
//       name: "1",
//     });
// })();

var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: "onLeave",
    duration: "100%",
    // vertical: false, // 가로 스크롤
  },
});

var slides = document.querySelectorAll("section.panel");

for (var i = 0; i < slides.length; i++) {
  var scene = new ScrollMagic.Scene({
    triggerElement: slides[i],
  })
    .setPin(slides[i], { pushFollowers: false })
    .addIndicators()
    .addTo(controller);
}
