import React from 'react';

import Avatar from 'boring-avatars';

export interface MessageProps {
  message: string;
  ack: boolean;
  isSender: boolean;
  rxTime: Date;
}

export const Message = ({
  message,
  ack,
  isSender,
  rxTime,
}: MessageProps): JSX.Element => {
  return (
    <div
      className={`flex space-x-2 ${!isSender && 'ml-auto flex-row-reverse'}`}
    >
      <div className={`shadow-md rounded-full mt-auto ${!isSender && 'ml-2'}`}>
        <Avatar
          size={30}
          name={'UNK'}
          variant="beam"
          colors={['#213435', '#46685B', '#648A64', '#A6B985', '#E1E3AC']}
        />
      </div>
      <div
        className={`relative max-w-3/4 px-3 py-2 rounded-t-lg mb-2 ${
          isSender
            ? 'bg-gray-500 text-gray-50 rounded-br-lg'
            : 'bg-primary text-blue-50 rounded-bl-lg'
        } ${ack ? 'animate-none' : 'animate-pulse'}`}
      >
        <div className="min-w-4 leading-5">{message}</div>
      </div>
      <div className="mt-auto mb-2 text-xs font-medium text-secondary mr-3 dark:text-gray-200">
        {rxTime.getHours()}:{rxTime.getMinutes()}
      </div>
    </div>
  );
};
