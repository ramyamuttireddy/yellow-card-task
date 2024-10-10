import './App.css'

function App() {
  

  return (
    <>
      <div className="bg-[#f5d04e] flex justify-center py-[184px] ">
        <div className=" bg-[#f5f5f5] p-[25px] border-[1px]  border-slate-800 rounded-[20px] shadow-[8px_8px_0px_0px_black]">

          <div>
            <img src="https://arata-12.github.io/blog-card-page/images/Desktop.jpg" alt="card-img" class="w-[338px] rounded-[10px]" />
            <button className="py-[5px] px-[10px] bg-[#f5d04e] mt-[24px] rounded-[6px] font-serif font-bold text-[16px]" >Learning</button>
            <p className="text-[14px] mt-[10px] font-sans">Published 27 Dec 2023</p>
            <h2 className="text-[24px] mt-[10px] font-extrabold">HTML & CSS foundations</h2>
            <p className="text-[16px] mt-[10px] text-[#645d5d]">These languages are the backbone of every<br /> website, defining structure, content, and <br /> presentation.</p>
          </div>

          <div className="flex mt-[20px]">
            <img src="https://arata-12.github.io/blog-card-page/images/jessica.jpeg" alt="card-img" class="w-[30px] rounded-full" />
            <h4 className="ml-[10px] mt-[6px]  font-bold text-[14px]">Greg Hooper</h4>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
