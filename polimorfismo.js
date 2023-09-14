// Definindo a classe Animal
class Animal {
    constructor(nome) {
      this.nome = nome;
    }
    som() {
      console.log('Fazendo barulho');
    }
  }
  class Cachorro extends Animal {
    latir() {
      console.log('Latindo');
    }
  }
  class Gato extends Animal {
    miar() {
      console.log('Miando');
    }
  }
  
  // Exemplo de uso de polimorfismo
  let meuCachorro = new Cachorro('Max');
  let meuGato = new Gato('Whiskers');
  
  meuCachorro.som(); 
  meuGato.som(); 
  
  meuCachorro.latir();
  meuGato.miar(); 