class KulhadChai {
  serve() {
    return `Serving Kulhad Chai`;
  }
}

class CuttingChai {
  serve() {
    return `Serving Cutting Chai`;
  }
}

function serve(chai: KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
  if (chai instanceof CuttingChai) {
    return chai.serve();
  }
}

console.log(serve(new KulhadChai()));
console.log(serve(new CuttingChai()));
