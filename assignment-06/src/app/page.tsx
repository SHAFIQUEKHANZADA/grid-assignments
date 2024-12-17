
export default function Home() {
  return (
    <div className="grid md:grid-rows-[100px_200px_200px_100px] grid-rows-[70px_140px_140px_70px] grid-cols-3 md:gap-5 gap-2 py-20 md:px-20 px-3">
      <div className="flex justify-center items-center text-[20px] font-bold rounded-sm bg-[#816DE0] text-white col-span-3">Header</div>
      <div className="flex justify-center items-center text-[20px] font-bold rounded-sm bg-[#39CEC6] text-white row-span-2">Sidebar</div>
      <div className="flex justify-center items-center text-[20px] font-bold rounded-sm bg-[#816DE0] text-white col-span-2">Content-1</div>
      <div className="flex justify-center items-center text-[20px] font-bold rounded-sm bg-[#816DE0] text-white">Content-2</div>
      <div className="flex justify-center items-center text-[20px] font-bold rounded-sm bg-[#665aa3] text-white">Content-3</div>
      <div className="flex justify-center items-center text-[20px] font-bold rounded-sm bg-[#8c76fc] text-white col-span-3">Footer</div>
    </div>
  );
}
