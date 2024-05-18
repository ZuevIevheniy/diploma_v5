import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import './App.css'
import {Form} from "./Components/Form/Form";
import { OrdersCard } from "./Components/OrdersCard/OrdersCard";
import SimpleSlider from "./Components/Slider/Slider";

function App() {

  return (
    <Suspense
      fallback={
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundSize: "cover",
          }}
        >
          {/* <PreLoader /> */}
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SimpleSlider/>} />
          <Route path="/create" element={<Form/>}></Route>
          <Route path="/orders" element={<OrdersCard/>}></Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
