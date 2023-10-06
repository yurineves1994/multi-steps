
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import {Home} from "../templates/Home";
import {Admin} from  "../templates/Admin";


export function RoutesList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />s
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}
