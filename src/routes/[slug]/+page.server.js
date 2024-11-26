import { supabase } from "$lib/supabaseClient";
import { fail, redirect } from "@sveltejs/kit";



let valor;





/** @type {import('./$types').PageServerLoad} */
export async function load({ params, cookies }) {
    let session = cookies.get('session');
  let { data: users, error } = await supabase
  .from("users")
  .select(`*,
    store(
      *
    )
  `)
  .eq("Username", params.slug)
  return {
    usuario: users,
    session: session,
    path: params.slug
  };

    }





/*




// Registro
export const actions = {
  registro: async ({ cookies, request }) => {
    const data = await request.formData();
    const username = data.get("username");
    const email = data.get("email");
    const password = data.get("password");

    try {
      const { data, error } = await supabase
        .from("users")
        .insert([{ Username: username, Email: email, Password: password }])
        .select();

      return { regAnswer: 1 };
    } catch {
      console.log(Error);
      return { regAnswer: Error };
    }
  },





//   Login 
  login: async ({ cookies, request }) => {
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");

    // console.log(username);
    // console.log(password);



    if(
      typeof username != 'string' ||
      typeof password != 'string' ||
/      !username ||
 /     !password 
    ){
      return {logAnswer: "Formato de Credenciales Errado"}
    }

    let {data: users, error} = await supabase
    .from("users")
    .select("*")
    .eq("Username", username)

    if (users != "") {
      let { data: pass, error } = await supabase
        .from("users")
        .select("*")
        .eq("Password", password);
      if (pass != "") {
        cookies.set("session", users[0].Username, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: '!dev',
          maxAge: 60 * 60 * 24 * 30,
          headers: { "x-sveltekit-action": "true" },
        });
        return { logAnswer: "Ingresando", slug: username };
      } else {
        return { logAnswer: "Password Equivocado" };
      }
    } else {
      return { logAnswer: "Usuario no existe" };
    }


      let { data: userspass } = await supabase
        .from("users")
        .select("*")
        .eq("Password", password);
        return { logAnswer: "Password Erroneo", error };

        cookies.set("session", usersnames[0].Username, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: '!dev',
          maxAge: 60 * 60 * 24 * 30,
          headers: { "x-sveltekit-action": "true" },
        });

        redirect(307, `/${username}`);

      }
    }

*/


