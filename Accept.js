async function acceptConnections(container) {
  const resultItems = container.children;
  const itemKeys = Object.keys(resultItems);
  let i = 0, len = itemKeys.length;
  const intervalId = setInterval(async () => {
    if (i >= len) {
      console.log("Clearing setInterval...");
      clearinterval(intervalId);
      return;
    }
    
    const itemKey = itemKeys[i++];
    if (!isNaN(itemKey)) {
      const acceptBtn = resultItems[itemKey].querySelector('.artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view.invitation-card__action-btn');
      console.log(acceptBtn.innerText);
      if(acceptBtn) {
        acceptBtn.click();
      }
      
    }
  }, 300);
}
console.log("Starting accepting connections on this page");
 const container = document.querySelector(".mn-invitation-list.artdeco-list");
acceptConnections(container);
