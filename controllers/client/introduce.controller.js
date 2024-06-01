//[GET] /intro/come
module.exports.come=async(req,res)=>{
    res.render("client/pages/introduce/come",{
        pageTitle:"Ve hiien", 
    })
}

//[GET] /intro/recruitment
module.exports.recruitment=async(req,res)=>{
    res.render("client/pages/introduce/recruitment",{
        pageTitle:"Tuyển dụng", 
    })
}