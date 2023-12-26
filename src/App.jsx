import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
const App = () => {
  const spaceGrotesk = {
    fontFamily: "'Space Grotesk', serif",
  };
  const roboto = {
    fontFamily: "'Roboto', sans-serif",
  };
  const clashDisplay = {
    fontFamily: "'ClashDisplay', sans-serif",
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <Navbar
        roboto={roboto}
        spaceGrotesk={spaceGrotesk}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      {!isMenuOpen && (
        <div>
          <Header roboto={roboto} clashDisplay={clashDisplay} />
          <div className="bg-black text-white py-16">
            njnnbb Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quaerat soluta nesciunt harum, ipsam quas doloribus fugit corrupti
            unde placeat sed! Cum doloribus repellendus deserunt. Ipsum,
            obcaecati maxime, numquam quia provident voluptas quibusdam itaque
            laudantium culpa illo molestiae? Nesciunt qui temporibus recusandae
            beatae dolor atque et at aperiam, nostrum molestias nisi consequatur
            reiciendis nulla cum quam maxime quaerat nemo corrupti dicta alias.
            Velit, doloremque eaque. Ipsam, a! Blanditiis fugiat reprehenderit
            porro nulla perspiciatis expedita molestiae eligendi fugit. Atque
            dignissimos ducimus molestiae ut sed mollitia enim velit possimus
            commodi magni dolore hic molestias ipsum excepturi amet, explicabo
            eveniet consequuntur quam error ex?
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
