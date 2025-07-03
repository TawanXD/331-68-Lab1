const { createApp, ref } = Vue

createApp({ setup() { 
    const product = ref('Boots') 
    const description = ref('A pair of boots.') 
    const image = ref('./assets/images/socks_green.jpg') 
    const inStock = ref(false) 
    const inventory = ref(11) 
    const details = ref([ '50% cotton', '30% wool', '20% polyester' ]) 
    const onSale = ref(true) 
    const variants = ref([ 
        { id: 2234, color: 'green',image: './assets/images/socks_green.jpg' }, 
        { id: 2235, color: 'blue' ,image: './assets/images/socks_blue.jpg'} 
    ])     
    const cart = ref(0) 
    function addToCart() { cart.value += 1 } 
    function updateImage(variantImage) { image.value = variantImage } 
    function toggleStock() {
        inStock.value = !inStock.value
    }
    const sizes = ref(['S', 'M', 'L'])
    const produce2 = ref('CAMT')
    const description2 = ref('A Link to camt.')
    const url = ref('https://www.camt.cmu.ac.th')

return {
  product,
  description,
  image,
  inStock,
  inventory,
  details,
  onSale,
  variants,
  cart,
    addToCart,
    updateImage,
    toggleStock,
  sizes,
  produce2,
  description2,
  url
}
} }).mount('#app')
