// "use strict" //! Derleyici direktifi
// bu ne demek asagıdakı myVariable = "my string" ı normalde basına bırsey yazmadıgında "var" varmıs gıbı degerlendırıyor use strıck dedıgınde daha katı bır degerlendırme yapıyor

console.log("CALCULATE.JS")

const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0)
}
//product ıcındekı price leri almak ıcın fonksıyon
//? Global namespace bu ne demek bır yerde tanımlanan degısken baska yerde tanımlanamaz
// const students = ["Canan", "Can"]

myVariable = "my string" //! use Strict -> myVariable is not defined
console.log(myVariable)

console.log(this) //? window
