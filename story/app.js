var app = new Vue({
    el: '#App',
    data: {
      restoInput: "",
      restoFullName: [],
      cashierInput: "",

      itemInput: "",
      priceInput: 0,

      itemsInput: [],
      pricesInput: [],

      resultReciepe: 0,
      
      dot: "",
      
      date: new Date().toLocaleString().split(',').join(''),
      
      checkout: false,
    },
    methods: {
      input() {
        this.checkout = true
        this.setresto_name()
        this.dot_spacing()
        // this.addItem()
        this.totalPrice()
      },
      totalPrice() {
        let result = 0
        if (this.pricesInput.length > 0) {
            for (let i = 0; i < this.pricesInput.length; i++) {
                result += +this.pricesInput[i]
            }
            this.resultReciepe = result
        } else {
            this.resultReciepe = this.priceInput
        }
      },
      setresto_name() {
        let name = this.restoInput
        if (name.length > 30) {
          let resto_name = []
          resto_name.push(name.slice(0, 30))
          resto_name.push(name.slice(31, name.length))
          this.restoInput = resto_name
        } else {
          this.restoInput = name
        }
      },
      dot_spacing() {
        const spacing = 30 - this.itemInput.length - this.priceInput.length - 4
        let result = ""
        for (let i = 0; i < spacing; i++) {
          result += "."
        }
        this.dot = result
      },
      addItem() {
        console.log("bisa")
        this.itemsInput.push(this.itemInput)
        this.pricesInput.push(this.priceInput)
        this.itemInput = ""
        this.priceInput = 0
      }
    }
  })