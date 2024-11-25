import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { moveToTrash } from '../Features/Notes/notesSlice'

const View = (props) => {


    const data = useSelector((state) => state.notes.notes);

    const note = data.filter((note) => {
        return (note.id === props.noteId);
    })

    const dispatch = useDispatch();

    const handleEdit = (e)=>{
        props.isView()
        props.toggleOpen()
        props.setPrevId(e)
    }

    const handleDelete = (e) => {
        dispatch(moveToTrash(e))
    }


    return (
        <div className='h-[100%] w-screen bg-black bg-cover bg-opacity-70 absolute bottom-0 flex justify-center items-center overflow-x-hidden'>
            <div
                className='h-auto w-[95%] md:max-w-[800px] bg-gray-700 rounded-lg absolute z-120 top-10 md:top-15 lg:top-20 p-5 overflow-x-hidden'>
                <div className='text-xl flex justify-between '>
                    <p>{note[0]?.tittle}</p>
                    <button
                        className=""
                        onClick={props.isView}
                    >
                        <svg className='h-10 w-10 p-1 hover:bg-[#313236] rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#fe062b" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                    </button>
                </div>
                <div className='text-sm mb-3 text-gray-500'>
                    {note[0]?.date}
                </div>
                <div>
                    {note[0]?.content}
                </div>
                {/* button */}
                <div className='w-[90%] lg:w-[60%] flex-wrap m-auto mt-10 flex justify-between mb-1'>
                    {/* edit */}
                    <button
                        className='h-9 w-9 p-2 rounded-full hover:bg-[#313236] flex justify-center items-center'
                        onClick={()=>{
                            handleEdit(note[0]?.id)
                        }}
                    >
                        <svg className='h-6 w-6 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#74C0FC" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>
                    </button>

                        {/* copy */}
                    <button
                        className='h-9 w-9 p-2 rounded-full hover:bg-[#313236] flex justify-center items-center'
                        onClick={() => {
                            navigator.clipboard.writeText(note[0].content);
                        }}
                    >
                        <svg className='h-6 w-6 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#74C0FC" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z"/></svg>
                    </button>

                        {/* share */}
                    <button
                        className='h-9 w-9 p-2 rounded-full hover:bg-[#313236] flex justify-center items-center'
                        onClick={()=>{
                            handleEdit(note[0]?.id)
                        }}
                    >
                        <svg className='h-6 w-6 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#74C0FC" d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/></svg>
                    </button>
                        {/* delete */}
                    <button
                        className='h-9 w-9 p-2 rounded-full hover:bg-[#313236] flex justify-center items-center'
                        onClick={() => {
                            props.isView()
                            handleDelete(note[0]?.id)
                        }}
                    >
                        <svg className='h-6 w-6 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#dc0404" d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>
                    </button>

                </div>
            </div>


        </div>
    );
};

export default View;