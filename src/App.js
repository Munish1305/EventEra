import React, { useCallback} from 'react';
import Profile from '../src/components/profile';
function App() {
  useCallback(
    () => {
      const script = document.createElement('script')
      script.src="/src/assets/js/tab_div.js";
      document.body.appendChild(script);
      return () =>{
        document.body.removeChild(script);
      }
    },[]);
  return (
    <div>
      <Profile />
    </div>
  );
}

export default App;
