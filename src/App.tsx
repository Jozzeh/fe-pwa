import { FC, useEffect, useState } from 'react';
import Icon from './components/basics/Icon/Icon';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { requestPermission } from './utils/funcs/firebase';
import { usePersistentUserStore } from './state/stores/usePersistentUserStore';

interface Props {};

const App: FC<Props> = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const storeUserName = usePersistentUserStore(state => state.setName);
  
  const subscribePush = () => {
    storeUserName(userName);
    requestPermission();
    navigate('/chat');
  }
  
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className={classNames(
          'p-6 lg:p-20 bg-[#2F59F0] min-h-[50vh] relative flex flex-col items-center justify-center',
        )}>
          <div className="mb-6">
            <Icon name="mark_chat_unread" className="text-3xl text-[#99aef7]" />
          </div>
          <h2 className="text-center text-white text-2xl mb-4">A proof of concept on</h2>
          <h1 className="text-center font-bold text-white">Push Notifications</h1>
          <div className={classNames(
            'absolute bottom-0 flex items-center translate-y-1/2',
          )}>
            <div className="rounded-full bg-white p-2 pl-5 text-uppercase font-bold text-[#334790] text-lg shadow-xl flex items-center gap-3 active:scale-95 outline-none active:outline-none">
              <input value={userName} onChange={(event) => setUserName(event.target.value)} placeholder="Select a username" className="placeholder:font-medium" />
              <button 
                onClick={() => subscribePush()} 
                className="rounded-full bg-[#d8e1ff] w-10 h-10 flex items-center justify-center"
              >
                <Icon name="send" className="text-[#4768de] text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;