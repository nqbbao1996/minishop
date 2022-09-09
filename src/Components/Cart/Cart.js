import { useCart } from "react-use-cart";
import { AiOutlineDelete } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const buy = () => {
    alert("xac nhan mua hang");
  };
  if (isEmpty) return <p className="text-center mt-5">Your cart is empty</p>;

  return (
    <section className="container mt-5">
      <div className="row jistufy-content-center">
        <div className="col-12">
          <h3>Total: {totalUniqueItems} products</h3>
          <table className="table table-light m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.image}
                        style={{ height: "6rem" }}
                        alt={item.name}
                      />
                    </td>

                    <td>{item.name}</td>

                    <td>{item.price}$</td>

                    <td>Quantity({item.quantity})</td>

                    <td>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        className="btn btn-info ms-2"
                      >
                        {" "}
                        -{" "}
                      </button>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                        className="btn btn-info ms-2"
                      >
                        {" "}
                        +{" "}
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="btn btn-danger ms-2"
                      >
                        <AiOutlineDelete />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="col-auto ms-auto float-end">
            <h2> Total price: {cartTotal} $</h2>
            <div className="d-flex col-auto mb-2 float-end">
              <button
                onClick={() => emptyCart()}
                className="btn btn-danger ms-2"
              >
                Clear Cart
              </button>
              <button onClick={buy} className="btn btn-primary ms-2">
                Buy Now{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
