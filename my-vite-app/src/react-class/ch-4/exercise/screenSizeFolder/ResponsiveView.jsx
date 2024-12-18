import React, { useContext } from "react";
import "./ResponsiveView.css";
import { ScreenContext } from "../context/ScreenContextProvider";

function ResponsiveView() {
  const { screenSize } = useContext(ScreenContext);

  return (
    <div className="container">
      {screenSize.width > 700 && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          facilis fuga quae reprehenderit autem expedita consectetur culpa
          numquam perspiciatis excepturi harum dolorem ratione aut voluptates
          dolore? Maxime blanditiis laborum consequatur ab cupiditate harum
          accusantium magni dignissimos. Dolore blanditiis esse qui iure velit
          minus ipsam hic dignissimos nesciunt, amet quidem sunt quibusdam
          ratione distinctio. Vero sed vitae quasi quos tenetur sapiente
          deserunt? Enim incidunt harum voluptates, vero sed, delectus
          accusantium dolorem maiores unde corporis eaque, vel quaerat
          laudantium exercitationem sapiente. Non a neque placeat quo autem,
          expedita aspernatur pariatur, at, illo laborum adipisci magnam! Nisi,
          neque blanditiis pariatur sed unde iusto.
        </p>
      )}
    </div>
  );
}

export default ResponsiveView;
