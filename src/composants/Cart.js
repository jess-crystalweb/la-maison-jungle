function Cart() {
  const monsteraPrice = 8
  const lierrePrice = 10
  const bouquet_de_fleurPrice = 15
  return (
    <div className="lmj-cart">
      <h2>Panier</h2>
        <ul>
          <li>Monstera : {monsteraPrice}€</li>
          <li>Lierre : {lierrePrice}€</li>
          <li>Bouquet de fleur : {bouquet_de_fleurPrice}€</li>
        </ul>
        Total : {monsteraPrice + lierrePrice + bouquet_de_fleurPrice}€
    </div>
  )
}
export default Cart
