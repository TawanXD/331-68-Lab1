
const productDisplay = {
  props: ['premium'],
  props: ['cartCounts'],
  template: 
    /*html*/ 
    `
  <div class="product-display">
    <div class="product-row">
      <div class="product-box"> 
        <h1>{{title}}</h1>
        <product-details :details="details" />
        <p class="product-desc">{{ description }}</p>
        <div class="stock-status">
          <p v-if="onSale" class="sale-label">{{ saleMessage }}</p> 
          <p v-if="onSale" class="sale-label">On Sale!</p>
          <p v-else class="sale-label not">Not on Sale</p>
          <p v-if="premium" class="sale-label">Free shipping for premium staff</p>
          <p v-else>Shipping cost: 10 THB</p>
          <p v-if="inStock">In Stock</p>
          <p v-else-if="inventory <= 10 && inventory > 0">Almost out of Stock</p>
          <p v-else>Out of Stock</p>
          <p v-if='!premium'>Shipping:{{shipping}}</p>
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
          <button class="button" @click="removeFromCart" >Remove</button>
          <review-form @review-submitted="addReview"></review-form>
          <button class="button" @click ="toggleStock">Toggle Stock Status</button>
        </div>
      </div> 
    </div>    
  </div>        
    `,
    props: {
      premium: Boolean
    },
    setup(props, {emit}) {
      console.log("Premium is", props.premium)
      const shipping = computed(() => {
        if (props.premiun){
          return 'Free'
        } else {
          return 30
        }
      })

      const reviews = ref([])
      const product = ref('Boots') 

      const brand = ref('SE 331')

      const title = computed(() => {
        return brand.value + ' ' + product.value
      })

      const description = ref('A pair of boots.') 

      const inventory = ref(11) 

      const onSale = ref(true) 

      const variants = ref([ 
        { id: 2234, color: 'green',image: './assets/images/socks_green.jpg', quantity: 50 }, 
        { id: 2235, color: 'blue' ,image: './assets/images/socks_blue.jpg', quantity: 60} 
      ])

      function getColorById(id) {
        const variant = variants.find(v => v.id === Number(id))
        return variant ? variant.color : 'Unknown'
      }


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

      const cart = ref([]) 

      //add to cart function
      function addToCart() { emit('add-to-cart', variants.value[selectedVariant.value].id) } 
      function removeFromCart() {
        const id = variants.value[selectedVariant.value].id
        emit('remove-from-cart', id)
      }

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
      const details = ref([ '50% cotton', '30% wool', '20% polyester' ])
      function addReview(review) {
        reviews.value.push(review)
        console.log("New review added:", review)
        console.log("All reviews:", reviews.value)
      }
      

  return {
    premium: props.premium,
    title,
    description,
    image,
    inStock,
    reviews,
    addReview,
    saleMessage,
      updateVariant,
    shipping,  
    inventory,
    details,
    onSale,
    variants,
    cart,
      addToCart,
      removeFromCart,
      updateImage,
      toggleStock,
    sizes,
    produce2,
    description2,
    url,
    getColorById
  }
}
} 