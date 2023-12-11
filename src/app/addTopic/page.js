'use client'

import { useState, useEffect } from "react";
import {FaFacebook, FaInstagram, FaTiktok, FaTwitter} from "react-icons/fa"
import DataProduct from "../Data/DataProduct";
import Image from "next/image";


const page = () => {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cfrmpassword, setCfrmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

   

    console.log(password,cfrmpassword)


  return (
    
    <div>
        {DataProduct.map((data, index) =>{
            return <div key={index}>
                <Image src={data.image} width={44} height={44} alt=""/>
            </div>
        })}
    </div>

  )
}

export default page