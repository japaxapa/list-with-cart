import { dessertList as mockList } from "./assets/desserts.mock";
import { Card } from "./components/card";
import { Modal } from "./components/modal";
import { YourCart } from "./components/yourCart";
import { useCart } from "./context/shoppingCart.context";

function App() {
  const dessertList = [...mockList];
  const { isOpen } = useCart();

  return (
    <>
      <main className="container">
        <div className="content">
          <h1>Desserts</h1>
          <div className="xl:grid xl:gap-4 xl:grid-cols-3">
            {dessertList.map((item, index) => (
              <Card item={item} key={item.type + "-" + index} />
            ))}
          </div>
        </div>
        <div className="xl:w-3/12">
          <YourCart />
        </div>
        {isOpen && <Modal />}
      </main>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  );
}

export default App;
