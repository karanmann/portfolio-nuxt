import Vue from 'vue';

const animateOnScrollObserver = new IntersectionObserver(
  (enteries, animateOnScrollObserver) => {
    enteries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('enter')
        animateOnScrollObserver.unobserve(entry.target)
      }
    })
  }
)

Vue.directive('animate-on-scroll', {
  bind: (el) => {
    // Add 'before-enter' class
    el.classList.add('before-enter')
    // Observe element
    animateOnScrollObserver.observe(el)
  },
})
