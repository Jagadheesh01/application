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
import BlogCard from "@/components/Blogcard";
import { deleteBlogs, readAllBlogs } from "@/services";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useRouter } from 'next/navigation';
import { sendNotification } from "@/utils/notification";


const Dashboard = () => {
  const router = useRouter()
    //state 
    const [open, setOpen] = useState(false)
    const [blogData, setBlogData] = useState([])
    const [editBlogData, setEditBlogData] = useState([])
    const readData = async() => {
      const data = await readAllBlogs();
      setBlogData(data);
      return data;
    }
    const handleLogOut =()=>{
    sendNotification("success", "Successfully Logged out!");
    router.push("/login");
  }


    const handleDelete = async(id) => {
      const data = await deleteBlogs({id:id});
    }

    useEffect (()=>{
      readData()
    },[handleDelete])

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
            <Avatar cursor={'pointer'} position={'absolute'} bottom={20} left={6} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
          <Button  position={'absolute'} bottom={12} left={3} size='xs' rightIcon={<ArrowForwardIcon />} onClick={handleLogOut}>Logout</Button>
      <Button position={'absolute'} left={20} top={16} borderRadius={'50%'}  h={'3.5rem'} w={'3.5rem'} fontSize={'2rem'} onClick={()=>setOpen(true)}>+</Button>

        </GridItem>
        <GridItem pl="2" area={"main"} p={10} >
          {blogData?.map((e)=>{
            return   <BlogCard  key={e.id} title={e.title}  description={e.description} id={e.id} deleteItem={handleDelete} setOpen={setOpen} edit={setEditBlogData}/>
          })}
        </GridItem>
      </Grid>
    </>
  );
};

export default Dashboard;
