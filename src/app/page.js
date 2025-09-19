// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               src/app/page.js
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

import React from 'react';

export default function Home() {

  return (
    <div className="w-[1520px] h-[3436px] relative bg-[#08101f] overflow-hidden">
      {/* Background Elements */}
      <div className="w-[1440px] h-[350px] left-0 top-[3086px] absolute mix-blend-soft-light bg-gradient-to-r from-[#2f1e6c]/25 via-[#624680]/25 to-[#985990]/25 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-white" />
      
      {/* Blur Effects */}
      <div className="w-[337px] h-[333px] left-[1255px] top-[197px] absolute bg-[#00bbd6] rounded-full blur-[196.35px]" />
      <div className="w-[337px] h-[333px] left-[1235px] top-[2319px] absolute bg-[#00bbd6]/90 rounded-full blur-[196.35px]" />
      <div className="w-[337px] h-[333px] left-[-152px] top-[438px] absolute bg-[#4d28a7] rounded-full blur-[141.35px]" />
      <div className="w-[337px] h-[333px] left-[-210px] top-[2804px] absolute bg-[#4d28a7] rounded-full blur-[141.35px]" />
      
      {/* Additional blur effects for middle section */}
      <div className="w-[276.20px] h-[321.76px] left-[392.76px] top-[1694.96px] absolute bg-[#004f7a] rounded-full blur-[190.65px]" />
      <div className="w-[276.20px] h-[321.76px] left-[602.57px] top-[1131.64px] absolute bg-white/80 rounded-full blur-[236px]" />
      <div className="w-[276.20px] h-[321.76px] left-[1164.80px] top-[1616.70px] absolute bg-[#00bbd6] rounded-full blur-[196.35px]" />
      <div className="w-[276.20px] h-[321.76px] left-[1px] top-[1255.32px] absolute bg-[#4d28a7] rounded-full blur-[141.35px]" />

      {/* Gradient separators */}
      <div className="w-[1440px] h-6 left-0 top-[1007px] absolute mix-blend-screen bg-gradient-to-r from-[#2f1e6c] via-[#02a0be] to-[#985990] blur-[5.40px]" />
      <div className="w-[1440px] h-6 left-[1px] top-[2066px] absolute mix-blend-screen bg-gradient-to-r from-[#2f1e6c] via-[#02a0be] to-[#985990] blur-[5.40px]" />

      {/* Logo */}
      <img className="w-[217px] h-[217px] left-[124.45px] top-[5px] absolute rounded-[112.50px]" src="https://placehold.co/217x217" alt="Logo" />

      {/* Navigation */}
      <div className="left-[735px] top-[88px] absolute justify-start text-[#00eeff]/80 text-[35px] font-normal font-['Roboto'] tracking-wide cursor-pointer">Home</div>
      <div className="left-[918px] top-[88px] absolute justify-start text-white text-[35px] font-normal font-['Roboto'] tracking-wide cursor-pointer hover:text-[#00eeff]/80 transition-colors">Working</div>
      <div className="left-[1136px] top-[88px] absolute justify-start text-white text-[35px] font-normal font-['Roboto'] tracking-wide cursor-pointer hover:text-[#00eeff]/80 transition-colors">Contact Us</div>

      {/* Hero Section */}
      <div className="w-[582px] left-[128px] top-[322px] absolute justify-start text-white text-[50px] font-medium font-['Roboto'] leading-[62.50px] tracking-wide">
        Smart Responses, Smarter Conversations
      </div>
      
      <div className="w-[549px] left-[124px] top-[535px] absolute justify-start text-white text-3xl font-normal font-['Roboto'] leading-[33px]">
        Create instant, tailored replies for specific messages across all your favorite social platforms.
      </div>

      {/* Hero Buttons */}
      <div className="w-[283px] h-[72px] left-[124px] top-[721px] absolute bg-gradient-to-r from-[#23a7d0] to-[#27116a] rounded-[80px] cursor-pointer hover:opacity-90 transition-opacity"/>
      <div className="left-[157px] top-[740px] absolute justify-start text-white text-[25px] font-normal font-['Roboto'] leading-7 cursor-pointer" >
        Generate Response
      </div>
      
      <div className="w-[236px] h-[72px] left-[437px] top-[720px] absolute bg-white/0 rounded-[80px] border border-[#23a7d0] cursor-pointer hover:bg-[#23a7d0] hover:bg-opacity-20 transition-all" />
      <div className="w-[163.45px] left-[473px] top-[739px] absolute justify-start text-white text-[25px] font-normal font-['Roboto'] leading-7 cursor-pointer">
        How It Works
      </div>

      {/* Hero Image */}
      <img className="w-[586px] h-[532px] left-[730px] top-[293px] absolute rounded-[43px] shadow-[10px_10px_4px_0px_rgba(0,0,0,1.00)] border border-[#1e1e1e]" src="https://placehold.co/586x532" alt="Hero" />

      {/* Features Section */}
      <div className="left-[229.66px] top-[1131.64px] absolute justify-start text-white text-[50px] font-medium font-['Roboto'] leading-[62.50px] tracking-wide">
        Features
      </div>
      
      <div className="w-[728px] h-[396.98px] left-[226px] top-[1239px] absolute justify-start text-white text-[35px] font-normal font-['Oswald'] leading-[64.40px] tracking-wide">
        Automate messaging for Facebook, Instagram, Twitter, and more.<br/>
        Personalize responses to maintain authentic engagement.<br/>
        Gain insights with performance analytics for every interaction.
      </div>

      {/* Features Background Image */}
      <img className="w-[1440px] h-[1059px] left-0 top-[1007px] absolute bg-blend-difference" src="https://placehold.co/1440x1059" alt="Features Background" />

      {/* How It Works Section */}
      <div className="left-[226px] top-[2230px] absolute justify-start text-white text-[50px] font-medium font-['Roboto'] leading-[62.50px] tracking-wide">
        How It Works
      </div>

      <div className="w-[908px] h-20 left-[231px] top-[2332px] absolute justify-start text-white text-3xl font-normal font-['Roboto'] tracking-wide">
        There is a field to enter the sender's message, that acts as the trigger.
      </div>

      <div className="w-[989px] h-[78px] left-[231px] top-[2439px] absolute justify-start text-white text-3xl font-normal font-['Roboto'] tracking-wide">
        Another field is provided to specify the automated reply, that will be sent automatically.
      </div>

      <div className="w-[908px] h-[79px] left-[231px] top-[2545px] absolute justify-start text-white text-3xl font-normal font-['Roboto'] tracking-wide">
        When a person sends the trigger message, the system will respond with the automated reply.
      </div>

      <div className="w-[815px] h-[38px] left-[226px] top-[2652px] absolute justify-start text-white text-3xl font-normal font-['Roboto'] tracking-wide">
        Click on the Generate QR Code button to generate a QR.
      </div>

      <div className="w-[990px] h-[79px] left-[231px] top-[2718px] absolute justify-start text-white text-3xl font-normal font-['Roboto'] tracking-wide">
        To connect, open WhatsApp on your phone, go to Linked Devices, and scan the generated QR code.
      </div>

      <div className="w-[890px] h-[78px] left-[231px] top-[2825px] absolute justify-start text-white text-3xl font-normal font-['Roboto'] tracking-wide">
        A + symbol is available to add more automated messages if needed.
      </div>

      <div className="w-[991px] h-20 left-[230px] top-[2930px] absolute justify-start text-white text-3xl font-normal font-['Roboto'] tracking-wide">
        The - symbol is provided to delete an existing automated message or trigger-response pair.
      </div>

      {/* Footer Section */}
      <div className="left-[201px] top-[3143px] absolute justify-start text-[#4d28a7] text-[50px] font-medium font-['Roboto'] tracking-[4px]" style={{ textShadow: '0px 4px 4px rgb(0 0 0 / 0.25)' }}>
        ChatFlex
      </div>

      <div className="left-[203px] top-[3229px] absolute justify-start text-white text-3xl font-medium font-['Roboto'] leading-[37.50px] tracking-wide">
        Customizable Responses For<br/>Every Need
      </div>

      <div className="left-[931px] top-[3151px] absolute justify-start text-white text-[35px] font-medium font-['Roboto'] leading-[43.75px] tracking-wide">
        Contact Us On
      </div>

      {/* Social Media Icons */}
      {/* Instagram Icon */}
      <div className="w-[54.23px] h-[53.35px] left-[1073px] top-[3250.97px] absolute">
        <svg width="54" height="53" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30.1157 41.4983C36.7714 41.4983 42.167 36.1907 42.167 29.6437C42.167 23.0966 36.7714 17.7891 30.1157 17.7891C23.46 17.7891 18.0645 23.0966 18.0645 29.6437C18.0645 36.1907 23.46 41.4983 30.1157 41.4983Z"
            stroke="#0E66CB" strokeWidth="4.52" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M3 41.4982V17.789C3 9.60508 9.74444 2.9707 18.0641 2.9707H42.1667C50.4863 2.9707 57.2308 9.60508 57.2308 17.789V41.4982C57.2308 49.6821 50.4863 56.3165 42.1667 56.3165H18.0641C9.74444 56.3165 3 49.6821 3 41.4982Z"
            stroke="#FF0004" strokeWidth="4.52" />
          <path d="M46.6855 13.3733L46.7157 13.3398" stroke="#F2FF00" strokeWidth="4.52"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* LinkedIn Icon */}
      <div className="w-[54.23px] h-[53.35px] left-[979px] top-[3250.97px] absolute">
        <svg width="54" height="53" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M57.2308 17.789V41.4982C57.2308 49.6821 50.4863 56.3165 42.1667 56.3165H18.0641C9.74444 56.3165 3 49.6821 3 41.4982V17.789C3 9.60508 9.74444 2.9707 18.0641 2.9707H42.1667C50.4863 2.9707 57.2308 9.60508 57.2308 17.789Z"
            stroke="#0055F4" strokeWidth="4.52" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.0518 44.4624V34.0896V23.7168" stroke="white" strokeWidth="4.52"
            strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M27.1025 44.4624V34.8305M27.1025 34.8305V23.7168M27.1025 34.8305C27.1025 23.7168 45.1795 23.7168 45.1795 34.8305V44.4624"
            stroke="white" strokeWidth="4.52" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.0518 14.8557L15.0819 14.8223" stroke="white" strokeWidth="4.52" strokeLinecap="round"
            strokeLinejoin="round" />
        </svg>
      </div>

      {/* Email Icon */}
      <div className="w-[54.23px] h-[52.46px] left-[1167px] top-[3249px] absolute">
        <svg width="54" height="52" viewBox="0 0 60 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5576 28.7891L30.1153 38.1246L43.673 28.7891" stroke="#D800FF"
            strokeWidth="4.07" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M3 50.1266V21.1395C3 19.2657 3.99947 17.5292 5.63293 16.5651L27.3252 3.76215C29.0427 2.74855 31.1881 2.74855 32.9056 3.76217L54.5979 16.5652C56.2313 17.5292 57.2308 19.2657 57.2308 21.1395V50.1266C57.2308 53.0729 54.8029 55.4612 51.8077 55.4612H8.42308C5.42799 55.4612 3 53.0729 3 50.1266Z"
            stroke="#A68989" strokeWidth="4.07" />
        </svg>
      </div>

      {/* GitHub Icon */}
      <div className="w-[50.06px] h-[54.79px] left-[889.17px] top-[3250.97px] absolute mix-blend-difference">
        <svg width="50" height="54" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M41.9354 57.7577V49.9063C42.0397 48.6019 41.8606 47.2904 41.4098 46.0594C40.959 44.8283 40.247 43.7056 39.3212 42.7661C48.0538 41.8086 57.2313 38.5532 57.2313 23.6163C57.2305 19.7969 55.737 16.1238 53.0597 13.3575C54.3273 10.0159 54.2377 6.32231 52.8094 3.044C52.8094 3.044 49.5277 2.08651 41.9354 7.09281C35.5612 5.39346 28.8422 5.39346 22.4679 7.09281C14.8756 2.08651 11.594 3.044 11.594 3.044C10.1655 6.32231 10.0759 10.0159 11.3437 13.3575C8.64639 16.1444 7.15129 19.8506 7.17209 23.6984C7.17209 38.5258 16.3496 41.7813 25.0821 42.8482C24.1671 43.7783 23.4615 44.8874 23.0111 46.1034C22.5607 47.3194 22.3756 48.6153 22.4679 49.9063V57.7577"
            stroke="white" strokeWidth="4.17" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22.4675 52.2852C14.1243 54.9475 7.1716 52.2852 3 44.0781" stroke="white" strokeWidth="4.17"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}