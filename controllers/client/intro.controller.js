//[GET] /intro/come
module.exports.come=async(req,res)=>{
    res.render("client/pages/intro/come",{
        pageTitle:"Ve hiien", 
    })
}

//[GET] /intro/recruitment
module.exports.recruitment=async(req,res)=>{
    res.render("client/pages/intro/recruitment",{
        pageTitle:"Tuyen dung", 
    })
}