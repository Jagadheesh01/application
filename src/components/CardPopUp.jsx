"use client";
import { createBlog, updateBlogs } from "../services";
import { sendNotification } from "@/utils/notification";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CloseButton,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const CardPopUp = ({setOpen,edit,setedit, setBlogData}) => {

const[title,setTitle] = useState("");
const[description,setDescription] = useState("");

// const[image,setImage] = useState();

const handleSubmit = async()=>{

  if(edit.id){
  const payload ={
    id:edit.id,
    title:title,
    description:description,
    image:""
  }
  const data =await updateBlogs(payload);

  if(data.length > 0){
    setOpen(false)
    setedit({})
    sendNotification('success', 'Successfully updated!')
  } else {
    sendNotification('error', 'Something went wrong!')
  }
  }else{

  const payload ={
    title:title,
    description:description,
    image:""
  }
   const data = await createBlog(payload);

  if(data.length > 0){
    setOpen(false)
    sendNotification('success', 'Successfully uploaded!')
    setBlogData((prev)=>([...prev, payload]))
  } else {
    sendNotification('error', 'Something went wrong!')
  }
  }

}
useEffect(()=>{
  if(edit.id){
    setTitle(edit?.title);
    setDescription(edit?.description);
  }
},[edit])

  return (

    <Stack h={"100vh"} w={'100vw'} color={"teal"} display={'flex'}  justifyContent={'center'} position={'absolute'} bgColor={'transparent'} alignItems={'center'} zIndex={10}>
      <Stack position={'relative'} border='1px' borderColor='teal' width={'40%'} height={'50%'}>
      <CloseButton onClick={()=>{ setedit({});setOpen(false)}} position={'absolute'} zIndex={20} top={2} right={2} />
      <Card display={'flex'} p={5} gap={4} zIndex={4} height={'100%'}>
        <Text fontSize={'x-large'}>Blog Details</Text>
        <Input type="text" placeholder="Title" value={title}onChange={(e)=>setTitle(e.target.value)}/>
        <Textarea t placeholder="Description" value={description}  onChange={(e)=>{setDescription(e.target.value)}} />
        {/* <Input type="file" placeholder="Upload Images" onChange={(e)=>{setImage(e.target.value)}} /> */}
        <Button colorScheme={'teal'} onClick={handleSubmit}>Submit</Button>
      </Card>
      </Stack>
    </Stack>
  );
};

export default CardPopUp;
