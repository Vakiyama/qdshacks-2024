export function NavHeader({ userId }: { userId: number | undefined }) { /* change userId to userObj later */
  return (
    <nav class="flex flex-wrap justify-between p-1 bg-slate-900">
      <div class="flex self-center" >
        { userId && 
        <p class=" text-white "> 
          { userId } 
        </p> 
        }
        <button class="m-2 bg-blue-700  hover:bg-blue-800 rounded-lg p-2 pl-5 pr-5"
        hx-post="/resetdb"
        hx-swap="none">
          <p class="text-white">Reset DB</p>
        </button>
      </div>
      <div class="flex self-center">
      {userId ? (
        <button
          class="m-2 bg-blue-700  hover:bg-blue-800 rounded-lg p-2 pl-5 pr-5"
          hx-post="/auth/logout"
          hx-swap="innerHTML"
          hx-target="body"
        >
          <p class="text-white">Logout</p>
        </button>
      ) : (
        <button class="m-2 bg-blue-700 hover:bg-blue-800 rounded-lg p-2 pl-5 pr-5">
          <a class="text-gray-50" href="/auth/login">
            Login
          </a>
        </button>
        
      )}
      <button class="m-2 hover:bg-blue-700 rounded-lg p-2 pl-5 pr-5">
          <a class="text-gray-50" href="/auth/register">
            Register
          </a>
        </button>
      </div>
      
    </nav>
    
  );
}
