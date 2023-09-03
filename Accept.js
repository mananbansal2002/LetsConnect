async function acceptConnections(container) {
  var resultItems = container.children;
  var itemKeys = Object.keys(resultItems);
  let i = 0, len = itemKeys.length;
  const intervalId = setInterval(async () => {
    if (i >= len) {
      // console.log("Clearing setInterval...");
       container = document.querySelector(".mn-invitation-list.artdeco-list");
        resultItems = container.children;
         itemKeys = Object.keys(resultItems);
    }
    
    const itemKey = itemKeys[i++];
    if (!isNaN(itemKey)) {
      const acceptBtn = resultItems[itemKey].querySelector('.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view.invitation-card__action-btn');
        // const tempName = resultItems[itemKey].querySelector('.invitation-card__tvm-title.t-16.t-normal.t-black');
      acceptBtn.click();
      
    }
  }, 300);
}
console.log("Starting accepting connections on this page");
 var container = document.querySelector(".mn-invitation-list.artdeco-list");
console.log(container);
acceptConnections(container);
