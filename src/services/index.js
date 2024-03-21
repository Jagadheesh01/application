import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fddlytclshozujzqxorc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkZGx5dGNsc2hvenVqenF4b3JjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMTAxNjUwMCwiZXhwIjoyMDI2NTkyNTAwfQ.bOtVPxL9eSvupACIpxU08DlN0aE18fPuCWDbyz9gmG0'
const supabase = createClient(supabaseUrl, supabaseKey)

// authtentication 

export const signUpUser = async(payload) => {
    try {
      const { data, error } = await supabase
        .from("auth")
        .insert([payload])
        .select();
      return data;
    } catch (err) {
      console.log("something went wrong!", err);
      return err;
    }

}

export const loginUser = async(payload) => {
    try {
      let { data: auth, error } = await supabase
        .from("auth")
        .select("*")
        .eq("email_id", payload.email_id)
        .eq("password", payload.password)
      return auth;
    } catch (err) {
      console.log("something went wrong!", err);
      return err;
    }

}

// data management



export const createBlog = async(payload)=>{
    try{

        const { data, error } = await supabase
        .from('blog')
        .insert([payload])
        .select()
          return data   
    }
    catch(error){
console.log("error",error)
    }
}
export const readAllBlogs = async(payload)=>{
    try{

        let { data: blog, error } = await supabase
        .from('blog')
        .select('*')
                
          return blog
    }
    catch(error){
console.log("error",error)
    }
}

export const deleteBlogs = async(payload)=>{
    try{

        const { error } = await supabase
        .from('blog')
        .delete()
        .eq('id', payload.id)
          return error 
    }
    catch(error){
console.log("error",error)
    }
}

export const updateBlogs = async(payload)=>{
    try{

        const { data, error } = await supabase
        .from('blog')
        .update([payload])
        .eq('id',payload.id)
        .select()
          return data 
    }
    catch(error){
console.log("error",error)
    }
}


          
          