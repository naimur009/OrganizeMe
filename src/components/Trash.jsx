import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { restoreNote, deleteNote, emptyTrash } from '../Features/Notes/notesSlice'


const Trash = () => {

  useEffect(() => {
    document.title = "OrganizeMe - Trash"
  }, [])

  const notes = useSelector((state) => state.notes.notes)

  const data = notes.filter((note) => {
    return (note.trashed === true)
  })

  const dispatch = useDispatch();

  const handleRestore = (e) => {
    dispatch(restoreNote(e));
  }

  const handleDelete = (e) => {
    dispatch(deleteNote(e));
  }

  const empty = () => {
    dispatch(emptyTrash());
  }

  return (
    <div>

      {/* Deleted Note */}
      <div className="mt-10">
        {
          data?.length > 0 && <h1 className="text-2xl font-extrabold mt-7 ml-5 md:flex md:w-full md:justify-center md:mt-10">Deleted Notes</h1>
        }
        {
          data?.length > 0 &&
          <div className="w-screen flex justify-center mt-5">
            <button
              className="p-2 px-4 bg-red-500 rounded-xl font-medium"
              onClick={empty}

            >
              Empty Trash</button>
          </div>

        }
        <div className="w-[95%] md:w-[95%] m-auto p-1 md:p-10 columns-2 sm:columns-3 lg:columns-4 xl:columns-5">




          {
            data?.length ? data.map((note) => {
              return (
                <div
                  className="w-[100%] max-w-[320px] mb-4 break-inside-avoid"
                  key={note.id}>
                  <div
                    className="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 hover:cursor-pointer "
                  >
                    <div className="flex justify-between">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse flex-col">

                        <span className="text-lg font-semibold text-gray-900 dark:text-white">
                          {note.tittle}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm font-normal pt-2 text-gray-900 dark:text-white line-clamp-6	">
                      {note.content}
                    </p>
                    <span className="text-blue-500">more......</span>
                    {/* button */}
                    <div className="w-[70%] m-auto mt-5 flex justify-between">

                      <button
                        className='h-9 w-9 p-2 rounded-full hover:bg-[#313236] flex justify-center items-center'
                        onClick={() => {
                          handleRestore(note.id)
                        }}
                      >
                        <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#74C0FC" d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" /></svg>
                      </button>



                      <button
                        className='h-9 w-9 p-2 rounded-full hover:bg-[#313236] flex justify-center items-center'
                        onClick={() => {
                          handleDelete(note.id)
                        }}
                      >
                        <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#dc0404" d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z" /></svg>
                      </button>

                    </div>
                  </div>
                </div>
              )
            })
              : <div></div>
          }

        </div>
        {
          !data?.length && <h1 className="text-base flex w-full justify-center mt-10" >Trash is empty</h1>
        }
      </div>

    </div>
  );
};

export default Trash;
