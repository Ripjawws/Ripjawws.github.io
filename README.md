The project integrates an embedded catalog from Publitas into a simple web shop focused on selling socks. The Publitas Viewer API is used for communication between the catalog and the shopping cart. Below, I'll explain each of the functions used in the integration:

1.  **Embedding the Catalog:** The catalog is embedded into the HTML page using an `iframe`. The source URL for the `iframe` links to the Publitas catalog. It's styled to fill the page for a seamless integration.
    
2.  **Setting Viewer Ready:** The `window.viewerReady` function initializes when the Publitas viewer is ready. It sets up interactions with products and cart functions.
    
3.  **retrieveCartFromStorage Function:** This helper function retrieves the cart from local storage. If there's no cart in local storage, it returns an empty array.
    
4.  **updateCartIconCount Function:** This function uses the `retrieveCartFromStorage` function to get the current cart and then communicates with the catalog through the `api.cartContentChanged` method, passing the current number of items in the cart.
    
5.  **addProductToCart Function:** This function adds a product to the cart. It first retrieves the current cart using the `retrieveCartFromStorage` function, then adds the product (an object with `title`, `description`, and `price` properties) to the cart array. The updated cart is then saved back to local storage, and `setCartLength` is called to update the cart icon in the catalog.
    
6.  **displayContentInModal Function:** This function opens an iframe with the given URL. It's used to display the cart and checkout pages within the catalog environment.
    
7.  **addMenuItem Function:** This function adds a menu item to the viewer. The menu item is "Empty Cart," and when clicked, it removes the cart from local storage and updates the cart icon in the catalog.
    
8.  **setProductCtaAction Method:** This method sets an action to be triggered when a product's call-to-action is clicked. In this case, the `addProductToCart` function is set as the action, so that when a product's call-to-action is clicked, the product is added to the cart.
    
9.  **setCartButtonAction Method:** This method sets an action to be triggered when the cart button is clicked. The action opens an iframe with the URL to the cart page, displaying the current contents of the cart.
    

Decisions Made:

-   **Using Local Storage for the Cart:** Local storage was used to store the cart items because it allows for persistence across sessions. This means that if the user refreshes the page or closes the browser, the cart items will still be there when they return.
    
-   **Simplifying Product Objects:** Products are simplified to include only the `title`, `description`, and `price` properties when added to the cart. This minimizes the amount of data stored and makes it easier to display cart items.
    
-   **Modal for the Cart and Checkout:** The cart and checkout pages are displayed in a modal within the catalog environment. This keeps the user within the catalog while reviewing their cart or completing checkout.
    
-   **Separating HTML and CSS:** HTML and CSS were kept in separate files to organize the project. This separation simplifies maintenance and understanding of the project structure.
    
-   **Custom Menu Item:** An "Empty Cart" menu item was added to give users an easy way to clear their cart. This improves the user experience by providing a clear, simple method to restart their shopping.
