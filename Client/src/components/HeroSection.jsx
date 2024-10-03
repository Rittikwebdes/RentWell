

export default function HeroSection() {
  
  return (
    <>
<div>
<div className="relative bg-cover   bg-center h-screen" style={{ backgroundImage: "url('/img6.jpeg')", height:"550px" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
      <div className="relative z-10 text-center  text-white pt-24">
        <h1 className="text-5xl font-bold mb-6">The Perfect Room For You</h1>
        <p className="text-lg mb-10">Save Time, Energy And Money- Find And Book your New Home 100% Online</p>
        <div className="flex justify-center">
          <input 
            type="text" 
            placeholder="Search for area, cities name" 
            className="p-4 w-1/2 rounded-l-md outline-none text-gray-700"
          />
          <button className="bg-orange-500 text-white px-8 py-4 rounded-r-md">Search</button>
        </div>
        <div className="mt-8 text-sm">
          <a href="#" className="underline">New Room Discount</a> | 
          <a href="#" className="underline">Help me find Rooms</a> | 
          <a href="#" className="underline">Find Location</a>
        </div>
      </div>
    </div>
</div>
    </>
  );
}
