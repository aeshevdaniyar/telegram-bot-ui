import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/atoms/Accordion";
import { Box } from "@components/atoms/Box";
import { ChatListItem } from "@components/molecules/chat-list-item";

export const ChatList = () => {
  return (
    <Box>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            <ChatListItem type="odd" />
            <ChatListItem type="even" />
            <ChatListItem type="odd" isLast />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            <ChatListItem type="odd" />
            <ChatListItem type="even" />
            <ChatListItem type="odd" isLast />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            <ChatListItem type="odd" />
            <ChatListItem type="even" />
            <ChatListItem type="odd" isLast />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
