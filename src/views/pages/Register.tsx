import { Html } from '../components/Html';

export function Register() {
    return (
        <Html>
            <div class="w-screen h-screen flex justify-center">
        <div
          class="
        place-items-center
        place-self-center 
        w-fit
        h-fit
        bg-indigo-500 
        align-middle 
        rounded-lg 
        justify-center"
        >
                <h2 class="flex justify-center text-lg font-bold mt-3">
                    Registration
                </h2>
                    <form class="flex flex-col p-5">
                        <label class ="border-2 border-black mb-4"
                        for="username">
                            <input type="text"
                            required
                            name="Username"
                            placeholder = "Username"
                            pattern = '[A-Za-z0-9]{2, 14}'/>
                        </label>
                    
                    <label class ="border-2 border-black mb-4" for = "email">
                    <input
                        type="email"
                        required
                        name = "Email"
                        placeholder = "Email"/>
                    </label>
                    <label class ="border-2 border-black mb-4" for = "password">
                        <input type = "password"
                        required
                        name = "Password"
                        placeholder = "Password" />
                    </label>

                    <label class = "border-4 border-black hover:bg-blue-500 hover:text-white pl-1" for = "submit">
                    <input class = "flex justify-end" type = "submit"
                        value="Submit" />
                    </label>
                    </form>
                </div>
            </div>
        </Html>
    );
}

