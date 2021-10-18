let barClick = document.getElementById("clickBar");
let checker = 0;
barClick.addEventListener("click", function () {
  checker == 1 ? closeIcons() : openIcons();
});

function closeIcons() {
  let t1 = gsap.timeline();
  t1.to(
    ".instagram",
    {
      x: 0,
      rotation: 360,
      duration: 0.5,
      ease: Bounce.easeOut,
    },
    0
  )
    .to(
      ".behance",
      {
        x: 0,
        rotation: 360,
        duration: 0.5,
        ease: Bounce.easeOut,
      },
      0
    )
    .to(
      ".github",
      {
        x: 0,
        rotation: 360,
        duration: 0.5,
        ease: Bounce.easeOut,
      },
      0.3
    )
    .to(
      ".twitter",
      {
        x: 0,
        rotation: 360,
        duration: 0.5,
        ease: Bounce.easeOut,
      },
      0.3
    )
    .to(
      ".facebook",
      {
        x: 0,
        rotation: 360,
        duration: 0.5,
        ease: Bounce.easeOut,
      },
      0.6
    )
    .to(
      ".dribble",
      {
        x: 0,
        rotation: 360,
        duration: 0.5,
        ease: Bounce.easeOut,
      },
      0.6
    );

  checker = 0;
}

function openIcons() {
  let t1 = gsap.timeline();
  t1.to(
    ".facebook",
    {
      x: -225,
      rotation: 360,
      duration: 0.5,
      ease: "back",
    },
    0
  )
    .to(
      ".dribble",
      {
        x: 225,
        rotation: 360,
        duration: 0.5,
        ease: "back",
      },
      0
    )
    .to(
      ".twitter",
      {
        x: -150,
        rotation: 360,
        duration: 0.5,
        ease: "back",
      },
      0.3
    )
    .to(
      ".github",
      {
        x: 150,
        rotation: 360,
        duration: 0.5,
        ease: "back",
      },
      0.3
    )
    .to(
      ".instagram",
      {
        x: -75,
        rotation: 360,
        duration: 0.5,
        ease: "back",
      },
      0.6
    )
    .to(
      ".behance",
      {
        x: 75,
        rotation: 360,
        duration: 0.5,
        ease: "back",
      },
      0.6
    );

  checker = 1;
}

let icon = document.querySelectorAll(".icon");
let x = 1;
icon.forEach((iconItem) => {
  iconItem.addEventListener("mouseenter", function () {
    let icon_name = this.children[1];
    showDialog(icon_name);
  });

  iconItem.addEventListener("mouseleave", function () {
    let icon_name = this.children[1];
    hideDialog(icon_name);
  });
});

function showDialog(icon_name) {
  let t1 = gsap.timeline();
  let color = window
    .getComputedStyle(icon_name, null)
    .getPropertyValue("background-color");
  console.log(color);
  t1.to(
    icon_name,
    {
      color: color,
      duration: 0.5,
    },
    0
  ).to(
    icon_name,
    {
      y: "-69px",
      scaleX: 1,
      display: "block",
      ease: "back",
      color: "#fff",
      duration: 0.5,
    },
    0
  );
}

function hideDialog(icon_name) {
  let t1 = gsap.timeline();
  let color = window
    .getComputedStyle(icon_name, null)
    .getPropertyValue("background-color");
  console.log(color);
  t1.to(
    icon_name,
    {
      color: color,
      duration: 0.5,
    },
    0
  ).to(
    icon_name,
    {
      y: "0px",
      scaleX: 0,
      display: "none",
      ease: "back",
      zIndex: -1,
      duration: 0.5,
    },
    0
  );
}
