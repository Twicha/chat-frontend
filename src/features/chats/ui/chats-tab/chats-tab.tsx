import classNames from "classnames";
import { FC, Fragment, ReactElement, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/shared/hooks";
import { fetchGetUsersAction } from "src/shared/store/slices";
import {
  fetchGetChatsAction,
  fetchGetChatsParticipantsAction,
  selectChatsParticipantIds,
} from "src/shared/store/slices/chats";
import { ChatList } from "../";
import "./chats-tab.scss";

interface Props {
  className?: string;
}

export const ChatsTab: FC<Props> = ({ className }): ReactElement => {
  const dispatch = useAppDispatch();

  const chatsParticipantIds = useAppSelector(selectChatsParticipantIds);

  useEffect(() => {
    dispatch(fetchGetChatsAction());
  }, [dispatch]);

  useEffect(() => {
    if (chatsParticipantIds.length) {
      dispatch(fetchGetChatsParticipantsAction(chatsParticipantIds));
    }
  }, [chatsParticipantIds, dispatch]);

  return (
    <div className={classNames("chats-tab", className)}>
      <ChatList className="chats-tab__chat-list" />
    </div>
  );
};
