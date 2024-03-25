"use client";
import { deleteBlogs } from "../services";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Card, CardBody, CardFooter, CardHeader, Heading, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Blogcard = ({title,description,id, deleteItem,setOpen,edit}) => {
  const handleUpdate = ()=>{
    setOpen(true);
    edit({id:id,description:description,title:title});
  }
  
  return (
    
    <>
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      marginBottom={5}
      position={"relative"}
    >
      <EditIcon position={"absolute"} right={12} top={4} color={"teel"} onClick={handleUpdate}/>
      <DeleteIcon position={"absolute"} right={4} top={4} color={"red"} onClick={()=>{deleteItem(id)}}/>
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{title}</Heading>
          <Text py="2">
            {description}
          </Text>
        </CardBody>
      </Stack>
    </Card>
    </>
  );
}

export default Blogcard