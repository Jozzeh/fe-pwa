import { FC, useEffect } from 'react';
import Icon from './components/basics/Icon/Icon';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { requestPermission } from './utils/funcs/firebase';

interface Props {};

const App: FC<Props> = () => {
  const navigate = useNavigate();
  
  const subscribePush = () => {
    requestPermission();
    navigate('/chat');
  }
  
  return (
    <div className="h-screen flex flex-col">
      <div className={classNames(
        'p-12 lg:p-20 bg-[#2F59F0] min-h-[50vh] relative flex flex-col items-center justify-center',
      )}>
        <div className="mb-6">
          <Icon name="mark_chat_unread" className="text-3xl text-[#99aef7]" />
        </div>
        <h2 className="text-center text-white text-2xl mb-4">A proof of concept on</h2>
        <h1 className="text-center font-bold text-white">Push Notifications</h1>
        <div className={classNames(
          'absolute bottom-0 flex items-center translate-y-1/2',
        )}>
          <button 
            onClick={() => subscribePush()} 
            className="rounded-full bg-white py-3 px-5 text-uppercase font-bold text-[#334790] text-lg shadow-xl flex items-center gap-3 border-2 border-solid border-[#d8e1ff] active:scale-95"
          >
            <span>Subscribe to notifications</span>
            <Icon name="send" className="text-[#4768de] text-2xl" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;