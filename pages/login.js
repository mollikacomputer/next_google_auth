import { useSession, signIn, signOut } from "next-auth/react";

const login = () => {
  const {data:session} = useSession();
   if(session){
    return(
        <div>
            <p> Welcome, { session.user.name}, {session.user.email} </p>
            <button className="btn" onClick={()=> signOut()} > Sign Out</button>
        </div>
        )
   }else{
    return(
        <div>
            <p> You are not Login </p>
            <button className="btn" onClick={()=> signIn("google")} > LogIn with Google </button>
            <button className="btn" onClick={()=> signIn("github")} > LogIn with Github </button>
            <button className="btn" onClick={()=> signIn("facebook")} > LogIn with Facebook </button>
        </div>
    )
   }
};

export default login;

// import {useSession, signIn, signOut} from 'next-auth/react';
// const login = () => {
//     const {data:session} = useSession();
//     console.log(session);

//     if (session) {
//         return (
//           <div>
//             Welcome,{session.user.name}, {session.user.email},
//             <img src={session.user.image} alt="image" />
//             <button className="btn btn-success" onClick={() => signOut()}>
//               Sign Out
//             </button>
//           </div>
//         );
//       } else {
//         return (
//           <div>
//             <p> You are not signin </p>
//             <button className="btn btn-success" onClick={() => signIn()}>
//               Sign In
//             </button>
//           </div>
//         );
//       }
// };

// export default login;