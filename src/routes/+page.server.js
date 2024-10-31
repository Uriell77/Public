import { supabase } from "$lib/supabaseClient";

/** @type {import('./$types').Actions} */
export const actions = {
    registro: async ({ cookies, request }) => {
        const data = await request.formData();
        const username = data.get('username');
        const email = data.get('email');
        const password = data.get('password');

        try{
            
            const { data, error } = await supabase
                .from('users')
                .insert([
                    { Username: username, Email: email, Password: password},
                ])
                .select()

        console.log("aqui estamos")
            return {regAnswer: 1}

        }
        catch{
            console.log(Error)
            return {regAnswer: Error}

        }

    },
};
