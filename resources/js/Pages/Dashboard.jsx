import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className="py-12">

                <>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">Welcome Back! </div>
                </div>
                </div>

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-5 ">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg  px-5 py-5 place-items-center grid ">
                    <table class="rounded-lg border-separate border border-slate-500 border border-slate-500 ...">
  <thead>
    <tr>
      <th className="border border-seperate-400 text-neutral-800  ...">Full Name</th>
      <th className="border border-seperate-400 text-neutral-800 ...">Job Desc</th>
    </tr>
  </thead>
  <tbody>
    <tr className='py-12'>
      <td className="px-5 border border-seperate-400 text-neutral-500   ...">Ajike Thomas Ohamba</td>
      <td className="px-5 border border-seperate-400 text-neutral-500  ...">HR Quality Staff at Leeds Secure firm</td>
    </tr>
    <tr>
      <td className="px-5 border border-seperate-400 text-neutral-500 ...">Collins T. Ede</td>
      <td className="px-5 border border-seperate-400 text-neutral-500 ...">HR Quality Staff at Leeds Secure firm</td>
    </tr>
    <tr>
      <td className="px-5 border border-seperate-400 text-neutral-500 ...">Mike Okaoru Adanna</td>
      <td className="px-5 border border-seperate-400 text-neutral-500   ...">HR Quality Staff at Leeds Secure firm</td>
    </tr>
  </tbody>
</table>
​
                </div>
                </div>
                
                </>
             

                  
                    
  
            </div>
        </AuthenticatedLayout>
    );
}
