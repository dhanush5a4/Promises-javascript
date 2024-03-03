const cart = ["shoes", "pants", "kurta"];
const wallet = 10000;

createOrder(cart)
.then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
.catch((error) => console.error(error))
.then(function (orderId) {
    return proceedToPayment(orderId);
  })
.then(function (paymentInfo) {
    console.log(paymentInfo);
  })
.then(function (orderId) {
    return showOrderSummary(orderId);
  })
.then((orderSummary) => console.log(orderSummary))
.then(function (orderId) {
    return updateWallet(orderId);
  })
.then(() => console.log("Wallet updated successfully"))
.catch((error) => console.error(error));

function createOrder(cart) {
  return new Promise(function (res, rej) {
    if (!validateCart(cart)) {
      rej(new Error("Cart is not valid"));
    }
    const orderId = "124546";
    if (orderId) {
      res(orderId);
    }
  });
}

function proceedToPayment(orderId) {
  return new Promise((res, rej) => {
    res("proceedToPayment --> successfully");
  });
}

function showOrderSummary(orderId) {
  return new Promise((res, rej) => {
    res("showOrderSummary --> shoes, pants, kurta");
  });
}

function updateWallet(orderId) {
  return new Promise((res, rej) => {
    res("Wallet is updated");
  });
}

function validateCart() {
  return false;
}
