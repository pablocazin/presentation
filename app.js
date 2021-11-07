class Car {
    constructor(brand, color, size, price) { 
      this.brand = brand;
      this.color = color;
      this.size = size;
      this.price = price;
    }
  
    returnParameters() {/* methode utilisable par les instances */
        return `Votre ${this.brand} est ${this.color} et mesure ${this.size} mètres, elle coute ${this.price} euros.`  
    }
  }
  
  document.querySelector(".boutton").addEventListener("click", () => {
  
    const brand = document.getElementById("brand").value;
    const color = document.getElementById("color").value;
    const size = document.getElementById("size").value;
    const price = document.getElementById("price").value;
  
    /* On créer l'instance d'une classe apres l'avoir créer -> ReferenceError */
    const maVoiture = new Car(brand, color, size, price);
  
    document.getElementById("div").innerHTML = maVoiture.returnParameters()
  })
  
  while(document.getElementById("div").innerHTML == '') {
    document.getElementById("body").style.backgroundColor = "blue";
  }
  
  
  
  