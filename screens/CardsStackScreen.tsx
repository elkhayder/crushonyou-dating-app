import React from "react";
import Swiper from "react-native-deck-swiper";

import { UserType } from "../types";
import UserCard from "../components/UserCard";

const users: UserType[] = [
   {
      id: 1,
      name: "ZAKARIA ELKHAYDER",
      bio:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      age: 16,
      images: [
         "https://images.unsplash.com/photo-1610659695521-d119bbcfb3c1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
         "https://images.unsplash.com/photo-1610659838219-45b564583af2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
         "https://images.unsplash.com/photo-1610659839094-511e876f1c17?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
      ],
   },
   {
      id: 2,
      name: "Micheal Scott",
      bio: "Cool as fuck",
      age: 16,
      images: [
         "https://via.placeholder.com/350x500",
         "https://via.placeholder.com/350x500/300",
         "https://via.placeholder.com/400",
      ],
   },
   {
      id: 1,
      name: "Pinkman",
      bio: "Cool as fuck",
      age: 16,
      images: [
         "https://via.placeholder.com/350x500",
         "https://via.placeholder.com/350x500/300",
         "https://via.placeholder.com/400",
      ],
   },
];

const CardsStackScreen = () => {
   return (
      <Swiper
         cards={users}
         renderCard={UserCard}
         keyExtractor={(user: UserType) => user.id.toString()}
         backgroundColor="transparent"
         infinite={true}
         cardVerticalMargin={16}
         cardHorizontalMargin={16}
         verticalSwipe={false}
         horizontalSwipe={true}
         stackSize={1}
      />
   );
};

export default CardsStackScreen;
