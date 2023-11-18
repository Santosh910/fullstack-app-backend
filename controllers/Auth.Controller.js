import UserModal from "../Modals/User.modal";


export const Register = async(req,res) =>{
    try{
        const {name,email,password} = req.body;
        if(!name || !email || !password) return res.status(401).json({succes:false,message:"all fileds mandotory"})

        const user = new UserModal({
            name,
            email,
            password
        })
        await user.save();

        return res.staus(200).json({success:true,message:"registration successfully"})

    }catch(error){
        return res.status(500).json({success:false,message:error})
    }
}