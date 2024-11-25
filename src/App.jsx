import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import ToDos from "./components/ToDos"
import Notes from "./components/Notes"
import Trash from "./components/Trash"
import { store } from "./Redux/store"
import { Provider } from "react-redux"
import View from "./components/View"
import NoteForm from "./components/NoteForm"



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "notes",
          element: <Notes />
        },
        {
          path: "todos",
          element: <ToDos />
        },
        {
          path: "trash",
          element: <Trash />
        },
        {
          path: "noteform",
          element: <NoteForm />
        },
      ]
    }
  ])

  return (
    <Provider store={store}>
      <div className="bg-[#202124] h-auto min-h-screen min-w-screen w-full text-white overflow-x-hidden">
        <RouterProvider router={router} />
      </div>
    </Provider>
  )
}

export default App
