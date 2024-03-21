import { Card, FormControl, Text, FormLabel, Button, VStack, Input, Link } from '@chakra-ui/react';
import React from 'react'

const Signup = () => {
  return (
    <VStack height={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Card width={"40%"} padding={"4rem"} gap={"1rem"}>
        <Text fontSize="3xl">Signup here</Text>
        <FormControl >
          <FormLabel >First Name</FormLabel>
          <Input />
          <FormLabel>Last Name</FormLabel>
          <Input />
          <FormLabel>Email address</FormLabel>
          <Input  />
          <FormLabel >Password</FormLabel>
          <Input marginBottom={'1rem'}/>
          <Button marginBottom={'1rem'} width={"100%"} colorScheme="teal" size="lg">Signup</Button>
            Already have an account? <Link href='/login' color={"teal"} marginLeft={"10px"}>
              Click here
            </Link>
        </FormControl>
      </Card>
    </VStack>
  );
}

export default Signup;