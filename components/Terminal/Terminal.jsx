import React, { useCallback, useEffect, useRef } from 'react';
import History from '../History/History';
import { useHistory } from '../History/hook';
import { banner } from '@/utils/bin';
import Input from '../input';

const Terminal = () => {
  // const containerRef = useRef();
  const inputRef = useRef();

  console.log(inputRef);

  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const init = useCallback(() => setHistory(banner()), [setHistory]);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      // inputRef.current.scrollIntoView();
      // inputRef.current.focus({ preventScroll: true });
    }
  }, [inputRef]);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <div
        onClick={onClickAnywhere}
        className='terminal p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow'
      >
        <div
          // ref={containerRef}
          className='overflow-y-auto h-full'
        >
          <History history={history} />

          <Input
            inputRef={inputRef}
            // containerRef={containerRef}
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
