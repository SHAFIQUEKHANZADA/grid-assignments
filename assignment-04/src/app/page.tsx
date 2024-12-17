
export default function Home() {
  return (
    <div className="grid grid-cols-5 gap-2 h-screen md:px-20 md:py-10 py-20 px-3">
      <div className="bg-[#FFD900] text-black row-span-5 col-span-1 text-[20px] font-bold flex justify-center items-center">Nav</div>
      <div className="bg-[#FFD900] text-black col-span-4 text-[20px] font-bold flex justify-center items-center">Header</div>
      <div className="bg-[#FFD900] text-black col-span-3 text-[20px] font-bold flex justify-center items-center row-span-3">Artical</div>
      <div className="bg-[#FFD900] text-black row-span-4 text-[20px] font-bold flex justify-center items-center">Ads</div>
      <div className="bg-[#FFD900] text-black col-span-3 text-[20px] font-bold flex justify-center items-center">Footer</div>
    </div> 
  );
}
