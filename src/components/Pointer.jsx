import React from "react";
import $ from "jquery";
import styled from "styled-components";

function Pointer() {
  $(function () {
    var cursor = $(".cursor");
    var stalker = $(".stalker");

    $(document).on("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursor.css({
        opacity: "1",
        top: y + "px",
        left: x + "px",
      });

      setTimeout(function () {
        stalker.css({
          opacity: "1",
          top: y + "px",
          left: x + "px",
        });
      }, 140);
    });
  });

  return (
    <Cursor>
      <div className="cursor"></div>
      <div className="stalker"></div>
    </Cursor>
  );
}

const Cursor = styled.div`
  position: relative;
  background: rgba(36, 35, 35, 0.603);

  .cursor {
    position: fixed;
    background: rgba(29, 28, 28, 0.753);
    border-radius: 10px;
    width: 10px;
    height: 10px;
    margin: -10px 0 0 -10px;
    z-index: 200;
    pointer-events: none;
    opacity: 0;
  }

  .stalker {
    position: fixed;
    background: rgba(255, 255, 255, 0.924);
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: -20px 0 0 -20px;
    z-index: 150;
    pointer-events: none;
    opacity: 0;
  }
`;
export default Pointer;
