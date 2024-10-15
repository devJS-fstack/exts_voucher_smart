chrome.contextMenus.create({
    id: "shopeeFoodPage",
    title: "Shopee Food Order",
    contexts: ["action"],
    enabled: true,
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
        case "shopeeFoodPage": {
            chrome.tabs.create({
                url: chrome.runtime.getURL("pages/shopee-food.html"),
            });
            break;
        }
    }
});
