
const View = (props) => {
    return (
        <div className='h-[100%] w-screen bg-black bg-cover bg-opacity-70 absolute bottom-0 flex flex-col justify-center items-center overflow-x-hidden'>
            <div className='h-auto min-h-[500px] w-[95%] md:max-w-[600px] bg-gray-700 rounded-lg absolute z-120 top-0 md:top-10 md:bottom-15 p-10 overflow-x-hidden'>
                <div className='text-xl mb-3 flex justify-between'>
                    <p>this is the tittle content</p>
                    <button
                        onClick={props.isView}
                        className="text-2xl p-1 h-10 w-10 rounded-full font-extrabold hover:bg-red-400 hover:text-white"
                    >
                        X
                    </button>
                </div>
                <div className='text-sm mb-2'>
                    12 jan, 2024
                </div>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ad, explicabo distinctio vitae quis ea nesciunt? Blanditiis, dolorem aliquid voluptates, sequi ea non assumenda vitae distinctio exercitationem minus dolores. Quo laborum atque debitis aliquid nemo impedit hic nam quisquam quos sint corrupti tempora, voluptas veritatis optio dolor iusto cumque quia incidunt dolore repellendus quae odit quaerat quas pariatur. Porro hic harum nemo odit laboriosam non illo. Aspernatur culpa commodi deleniti consequatur eum maxime voluptatibus magnam, suscipit molestiae inventore necessitatibus laborum distinctio quisquam illo, aliquid sunt quam id. Illum sit natus praesentium non debitis sint, qui aliquid quae molestias dolores necessitatibus.
                </div>
                {/* button */}
                <div className='mt-5 flex justify-between mb-3'>
                    <button className='hover:bg-blue-700 p-2 rounded-full'><img className='h-7' src="/src/assets/pen.png" alt="" /></button>
                    <button className='hover:bg-blue-700 p-2 rounded-full'><img className='h-7' src="/src/assets/copy.png" alt="" /></button>
                    <button className='hover:bg-blue-700 p-2 rounded-full'><img className='h-7' src="/src/assets/share.png" alt="" /></button>
                    <button className='hover:bg-blue-700 p-2 rounded-full'><img className='h-7' src="/src/assets/bin.png" alt="" /></button>
                </div>
            </div>


        </div>
    );
};

export default View;