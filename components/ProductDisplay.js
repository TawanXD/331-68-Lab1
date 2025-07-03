
const productDisplay = {
  template: 
    /*html*/ 
    `
  <div class="product-display">
    <div class="product-row">
      <div class="product-box"> 
        <h1>{{title}}</h1>
        <ul class="product-details">
          <li v-for="detail in details" :key="detail">
          {{ detail }}
          </li>
        </ul>
        <p class="product-desc">{{ description }}</p>
        <div class="stock-status">
          <p v-if="onSale" class="sale-label">{{ saleMessage }}</p> 
          <p v-if="onSale" class="sale-label">On Sale!</p>
          <p v-else class="sale-label not">Not on Sale</p>
          <p v-if="inStock">In Stock</p>
          <p v-else-if="inventory <= 10 && inventory > 0">Almost out of Stock</p>
          <p v-else>Out of Stock</p>
        </div>
        <p class="size-info">Sock sizes: {{ sizes.join(', ') }}</p>
      </div> 
      <div class="product-box img">
        <img :src="image" :class="{ 'out-of-stock-image': !inStock }" />                           
        <div class="color-options"> 
          <div 
          v-for="(variant,index) in variants"
          :key="variant.id"
          class="color-circle" 
          :style="{ backgroundColor: variant.color }"
          @mouseover="updateVariant(index)"
          >
            {{ variant.color }}
          </div>
        </div>
        <div class="button-row">
          <button class="button" :disabled ='!inStock' @click ="addToCart" :class="{disabledButton: !inStock}">Add to Cart</button>
          <button class="button" @click ="toggleStock">Toggle Stock Status</button>
        </div>
      </div> 
    </div>    
  </div>        
    `,
    setup() {
      const product = ref('Boots') 
      const brand = ref('SE 331')
      const title = computed(() => {
        return brand.value + ' ' + product.value
      })
      const description = ref('A pair of boots.') 
      //const image = ref('./assets/images/socks_green.jpg') 
      //const inStock = ref(true) 
      const inventory = ref(11) 
      const details = ref([ '50% cotton', '30% wool', '20% polyester' ]) 
      const onSale = ref(true) 
      const variants = ref([ 
        //{ id: 2234, color: 'green',image: './assets/images/socks_green.jpg' }, 
        //{ id: 2235, color: 'blue' ,image: './assets/images/socks_blue.jpg'} 
        { id: 2234, color: 'green',image: './assets/images/socks_green.jpg', quantity: 50 }, 
        { id: 2235, color: 'blue' ,image: './assets/images/socks_blue.jpg', quantity: 0} 
      ])
      const selectedVariant = ref(0)
      function updateVariant(index) {  
        selectedVariant.value = index;
      }
      const image = computed(() => {
        return variants.value[selectedVariant.value].image
      })
      const inStock = computed(() => {
        return variants.value[selectedVariant.value].quantity > 0
      })   
      const cart = ref(0) 
      function addToCart() { cart.value += 1 } 
      function updateImage(variantImage) {
         image.value = variantImage 
        } 
      function toggleStock() {
          inStock.value = !inStock.value
      }
      const sizes = ref(['S', 'M', 'L'])
      const produce2 = ref('CAMT')
      const description2 = ref('A Link to camt.')
      const url = ref('https://www.camt.cmu.ac.th')
      const saleMessage = computed(() => {
        return onSale.value ? `${brand.value} ${product.value} is on sale!` : ''
      })

  return {
    //product,
    //brand,
    title,
    description,
    image,
    inStock,
    saleMessage,
      updateVariant,
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
}
} 