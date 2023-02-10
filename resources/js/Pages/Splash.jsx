import ApplicationLogo from '@/Components/ApplicationLogo';

export default function splash(){
    return(
       <div className="h-screen w-screen place-items-center grid ...">
               <ApplicationLogo className="block h-20 w-auto fill-current text-gray-800" />

               <a  href={route('register')} class="bg-transparent cursor-pointer hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
Get Started
</a >
                       

       </div>
    )
}