const Product=require("../../models/product.model");
const ProductCategory=require("../../models/product-category.model");
const productsHelper=require("../../helpers/products")
const productsCategoryHelper=require("../../helpers/products-category")
// [GET] /products
module.exports.index=async (req,res)=>{
    const products=await Product.find({
        status:"active",
        deleted: false
    }).sort({position:"desc"});

    const newProducts=productsHelper.priceNewProducts(products);
    


    res.render("client/pages/products/index",{
        pageTitle:"Danh sách sản phẩm",
        products: newProducts,
    });
}

//[GET] /products/:slugProduct
module.exports.detail=async (req,res)=>{
    

    try{
        const find={
            deleted:false,
            slug:req.params.slugProduct,
            status:"active"
        };
        const product=await Product.findOne(find);
        if(product.product_category_id){
            const category= await ProductCategory.findOne({
                _id:product.product_category_id,
                status:"active",
                deleted:false,
            });
            product.category=category;
        }
        product.priceNew=productsHelper.priceNewProduct(product);
        res.render("client/pages/products/detail",{
            pageTitle:product.title,
            product:product
        })
    }catch(error){
        res.redirect(`/products`);
    }
}

//[GET] /products/:slugCategory
module.exports.category=async (req,res)=>{
    console.log(req.params.slugCategory)
   // res.send("Ok")
    const category=await ProductCategory.findOne({
        slug:req.params.slugCategory,
        status:"active",
        deleted:false 
    });
    //console.log(category.id)

    // const getSubCategory=async(parentId)=>{
    //     const subs=await ProductCategory.find({
    //         parent_id:parentId,
    //         status:"active",
    //         deleted:false
    //     });
    //     let allSub=[...subs];
    //     for(const sub of subs){
    //         const childs=await getSubCategory(sub.id)
    //         allSub=allSub.concat(childs);
    //     }
    //     return allSub;
    // }
   const listSubCategory=await productsCategoryHelper.getSubCategory(category.id);

   const listSubCategoryId=listSubCategory.map(item=>item.id)

    const products=await Product.find({
        product_category_id:{$in:[category.id,...listSubCategoryId]} ,
        deleted:false 
     }).sort({position:"desc"})
    console.log(products);
    const newProducts=productsHelper.priceNewProducts(products);

    res.render("client/pages/products/index",{
        pageTitle:category.title,
        products: newProducts, 

        
    });
}