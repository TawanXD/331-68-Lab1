const { createApp, ref, computed } = Vue

const app = createApp({
  setup() {    
    const cart = ref([]) 
    const cartCounts = computed(() => {
      return cart.value.reduce((count, id) => {
        count[id] = (count[id] || 0) + 1
        return count
      }, {})
    })
const variants = [
  { id: 2234, color: 'green' },
  { id: 2235, color: 'blue' }
]

    const details = ref(true)
    const premium = ref(true)
    function updateCart(id) { 
      cart.value.push(id)
    }
    function addToCart(id) {
      cart.value.push(id)
    }
    function removeFromCart(id) {
      const index = cart.value.findIndex(item => item === id)
      if (index !== -1) {
    cart.value.splice(index, 1)
  }
}
    function getColorById(id) {
        const variant = variants.find(v => v.id === Number(id))
        return variant ? variant.color : 'Unknown'
      }

    return {
      cart,
      variants,
      premium,
      details,
      removeFromCart,
      updateCart,
      addToCart,
      cartCounts,
      getColorById
    }
  } 
})
app.component('product-details', productDetails)

app.component("product-display", productDisplay)

app.component('review-form', reviewForm)

app.component('review-list', reviewList)

app.mount('#app')

