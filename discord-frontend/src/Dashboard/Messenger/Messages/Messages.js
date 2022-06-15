import React from "react";
import { styled } from "@mui/system";
import MessagesHeader from "./MessagesHeader";
import { connect } from "react-redux";
import DateSeparator from "./DateSeparator";

import Message from "./Message";

const MainContainer = styled("div")({
  height: "calc(100% - 60px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const convertDateToHumanReadable = (date, format) => {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    xxxx: date.getFullYear(),
  };

  return format.replace(/mm|dd|yy|xxxx/gi, (matched) => map[matched]);
};

const Messages = ({ chosenChatDetails, messages }) => {
  return (
    <MainContainer>
      <MessagesHeader name={chosenChatDetails?.name} />
      {messages.map((message, index) => {
        const sameAuthor =
          index > 0 &&
          messages[index].author[0]._id === messages[index - 1].author[0]._id;

        const sameDay =
          index > 0 &&
          convertDateToHumanReadable(new Date(message.date), "mm/dd/xxxx") ===
            convertDateToHumanReadable(
              new Date(messages[index - 1].date),
              "mm/dd/xxxx"
            );

        // console.log(message.date);
        // console.log(convertDateToHumanReadable(new Date(message.date), "mm/dd/yyyy"));
        // console.log(message.author);
        // console.log(message.author[0].username);

        return (
          <div key={message._id} style={{ width: "97%" }}>
            {(!sameDay || index === 0) && (
              <DateSeparator
                date={convertDateToHumanReadable(
                  new Date(message.date),
                  "mm/dd/xxxx"
                )}
              />
            )}
            <Message
              content={message.content}
              username={message.author[0].username}
              sameAuthor={sameAuthor}
              date={convertDateToHumanReadable(
                new Date(message.date),
                "mm/dd/xxxx"
              )}
              sameDay={sameDay}
            />
          </div>
        );
      })}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStoreStateToProps)(Messages);
