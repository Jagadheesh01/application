"use client";
import CardPopUp from "@/components/CardPopUp";
import {
  Avatar,
  AvatarGroup,
  AiOutlineUser,
  Card,
  Stack,
  HStack,
  Container,
  Grid,
  GridItem,
  IconButton,
  AddIcon,
  Button
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
import { deleteBlogs, readAllBlogs } from "@/services";


const Dashboard = () => {
    //state 
    const [open, setOpen] = useState(false)
    const [blogData, setBlogData] = useState([])
    const [editBlogData, setEditBlogData] = useState([])
    const readData = async() => {
      const data = await readAllBlogs();
      setBlogData(data);
      return data;
    }

    const handleDelete = async(id) => {
      const data = await deleteBlogs({id:id});
    }

    useEffect (()=>{
      readData()
    },[])



  return (
    <>

        {open && <CardPopUp setOpen={setOpen} edit={editBlogData} setedit={setEditBlogData} />}

      <Grid
        templateAreas={`"nav main"
                  "nav main"
                  "nav main"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"100px 1fr"}
        h="100vh"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="teal" area={"nav"}>
            <Avatar cursor={'pointer'} position={'absolute'} bottom={6} left={6} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />

      <Button position={'absolute'} left={20} top={16} borderRadius={'50%'}  h={'3.5rem'} w={'3.5rem'} fontSize={'2rem'} onClick={()=>setOpen(true)}>+</Button>

        </GridItem>
        <GridItem pl="2" area={"main"} p={10} >
          {blogData?.map((e)=>{
            return   <BlogCard key={e.id} title={e.title}  description={e.description} id={e.id} deleteItem={handleDelete} setOpen={setOpen} edit={setEditBlogData}/>
          })}
        </GridItem>
      </Grid>
    </>
  );
};

export default Dashboard;
