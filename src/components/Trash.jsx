import { useEffect } from "react";
const Trash = () => {
  const date = new Date().toLocaleDateString();

  useEffect(() => {
    document.title = "OrganizeMe - Trash"
  }, [])

  return (
    <div>

      {/* deleted to-Dos */}
      <div>
        <h1 className="text-2xl font-extrabold mt-7 ml-5 md:flex md:w-full md:justify-center md:mt-10">Deleted Tasks</h1>

        <div className="w-[95%] md:w-[600px] mt-3 pl-10 p-2 bg-gray-700 m-auto rounded-lg flex gap-5">

          <div className="flex justify-between items-center w-full">
            {/* text-xl text-white */}
            <div className="flex flex-col">
              <div className="text-xl text-white">
                I am a demo task
              </div>

              <div className="text-xs">
                {date}
              </div>
            </div>

            <div className="flex gap-3">
              <button className='h-8 w-8 hover:bg-blue-600 flex justify-center items-center p-1 rounded-full'><img className='h-7 w-7' src="/src/assets/arrow.png" alt="" /></button>
              <button className='h-8 w-8 hover:bg-blue-600 flex justify-center items-center p-1 rounded-full'><img className='h-7 w-7' src="/src/assets/bin.png" alt="" /></button>
            </div>

          </div>
        </div>

      </div>


      {/* Deleted Note */}
      <div className="mt-10">
        <h1 className="text-2xl font-extrabold mt-7 ml-5 md:flex md:w-full md:justify-center md:mt-10">Deleted Notes</h1>
        <div className="w-[95%] md:w-[95%] m-auto p-1 md:p-10 columns-2 sm:columns-3 lg:columns-4 xl:columns-5">

          <div className="w-[100%] max-w-[320px] mb-4 break-inside-avoid">
            <div className="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 hover:cursor-pointer ">
              <div className="flex justify-between">
                <div className="flex items-center space-x-2 rtl:space-x-reverse flex-col">

                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    this is the tittle
                  </span>
                </div>
              </div>
              <p className="text-sm font-normal py-4 text-gray-900 dark:text-white line-clamp-6	">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt omnis at cumque doloribus numquam, cum perferendis. Quae vero aliquam consectetur, deserunt illo reprehenderit non eaque nihil sunt animi dolor recusandae qui totam modi voluptatem doloremque facere assumenda. Adipisci nam molestiae, vero deserunt repellat reiciendis iste magni nulla pariatur quo odio.
              </p>
              <span className="text-blue-500">more......</span>
              <div className="w-[70%] m-auto flex justify-between">
                <button className='h-8 w-8 hover:bg-blue-600 flex justify-center items-center p-1 rounded-full'><img className='h-7 w-7' src="/src/assets/arrow.png" alt="" /></button>
                <button className='h-8 w-8 hover:bg-blue-600 flex justify-center items-center p-1 rounded-full'><img className='h-7 w-7' src="/src/assets/bin.png" alt="" /></button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Trash;
