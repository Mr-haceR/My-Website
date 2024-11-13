// Select the element
const element = document.getElementById("main_image");
const links = document.querySelectorAll('.linkss')
const hover_eff = document.querySelectorAll('.hover_effect')

// Add a mousemove event listener
element.addEventListener('mousemove', (e) => {
  // Get element dimensions and cursor position within the element
  const rect = element.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Calculate the rotation angles based on cursor position
  const rotateX = ((y / rect.height) - 0.5) * -50; // Adjust multiplier for stronger tilt
  const rotateY = ((x / rect.width) - 0.5) * 100; // Adjust multiplier for stronger tilt

  // Apply the rotation
  element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Reset the tilt when the mouse leaves the element
element.addEventListener('mouseleave', () => {
  element.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

links.forEach(e => {
  e.addEventListener('mouseover', (k) => {
    if (k.target.id === "pro" || k.target.id === "pro_eff")
    {
      const i = document.getElementById("pro_eff")
      i.style.animation = "hover_eff 500ms ease-out forwards"
    }
    else if (k.target.id === "abo" || k.target.id === "abo_eff") {
      const i = document.getElementById("abo_eff")
      i.style.animation = "hover_eff 500ms ease-out forwards"
    }
    else if (k.target.id === "con" || k.target.id === "con_eff"){
      const i = document.getElementById("con_eff")
      i.style.animation = "hover_eff 500ms ease-out forwards"
    }
  })

  e.addEventListener('mouseout', (k) => {
    if (k.target.id === "pro")
    {
      const i = document.getElementById("pro_eff")
      i.style.animation = "hover_eff_r 500ms ease-out forwards"
    }
    else if (k.target.id === "abo") {
      const i = document.getElementById("abo_eff")
      i.style.animation = "hover_eff_r 500ms ease-out forwards"
    }
    else if (k.target.id === "con"){
      const i = document.getElementById("con_eff")
      i.style.animation = "hover_eff_r 500ms ease-out forwards"
    }
  
  })
})

document.querySelectorAll('.hovereffect').forEach(e => {
  e.addEventListener('mouseout', (k) => {
    const i = document.getElementById(k.target.id)
    i.style.animation = "hover_eff_r 500ms ease-out forwards"

  })
})