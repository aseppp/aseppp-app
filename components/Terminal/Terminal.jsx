import React, { useCallback, useEffect, useRef } from "react";
import History from "../History/History";
import { useHistory } from "../History/hook";
import { banner } from "@/utils/bin";
import Input from "../input";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";

const Terminal = () => {
  const containerRef = useRef();
  const inputRef = useRef();

  // useIsomorphicLayoutEffect(() => {
  //   gsap.from(".terminal", {
  //     scrollTrigger: {
  //       trigger: ".terminal",
  //       toggleActions: "restart none none none",
  //     },
  //     duration: 3,
  //     ease: "sine.out",
  //     y: 100,
  //   });
  // }, []);

  const { history, command, lastCommandIndex, setCommand, setHistory, clearHistory, setLastCommandIndex } = useHistory(
    []
  );

  const init = useCallback(() => setHistory(banner()), [setHistory]);

  useEffect(() => {
    init();
  }, []);

  // useEffect(() => {
  //   if (inputRef?.current) {
  //     inputRef?.current.scrollIntoView();
  //     inputRef?.current.focus({ preventScroll: true });
  //   }
  // }, [inputRef]);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <div
        onClick={onClickAnywhere}
        className="terminal p-3 overflow-hidden h-full border drop-shadow-xl rounded text-xs md:text-md lg:text-lg lg:p-8"
      >
        <div ref={containerRef} className="overflow-y-auto h-full">
          <History history={history} />

          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
        </div>
      </div>
    </>
  );
};

export default Terminal;
