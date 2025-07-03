const { createApp, ref, computed } = Vue

const app = createApp({
  setup() {    
    const cart = ref(0) 
    const details = ref(true)
    const premium = ref(true)
    return {
      cart,
      premium,
      details
    }
  } 
})
app.component('product-details', productDetails)

app.component("product-display", productDisplay)

app.mount('#app')

// const { createApp, ref, computed } = Vue

// createApp({ setup() { 
//     const product = ref('Boots') 
//     const brand = ref('SE 331')
//     const description = ref('A pair of boots.') 
//     //const image = ref('./assets/images/socks_green.jpg') 
//     //const inStock = ref(true) 
//     const inventory = ref(11) 
//     const details = ref([ '50% cotton', '30% wool', '20% polyester' ]) 
//     const onSale = ref(true) 
//     const variants = ref([ 
//         //{ id: 2234, color: 'green',image: './assets/images/socks_green.jpg' }, 
//         //{ id: 2235, color: 'blue' ,image: './assets/images/socks_blue.jpg'} 
//         { id: 2234, color: 'green',image: './assets/images/socks_green.jpg', quantity: 50 }, 
//         { id: 2235, color: 'blue' ,image: './assets/images/socks_blue.jpg', quantity: 0} 
//     ])
//     const selectedVariant = ref(0)
//     function updateVariant(index) {  
//       selectedVariant.value = index;
//     }
//     const image = computed(() => {
//       return variants.value[selectedVariant.value].image
//     })
//     const inStock = computed(() => {
//       return variants.value[selectedVariant.value].quantity > 0
//     })   
//     const cart = ref(0) 
//     function addToCart() { cart.value += 1 } 
//     const title = computed(() => {
//       return brand.value + ' ' + product.value
//     })
//     function updateImage(variantImage) {
//        image.value = variantImage 
//       } 
//     function toggleStock() {
//         inStock.value = !inStock.value
//     }
//     const sizes = ref(['S', 'M', 'L'])
//     const produce2 = ref('CAMT')
//     const description2 = ref('A Link to camt.')
//     const url = ref('https://www.camt.cmu.ac.th')
//     const saleMessage = computed(() => {
//       return onSale.value ? `${brand.value} ${product.value} is on sale!` : ''
//     })

// return {
//   //product,
//   //brand,
//   title,
//   description,
//   image,
//   inStock,
//   saleMessage,
//     updateVariant,
//   inventory,
//   details,
//   onSale,
//   variants,
//   cart,
//     addToCart,
//     updateImage,
//     toggleStock,
//   sizes,
//   produce2,
//   description2,
//   url
// }
// } }).mount('#app')
