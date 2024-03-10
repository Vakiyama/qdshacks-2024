import { Html } from "../components/Html";
import { NavHeader } from '../components/Navigation';

export function CategoryScreen() {
    return (
        <Html>
          <NavHeader userId={undefined} />
          <div class="w-screen h-screen flex justify-center">
                <div class="
                    place-items-center
                    place-self-center 
                    w-fit
                    h-fit 
                    border-solid
                    border-4
                    border-black
                    bg-indigo-500 
                    align-middle 
                    rounded-lg 
                    justify-center">   


                    <form class="flex flex-col p-5" action="/auth/login" method="post">
                        <div style="margin-top: 5px; display: flex; justify-content: center; align-items: center;">
                            <h1 style="margin: 0; font-size: 24px; font-weight: bold; text-align: center;">Category Name</h1>
                        </div>

                        <div style="margin-top: 20px; display: flex; justify-content: space-between; align-items: center;">
                            <label class="border-4 border-black hover:bg-blue-500 hover:text-white rounded-full" for="increase">
                                <input type="submit" value="+" style="width: 50px; height: 50px; border-radius: 50%; overflow: hidden; padding: 0; margin: 0; font-size: 30px; font-weight: bold; color: black;" />
                            </label>
                                <h1 style="margin: 40; font-size: 20px; font-weight: 500;">Battery %</h1>
                            <label class="border-4 border-black hover:bg-blue-500 hover:text-white rounded-full" for="decrease">
                                <input type="submit" value="-" style="width: 50px; height: 50px; border-radius: 50%; overflow: hidden; padding: 0; margin: 0; font-size: 35px; font-weight: bold; color: black;" />
                            </label>
                        </div>
                    </form>

                </div>
            </div>
        </Html>
    );
}