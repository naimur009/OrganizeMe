import { useSelector } from "react-redux";
import NoteForm from "./NoteForm";
import { useDispatch } from 'react-redux';
import { moveToTrash, editNote } from '../Features/Notes/notesSlice'



const View = (props) => {


    const data = useSelector((state) => state.note.notes);

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
                className='h-auto w-[95%] md:max-w-[600px] bg-gray-700 rounded-lg absolute z-120 p-10 overflow-x-hidden'>
                <div className='text-xl mb-3 flex justify-between'>
                    <p>{note[0]?.tittle}</p>
                    <button
                        className="text-2xl p-1 h-10 w-10 rounded-full font-extrabold hover:bg-red-400 hover:text-white"
                        onClick={props.isView}
                    >
                        X
                    </button>
                </div>
                <div className='text-sm mb-2'>
                    {note[0]?.date}
                </div>
                <div>
                    {note[0]?.content}
                </div>
                {/* button */}
                <div className='mt-5 flex justify-between mb-3'>
                    <button
                        className='hover:bg-blue-700 p-2 rounded-full'
                        onClick={()=>{
                            handleEdit(note[0]?.id)
                        }}
                    >
                        <img className='h-7' src="/src/assets/pen.png" alt="" />
                    </button>


                    <button
                        className='hover:bg-blue-700 p-2 rounded-full'
                        onClick={() => {
                            navigator.clipboard.writeText(note[0].content);
                        }}
                    >
                        <img className='h-7' src="/src/assets/copy.png" alt="" />
                    </button>


                    <button className='hover:bg-blue-700 p-2 rounded-full'><img className='h-7' src="/src/assets/share.png" alt="" /></button>

                    <button
                        className='hover:bg-blue-700 p-2 rounded-full'
                        onClick={() => {
                            props.isView()
                            handleDelete(note[0]?.id)
                        }}
                    >
                        <img className='h-7' src="/src/assets/bin.png" alt="" />
                    </button>

                </div>
            </div>


        </div>
    );
};

export default View;