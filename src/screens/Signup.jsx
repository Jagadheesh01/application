'use client'
import { signUpUser } from '../services';
import { Card, FormControl, Text, FormLabel, Button, VStack, Input, Link } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Signup = () => {
  const router = useRouter()

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");


  const handleSubmit = async() => {

    const payload = {
      first_name:firstName,
      last_name:lastName,
      email_id:email,
      password:pass
    }

    const data = await signUpUser(payload);
    
    if(data.length > 0){
      sendNotification("success", "Successfully Registered!");
      router.push('/login')
    } else {
      sendNotification("error", "Something went wrong!");
    }
  }
  return (
    <VStack height={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Card width={"40%"} padding={"4rem"} gap={"1rem"}>
        <Text fontSize="3xl">Signup here</Text>
        <FormControl >
          <FormLabel id='first_name' >First Name</FormLabel>
          <Input onChange={(e)=>setFirstName(e.target.value)} required placeholder='Enter First Name'/>
          <FormLabel>Last Name</FormLabel>
          <Input  onChange={(e)=>setLastName(e.target.value)} placeholder='Enter Last Name' />
          <FormLabel>Email address</FormLabel>
          <Input onChange={(e)=>setEmail(e.target.value)} placeholder='Enter valid Mail id' />
          <FormLabel >Password</FormLabel>
          <Input  marginBottom={'1rem'} onChange={(e)=>setPass(e.target.value)} placeholder='Enter your password'/>
          <Button marginBottom={'1rem'} width={"100%"} colorScheme="teal" size="lg" onClick={handleSubmit}>Signup</Button>
            Already have an account? <Link href='/login' color={"teal"} marginLeft={"10px"}>
              Click here
            </Link>
        </FormControl>
      </Card>
    </VStack>
  );
}

export default Signup;