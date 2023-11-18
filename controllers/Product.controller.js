import ProductModal from "../Modals/Product.modal"

export const addProduct = async (req,res) => {
    try{
        const{name,price,category,image} = req.body
        if(!name || !price || !category || !image) return res.status(401).json({success:false,message:"all fields are mandotorty"})

        const product = new ProductModal({
            name,price,category,image
        })
        await product.save();

        return res.status(200).json({success:true,message:"product added successfuly"})

    }catch(error){
        return res.status(500).json({success:false,message:error})
    }
}