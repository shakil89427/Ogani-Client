import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useLoadOrders from "../../Hooks/useLoadOrders";

const CancelledOrders = () => {
  const [orders, setOrders] = useState([]);
  const { loadOrders } = useLoadOrders();
  const [loading, setLoading] = useState(true);

  const getall = async () => {
    try {
      const response = await loadOrders();
      const cancelled = response.filter(
        (single) => single.status === "cancelled"
      );
      setOrders(cancelled);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getall();
  }, []);
  return (
    <div>
      <h3 className="fw-bold border-bottom pb-2">Cancelled Orders</h3>
      {loading && <Spinner animation="border" variant="success" />}
      {!loading && orders.length === 0 && <h1>No order found</h1>}
      {orders.length > 0 && (
        <div>
          {orders.map((order) => (
            <div key={order._id}>
              <div className="d-flex border border-5 p-2 my-3 rounded">
                <span className="w-50">
                  <h5>Order Details</h5>
                  <div className="mb-2">
                    <p className="mb-0 fw-bold">Order Id</p>
                    <span>{order._id}</span>
                  </div>
                  <div className="mb-2">
                    <p className="mb-0 fw-bold">Ordered by</p>
                    <span>
                      {order.user.firstname} {order.user.lastname}
                    </span>
                  </div>
                  <div className="mb-2">
                    <p className="mb-0 fw-bold">Shipping Address</p>
                    <span>{order.shipping}</span>
                  </div>
                  <div className="mb-2">
                    <p className="mb-0 fw-bold">Order status</p>
                    <span>{order.status}</span>
                  </div>
                  <p className="fw-bold mb-0">Subtotal: {order.subtotal}$</p>
                  <p className="fw-bold mb-0">Tax: {order.tax}$</p>
                  <p className="fw-bold">Total: {order.total}$</p>
                </span>
                <span className="w-50 ms-2 text-end">
                  <h5>Total products: {order.products.length}</h5>
                  {order.products.map((product) => (
                    <p key={product._id} className="">
                      {product.name}({product.quantity})
                    </p>
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CancelledOrders;
