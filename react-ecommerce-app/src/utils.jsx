export const importRemoveScripts = (scriptPaths, operation) => {
    for (let scriptPathIndex in scriptPaths){
        const script = document.createElement("script");
        script.src = scriptPaths[scriptPathIndex];
        script.type = "text/js"
        script.async = true;
        if (operation === 1){
            document.body.appendChild(script);
        } else {
            document.body.removeChild(script);
        }
    }

}


export const scriptPathArrays = () => {
    const basePath = './static/js/';
    const scriptNames = ["jquery-2.0.0.min.js", "bootstrap.bundle.min.js", "script.js"];
    let scriptsToImport = [];
  
    for (let scriptIndex in scriptNames) {
      const script = basePath+scriptNames[scriptIndex];
      scriptsToImport.push(script);
    }
    return scriptsToImport;
  }


//   Get Object Size
export const arraySize = array => {
    let length = 0;
    for (let key in array) {
        length += 1;
    }
    return length;
}


//   Return occurence of element in an array
export const count = (element, array) => {
    let count = 0;
    for (let elm in array){
        if (element === array[elm]){
            count += 1;
        }
    }
    return count;
}


// Return a list of objects containing categories and their counts (occurrence)
export const mapCategoriesCount = (array) => {
    let unique_categories = [];
    array.map(item=> {
        if (!(unique_categories.includes(item))){
            unique_categories.push(item);
        }
    });

    let category_counts = [];
    unique_categories.map(category=> {
        category_counts.push(count(category, array));
    })

    let categories_count_map = [];

    for (let i=0; i<unique_categories.length; i++) {
        const cat = {
            name: unique_categories[i],
            count: category_counts[i]
        }
        categories_count_map.push(cat);
    }

    return categories_count_map;
}


export const getProductsByCategory = (products, category) => {
    const matchProducts = products.filter((product) => {
        return product.category === category;
    });
    return matchProducts;
}


export const getCategories = (products) => {
    let categories = [];
    products.map(product=> {
        categories.push(product.category);
    })
    const category_count = mapCategoriesCount(categories);
    // props.setCategories(category_count);
    // props.dispatch({type: "set", products: category_count})
    return category_count;
}


// Check whether an object is empty
export const isEmpty = object => {
    let count = 0;
    for (let key in object) {
        count += 1;
    }
    return count > 0;
}


// Clean form data
export const areEmpty = data => {
    let areEmpty = false;
    for (let key in data) {
        if (data[key] === "") {
            areEmpty = true;
            console.log(key, "is empty")
        }
    }
    return areEmpty;
}


/**
 * Return the authentication token of a user
 * @returns {string}
 */
export const getAuthToken = () => {
    return localStorage.getItem("auth_token");
}