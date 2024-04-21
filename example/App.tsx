import React from "react";
import { Watermark } from "../";

function App() {
  return (
    <React.Fragment>
      <Watermark isVisible opacity={0.05} color="red" text="sample" />
      <main
        style={{
          display: "grid",
          width: "100vw",
          height: "100vh",
          placeItems: "center",
        }}
      >
        <section>
          <h1>Login</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="submit" />
          </form>
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
