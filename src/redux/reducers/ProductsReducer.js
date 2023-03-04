const initState = {
    products:[
        {id:1,name:"Men Shirt",image:"1.jpg",price:800,discount:20,discountPrice:800-20/100*800,quantity:1,desc:"Blue printed casual shirt, has a mandarin collar collar, button placket, long sleeves, curved hem"},
        {id:2,name:"Men Jeans",image:"9.jpg",price:1000,discount:10,discountPrice:1000-10/100*1000,quantity:1,desc:"Men Grey Melange Longline Clean Look Stretchable Jeans"},
        {id:3,name:"Men Jeans",image:"3.jpg",price:600,discount:20,discountPrice:600-20/100*600,quantity:1,desc:"Men Black Slim Fit Mid-Rise Clean Look Stretchable Jeans"},
        {id:4,name:"Women Top",image:"20.jpg",price:500,discount:10,discountPrice:500-10/100*500,quantity:1,desc:"Blue Print Mandarin Collar Empire Pure Cotton Longline Top"},
        {id:5,name:"Women Jeans",image:"5.jpg",price:400,discount:5,discountPrice:400-5/100*400,quantity:1,desc:"Women Black Slim Fit Mid-Rise Clean Look Stretchable Cropped Jeans"},
        {id:6,name:"Women Jacket",image:"6.jpg",price:1600,discount:20,discountPrice:1600-20/100*1600,quantity:1,desc:"Women Blue Washed Pure Cotton Denim Jacket"},
        {id:7,name:"Men Jacket",image:"21.jpg",price:1700,discount:10,discountPrice:1700-10/100*1700,quantity:1,desc:"Men White Striped Puffer Jacket"},
        {id:8,name:"Women Saree",image:"8.jpg",price:700,discount:5,discountPrice:700-5/100*700,quantity:1,desc:"Peach-Coloured & Multicoloured Kalamkari Sequinned Linen Blend Block Print Saree"},
        {id:9,name:"Men Blazer",image:"10.jpg",price:4000,discount:10,discountPrice:4000-10/100*4000,quantity:1,desc:"Men Slim Fit Single-Breasted Blazer"},
        {id:10,name:"Men Kurta",image:"11.jpg",price:400,discount:5,discountPrice:400-5/100*400,quantity:1,desc:"Men Yellow Printed Straight Kurta"},
    ]
    ,
    product:{}
    
}

const ProductsReducer = (state=initState,action) => {
    switch(action.type){

        case "PRODUCT":
            return {...state,product:state.products.find(product => product.id === parseInt(action.id))}
        
        default:{
            return state
        }
    }
}

export default ProductsReducer