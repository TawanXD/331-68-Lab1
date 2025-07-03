const productDetails = {
  props: ['details'],
  template: 
    /*html*/
    `
    <ul>
      <li v-for="detail in details" :key="detail">
        {{ detail }}
      </li>
    </ul>
  `,
    setup(props) {
        console.log("Product details:", props.details)
        
        return {
        details: props.details
        }
    }
}
