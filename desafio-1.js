class ProductManager {
    products;
    static id = 1;
    constructor(tittle, description, price, thumbnail, code, stock) {
      ProductManager.id += 0;
      this.products = [];
      this.tittle = tittle;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
      this.code = code;
      this.stock = stock;
    }
  
    addProduct(product) {
      product = { ...product, id: ProductManager.id };
      let assignedCode = this.products.find(
        (producto) => producto.code === product.code
      );
      if (assignedCode) {
        return console.log(
          "El code del producto ",
          product.tittle,
          "debe ser diferente, porque es identico a otro producto"
        );
      } else {
        this.products.push(product);
        ProductManager.id++;
      }
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      let searchID = id;
      let myProduct = null;
      this.products.forEach((product) => {
        if (product.id === searchID) {
          myProduct = product;
        }
      });
      if (myProduct === null) {
        return console.log("El ID", searchID, "no ha sido hallado");
      } else {
        return console.log(
          "El ID",
          searchID,
          "corresponde al siguiente al producto ",
          myProduct.tittle
        );
      }
    }
  }
  
  const productList = new ProductManager();
  
  const product1 = {
    tittle: "Mate",
    description: "Mate de madera",
    price: 2300,
    thumbnail: "M",
    code: 1,
    stock: 3,
  };
  
  const product2 = {
    tittle: "Termo",
    description: "Termo Acero Inoxidable Stanley 1lt",
    price: 39000,
    thumbnail: "T",
    code: 2,
    stock: 3,
  };

  const product3 = {
    tittle: "Set matero",
    description: "Set Matero Completo Con Maletín, Este set matero incluye: -Mate de madera personalizado. -Yerbera y Azucarera de Acero Inoxidable con pico vertedor de plástico. -Termo Acero Inoxidable Stanley 1lt. -Portatermo Maletín. Nuestro portatermo más vistoso y elegante",
    price: 45000,
    thumbnail: "S",
    code: 2,
    stock: 2,
  };
  
  console.log("Proceso... carga de productos: ");
  productList.addProduct(product1);
  productList.addProduct(product2);
  
  console.log("Listado de productos cargados: ");
  console.log(productList.getProducts());
  
  console.log("Buscando el producto con ID = 2");
  console.log(productList.getProductById(2));
  console.log("Fin del programa");