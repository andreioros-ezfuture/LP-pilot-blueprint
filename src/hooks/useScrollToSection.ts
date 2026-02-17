export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    // If element not found on current page, navigate to landing page
    window.location.href = `/#${id}`;
  }
}
