import { RouterProvider, createHashRouter } from "react-router-dom";
import Main from "./Component/Main/Main";
import { Toaster } from "react-hot-toast";

function App() {
  const router = createHashRouter([
    {
      path: "",
      element: <Main />,
    },

    //  { index: true, loader: () => redirect("") }
  ]);
  return (
    <>
      <RouterProvider router={router}>
        <Main />
      </RouterProvider>
      <Toaster />
    </>
  );
}

export default App;
