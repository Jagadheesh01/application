import { Button, Card, FormControl, FormLabel, Input, Text, VStack ,Link} from '@chakra-ui/react';

const Login = () => {

  return (
    <VStack height={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Card width={"40%"} padding={'4rem'} gap={'1rem'}>
      <Text fontSize='3xl'>Login here</Text>
      <FormControl>
        <FormLabel >Email address</FormLabel>
        <Input marginBottom={'1rem'} type="email" />
        <FormLabel >Password</FormLabel>
        <Input marginBottom={'1rem'} type="password" />
        <Button width={"100%"}marginBottom={'1rem'} colorScheme="teal" size="lg">
          Login
        </Button>
        Don't have an account?
        <Link href="/signup" color={"teal"} marginLeft={"10px"}>
          Signup
          </Link>
      </FormControl>
      </Card>
    </VStack>
  );
}

export default Login;