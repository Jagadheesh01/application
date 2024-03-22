'use client'
import { loginUser } from '@/services';
import { sendNotification } from '@/utils/notification';
import { Button, Card, FormControl, FormLabel, Input, Text, VStack ,Link} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Login = () => {
  const router = useRouter()

  const [email_id,setEmail] = useState("");
  const [password,setPassword] = useState("")

  const handleSubmit = async()=>{
    const payload = {
      email_id: email_id,
      password: password,
    };

    const data = await loginUser(payload);
    if (data.length > 0) {
      router.push("/dashboard");
      sendNotification("success", "Successfully Logged in!");
     


    } else {
      sendNotification("error", "Invalid Username or password");
    }
  }

  return (
    <VStack height={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Card width={"40%"} padding={'4rem'} gap={'1rem'}>
      <Text fontSize='3xl'>Login here</Text>
      <FormControl>
        <FormLabel >Email address</FormLabel>
        <Input marginBottom={'1rem'} type="email" placeholder='Enter your mail id' onChange={(e)=>{setEmail(e.target.value)}}/>
        <FormLabel >Password</FormLabel>
        <Input marginBottom={'1rem'} type="password" placeholder='Enter password' onChange={(e)=>{setPassword(e.target.value)}}/>
        <Button width={"100%"}marginBottom={'1rem'} colorScheme="teal" size="lg" onClick={handleSubmit}>
          Login
        </Button>
        Dont have an account?
        <Link href="/signup" color={"teal"} marginLeft={"10px"}>
          Signup
          </Link>
      </FormControl>
      </Card>
    </VStack>
  );
}

export default Login;